# QUALITY_DEFECT_VISUAL

**Database:** Operational

**Description:** This table stores Visual Quality Defects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| QualityDefectID | INT(10,0) | False |  | False | QUALITY_DEFECT | The identifier of the Quality Defect. |
| UnitID | INT(10,0) | False |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_QUALITY_DEFECT_VISUAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_QUALITY_DEFECT_VISUAL** — QUALITY_DEFECT_VISUAL -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_UNIT_QUALITY_DEFECT_VISUAL** — QUALITY_DEFECT_VISUAL -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_VISUAL_QUALITY_DEFECT_VISUAL_DETAIL** — QUALITY_DEFECT_VISUAL_DETAIL -> QUALITY_DEFECT_VISUAL (`QualityDefectVisualID -> ID`)

## Unique Indexes

- **UK_QUALITY_DEFECT_VISUAL_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_QUALITY_DEFECT_VISUAL_CLASSIFICATIONID** on `ClassificationID`
- **IXD_QualityDefectID** on `QualityDefectID`
- **IXD_UnitID** on `UnitID`
