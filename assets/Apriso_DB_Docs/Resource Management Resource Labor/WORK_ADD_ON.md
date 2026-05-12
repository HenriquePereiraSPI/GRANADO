# WORK_ADD_ON

**Database:** Operational

**Description:** The WORK_ADD_ON table is used to store a type of premium to be associated to a WORK_SHIFT / WORK_PERIOD and or WIP_ORDER / WIP_OPERATION row.  These may be used track shift premiums, hazardous work premiums, and other types of premiums.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddOnName | NVARCHAR(40) | False |  | True |  | The name of the add-on. |
| Amount | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| CostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | For future use. |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | The facility for the work add on |
| GLAccountID | INT(10,0) | True |  | False | GL_ACCOUNT | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_ADD_ONS** on `Facility, AddOnName`

## Foreign Keys (this table -> other)

- **FK_WORK_ADD_ON_COST_CLASS** — WORK_ADD_ON -> COST_CLASS (`CostClassID -> ID`)
- **FK_WORK_ADD_ON_CURRENCY** — WORK_ADD_ON -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_WORK_ADD_ON_DEPARTMENT** — WORK_ADD_ON -> DEPARTMENT (`Department -> Department`)
- **FK_WORK_ADD_ON_FACILITY** — WORK_ADD_ON -> FACILITY (`Facility -> Facility`)
- **FK_WORK_ADD_ONS_GL_ACCOUNTS** — WORK_ADD_ON -> GL_ACCOUNT (`GLAccountID -> ID`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_HOURS_WORK_ADD_ON** — ATTENDANCE_HOURS -> WORK_ADD_ON (`AddOnFacility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_ATTENDANCE_HOURS_WORK_ADD_ON1** — ATTENDANCE_HOURS -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_ATTENDANCE_HOURS_WORK_ADD_ON2** — ATTENDANCE_HOURS -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ATTENDANCE_WORK_ADD_ON** — ATTENDANCE -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_ATTENDANCE_WORK_ADD_ON1** — ATTENDANCE -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ATTENDANCE_WORK_ADD_ON2** — ATTENDANCE -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON1** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON2** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_LABOR_HOURS_WORK_ADD_ON** — LABOR_HOURS -> WORK_ADD_ON (`AddOnFacility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_LABOR_HOURS_WORK_ADD_ON1** — LABOR_HOURS -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_LABOR_HOURS_WORK_ADD_ON2** — LABOR_HOURS -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_LABOR_WORK_ADD_ON** — LABOR -> WORK_ADD_ON (`Facility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_LABOR_WORK_ADD_ON1** — LABOR -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_LABOR_WORK_ADD_ON2** — LABOR -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON1** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON2** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_WORK_PERIOD_WORK_ADD_ON** — WORK_PERIOD -> WORK_ADD_ON (`Facility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_WORK_PERIOD_WORK_ADD_ON1** — WORK_PERIOD -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_WORK_PERIOD_WORK_ADD_ON2** — WORK_PERIOD -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_ADD_ON_COST_CLASS** on `CostClassID`
- **IF_WORK_ADD_ONS_GL_ACCOUNTS** on `GLAccountID`
