# NOTE_TYPE

**Database:** Operational

**Description:** Stores all the valid types of Notes that can be generated within Apriso. Each note must be defined as one of these types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | Type of the Note (Open for customer ?) |

## Primary Key

- **PK_NOTE_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_NOTE_NOTE_TYPE** — NOTE -> NOTE_TYPE (`NoteType -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
