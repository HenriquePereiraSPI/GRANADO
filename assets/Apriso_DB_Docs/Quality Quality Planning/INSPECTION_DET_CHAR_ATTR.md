# INSPECTION_DET_CHAR_ATTR

**Database:** Operational

**Description:** This table contains the information about attributes of the characteristics being an output of the inspection determination

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Conforming | BIT | False |  | False |  | Flag indicating if the value of the attribute is conforming to the specification |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the inspection determination characterisitc attribute |
| InspectionDetCharacteristicID | INT(10,0) | False |  | False | INSPECTION_DET_CHARACTERISTIC | Reference to the characterisitc being an output of the inspection determination |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_DET_CHAR_ATTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_DET_CHAR_ATTR_INSPECTION_DET_CHARACTERISTIC** — INSPECTION_DET_CHAR_ATTR -> INSPECTION_DET_CHARACTERISTIC (`InspectionDetCharacteristicID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_INSPECTION_DET_CHAR_ATTR_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_DET_CHAR_ATTR_INSPECTION_DET_CHARACTERISTIC** on `InspectionDetCharacteristicID`
