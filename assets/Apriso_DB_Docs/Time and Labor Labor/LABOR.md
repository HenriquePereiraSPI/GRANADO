# LABOR

**Database:** Operational

**Description:** Store run-time Labor data for an EMPLOYEE. This table includes fields like PayDay, Start and Stop Times, allocated hours against an earn code, links to entities that the employee performed work agains

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | Adjusted start time of the Labor based on the Attendance and Labor rules. |
| AdjustedStartTimeLocal | DATETIME | True |  | False |  | Adjusted start time of the Labor based on the Attendance and Labor rules in the time zone of the user. |
| AdjustedStopTime | DATETIME | True |  | False |  | Adjusted stop time of the Labor based on the Attendance and Labor rules. |
| AdjustedStopTimeLocal | DATETIME | True |  | False |  | Adjusted stop time of the Labor based on the Attendance and Labor rules in the time zone of the user. |
| AfterAddOnName1 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | Attribute used to denote the Attendance record has an add-on linked to it.  Add-ons are used to reference the record as some kind of premium. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | Attribute used to denote the Attendance record has an add-on linked to it.  Add-ons are used to reference the record as some kind of premium. |
| AttendanceID | INT(10,0) | True |  | False | ATTENDANCE | ID of the Attendance record the table is associated with. |
| BeforeAddOnName | NVARCHAR(40) | True |  | False | WORK_ADD_ON | Attribute used to denote the Attendance record has an add-on linked to it.  Add-ons are used to reference the record as some kind of premium. |
| CurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Department the Labor was performed at. |
| DoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Amount of double time hours assigned to the Labor. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Earn Code the Labor is performed as. |
| EarningAmount | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | Validity (start) date) of the entity in UTC. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee record the table is associated with. |
| EndTime | DATETIME | True |  | False |  | End time of the Labor in UTC time. |
| EndTimeLocal | DATETIME | True |  | False |  | Actual end time for the Labor in the Employee's local time zone. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility the Labor was performed in. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LaborCode | NVARCHAR(5) | True |  | False | LABOR_CODE | Labor Code the Labor was performed under. |
| LaborGrade | NVARCHAR(40) | True |  | False | OCCUPATION_LABOR_GRADE | For future use. |
| LaborStatus | SMALLINT(5,0) | True |  | False | LABOR_STATUS | Status of the Labor. |
| LaborType | SMALLINT(5,0) | True |  | False | LABOR_TYPE | Type of the Labor. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | WIP Order Number that the Labor is allocated against.  Linked to the WIP_ORDER table. |
| NonRegularHours | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a Note. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION_LABOR_GRADE | Occupation that this Labor is allocated against. Linked to the OCCUPATION table. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| OverrideCalculation | BIT | True | (0) | False |  | If True, the calculation of hours has been overridden. |
| OverTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Overtime hours the Labor has been granted. |
| OvertimeRuleApplied | INT(10,0) | True |  | False |  | Determines overtime rule being applied to the day. 0-NoOvertime, 1-DailyOvertime, 2-WeeklyOvertime, 3-ConsecutiveDayOvertime |
| Payday | SMALLDATETIME | True |  | False |  | PayDay associated with the Labor. |
| PayDayLocal | DATETIME | True |  | False |  | PayDay associated with the labor in the user's local time zone. |
| PayPeriodID | INT(10,0) | True |  | False | PAY_PERIOD | ID of the Pay Period record the table is associated with. |
| PayRule | NVARCHAR(20) | True |  | False | PAY_RULE | Pay Rule that the Labor is linked to that was used to compute the Labor rules against. Linked to the PAY_RULE table. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| RegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Regular hours associated with the Labor. |
| Revision | INT(10,0) | True | (1) | False |  | For future use. |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | Shift the Labor was performed in. |
| StartTime | DATETIME | True | (getutcdate()) | False |  | Start time for the Labor in UTC time. |
| StartTimeLocal | DATETIME | True |  | False |  | Start time for the Labor in the Employee local time zone. |
| TaskID | INT(10,0) | True |  | False |  | Task the Labor was performed for. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Labor was performed in. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order Number that the Labor is allocated against. Linked to the WIP_ORDER table. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Link to the WIP Order type. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Occupation that this Labor is allocated against. Linked to the OCCUPATION table. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Work Period that the Labor is allocated against. Linked to the WORK_PERIOD table. |

## Primary Key

- **PK_LABOR** on `ID`

## Foreign Keys (this table -> other)

- **FK_LABOR_ATTENDANCE** — LABOR -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_LABOR_CURRENCY** — LABOR -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_LABOR_DEPARTMENT** — LABOR -> DEPARTMENT (`Department -> Department`)
- **FK_LABOR_EARN_CODE** — LABOR -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_LABOR_EMPLOYEE** — LABOR -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LABOR_FACILITY** — LABOR -> FACILITY (`Facility -> Facility`)
- **FK_LABOR_LABOR_CODE** — LABOR -> LABOR_CODE (`LaborCode -> LaborCode`)
- **FK_LABOR_LABOR_STATUS** — LABOR -> LABOR_STATUS (`LaborStatus -> LaborStatus`)
- **FK_LABOR_LABOR_TYPE** — LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_LABOR_LOT_NO** — LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LABOR_NOTE** — LABOR -> NOTE (`NoteID -> ID`)
- **FK_LABOR_OCCUPATION_LABOR_GRADE** — LABOR -> OCCUPATION_LABOR_GRADE (`Facility, Occupation, LaborGrade -> Facility, Occupation, LaborGrade`)
- **FK_LABOR_PAY_PERIOD** — LABOR -> PAY_PERIOD (`PayPeriodID -> ID`)
- **FK_LABOR_PAY_RULE** — LABOR -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_LABOR_PRODUCT** — LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_LABOR_REASON_CODES** — LABOR -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_LABOR_TIMEZONE** — LABOR -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_LABOR_WORK_ADD_ON** — LABOR -> WORK_ADD_ON (`Facility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_LABOR_WORK_ADD_ON1** — LABOR -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_LABOR_WORK_ADD_ON2** — LABOR -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_LABOR_WORK_CENTER1** — LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_LABOR_WORK_PERIOD** — LABOR -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_LABOR_WORK_SHIFT** — LABOR -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_LABOR** — COST_CHANGE -> LABOR (`LaborID -> ID`)
- **FK_LABOR_ACTION_FLAG_LABOR** — LABOR_ACTION_FLAG -> LABOR (`LaborID -> ID`)
- **FK_LABOR_APPROVAL_LABOR** — LABOR_APPROVAL -> LABOR (`LaborID -> ID`)
- **FK_LABOR_DETAILS_LABOR** — LABOR_DETAIL -> LABOR (`LaborID -> ID`)
- **FK_LABOR_HOURS_LABOR** — LABOR_HOURS -> LABOR (`LaborID -> ID`)
- **FK_LABOR_RESOURCES_USED_LABOR** — LABOR_RESOURCE_USED -> LABOR (`LaborID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LABOR_ATTENDANCE** on `AttendanceID`
- **IF_LABOR_LABOR_CODE** on `LaborCode`
- **IF_LABOR_LABOR_STATUS** on `LaborStatus`
- **IF_LABOR_LOT_NO** on `LotNo, ProductID`
- **IF_LABOR_NOTE** on `NoteID`
- **IF_LABOR_OCCUPATION_LABOR_GRADE** on `Facility, Occupation, LaborGrade`
- **IF_LABOR_PAY_PERIOD** on `PayPeriodID`
- **IF_LABOR_PAY_RULE** on `PayRule, Facility`
- **IF_LABOR_PRODUCT** on `ProductID`
- **IF_LABOR_WORK_ADD_ON** on `BeforeAddOnName, Facility`
- **IF_LABOR_WORK_ADD_ON1** on `AfterAddOnName1, Facility`
- **IF_LABOR_WORK_ADD_ON2** on `AfterAddOnName2, Facility`
- **IF_LABOR_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
- **IXD_EmployeeID_Payday_LaborStatus_LaborType_WipOrderNo_WipOrderType** on `EmployeeID, Payday, LaborStatus, LaborType, WipOrderNo, WipOrderType`
- **IXD_TaskID** on `TaskID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_EmployeeID** on `WipOrderNo, WipOrderType, OprSequenceNo, EmployeeID`
