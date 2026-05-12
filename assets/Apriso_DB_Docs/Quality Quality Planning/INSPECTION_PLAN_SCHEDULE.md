# INSPECTION_PLAN_SCHEDULE

**Database:** Operational

**Description:** This table is required to support Inspection Schedules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | Date/Time until which Schedule remains operational. |
| EffectiveDate | DATETIME | False |  | False |  | Date/Time from which Schedule becomes operational. |
| Enabled | BIT | False |  | False |  | Determines if Schedule is currently operational. |
| EventType | SMALLINT(5,0) | True |  | False | LABOR_TYPE | Event Type  (only those available for Resource Labor). |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Occupation facility. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Plan. |
| ID | INT(10,0) | False |  | True |  | Unique ID of Inspection Plan. |
| InspectionCounter | INT(10,0) | True |  | False |  | Counter of the executed dispositions based on this schedule. |
| InspectionDetInspectionPlanID | INT(10,0) | False |  | False | INSPECTION_DET_INSPECTION_PLAN | Inspection Plan name. |
| Interval | BIGINT(19,0) | True |  | False |  | Time interval in ticks. |
| LastExecutedOn | DATETIME | True |  | False |  | Date -time of the last executed disposition based on this schedule. |
| NumberOfEvents | INT(10,0) | True |  | False |  | Number of consecutive events that must take place to generate an inspection. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | Occupation (only those available for Resource Labor). |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code (only those available for Resource Labor). |
| Schedule | NVARCHAR(30) | False |  | False |  | Revision code (e.g. '1.0', 'Initial' etc.). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | False |  | Inspection Schedule Type: 1 - Based on time, 2 - Based on quantity, 3 - Based on event |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure of Quantity. |
| UseAdvancedRules | BIT | False |  | False |  | Flag indicating that scheduling parameters are configured for individual Inspection Characteristics. |

## Primary Key

- **PK_INSPECTION_PLAN_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_PLAN_SCHEDULE_FACILITY** — INSPECTION_PLAN_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_INSPECTION_PLAN_SCHEDULE_INSPECTION_DET_INSPECTION_PLAN** — INSPECTION_PLAN_SCHEDULE -> INSPECTION_DET_INSPECTION_PLAN (`InspectionDetInspectionPlanID -> ID`)
- **FK_INSPECTION_PLAN_SCHEDULE_LABOR_OCCUPATION** — INSPECTION_PLAN_SCHEDULE -> OCCUPATION (`Facility, Occupation -> Facility, Occupation`)
- **FK_INSPECTION_PLAN_SCHEDULE_LABOR_REASON_CODE** — INSPECTION_PLAN_SCHEDULE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_INSPECTION_PLAN_SCHEDULE_LABOR_TYPE** — INSPECTION_PLAN_SCHEDULE -> LABOR_TYPE (`EventType -> Type`)
- **FK_INSPECTION_PLAN_SCHEDULE_UNITID** — INSPECTION_PLAN_SCHEDULE -> UNIT (`UnitID -> ID`)
- **FK_INSPECTION_PLAN_SCHEDULE_UOM** — INSPECTION_PLAN_SCHEDULE -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_PLAN_SCHEDULE_ADV_INSPECTION_PLAN_SCHEDULE** — INSPECTION_PLAN_SCHEDULE_ADV -> INSPECTION_PLAN_SCHEDULE (`InspectionPlanScheduleID -> ID`)

## Unique Indexes

- **UK_INSPECTION_PLAN_SCHEDULE** on `InspectionDetInspectionPlanID, Schedule`

## Non-Unique Indexes

- **IF_INSPECTION_PLAN_SCHEDULE_LABOR_OCCUPATION** on `Occupation, Facility`
- **IF_INSPECTION_PLAN_SCHEDULE_UNITID** on `UnitID`
