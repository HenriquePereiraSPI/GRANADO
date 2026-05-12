# CAPA_STEP_PROPERTY_RESTRICTION

**Database:** Operational

**Description:** This table defines hidden or read-only properties of CAPA Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAStepID | INT(10,0) | False |  | False | CAPA_STEP | The ID of the step defined in the CAPA_STEP table. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| Hidden | BIT | False | ((0)) | False |  | The value indicating if the property is hidden within the step. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Property | NVARCHAR(40) | True |  | False | CAPA_PROPERTY | The link to the CAPA_PROPERTY table. |
| PropertyType | INT(10,0) | False |  | False |  | The type of the property (1 - Standard, 2 - User-defined). |
| ReadOnly | BIT | False | ((0)) | False |  | The value indicating if the property is read-only within the step. |
| StandardProperty | NVARCHAR(30) | True |  | False |  | The name of a standard CAPA record property. |

## Primary Key

- **PK_CAPA_STEP_PROPERTY_RESTRICTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_STEP_PROPERTY_RESTRICTION_CAPA_PROPERTY** — CAPA_STEP_PROPERTY_RESTRICTION -> CAPA_PROPERTY (`Property -> Property`)
- **FK_CAPA_STEP_PROPERTY_RESTRICTION_CAPA_STEP** — CAPA_STEP_PROPERTY_RESTRICTION -> CAPA_STEP (`CAPAStepID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_CAPA_STEP_PROPERTY_RESTRICTION** on `CAPAStepID, PropertyType, Property, StandardProperty`
- **UK_CAPA_STEP_PROPERTY_RESTRICTION_FUID** on `FUID`

## Non-Unique Indexes

- **IF_CAPA_STEP_PROPERTY_RESTRICTION_CAPA_PROPERTY** on `Property`
