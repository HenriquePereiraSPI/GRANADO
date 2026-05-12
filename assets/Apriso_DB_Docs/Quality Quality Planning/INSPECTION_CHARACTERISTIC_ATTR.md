# INSPECTION_CHARACTERISTIC_ATTR

**Database:** Operational

**Description:** This table is required to support inspection characteristic attributes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | False |  | Collected attribute. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Conforming | BIT | False |  | False |  | Flag indicating if Attribute is conforming. |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Defect Reason Code. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Characteristic Attribute. |
| ID | INT(10,0) | False |  | True |  | Unique ID of Inspection Characteristic Attribute. |
| InspectionCharacteristicID | INT(10,0) | False |  | False | INSPECTION_CHARACTERISTIC | Link to parent Inspection Characteristic. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_CHARACTERISTIC_ATTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_CHARACTERISTIC_ATTR_INSPECTION_CHARACTERISTIC** — INSPECTION_CHARACTERISTIC_ATTR -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_ATTR_REASON_CODE** — INSPECTION_CHARACTERISTIC_ATTR -> REASON_CODE (`DefectReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_INSPECTION_CHARACTERISTIC_ATTR** on `Attribute, InspectionCharacteristicID`
- **UK_INSPECTION_CHARACTERISTIC_ATTR_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_INSPECTION_CHARACTERISTIC_ATTR_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_CHARACTERISTIC_ATTR_INSPECTION_CHARACTERISTIC** on `InspectionCharacteristicID`
