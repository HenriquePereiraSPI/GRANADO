# INSPECTION_PLAN_RESOURCE

**Database:** Operational

**Description:** This table is required to support possibility of assigning inspection plan to an equipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of the inspection plan resource. |
| InspectionCharacteristicID | INT(10,0) | True |  | False | INSPECTION_CHARACTERISTIC | Link to the parent inspection characteristic table. |
| InspectionLineID | INT(10,0) | True |  | False | INSPECTION_LINE | Link to the parent inspection line table. |
| InspectionPlanID | INT(10,0) | True |  | False | INSPECTION_PLAN | Link to the parent inspection plan table. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | Link to the parent resource table. |

## Primary Key

- **PK_INSPECTION_PLAN_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_CHARACTERISTIC** — INSPECTION_PLAN_RESOURCE -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_LINE** — INSPECTION_PLAN_RESOURCE -> INSPECTION_LINE (`InspectionLineID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_PLAN** — INSPECTION_PLAN_RESOURCE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_RESOURCE** — INSPECTION_PLAN_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INSPECTION_PLAN_RESOURCE_INSPECTION_CHARACTERISTIC** on `InspectionCharacteristicID`
- **IF_INSPECTION_PLAN_RESOURCE_INSPECTION_LINE** on `InspectionLineID`
- **IF_INSPECTION_PLAN_RESOURCE_INSPECTION_PLAN** on `InspectionPlanID`
- **IF_INSPECTION_PLAN_RESOURCE_RESOURCE** on `ResourceID`
