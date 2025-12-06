/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Ștergem datele existente
  const data = [
    // ======================
    // 1. INTJ – Architect
    // ======================
    { personality_id: 1, base_trait_id: 1 },
    { personality_id: 1, base_trait_id: 2 },
    { personality_id: 1, base_trait_id: 3 },
    { personality_id: 1, base_trait_id: 4 },
    { personality_id: 1, base_trait_id: 5 },
    { personality_id: 1, base_trait_id: 6 },
    { personality_id: 1, base_trait_id: 61 },
    { personality_id: 1, base_trait_id: 62 },
    { personality_id: 1, base_trait_id: 63 },
    { personality_id: 1, base_trait_id: 64 },
    { personality_id: 1, base_trait_id: 65 },

    // ======================
    // 2. INTP – Logician
    // ======================
    { personality_id: 2, base_trait_id: 7 },
    { personality_id: 2, base_trait_id: 6 },
    { personality_id: 2, base_trait_id: 8 },
    { personality_id: 2, base_trait_id: 5 },
    { personality_id: 2, base_trait_id: 9 },
    { personality_id: 2, base_trait_id: 66 },
    { personality_id: 2, base_trait_id: 67 },
    { personality_id: 2, base_trait_id: 68 },
    { personality_id: 2, base_trait_id: 69 },
    { personality_id: 2, base_trait_id: 70 },

    // ======================
    // 3. ENTJ – Commander
    // ======================
    { personality_id: 3, base_trait_id: 10 },
    { personality_id: 3, base_trait_id: 11 },
    { personality_id: 3, base_trait_id: 12 },
    { personality_id: 3, base_trait_id: 13 },
    { personality_id: 3, base_trait_id: 14 },
    { personality_id: 3, base_trait_id: 15 },
    { personality_id: 3, base_trait_id: 71 },
    { personality_id: 3, base_trait_id: 73 },
    { personality_id: 3, base_trait_id: 70 },
    { personality_id: 3, base_trait_id: 61 },
    { personality_id: 3, base_trait_id: 74 },
    { personality_id: 3, base_trait_id: 75 },

    // ======================
    // 4. ENTP – Debater
    // ======================
    { personality_id: 4, base_trait_id: 16 },
    { personality_id: 4, base_trait_id: 7 },
    { personality_id: 4, base_trait_id: 6 },
    { personality_id: 4, base_trait_id: 17 },
    { personality_id: 4, base_trait_id: 15 },
    { personality_id: 4, base_trait_id: 11 },
    { personality_id: 4, base_trait_id: 76 },
    { personality_id: 4, base_trait_id: 67 },
    { personality_id: 4, base_trait_id: 73 },
    { personality_id: 4, base_trait_id: 77 },
    { personality_id: 4, base_trait_id: 78 },

    // ======================
    // 5. INFJ – Advocate
    // ======================
    { personality_id: 5, base_trait_id: 18 },
    { personality_id: 5, base_trait_id: 19 },
    { personality_id: 5, base_trait_id: 20 },
    { personality_id: 5, base_trait_id: 21 },
    { personality_id: 5, base_trait_id: 22 },
    { personality_id: 5, base_trait_id: 79 },
    { personality_id: 5, base_trait_id: 80 },
    { personality_id: 5, base_trait_id: 81 },
    { personality_id: 5, base_trait_id: 82 },
    { personality_id: 5, base_trait_id: 83 },

    // ======================
    // 6. INFP – Mediator
    // ======================
    { personality_id: 6, base_trait_id: 23 },
    { personality_id: 6, base_trait_id: 24 },
    { personality_id: 6, base_trait_id: 8 },
    { personality_id: 6, base_trait_id: 22 },
    { personality_id: 6, base_trait_id: 20 },
    { personality_id: 6, base_trait_id: 25 },
    { personality_id: 6, base_trait_id: 84 },
    { personality_id: 6, base_trait_id: 85 },
    { personality_id: 6, base_trait_id: 86 },
    { personality_id: 6, base_trait_id: 87 },
    { personality_id: 6, base_trait_id: 88 },
    { personality_id: 6, base_trait_id: 89 },

    // ======================
    // 7. ENFJ – Protagonist
    // ======================
    { personality_id: 7, base_trait_id: 26 },
    { personality_id: 7, base_trait_id: 27 },
    { personality_id: 7, base_trait_id: 20 },
    { personality_id: 7, base_trait_id: 21 },
    { personality_id: 7, base_trait_id: 15 },
    { personality_id: 7, base_trait_id: 84 },
    { personality_id: 7, base_trait_id: 90 },
    { personality_id: 7, base_trait_id: 91 },
    { personality_id: 7, base_trait_id: 92 },
    { personality_id: 7, base_trait_id: 93 },

    // ======================
    // 8. ENFP – Campaigner
    // ======================
    { personality_id: 8, base_trait_id: 5 },
    { personality_id: 8, base_trait_id: 28 },
    { personality_id: 8, base_trait_id: 29 },
    { personality_id: 8, base_trait_id: 30 },
    { personality_id: 8, base_trait_id: 31 },
    { personality_id: 8, base_trait_id: 32 },
    { personality_id: 8, base_trait_id: 88 },
    { personality_id: 8, base_trait_id: 86 },
    { personality_id: 8, base_trait_id: 94 },
    { personality_id: 8, base_trait_id: 95 },
    { personality_id: 8, base_trait_id: 96 },
    { personality_id: 8, base_trait_id: 97 },

    // ======================
    // 9. ISTJ – Logistician
    // ======================
    { personality_id: 9, base_trait_id: 9 },
    { personality_id: 9, base_trait_id: 33 },
    { personality_id: 9, base_trait_id: 34 },
    { personality_id: 9, base_trait_id: 35 },
    { personality_id: 9, base_trait_id: 36 },
    { personality_id: 9, base_trait_id: 37 },
    { personality_id: 9, base_trait_id: 71 },
    { personality_id: 9, base_trait_id: 67 },
    { personality_id: 9, base_trait_id: 98 },
    { personality_id: 9, base_trait_id: 99 },
    { personality_id: 9, base_trait_id: 83 },

    // ======================
    // 10. ISFJ – Defender
    // ======================
    { personality_id: 10, base_trait_id: 38 },
    { personality_id: 10, base_trait_id: 27 },
    { personality_id: 10, base_trait_id: 39 },
    { personality_id: 10, base_trait_id: 29 },
    { personality_id: 10, base_trait_id: 40 },
    { personality_id: 10, base_trait_id: 41 },
    { personality_id: 10, base_trait_id: 100 },
    { personality_id: 10, base_trait_id: 101 },
    { personality_id: 10, base_trait_id: 102 },
    { personality_id: 10, base_trait_id: 103 },
    { personality_id: 10, base_trait_id: 104 },

    // ======================
    // 11. ESTJ – Executive
    // ======================
    { personality_id: 11, base_trait_id: 42 },
    { personality_id: 11, base_trait_id: 13 },
    { personality_id: 11, base_trait_id: 9 },
    { personality_id: 11, base_trait_id: 52 },
    { personality_id: 11, base_trait_id: 55 },
    { personality_id: 11, base_trait_id: 56 },
    { personality_id: 11, base_trait_id: 105 },
    { personality_id: 11, base_trait_id: 103 },
    { personality_id: 11, base_trait_id: 99 },
    { personality_id: 11, base_trait_id: 106 },
    { personality_id: 11, base_trait_id: 107 },
    { personality_id: 11, base_trait_id: 108 },

    // ======================
    // 12. ESFJ – Consul
    // ======================
    { personality_id: 12, base_trait_id: 41 },
    { personality_id: 12, base_trait_id: 51 },
    { personality_id: 12, base_trait_id: 52 },
    { personality_id: 12, base_trait_id: 53 },
    { personality_id: 12, base_trait_id: 54 },
    { personality_id: 12, base_trait_id: 106 },
    { personality_id: 12, base_trait_id: 105 },
    { personality_id: 12, base_trait_id: 79 },
    { personality_id: 12, base_trait_id: 109 },
    { personality_id: 12, base_trait_id: 104 },

    // ======================
    // 13. ISTP – Virtuoso
    // ======================
    { personality_id: 13, base_trait_id: 42 },
    { personality_id: 13, base_trait_id: 43 },
    { personality_id: 13, base_trait_id: 44 },
    { personality_id: 13, base_trait_id: 45 },
    { personality_id: 13, base_trait_id: 3 },
    { personality_id: 13, base_trait_id: 46 },
    { personality_id: 13, base_trait_id: 110 },
    { personality_id: 13, base_trait_id: 67 },
    { personality_id: 13, base_trait_id: 111 },
    { personality_id: 13, base_trait_id: 112 },
    { personality_id: 13, base_trait_id: 113 },

    // ======================
    // 14. ISFP – Adventurer
    // ======================
    { personality_id: 14, base_trait_id: 47 },
    { personality_id: 14, base_trait_id: 48 },
    { personality_id: 14, base_trait_id: 49 },
    { personality_id: 14, base_trait_id: 50 },
    { personality_id: 14, base_trait_id: 20 },
    { personality_id: 14, base_trait_id: 114 },
    { personality_id: 14, base_trait_id: 115 },
    { personality_id: 14, base_trait_id: 116 },
    { personality_id: 14, base_trait_id: 117 },
    { personality_id: 14, base_trait_id: 118 },

    // ======================
    // 15. ESTP – Entrepreneur
    // ======================
    { personality_id: 15, base_trait_id: 57 },
    { personality_id: 15, base_trait_id: 35 },
    { personality_id: 15, base_trait_id: 6 },
    { personality_id: 15, base_trait_id: 28 },
    { personality_id: 15, base_trait_id: 45 },
    { personality_id: 15, base_trait_id: 58 },
    { personality_id: 15, base_trait_id: 67 },
    { personality_id: 15, base_trait_id: 70 },
    { personality_id: 15, base_trait_id: 119 },
    { personality_id: 15, base_trait_id: 120 },
    { personality_id: 15, base_trait_id: 121 },
    { personality_id: 15, base_trait_id: 122 },

    // ======================
    // 16. ESFP – Entertainer
    // ======================
    { personality_id: 16, base_trait_id: 57 },
    { personality_id: 16, base_trait_id: 6 },
    { personality_id: 16, base_trait_id: 32 },
    { personality_id: 16, base_trait_id: 59 },
    { personality_id: 16, base_trait_id: 60 },
    { personality_id: 16, base_trait_id: 79 },
    { personality_id: 16, base_trait_id: 123 },
    { personality_id: 16, base_trait_id: 112 },
    { personality_id: 16, base_trait_id: 124 },
    { personality_id: 16, base_trait_id: 86 },
  ];

  await knex("personality").del();
  await knex("base_traits").del();
  await knex("personality_base_traits").del();
  await knex("warnings").del();
  await knex("chat").del();

  await knex("warnings").insert([
    {
      id: 1,
      name: "anxietate",
      message: "Ai anxietate!",
    },
    {
      id: 2,
      name: "depresie",
      message: "Ai depresie!",
    },
    {
      id: 3,
      name: "stres",
      message: "Ai stres!",
    },
    {
      id: 4,
      name: "neutru",
      message: "Ești neutru!",
    },
  ]);

  await knex("personality").insert([
    // ANALYSTS
    {
      id: 1,
      name: "Architect (INTJ)",
      description:
        "Architect (INTJ) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one."
    },
    {
      id: 2,
      name: "Logician (INTP)",
      description:
        "Logician (INTP) is a personality type with the Introverted, Intuitive, Thinking, and Prospecting traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity."
    },
    {
      id: 3,
      name: "Commander (ENTJ)",
      description:
        "Commander (ENTJ) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them."
    },
    {
      id: 4,
      name: "Debater (ENTP)",
      description:
        "Debater (ENTP) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter."
    },

    // DIPLOMATS
    {
      id: 5,
      name: "Advocate (INFJ)",
      description:
        "Advocate (INFJ) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things."
    },
    {
      id: 6,
      name: "Mediator (INFP)",
      description:
        "Mediator (INFP) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do."
    },
    {
      id: 7,
      name: "Protagonist (ENFJ)",
      description:
        "Protagonist (ENFJ) is a personality type with the Extraverted, Intuitive, Feeling, and Judging traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals."
    },
    {
      id: 8,
      name: "Campaigner (ENFP)",
      description:
        "Campaigner (ENFP) is a personality type with the Extraverted, Intuitive, Feeling, and Prospecting traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions."
    },

    // SENTINELS
    {
      id: 9,
      name: "Logistician (ISTJ)",
      description:
        "Logistician (ISTJ) is a personality type with the Introverted, Observant, Thinking, and Judging traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose."
    },
    {
      id: 10,
      name: "Defender (ISFJ)",
      description:
        "Defender (ISFJ) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They're efficient and responsible, giving careful attention to practical details in their daily lives."
    },
    {
      id: 11,
      name: "Executive (ESTJ)",
      description:
        "Executive (ESTJ) is a personality type with the Extraverted, Observant, Thinking, and Judging traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity."
    },
    {
      id: 12,
      name: "Consul (ESFJ)",
      description:
        "Consul (ESFJ) is a personality type with the Extraverted, Observant, Feeling, and Judging traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others."
    },

    // EXPLORERS
    {
      id: 13,
      name: "Virtuoso (ISTP)",
      description:
        "Virtuoso (ISTP) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed."
    },
    {
      id: 14,
      name: "Adventurer (ISFP)",
      description:
        "Adventurer (ISFP) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials."
    },
    {
      id: 15,
      name: "Entrepreneur (ESTP)",
      description:
        "Entrepreneur (ESTP) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits."
    },
    {
      id: 16,
      name: "Entertainer (ESFP)",
      description:
        "Entertainer (ESFP) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities."
    }
  ]);
  await knex("base_traits").insert([
    // ====== STRENGTHS ======
    {
      id: 1,
      name: "Rational",
      description:
        "Tends to rely on logic and structured thinking, reframing problems in analytical ways to find solutions."
    },
    {
      id: 2,
      name: "Informed",
      description:
        "Forms opinions based on evidence, data, and research rather than on assumptions or hunches."
    },
    {
      id: 3,
      name: "Independent",
      description:
        "Prefers autonomy, dislikes arbitrary rules, and is comfortable making decisions without external approval."
    },
    {
      id: 4,
      name: "Determined",
      description:
        "Persists through obstacles and stays focused on long-term goals, even when progress is difficult."
    },
    {
      id: 5,
      name: "Curious",
      description:
        "Enjoys exploring new topics, ideas, and experiences, often diving deeply into areas of interest."
    },
    {
      id: 6,
      name: "Original",
      description:
        "Has a rebellious, inventive streak that produces unconventional ideas and new ways of looking at the world."
    },
    {
      id: 7,
      name: "Analytical",
      description:
        "Breaks problems into smaller parts, spots patterns, and looks for underlying structures and connections."
    },
    {
      id: 8,
      name: "Open-Minded",
      description:
        "Is willing to reconsider views when presented with new information or convincing arguments."
    },
    {
      id: 9,
      name: "Honest",
      description:
        "Cares about truth and transparency and prefers direct, sincere communication."
    },
    {
      id: 10,
      name: "Efficient",
      description:
        "Actively removes waste and inefficiency, seeking streamlined processes and clear priorities."
    },
    {
      id: 11,
      name: "Energetic",
      description:
        "Brings high energy and drive to tasks, often thriving in busy schedules and demanding situations."
    },
    {
      id: 12,
      name: "Self-Confident",
      description:
        "Trusts personal abilities and judgments and is comfortable taking initiative and making decisions."
    },
    {
      id: 13,
      name: "Strong-Willed",
      description:
        "Holds firm to decisions and beliefs and does not give up easily when facing resistance."
    },
    {
      id: 14,
      name: "Strategic Thinker",
      description:
        "Sees the bigger picture, plans ahead, and identifies the steps needed to reach long-term objectives."
    },
    {
      id: 15,
      name: "Charismatic",
      description:
        "Communicates with presence and charm, naturally drawing attention and engagement from others."
    },
    {
      id: 16,
      name: "Knowledgeable",
      description:
        "Accumulates broad and deep information, often becoming a reference point for others."
    },
    {
      id: 17,
      name: "Brainstormer",
      description:
        "Enjoys generating many ideas and alternatives, exploring multiple angles of a problem."
    },
    {
      id: 18,
      name: "Insightful",
      description:
        "Sees beneath surface appearances to deeper motives, patterns, or meanings."
    },
    {
      id: 19,
      name: "Principled",
      description:
        "Acts according to strong internal values about what is right and wrong."
    },
    {
      id: 20,
      name: "Passionate",
      description:
        "Invests intense energy and emotion into interests, causes, or projects."
    },
    {
      id: 21,
      name: "Altruistic",
      description:
        "Wants to contribute to the well-being of others and to the greater good."
    },
    {
      id: 22,
      name: "Creative",
      description:
        "Enjoys novel ideas and expressions and often looks for unconventional or artistic solutions."
    },
    {
      id: 23,
      name: "Empathetic",
      description:
        "Strongly feels and understands other people’s emotions and perspectives."
    },
    {
      id: 24,
      name: "Generous",
      description:
        "Shares time, energy, or resources freely and willingly with others."
    },
    {
      id: 25,
      name: "Idealistic",
      description:
        "Focuses on how things could be better and is driven by ideals and visions of improvement."
    },
    {
      id: 26,
      name: "Receptive",
      description:
        "Listens to other viewpoints and allows people to express themselves fully."
    },
    {
      id: 27,
      name: "Reliable",
      description:
        "Can be counted on to keep promises, meet deadlines, and follow through on commitments."
    },
    {
      id: 28,
      name: "Perceptive",
      description:
        "Notices subtle cues in behavior, tone, and body language, especially in social situations."
    },
    {
      id: 29,
      name: "Enthusiastic",
      description:
        "Expresses excitement and enthusiasm, often inspiring others to get involved."
    },
    {
      id: 30,
      name: "Communicative",
      description:
        "Articulates thoughts clearly and engages easily in conversation with many types of people."
    },
    {
      id: 31,
      name: "Easygoing",
      description:
        "Stays relaxed and flexible, not getting upset by small inconveniences or changes."
    },
    {
      id: 32,
      name: "Positive",
      description:
        "Tends to see opportunities and potential good outcomes, even in difficult situations."
    },
    {
      id: 33,
      name: "Disciplined",
      description:
        "Follows routines and rules consistently, even when motivation is low."
    },
    {
      id: 34,
      name: "Responsible",
      description:
        "Feels a strong duty to meet obligations and takes ownership for assigned tasks."
    },
    {
      id: 35,
      name: "Practical",
      description:
        "Focuses on realistic, workable solutions and concrete results rather than abstractions."
    },
    {
      id: 36,
      name: "Organized",
      description:
        "Structures time, tasks, and resources in a clear and systematic way."
    },
    {
      id: 37,
      name: "Research-Oriented",
      description:
        "Enjoys gathering data, methods, and procedures to build reliable knowledge."
    },
    {
      id: 38,
      name: "Supportive",
      description:
        "Actively helps others through encouragement, guidance, or practical assistance."
    },
    {
      id: 39,
      name: "Observant",
      description:
        "Pays attention to details in the environment and in other people’s behavior."
    },
    {
      id: 40,
      name: "Hardworking",
      description:
        "Willing to invest sustained effort and go beyond the minimum requirements."
    },
    {
      id: 41,
      name: "Practical Skills",
      description:
        "Comfortable handling everyday logistics, maintenance, and concrete tasks."
    },
    {
      id: 42,
      name: "Diligent",
      description:
        "Careful and thorough, avoiding shortcuts and aiming for high quality."
    },
    {
      id: 43,
      name: "Resourceful",
      description:
        "Finds clever ways to use available tools and information to solve problems."
    },
    {
      id: 44,
      name: "Spontaneous",
      description:
        "Enjoys acting in the moment and adapting quickly rather than following rigid plans."
    },
    {
      id: 45,
      name: "Authentic",
      description:
        "Communicates in a straightforward, genuine way that reflects true thoughts and feelings."
    },
    {
      id: 46,
      name: "Grounded",
      description:
        "Stays present and realistic, not easily carried away by fantasies or hypotheticals."
    },
    {
      id: 47,
      name: "Charming",
      description:
        "Has a naturally likable, appealing presence in social interactions."
    },
    {
      id: 48,
      name: "Socially Sensitive",
      description:
        "Quickly picks up on emotional shifts and unspoken feelings in others."
    },
    {
      id: 49,
      name: "Encouraging",
      description:
        "Helps others feel confident and motivated through support and positive feedback."
    },
    {
      id: 50,
      name: "Imaginative",
      description:
        "Has a rich inner world and enjoys exploring possibilities and scenarios."
    },
    {
      id: 51,
      name: "Sense of Duty",
      description:
        "Feels responsible to roles, traditions, and commitments and takes them seriously."
    },
    {
      id: 52,
      name: "Loyal",
      description:
        "Stays committed to people, teams, and values over long periods of time."
    },
    {
      id: 53,
      name: "Warm",
      description:
        "Expresses care and affection openly and makes others feel welcome."
    },
    {
      id: 54,
      name: "Socially Skilled",
      description:
        "Can easily build, maintain, and navigate social relationships and group dynamics."
    },
    {
      id: 55,
      name: "Orderly",
      description:
        "Enjoys establishing structure, schedules, and clear rules."
    },
    {
      id: 56,
      name: "Organizational",
      description:
        "Good at coordinating people, tasks, and resources toward common goals."
    },
    {
      id: 57,
      name: "Bold",
      description:
        "Comfortable taking risks, trying new things, and stepping outside the comfort zone."
    },
    {
      id: 58,
      name: "Sociable",
      description:
        "Feels energized by time spent with others and enjoys group activities."
    },
    {
      id: 59,
      name: "Hands-On",
      description:
        "Prefers learning and working through direct action and experimentation."
    },
    {
      id: 60,
      name: "People Skills",
      description:
        "Quickly builds rapport and reads social situations effectively."
    },

    // ====== WEAKNESSES ======
    {
      id: 61,
      name: "Arrogant",
      description:
        "May overestimate personal correctness or importance and dismiss other viewpoints."
    },
    {
      id: 62,
      name: "Dismissive of Emotions",
      description:
        "Tends to undervalue feelings and emotional context compared to logic and facts."
    },
    {
      id: 63,
      name: "Overly Critical",
      description:
        "Often judges self or others harshly and focuses strongly on flaws."
    },
    {
      id: 64,
      name: "Combative",
      description:
        "Frequently challenges rules or people in a confrontational or argumentative way."
    },
    {
      id: 65,
      name: "Socially Clueless",
      description:
        "Struggles to read social norms, cues, or expectations, which can lead to awkward situations."
    },
    {
      id: 66,
      name: "Disconnected",
      description:
        "Can drift into their own thoughts and feel detached from people or surroundings."
    },
    {
      id: 67,
      name: "Insensitive",
      description:
        "Overlooks or underestimates how words and actions affect others emotionally."
    },
    {
      id: 68,
      name: "Dissatisfied",
      description:
        "Rarely content with the current situation and constantly sees how things could be improved."
    },
    {
      id: 69,
      name: "Overthinker",
      description:
        "Analyzes so much that decisions or actions are delayed or avoided."
    },
    {
      id: 70,
      name: "Impatient",
      description:
        "Dislikes waiting, slow processes, or people who need more time to think."
    },
    {
      id: 71,
      name: "Stubborn",
      description:
        "Resists changing opinions or plans, even when presented with good reasons."
    },
    {
      id: 72,
      name: "Dominant",
      description:
        "Pushes personal agenda strongly and may overshadow others in discussions or decisions."
    },
    {
      id: 73,
      name: "Intolerant",
      description:
        "Quickly dismisses ideas that conflict with personal beliefs or priorities."
    },
    {
      id: 74,
      name: "Emotionally Detached",
      description:
        "Feels uncomfortable dealing with emotions and may appear distant or unexpressive."
    },
    {
      id: 75,
      name: "Cold and Ruthless",
      description:
        "Pursues goals with little visible concern for how outcomes affect people emotionally."
    },
    {
      id: 76,
      name: "Argumentative",
      description:
        "Enjoys debating to the point where it can create tension or conflict."
    },
    {
      id: 77,
      name: "Difficulty Focusing",
      description:
        "Has trouble staying with one idea or task for a long period of time."
    },
    {
      id: 78,
      name: "Dislikes Routine Tasks",
      description:
        "Avoids repetitive, mundane, or purely practical chores whenever possible."
    },
    {
      id: 79,
      name: "Sensitive to Criticism",
      description:
        "React strongly to feedback, especially when it touches core values or identity."
    },
    {
      id: 80,
      name: "Reluctant to Open Up",
      description:
        "Avoids sharing vulnerabilities or personal struggles with others."
    },
    {
      id: 81,
      name: "Perfectionistic",
      description:
        "Sets unrealistically high standards and is easily dissatisfied with imperfections."
    },
    {
      id: 82,
      name: "Avoids the Ordinary",
      description:
        "Rejects routine or ordinary life so much that basic needs or tasks may be neglected."
    },
    {
      id: 83,
      name: "Prone to Burnout",
      description:
        "Pushes self too hard and may reach emotional or physical exhaustion."
    },
    {
      id: 84,
      name: "Unrealistic",
      description:
        "Holds expectations that don’t always align with real-world constraints."
    },
    {
      id: 85,
      name: "Self-Isolating",
      description:
        "Withdraws from others instead of seeking connection or support."
    },
    {
      id: 86,
      name: "Unfocused",
      description:
        "Starts many things but struggles to complete them or stay on one path."
    },
    {
      id: 87,
      name: "Emotionally Vulnerable",
      description:
        "Easily affected by other people’s moods or by negative events."
    },
    {
      id: 88,
      name: "People-Pleasing",
      description:
        "Sacrifices personal needs or boundaries to keep others happy and avoid conflict."
    },
    {
      id: 89,
      name: "Self-Critical",
      description:
        "Maintains a harsh inner voice and often blames self for shortcomings."
    },
    {
      id: 90,
      name: "Overly Idealistic",
      description:
        "Clings to ideals even when they conflict with practical realities."
    },
    {
      id: 91,
      name: "Condescending",
      description:
        "Communicates in a way that can feel superior or patronizing to others."
    },
    {
      id: 92,
      name: "Intense",
      description:
        "Approaches goals or self-improvement with a level of force that can overwhelm others."
    },
    {
      id: 93,
      name: "Overly Empathetic",
      description:
        "Absorbs others’ problems and emotions to the point of emotional exhaustion."
    },
    {
      id: 94,
      name: "Disorganized",
      description:
        "Struggles to keep track of time, tasks, or belongings in an orderly way."
    },
    {
      id: 95,
      name: "Overly Accommodating",
      description:
        "Says yes too often and takes on more than can realistically be handled."
    },
    {
      id: 96,
      name: "Overly Optimistic",
      description:
        "Underestimates risks or downsides because of a very hopeful outlook."
    },
    {
      id: 97,
      name: "Restless",
      description:
        "Finds it hard to feel content or stay still, always looking for the next change."
    },
    {
      id: 98,
      name: "Always by the Book",
      description:
        "Follows rules and procedures rigidly, even when flexibility would help."
    },
    {
      id: 99,
      name: "Judgmental",
      description:
        "Quickly labels others as wrong, irrational, or inferior based on limited information."
    },
    {
      id: 100,
      name: "Overly Humble",
      description:
        "Downplays personal contributions or skills, even when recognition is deserved."
    },
    {
      id: 101,
      name: "Takes Things Personally",
      description:
        "Interprets neutral feedback or disagreements as personal attacks."
    },
    {
      id: 102,
      name: "Represses Feelings",
      description:
        "Bottles up emotions instead of expressing or processing them openly."
    },
    {
      id: 103,
      name: "Reluctant to Change",
      description:
        "Prefers familiar patterns and may resist change even when it is beneficial."
    },
    {
      id: 104,
      name: "Too Altruistic",
      description:
        "Helps others at a serious cost to personal time, energy, or well-being."
    },
    {
      id: 105,
      name: "Inflexible",
      description:
        "Struggles to adapt when plans, rules, or expectations shift unexpectedly."
    },
    {
      id: 106,
      name: "Preoccupied with Status",
      description:
        "Is overly concerned with reputation, appearance, or social standing."
    },
    {
      id: 107,
      name: "Difficulty Relaxing",
      description:
        "Has trouble switching off, resting, or enjoying downtime without guilt."
    },
    {
      id: 108,
      name: "Difficulty Expressing Emotion",
      description:
        "Knows what they feel but finds it hard to put emotions into words."
    },
    {
      id: 109,
      name: "Needy for Validation",
      description:
        "Frequently seeks reassurance and appreciation from others to feel secure."
    },
    {
      id: 110,
      name: "Unapologetic",
      description:
        "Rarely acknowledges mistakes or the impact of actions on other people."
    },
    {
      id: 111,
      name: "Private and Reserved",
      description:
        "Keeps personal life and inner thoughts guarded and shares them with very few people."
    },
    {
      id: 112,
      name: "Easily Bored",
      description:
        "Quickly loses interest once something is understood or becomes predictable."
    },
    {
      id: 113,
      name: "Overly Skeptical",
      description:
        "Doubts ideas and opportunities so much that it can prevent experimentation or growth."
    },
    {
      id: 114,
      name: "Difficulty with Structure",
      description:
        "Feels constrained by strict plans, rules, or long-term commitments."
    },
    {
      id: 115,
      name: "Unpredictable",
      description:
        "Changes plans or behavior suddenly, making it hard for others to anticipate actions."
    },
    {
      id: 116,
      name: "Easily Stressed",
      description:
        "Becomes overwhelmed quickly under pressure or in chaotic situations."
    },
    {
      id: 117,
      name: "Struggles with Technical Problem-Solving",
      description:
        "Avoids or feels uncomfortable handling mechanical, technical, or highly systematic tasks."
    },
    {
      id: 118,
      name: "Fluctuating Self-Esteem",
      description:
        "Swings between confidence and self-doubt depending on recent successes or failures."
    },
    {
      id: 119,
      name: "Impulsive",
      description:
        "Acts quickly on urges or ideas without fully considering consequences."
    },
    {
      id: 120,
      name: "Unstructured",
      description:
        "Resists planning and organization, preferring to improvise day to day."
    },
    {
      id: 121,
      name: "Misses the Big Picture",
      description:
        "Gets caught up in details and may lose sight of overall goals or context."
    },
    {
      id: 122,
      name: "Defiant",
      description:
        "Instinctively resists authority, rules, or expectations simply because they are imposed."
    },
    {
      id: 123,
      name: "Conflict-Averse",
      description:
        "Avoids disagreements and difficult conversations, even when issues need to be addressed."
    },
    {
      id: 124,
      name: "Poor Long-Term Planner",
      description:
        "Rarely thinks far ahead or lays out clear steps for future goals."
    }
  ]);
  await knex("personality_base_traits").insert(data);
  await knex('chat').insert([
    {
      user_id: 1,
      messages: JSON.stringify([
        { type: 'user', content: 'Salut! Vreau să fac o programare.' },
        { type: 'bot', content: 'Desigur! Cu ce te pot ajuta mai exact?' },
        { type: 'user', content: 'Aș dori un tuns și o aranjare.' }
      ])
    }
  ]);

};
