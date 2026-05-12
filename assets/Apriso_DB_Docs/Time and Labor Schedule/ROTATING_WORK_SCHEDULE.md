# ROTATING_WORK_SCHEDULE

**Database:** Operational

**Description:** The ROTATING_WORK_SCHEDULE table is used to store all an alternative type of schedule to that maintained in CALENDAR, WORK_SHIFT and WORK_PERIOD tables. A ROTATING_WORK_SCHEDULE is a collection of daily assignements across differing rows in WORK_SHIFT and WORK_PERIOD.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| FUID | NVARCHAR(36) | False | (newid()) | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| OverrideCompanyCalendar | BIT | True | (0) | False |  | For future use. |
| RotationLength | INT(10,0) | True |  | False |  | For future use. |
| ScheduleName | NVARCHAR(50) | True |  | False |  | The name of the schedule |
| ScheduleStatus | SMALLINT(5,0) | True |  | False | SCHEDULE_STATUS | The rotating work schedule status, linked to the SCHEDULE_STATUS table |
| ScheduleType | SMALLINT(5,0) | True |  | False | SCHEDULE_TYPE | The rotating work schedule type, linked to the SCHEDULE_TYPE table |

## Primary Key

- **PK_ROTATING_WORK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ROTATING_WORK_SCHEDULE_SCHEDULE_STATUS** — ROTATING_WORK_SCHEDULE -> SCHEDULE_STATUS (`ScheduleStatus -> ScheduleStatus`)
- **FK_ROTATING_WORK_SCHEDULE_SCHEDULE_TYPES** — ROTATING_WORK_SCHEDULE -> SCHEDULE_TYPE (`ScheduleType -> ScheduleType`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_FACILITY_XREF_ROTATING_WORK_SCHEDULE1** — EMPLOYEE_FACILITY -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_FACILITY_ROTATING_SCHEDULE_WORK_SCHEDULE** — FACILITY_ROTATING_SCHEDULE -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_FACILITY_ROTATING_WORK_SCHEDULE** — FACILITY -> ROTATING_WORK_SCHEDULE (`RotatingWorkScheduleID -> ID`)
- **FK_RESOURCE_ROTATING_SCHEDULE_ROTATING_WORK_SCHEDULE** — RESOURCE_ROTATING_SCHEDULE -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_ROTATING_WORK_SCHEDULE** — ROTATING_WORK_SCHEDULE_DETAIL -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_WORK_CENTER_ROTATING_SCHEDULE_ROTATING_WORK_SCHEDULE** — WORK_CENTER_ROTATING_SCHEDULE -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)

## Unique Indexes

- **UX_ROTATING_WORK_SCHEDULE_FUID** on `FUID`

## Non-Unique Indexes

- **IF_ROTATING_WORK_SCHEDULE_SCHEDULE_STATUS** on `ScheduleStatus`
