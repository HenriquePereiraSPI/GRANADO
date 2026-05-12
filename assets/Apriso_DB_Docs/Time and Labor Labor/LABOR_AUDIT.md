# LABOR_AUDIT

**Database:** Operational

**Description:** Stores a history of edits performed against the LABOR table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | Original adjusted start time of the Labor based on the Attendance and Labor rules, |
| AdjustedStartTimeLocal | DATETIME | True |  | False |  | Original adjusted start time of the Labor based on the Attendance and Labor rules in the time zone of the user. |
| AdjustedStopTime | DATETIME | True |  | False |  | Original adjusted stop time of the Labor based on the Attendance and Labor rules. |
| AdjustedStopTimeLocal | DATETIME | True |  | False |  | Original adjusted stop time of the Labor based on the Attendance and Labor rules in the time zone of the user. |
| AfterAddOnName1 | NVARCHAR(40) | True |  | False |  | Original value of the AFTERADDONNAME1 assigned to the Attendance row. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False |  | Original value of the AFTERADDONNAME2 assigned to the Attendance row. |
| AttendanceID | INT(10,0) | True |  | False |  | ID of the Attendance record the table is associated with, |
| AuditAction | SMALLINT(5,0) | True |  | False | TIME_AUDIT_ACTION | Action performed on the Labor: change, add or deleted. |
| BeforeAddOnName | NVARCHAR(40) | True |  | False |  | Original value of the BEFOREADDONNAME assigned to the Attendance row. |
| ChangedBy | NVARCHAR(50) | True |  | False |  | Person who last changed the Labor record. |
| ChangedOn | DATETIME | True | (getutcdate()) | False |  | When the Labor record was last changed. |
| ChangedOnLocal | DATETIME | True |  | False |  | When the Labor record was last changed in the user's local time zone. |
| CurrencyCode | NVARCHAR(3) | True |  | False |  | For future use. |
| Department | NVARCHAR(40) | True |  | False |  | Original Department the Labor was performed at. |
| DoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original amount of double-time hours assigned to the Labor. |
| EarnCode | NVARCHAR(20) | True |  | False |  | Original Earn Code the Labor is performed as. |
| EarningAmount | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the EARNINGAMOUNT assigned to the Attendance row. |
| EffectiveDate | DATETIME | True |  | False |  | Validity (start) date of the entity in UTC. |
| EmployeeID | INT(10,0) | True |  | False |  | ID of the Employee record the table is associated with. |
| EndTime | DATETIME | True |  | False |  | End time of the Labor in UTC time. |
| EndTimeLocal | DATETIME | True |  | False |  | Actual end time for the Labor in the Employee's local time zone. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility the Labor was performed in. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LaborCode | NVARCHAR(5) | True |  | False |  | Labor Code the Labor was performed under. |
| LaborGrade | NVARCHAR(40) | True |  | False |  | Original value of the LABORGRADE assigned to the Attendance row. |
| LaborID | INT(10,0) | False |  | False |  | ID of the Labor record the table is associated with. |
| LaborStatus | SMALLINT(5,0) | True |  | False |  | Status of the Labor. |
| LaborType | SMALLINT(5,0) | True |  | False |  | Type of the Labor. |
| LotNo | NVARCHAR(40) | True |  | False |  | Original value of the LOTNO assigned to the Attendance row. |
| NewAdjustedStartTime | DATETIME | True |  | False |  | New value for the ADJUSTEDSTARTTIME column from the Labor row being audited. |
| NewAdjustedStartTimeLocal | DATETIME | True |  | False |  | New value for the ADJUSTEDSTARTTIMELOCAL column from the Labor row being audited. |
| NewAdjustedStopTime | DATETIME | True |  | False |  | New value for the ADJUSTEDSTOPTIME column from the Labor row being audited. |
| NewAdjustedStopTimeLocal | DATETIME | True |  | False |  | New value for the ADJUSTEDSTOPTIMELOCAL column from the Labor row being audited. |
| NewAfterAddOnName1 | NVARCHAR(40) | True |  | False |  | New value for the AFTERADDONNAME1 column from the Labor row being audited. |
| NewAfterAddOnName2 | NVARCHAR(40) | True |  | False |  | New value for the AFTERADDONNAME2 column from the Labor row being audited. |
| NewAttendanceID | INT(10,0) | True |  | False |  | New value for the ATTENDANCEID column from the Labor row being audited. |
| NewBeforeAddOnName | NVARCHAR(40) | True |  | False |  | New value for the BEFOREADDONNAME column from the Labor row being audited. |
| NewCurrencyCode | NVARCHAR(3) | True |  | False |  | New value for the CURRENCYCODE column from the Labor row being audited. |
| NewDepartment | NVARCHAR(40) | True |  | False |  | New value for the DEPARTMENT column from the Labor row being audited. |
| NewDoubleTimeHours | DECIMAL(28,10) | True |  | False |  | New value for the DOUBLETIMEHOURS column from the Labor row being audited. |
| NewEarnCode | NVARCHAR(20) | True |  | False |  | New value for the EARNCODE column from the Labor row being audited. |
| NewEarningAmount | DECIMAL(28,10) | True |  | False |  | New value for the EARNINGAMOUNT column from the Labor row being audited. |
| NewEffectiveDate | DATETIME | True |  | False |  | New value for the EFFECTIVEDATE column from the Labor row being audited. |
| NewEndTime | DATETIME | True |  | False |  | New value for the ENDTIME column from the Labor row being audited. |
| NewEndTimeLocal | DATETIME | True |  | False |  | New value for the ENDTIMELOCAL column from Labor row being audited. |
| NewFacility | NVARCHAR(40) | True |  | False |  | New value for the FACILITY column from the Labor row being audited. |
| NewLaborCode | NVARCHAR(5) | True |  | False |  | New value for the LABORCODE column from the Labor row being audited. |
| NewLaborGrade | NVARCHAR(40) | True |  | False |  | New value for the LABORGRADE column from the Labor row being audited. |
| NewLaborStatus | SMALLINT(5,0) | True |  | False |  | New value for the LABORSTATUS column from the Labor row being audited. |
| NewLaborType | SMALLINT(5,0) | True |  | False |  | New value for the LABORTYPE column from Labor row being audited. |
| NewLotNo | NVARCHAR(40) | True |  | False |  | New value for the LOTNO column from the Labor row being audited. |
| NewNonRegularHours | DECIMAL(28,10) | True |  | False |  | New value for the NONREGULARHOURS column from the Labor row being audited. |
| NewNoteID | INT(10,0) | True |  | False |  | New value for the NOTEID column from the Labor row being audited. |
| NewOccupation | NVARCHAR(40) | True |  | False |  | New value for the OCCUPATION column from the Labor row being audited. |
| NewOprSequenceNo | NVARCHAR(20) | True |  | False |  | New value for the OPRSEQUENCENO column from the Labor row being audited. |
| NewOverrideCalculation | BIT | True |  | False |  | New value for the OVERRIDECALCULATION column from the Labor row being audited. |
| NewOverTimeHours | DECIMAL(28,10) | True |  | False |  | New value for the OVERTIMEHOURS column from the Labor row being audited. |
| NewPayday | SMALLDATETIME | True |  | False |  | New value for the PAYDAY column from the Labor row being audited. |
| NewPayDayLocal | DATETIME | True |  | False |  | New value for the PAYDAYLOCAL column from the Labor row being audited. |
| NewPayPeriodID | INT(10,0) | True |  | False |  | New value for the PAYPERIODID column from the Labor row being audited. |
| NewPayRule | NVARCHAR(20) | True |  | False |  | New value for the PAYRULE column from the Labor row being audited. |
| NewProductID | INT(10,0) | True |  | False |  | New value for the PRODUCTID column from the Labor row being audited. |
| NewReasonCode | NVARCHAR(20) | True |  | False |  | New value for the REASONCODE column from the Labor row being audited. |
| NewRegularHours | DECIMAL(28,10) | True |  | False |  | New value for the REGULARHOURS column from the Labor row being audited. |
| NewShift | NVARCHAR(10) | True |  | False |  | New value for the SHIFT column from the Labor row being audited. |
| NewStartTime | DATETIME | True | (getutcdate()) | False |  | New value for the STARTTIME column from the Labor row being audited. |
| NewStartTimeLocal | DATETIME | True | (getutcdate()) | False |  | New value for the STARTTIMELOCAL column from the Labor row being audited. |
| NewTaskID | INT(10,0) | True |  | False |  | New value for the TASKID column from the Labor row being audited. |
| NewTextID | INT(10,0) | True |  | False |  | New value for the TEXTID column from the Labor row being audited. |
| NewTimeZoneID | INT(10,0) | True |  | False |  | New value for the TIMEZONEID column from the Labor row being audited. |
| NewWipOrderNo | NVARCHAR(40) | True |  | False |  | New value for the WIPORDERNO column from the Labor row being audited. |
| NewWipOrderType | SMALLINT(5,0) | True |  | False |  | New value for the WIPORDERTYPE column from the Labor row being audited. |
| NewWorkCenter | NVARCHAR(40) | True |  | False |  | New value for the WORKCENTER column from the Labor row being audited. |
| NewWorkPeriod | NVARCHAR(20) | True |  | False |  | New value for the WORKPERIOD column from the Labor row being audited. |
| NonRegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the NONREGULARHOURS assigned to the Attendance row. |
| NoteID | INT(10,0) | True |  | False |  | Reference to a note. |
| Occupation | NVARCHAR(40) | True |  | False |  | Original value of the OCCUPATION assigned to the Attendance row. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| OverrideCalculation | BIT | True |  | False |  | If True, the Calculation of hours has been overridden. |
| OverTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original overtime hours the Labor has been given. |
| Payday | SMALLDATETIME | True |  | False |  | Original PayDay associated with the Labor. |
| PayDayLocal | DATETIME | True |  | False |  | Original PayDay in the user's local time zone associated with the Labor. |
| PayPeriodID | INT(10,0) | True |  | False |  | ID of the Pay Period record the table is associated with. |
| PayRule | NVARCHAR(20) | True |  | False |  | Original value of the PAYRULE assigned to the Attendance row. |
| ProductID | INT(10,0) | True |  | False |  | Reference to a Product (Product Number and Product Version). |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code indicating why the entity is on Hold |
| RegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Regular hours associated with the Labor. |
| Revision | INT(10,0) | True | (1) | False |  | For future use. |
| Shift | NVARCHAR(10) | True |  | False |  | Shift the Labor was performed in. |
| StartTime | DATETIME | True | (getutcdate()) | False |  | Start time of the Labor in UTC time. |
| StartTimeLocal | DATETIME | True |  | False |  | Start time for the Labor in the Employee's local time zone. |
| TaskID | INT(10,0) | True |  | False |  | Task the Labor was performed for. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Labor was performed in. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | Original value of the WIPORDERNO assigned to the Attendance row. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Link to the WIP Order Type. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Original value of the WORKCENTER assigned to the Attendance row. |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | Original value of the WORKPERIOD assigned to the Attendance row. |

## Primary Key

- **PK_LABOR_AUDIT** on `ID`

## Foreign Keys (this table -> other)

- **FK_LABOR_AUDIT_AUDIT_ACTIONS** — LABOR_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_LABOR_AUDIT_TIMEZONE** — LABOR_AUDIT -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_LABOR_AUDIT** — COST_CHANGE -> LABOR_AUDIT (`LaborAuditID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LABOR_AUDIT_AUDIT_ACTIONS** on `AuditAction`
- **IXD_EmployeeID_Payday** on `EmployeeID, Payday`
- **IXD_LaborID** on `LaborID`
- **IXD_WipOrderNo_WipOrderType** on `WipOrderNo, WipOrderType`
