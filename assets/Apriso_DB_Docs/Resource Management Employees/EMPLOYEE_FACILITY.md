# EMPLOYEE_FACILITY

**Database:** Operational

**Description:** Stores a link between an EMPLOYEE row and a FACILITY row. Additional data is also linked through this table to include Facility specific information linked to an Employee.  Those additional attributes

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | Earnings Currency Code of the Employee (references EARNINGSCURRENCYCODE). |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | Validity (start) date of the entity in UTC. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | ID of the Employee record the table is associated with. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Facility the Employee is configured for. |
| LaborGrade | NVARCHAR(40) | True |  | False | OCCUPATION_LABOR_GRADE | Labor Grade of the Employee (references LABORGRADE). |
| LogonAllowed | BIT | True | (0) | False |  | For future use. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION_LABOR_GRADE | Occupation linked to the Employee by Facility, linked to the OCCUPATION table. Also used as the default indirect Occupation code. |
| PayRule | NVARCHAR(20) | True |  | False | PAY_RULE | Pay Rule linked to the Employee by Facility, linked to the PAY_RULE table. |
| RotatingScheduleID | INT(10,0) | True |  | False | ROTATING_WORK_SCHEDULE | Rotating Work Schedule linked to the Employee by Facility. Linked to the ROTATING_WORK_SCHEDULE table. |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | Shift the Employee is assigned to for a given Facility. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Default Work Center for the Employee at the Facility. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Work Period linked of the Employee by Facility. Linked to the WORK_PERIOD table. |

## Primary Key

- **PK_EMPLOYEE_FACILITY_XREF** on `EmployeeID, Facility`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_FACILITY_CURRENCY** — EMPLOYEE_FACILITY -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_EMPLOYEE_FACILITY_FACILITY** — EMPLOYEE_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_FACILITY_OCCUPATION_LABOR_GRADE** — EMPLOYEE_FACILITY -> OCCUPATION_LABOR_GRADE (`Facility, Occupation, LaborGrade -> Facility, Occupation, LaborGrade`)
- **FK_EMPLOYEE_FACILITY_PAY_RULE** — EMPLOYEE_FACILITY -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_EMPLOYEE_FACILITY_WORK_PERIOD** — EMPLOYEE_FACILITY -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_EMPLOYEE_FACILITY_XREF_EMPLOYEE** — EMPLOYEE_FACILITY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_FACILITY_XREF_ROTATING_WORK_SCHEDULE1** — EMPLOYEE_FACILITY -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_EMPLOYEE_FACILITY_XREF_WORK_CENTER** — EMPLOYEE_FACILITY -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_PAY_CYCLES_EMPLOYEE_FACILITY_XREF** — EMPLOYEE_PAY_CYCLE -> EMPLOYEE_FACILITY (`EmployeeID, Facility -> EmployeeID, Facility`)
- **FK_EMPLOYEE_TEAM_XREF_EMPLOYEE_FACILITY_XREF** — EMPLOYEE_TEAM -> EMPLOYEE_FACILITY (`EmployeeID, Facility -> EmployeeID, Facility`)
- **FK_OVERTIME_OFFERED_ACCEPTED_EMPLOYEE_FACILITY_XREF** — OVERTIME_OFFER_ACCEPT -> EMPLOYEE_FACILITY (`EmployeeID, Facility -> EmployeeID, Facility`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_FACILITY_OCCUPATION_LABOR_GRADE** on `Occupation, LaborGrade, Facility`
- **IF_EMPLOYEE_FACILITY_PAY_RULE** on `PayRule, Facility`
- **IF_EMPLOYEE_FACILITY_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
- **IF_EMPLOYEE_FACILITY_XREF_OCCUPATION_LABOR_GRADES** on `Facility, Occupation, LaborGrade`
- **IF_EMPLOYEE_FACILITY_XREF_ROTATING_WORK_SCHEDULE1** on `RotatingScheduleID`
