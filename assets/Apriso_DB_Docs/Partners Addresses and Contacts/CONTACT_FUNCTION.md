# CONTACT_FUNCTION

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactFunction | NVARCHAR(60) | False |  | True |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTACT_FUNCTION** on `ContactFunction`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTACT_CONTACT_FUNCTION** — CONTACT -> CONTACT_FUNCTION (`ContactFunctionCode -> ContactFunction`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
