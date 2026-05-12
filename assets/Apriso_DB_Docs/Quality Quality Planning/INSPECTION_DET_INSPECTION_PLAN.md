# INSPECTION_DET_INSPECTION_PLAN

**Database:** Operational

**Description:** This table is required to support possibility of assigning inspection plan to a determination.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the inspection plan determination. |
| InspectionDeterminationID | INT(10,0) | False |  | False | INSPECTION_DETERMINATION | Link to the parent inspection determination table. |
| InspectionPlanID | INT(10,0) | False |  | False | INSPECTION_PLAN | Link to the parent inspection plan table. |

## Primary Key

- **PK_INSPECTION_DET_INSPECTION_PLAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_DET_INSPECTION_PLAN_INSPECTION_DET_INSPECTION_DETERMINATION** — INSPECTION_DET_INSPECTION_PLAN -> INSPECTION_DETERMINATION (`InspectionDeterminationID -> ID`)
- **FK_INSPECTION_DET_INSPECTION_PLAN_INSPECTION_DET_INSPECTION_PLAN** — INSPECTION_DET_INSPECTION_PLAN -> INSPECTION_PLAN (`InspectionPlanID -> ID`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_PLAN_SCHEDULE_INSPECTION_DET_INSPECTION_PLAN** — INSPECTION_PLAN_SCHEDULE -> INSPECTION_DET_INSPECTION_PLAN (`InspectionDetInspectionPlanID -> ID`)

## Unique Indexes

- **UK_INSPECTION_DET_INSPECTION_PLAN** on `InspectionDeterminationID, InspectionPlanID`

## Non-Unique Indexes

- **IDX_INSPECTION_DET_INSPECTION_PLAN_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_DET_INSPECTION_PLAN_INSPECTION_DET_INSPECTION_PLAN** on `InspectionPlanID`
