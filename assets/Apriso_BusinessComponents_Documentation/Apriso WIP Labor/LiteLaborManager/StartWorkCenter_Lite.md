# StartWorkCenter_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** StartWorkCenter, Start, Work, Center, WorkCenter, Lite, LiteLabor, Labor

## Description

Creates a LITE_LABOR record referencing a work center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee with whom the table is associated. |
| Input | WorkCenter | Char | Yes | Work center in which the labor was performed. |
| Input | ActivityTime | DateTime | Yes | Activity time. The value must be specified as local (it is automatically converted and stored as UTC). |
| Output | LiteLaborID | Integer | Yes | ID of the generated LITE_LABOR record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Facility | Char | Facility in which the labor was performed. |
| ReasonCode | Char | ReasonCode indicating why the entity is on hold. |
| Shift | Char | Name of the shift. |

## Validations

Validation fails if:
 
 
- Any input is a default value. 
- Character limits are exceeded for any input. 
 

 
 
 

Database validations (if inputs exist):
 
 
- EmployeeID validated against EMPLOYEE.ID. 
- WorkCenter validated against WORK_CENTER.WorkCenter. 
- Facility validated against FACILITY.Facility. 
- ReasonCode validated against REASON_CODE.ReasonCode.

## System Processing

- String inputs are trimmed. 
- Inputs are run through all validations. 
- A LITE_LABOR record is created from the specified inputs. In addition, the record is created with a work center labor type and an open labor status. TimeZoneID is taken from the EmployeeID input if it exists, otherwise it is the time zone of the logged in user. StartTime is converted to UTC from ActivityTime using TimeZoneID. 
- LiteLaborID is returned from the new record: LITE_LABOR.ID.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.LiteLabor.LiteLaborManager.StartWorkCenterLite 
- TRANSACTION_HISTORY_LABOR 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_PROP_BAG

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | EmployeeID | EmployeeID |
|  | WorkCenter | Work Center |
|  | Facility | Facility |
|  | ReasonCode | Reason Code |
|  | ShiftName | Shift |
|  | TimeZoneID | Employee Time Zone ID |
|  | StartTime | UTC Start Time |
|  | StartTimeLocal | Start Time based on employee's time zone ID |
|  | Labor Status | Labor Status |
|  | LaborType | Labor Type |
