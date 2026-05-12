# SAMPLE_PLAN_FACILITY

**Database:** Operational

**Description:** Facility-specific sample plan permissions

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The date when the entity shall be discontinued |
| EffectiveDate | DATETIME | True |  | False |  | The date when the entity shall become effective |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Identifier for the Facility |
| IncludeExclude | BIT | True |  | False |  | Determines whether or not the entity is included or excluded from the facility |
| SamplePlanID | INT(10,0) | False |  | True | SAMPLE_PLAN | Sample Plan and its Attributes unique identifier |

## Primary Key

- **PK_SAMPLE_PLAN_FACILITY** on `SamplePlanID, Facility`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_PLAN_FACILITY_FACILITY** — SAMPLE_PLAN_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_PLAN_FACILITY_SAMPLE_PLAN** — SAMPLE_PLAN_FACILITY -> SAMPLE_PLAN (`SamplePlanID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
