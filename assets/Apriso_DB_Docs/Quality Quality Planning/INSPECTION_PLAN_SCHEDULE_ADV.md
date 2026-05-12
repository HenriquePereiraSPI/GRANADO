# INSPECTION_PLAN_SCHEDULE_ADV

**Database:** Operational

**Description:** This table is required to support Inspection Characteristic schedules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Frequency | INT(10,0) | False |  | False |  | Include given characteristic every X dispositions created. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Characteristic Schedule. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Inspection Characteristic Schedule. |
| InspectionCharacteristicID | INT(10,0) | False |  | False | INSPECTION_CHARACTERISTIC | Link to Inspection Characteristic. |
| InspectionPlanScheduleID | INT(10,0) | False |  | False | INSPECTION_PLAN_SCHEDULE | Link to Inspection Plan schedule. |
| StartingDisposition | INT(10,0) | False |  | False |  | Start including given characteristic starting from Yth disposition created. |

## Primary Key

- **PK_INSPECTION_PLAN_SCHEDULE_ADV** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_PLAN_SCHEDULE_ADV_INSPECTION_CHARACTERISTIC** — INSPECTION_PLAN_SCHEDULE_ADV -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_INSPECTION_PLAN_SCHEDULE_ADV_INSPECTION_PLAN_SCHEDULE** — INSPECTION_PLAN_SCHEDULE_ADV -> INSPECTION_PLAN_SCHEDULE (`InspectionPlanScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_INSPECTION_PLAN_SCHEDULE_ADV** on `InspectionPlanScheduleID, InspectionCharacteristicID`

## Non-Unique Indexes

- **IF_INSPECTION_PLAN_SCHEDULE_ADV_INSPECTION_CHARACTERISTIC** on `InspectionCharacteristicID`
