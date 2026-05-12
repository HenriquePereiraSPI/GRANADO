# INSPECTION_DET_SPECIFICATION

**Database:** Operational

**Description:** This table contains the information about specifications being an output of the inspection determination

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Inspection Determination Specification |
| InspectionDeterminationID | INT(10,0) | False |  | False | INSPECTION_DETERMINATION | Link to: INSPECTION_DETERMINATION |
| SpecificationID | INT(10,0) | False |  | False | SPECIFICATION | Link to: SPECIFICATION |

## Primary Key

- **PK_INSPECTION_DET_SPECIFICATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_DET_SPECIFICATION_INSPECTION_DETERMINATION** — INSPECTION_DET_SPECIFICATION -> INSPECTION_DETERMINATION (`InspectionDeterminationID -> ID`)
- **FK_INSPECTION_DET_SPECIFICATION_SPECIFICATION** — INSPECTION_DET_SPECIFICATION -> SPECIFICATION (`SpecificationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **IX_INSPECTION_DET_SPECIFICATION** on `InspectionDeterminationID, SpecificationID`

## Non-Unique Indexes

- **IDX_INSPECTION_DET_SPECIFICATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_DET_SPECIFICATION_SPECIFICATION** on `SpecificationID`
