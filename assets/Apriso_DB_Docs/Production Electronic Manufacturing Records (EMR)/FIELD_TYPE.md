# FIELD_TYPE

**Database:** Operational

**Description:** This table stores data type of EMR field.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FieldType | SMALLINT(5,0) | False |  | True |  | Primary Key. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_FIELD_TYPE** on `FieldType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMR_FIELD_DEFINITION_FIELD_TYPE** — EMR_FIELD_DEFINITION -> FIELD_TYPE (`FieldType -> FieldType`)
- **FK_EMR_FIELD_FIELD_TYPE** — EMR_FIELD -> FIELD_TYPE (`FieldType -> FieldType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
