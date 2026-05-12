# CAPA_STEP_SEQUENCE_PROP_REQ

**Database:** Operational

**Description:** This table defines properties required on the transition between CAPA Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAStepSequenceID | INT(10,0) | False |  | False | CAPA_STEP_SEQUENCE | The ID of the step sequence defined in the CAPA_STEP_SEQUENCE table. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Property | NVARCHAR(40) | True |  | False | CAPA_PROPERTY | The link to the CAPA_PROPERTY table. |
| PropertyType | INT(10,0) | False |  | False |  | The type of the property (1 - Standard, 2 - User-defined). |
| StandardProperty | NVARCHAR(30) | True |  | False |  | The name of a standard CAPA record property. |

## Primary Key

- **PK_CAPA_STEP_SEQUENCE_PROP_REQ** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_STEP_SEQUENCE_PROP_REQ_CAPA_PROPERTY** — CAPA_STEP_SEQUENCE_PROP_REQ -> CAPA_PROPERTY (`Property -> Property`)
- **FK_CAPA_STEP_SEQUENCE_PROP_REQ_CAPA_STEP_SEQUENCE** — CAPA_STEP_SEQUENCE_PROP_REQ -> CAPA_STEP_SEQUENCE (`CAPAStepSequenceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_CAPA_STEP_SEQUENCE_PROP_REQ** on `CAPAStepSequenceID, PropertyType, Property, StandardProperty`
- **UK_CAPA_STEP_SEQUENCE_PROP_REQ_FUID** on `FUID`

## Non-Unique Indexes

- **IF_CAPA_STEP_SEQUENCE_PROP_REQ_CAPA_PROPERTY** on `Property`
