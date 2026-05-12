# UpdateLabor

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor`
**Status:** Active

## Description

This method is invoked to update the specified labor record in the LABOR table. This action is equivalent to modifying the labor record via Time Manager and saving.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LaborID | Integer | Yes | The labor record ID |
| Input | AuditComment | Char | Conditional | A description of the reason why the labor record has been removed. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| CalculationOverridden | Boolean | If the labor's duration is set explicitly. |
| ChargeCode | Char | The code for the work. May be WIP Order Number, Occupation, or Product Number dependent on the labor type. |
| Comment | Char | A comment for the labor record. |
| Delete | Boolean | If the labor record is deleted. |
| ElapsedHours | Decimal | Explicitly set duration of the labor record. |
| EndTime | DateTime | The end time. |
| LaborCode | Char | The Labor Code for labor reporting. |
| LaborGrade | Char | The Labor Grade. |
| OccupationCode | Char | The Occupation Code. |
| Operation | Char | The WIP Operation Number for the direct labor record. |
| ReasonCode | Char | The Reason Code. |
| StartTime | DateTime | The start time. |
| Type | Integer | WIP order type; direct, indirect, orderless, or jobless. |
| WorkCenter | Char | The Work Center. |

## Validations

- Validation passes if the labor record exists. 
- Validation passes if the system configuration allows all of the dynamic inputs that are specified. 
- Validation passes if the labor record updated with the specified inputs are in accordance with time and labor configuration.

## System Processing

- System retrieves all labor data for the attendance associated with the specified labor record. 
- System validates that the attendance and labor can be modified. 
- System updates the specified labor record with the specified inputs. 
- System recomputes labor hours for the remaining labor records. 
- System updates the attendance record with the new sum of labor hours. 
- System updates the retrieved labor records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LABOR | DoubleTimeHours | DoubleTimeHours |
|  | RegularHours | ElapsedHours |
|  | EndTime | EndTime (Converted to UTC) |
|  | EndTimeLocal | EndTime |
|  | LaborCode | LaborCode |
|  | LaborGrade | LaborGrade |
|  | Occupation | OccupationCode or ChargeCode if type is indirect |
|  | OperationSequenceNo | Operation |
|  | OverrideCalculation | CalculationOverriden |
|  | OverTimeHours | OvertimeHours |
|  | ProductID | ChargeCode if type is orderless |
|  | ReasonCode | ReasonCode |
|  | RegularHours | RegularHours |
|  | StartTime | StartTime (Converted to UTC) |
|  | StartTimeLocal | StartTime |
|  | TextID | Comment |
|  | WipOrderNo | ChargeCode if type is direct |
|  | WipOrderType | Type |
|  | WorkCenter | WorkCenter |
| LABOR_APPROVAL | All | LaborID (record deleted) |
| LABOR_AUDIT | ChangedBy | Logged in employee |
|  | ChangedOn | Current UTC date and time |
|  | ChangedOnLocal | Current local date and time |
|  | AuditAction | 2 |
|  | All remaining | Old and new labor record details are duplicated to audit record |
| NOTE | Description | AuditComment |
