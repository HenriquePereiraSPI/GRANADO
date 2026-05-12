# SPECIFICATION_CHARACTER_ATTR

**Database:** Operational

**Description:** Contains all the attributes of the attributive characteristics linked to the specification

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | False |  | Collected attribute. |
| Characteristic | NVARCHAR(40) | False |  | False | SPECIFICATION_CHARACTERISTIC | Reference to the characteristic |
| Conforming | BIT | False | (1) | False |  | Flag indicating if the value of the attribute is conforming to the specification |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is outside of specification limits (applicable only to characteristics of the type: Variable). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record |
| SpecificationID | INT(10,0) | False |  | False | SPECIFICATION_CHARACTERISTIC | Reference to the specification |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPECIFICATION_CHARACTER_ATTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPECIFICATION_CHARACTER_ATTR_REASON_CODE** — SPECIFICATION_CHARACTER_ATTR -> REASON_CODE (`DefectReasonCode -> ReasonCode`)
- **FK_SPECIFICATION_CHARACTER_ATTR_SPECIFICATION_CHARACTERISTIC** — SPECIFICATION_CHARACTER_ATTR -> SPECIFICATION_CHARACTERISTIC (`SpecificationID, Characteristic -> SpecificationID, Characteristic`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SPECIFICATION_CHARACTER_ATTR** on `SpecificationID, Characteristic, Attribute`

## Non-Unique Indexes

- **** on ``
