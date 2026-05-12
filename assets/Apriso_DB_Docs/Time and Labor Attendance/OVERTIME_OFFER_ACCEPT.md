# OVERTIME_OFFER_ACCEPT

**Database:** Operational

**Description:** The OVERTIME_OFFER_ACCEPT table is used to store a history of Overtime offered to an EMPLOYEE.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AcceptedDate | DATETIME | True | (getutcdate()) | False |  | The date the overtime has been accepted |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE_FACILITY | ID of the Employee record tht table is associated with. |
| Facility | NVARCHAR(40) | False |  | True | EMPLOYEE_FACILITY | Facility for the overtime that was either offered or accepted. |
| HoursAccepted | DECIMAL(28,10) | True | (0.0) | False |  | Hours accepted for the PayDay for Overtime offered to the Employee.  This field is computed based on the overtime worked. |
| HoursOffered | DECIMAL(28,10) | True | (0.0) | False |  | Hours offered for the PayDay for Overtime offered to the employee.  This field may be computed based on the overtime worked or manually inserted. |
| HoursRefused | DECIMAL(28,10) | True |  | False |  | Hours refused for this payday for Overtime offered to the employee.  This field may be computed based on the overtime worked or manually inserted. |
| Payday | DATETIME | False |  | True |  | PayDay the overtime was offered for or accepted. |
| SupervisorID | INT(10,0) | True |  | False | EMPLOYEE | The supervisor who offeres the overtime |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_OVERTIME_OFFERED_ACCEPTED** on `EmployeeID, Facility, Payday`

## Foreign Keys (this table -> other)

- **FK_OVERTIME_OFFERED_ACCEPTED_EMPLOYEE** — OVERTIME_OFFER_ACCEPT -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_OVERTIME_OFFERED_ACCEPTED_EMPLOYEE_FACILITY_XREF** — OVERTIME_OFFER_ACCEPT -> EMPLOYEE_FACILITY (`EmployeeID, Facility -> EmployeeID, Facility`)
- **FK_OVERTIME_OFFERED_ACCEPTED_FACILITY** — OVERTIME_OFFER_ACCEPT -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_Payday** on `Payday`
