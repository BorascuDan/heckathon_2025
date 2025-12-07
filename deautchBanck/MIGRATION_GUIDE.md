# Database Migration Guide

## Chat Table - Add Key Field

### Migration Details

**File:** `migrations/20251207065348_alter_chat_table.cjs`

**Purpose:** Adds a `key` field to the `chat` table to support additional functionality.

### Changes

```sql
ALTER TABLE chat ADD COLUMN key VARCHAR(255) NULL;
```

### Chat Table Structure (After Migration)

| Column   | Type         | Nullable | Description                          |
|----------|--------------|----------|--------------------------------------|
| id       | INTEGER      | NO       | Primary key (auto-increment)         |
| user_id  | INTEGER      | YES      | Foreign key to users table           |
| messages | JSON         | NO       | Chat messages array                  |
| key      | VARCHAR(255) | YES      | Additional key field (newly added)   |

## How to Run the Migration

### Option 1: Using npm script (Recommended)

```bash
cd deautchBanck
npm run migrate
```

### Option 2: Using npx directly

```bash
cd deautchBanck
npx knex migrate:latest --knexfile knexfile.cjs
```

### Check Migration Status

```bash
npx knex migrate:status --knexfile knexfile.cjs
```

## Rollback (if needed)

If you need to undo this migration:

### Option 1: Using npm script

```bash
npm run migrate:rollback
```

### Option 2: Using npx

```bash
npx knex migrate:rollback --knexfile knexfile.cjs
```

This will remove the `key` column from the chat table.

## Available Migration Scripts

Added to `package.json`:

- `npm run migrate` - Run all pending migrations
- `npm run migrate:rollback` - Rollback the last batch of migrations
- `npm run migrate:make <name>` - Create a new migration file

## Example Usage of Key Field

The `key` field can be used for various purposes such as:

- Session identifiers
- Chat room keys
- Encryption keys
- Thread identifiers
- Any custom categorization

### Example Query with Key

```javascript
// Get chat by key
const chat = await db('chat')
  .where({ key: 'session_123' })
  .first();

// Update chat key
await db('chat')
  .where({ user_id: 1 })
  .update({ key: 'new_key_value' });
```

## Migration History

1. `20251206141541_create_chat_table.cjs` - Initial chat table creation
2. `20251207065348_alter_chat_table.cjs` - Added `key` field ← **Current**

## Notes

- The `key` field is nullable, so existing chat records will have `NULL` values
- No data migration is required
- The field is indexed for performance (if needed, add index in future migration)

