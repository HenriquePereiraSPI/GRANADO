# CAPA_PROPERTY_VALUE

**Database:** Operational

**Description:** This table defines the values of additional properties of the CAPA record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAID | INT(10,0) | False |  | False | CAPA | The ID of the parent record from the CAPA table. |
| DataType | INT(10,0) | False |  | False |  | The data type of the property: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Property | NVARCHAR(40) | False |  | False | CAPA_PROPERTY | The link to the CAPA_PROPERTY table. |
| PropertyIndex | INT(10,0) | True |  | False |  | The index of a property of a list type. For For future use... |
| ValueBool | BIT | False | ((0)) | False |  | The Boolean value of the property. |
| ValueChar | NVARCHAR(2000) | True |  | False |  | The string value of the property. |
| ValueDateTime | DATETIME | True |  | False |  | The date time value of the property. |
| ValueDecimal | DECIMAL(28,10) | True |  | False |  | The decimal value of the property. |
| ValueInt | INT(10,0) | True |  | False |  | The integer value of the property. |

## Primary Key

- **PK_CAPA_PROPERTY_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_PROPERTY_VALUE_CAPA** — CAPA_PROPERTY_VALUE -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_PROPERTY_VALUE_CAPA_PROPERTY** — CAPA_PROPERTY_VALUE -> CAPA_PROPERTY (`Property -> Property`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_CAPA_PROPERTY_VALUE** on `CAPAID, Property, PropertyIndex`

## Non-Unique Indexes

- **IF_CAPA_PROPERTY_VALUE_CAPA_PROPERTY** on `Property`
