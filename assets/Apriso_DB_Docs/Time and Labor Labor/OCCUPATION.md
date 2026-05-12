# OCCUPATION

**Database:** Operational

**Description:** Stores all the Occupations for a Facility.  Occupations are used to track indirect Employee activity for Labor tracking. It is also used to categorize Machine Events.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| DirectLabor | BIT | True | (0) | False |  | Denotes the Occupation as Direct or Indirect Labor. |
| DoubletimeGLID | INT(10,0) | True |  | False | GL_ACCOUNT | For future use. |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Facility the Occupation is for. |
| Occupation | NVARCHAR(40) | False |  | True |  | Unique identifier of the Occupation. |
| OvertimeGLID | INT(10,0) | True |  | False | GL_ACCOUNT | For future use. |
| RegularGLID | INT(10,0) | True |  | False | GL_ACCOUNT | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_OCCUPATIONS** on `Facility, Occupation`

## Foreign Keys (this table -> other)

- **FK_OCCUPATION_COST_CLASS** — OCCUPATION -> COST_CLASS (`CostClassID -> ID`)
- **FK_OCCUPATION_CURRENCY** — OCCUPATION -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_OCCUPATION_FACILITY** — OCCUPATION -> FACILITY (`Facility -> Facility`)
- **FK_OCCUPATIONS_GL_ACCOUNTS** — OCCUPATION -> GL_ACCOUNT (`RegularGLID -> ID`)
- **FK_OCCUPATIONS_GL_ACCOUNTS1** — OCCUPATION -> GL_ACCOUNT (`OvertimeGLID -> ID`)
- **FK_OCCUPATIONS_GL_ACCOUNTS2** — OCCUPATION -> GL_ACCOUNT (`DoubletimeGLID -> ID`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_PLAN_SCHEDULE_LABOR_OCCUPATION** — INSPECTION_PLAN_SCHEDULE -> OCCUPATION (`Facility, Occupation -> Facility, Occupation`)
- **FK_LITE_LABOR_OCCUPATION** — LITE_LABOR -> OCCUPATION (`Facility, Occupation -> Facility, Occupation`)
- **FK_OCCUPATION_LABOR_GRADE_OCCUPATION** — OCCUPATION_LABOR_GRADE -> OCCUPATION (`Facility, Occupation -> Facility, Occupation`)
- **FK_OPERATION_OCCUPATION** — OPERATION -> OCCUPATION (`OccupationFacility, Occupation -> Facility, Occupation`)
- **FK_PROCESS_OPERATION_OCCUPATION** — PROCESS_OPERATION -> OCCUPATION (`OwnerFacility, Occupation -> Facility, Occupation`)
- **FK_RESOURCE_LABOR_OCCUPATION** — RESOURCE_LABOR -> OCCUPATION (`Occupation, Facility -> Occupation, Facility`)
- **FK_WIP_OPERATION_OCCUPATION** — WIP_OPERATION -> OCCUPATION (`OccupationFacility, Occupation -> Facility, Occupation`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_OCCUPATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_OCCUPATION_COST_CLASS** on `CostClassID`
- **IF_OCCUPATIONS_GL_ACCOUNTS** on `RegularGLID`
- **IF_OCCUPATIONS_GL_ACCOUNTS1** on `OvertimeGLID`
- **IF_OCCUPATIONS_GL_ACCOUNTS2** on `DoubletimeGLID`
