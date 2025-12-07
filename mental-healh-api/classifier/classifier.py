import torch
import typing as t
from transformers import LongformerTokenizerFast, LongformerForSequenceClassification

class MentalHealthClassifier():
  def __init__(self):
    # load the model and the tokenizer
    self.name = "Hrishikesh4/mental-health-classifier-longformer"
    self.model = LongformerForSequenceClassification.from_pretrained(self.name)
    self.tokenizer = LongformerTokenizerFast.from_pretrained(self.name)
    self.class_labels = {
        0: "neutral",
        1: "depression",
        2: "anxiety",
        3: "stress",
    }

  def _class_to_label(self, classes: torch.Tensor) -> list:
    return [self.class_labels[class_.item()] for class_ in classes]

  def predict(self, text: str) -> t.Optional[list]:
    """
    Computes the sigmoid predictions for the model, then it analyzes the logits.
    
    Case 1:
      If the neutral logit exceeds .75, returns `None`.
    Case 2:
      If a logit exceeds .75, it returns the corresponding `class label`.
    Case 3:
      If the sum of logits for the active classes that are > .33 (depression, 
    anxiety, stress) exceeds .75, it returns `multiple class labels`.
    """
    inputs = self.tokenizer(
        text, 
        return_tensors="pt", 
        padding=True
    )

    with torch.no_grad():
      outputs = self.model(**inputs)
      predictions = torch.sigmoid(outputs.logits)[0]

    # Case 1: if the neutral prediction has the logit > .75
    if predictions[0] > 0.8:
      return None

    # Case 2: if any active class has the logit > .75
    if torch.any(predictions[1:] > 0.66):
      active_classes = torch.where(predictions[1:] > 0.66)[0] + 1
      return self._class_to_label(active_classes)

    # Case 3: if the sum of the active classes > .33 sum up to a value > .75
    if torch.sum(predictions[torch.where(predictions[1:] > 0.33)[0]]) > 0.66:
      active_classes = torch.where(predictions[1:] > 0.33)[0] + 1
      return self._class_to_label(active_classes)