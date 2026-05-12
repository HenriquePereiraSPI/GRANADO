# COUNT_TYPE

**Database:** Operational

**Description:** Defines different Count types for the Count Document.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountType | INT(10,0) | False |  | True |  | Type of the Count. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_TYPE** on `CountType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_COUNT_TYPE** — COUNT_DISPOSITION -> COUNT_TYPE (`CountType -> CountType`)
- **FK_COUNT_DOCUMENT_COUNT_TYPE** — COUNT_DOCUMENT -> COUNT_TYPE (`CountType -> CountType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
