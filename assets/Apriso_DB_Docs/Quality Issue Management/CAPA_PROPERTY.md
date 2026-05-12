# CAPA_PROPERTY

**Database:** Operational

**Description:** This table defines additional properties available for CAPA records.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DataType | INT(10,0) | False |  | False |  | The data type of the property: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| Property | NVARCHAR(40) | False |  | True |  | The unique name of the CAPA property. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_PROPERTY** on `Property`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_PROPERTY_VALUE_CAPA_PROPERTY** — CAPA_PROPERTY_VALUE -> CAPA_PROPERTY (`Property -> Property`)
- **FK_CAPA_STEP_PROPERTY_RESTRICTION_CAPA_PROPERTY** — CAPA_STEP_PROPERTY_RESTRICTION -> CAPA_PROPERTY (`Property -> Property`)
- **FK_CAPA_STEP_SEQUENCE_PROP_REQ_CAPA_PROPERTY** — CAPA_STEP_SEQUENCE_PROP_REQ -> CAPA_PROPERTY (`Property -> Property`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
