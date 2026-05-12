# StartIndirect_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** StartOrder_Lite, Start, Order, Lite, StartOrder, LiteLabor, Lite

## Description

Creates a LITE_LABOR record from the provided EmployeeID and local start time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee with whom the labor is associated. |
| Input | ActivityTime | DateTime | Yes | Activity time. The value must be specified as local (it is automatically converted and stored as UTC). |
| Output | LiteLaborID | Integer | Yes | ID of the generated LITE_LABOR record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Occupation | Char | Name of the occupation. |
| Facility | Char | Facility in which the labor was performed. |
| WorkCenter | Char | Work center. |

## Validations

Validation fails if:
 
 
- EmployeeID is not provided. 
- ActivityTime is not provided. 
- Occupation is provided, but Facility is missing. 
- Character limits are exceeded for any input. 
- Any existing input has a default value. 
 

 
 
 

Database validations (if inputs are present):
 
 
- EmployeeID validated against EMPLOYEE.ID. 
- Facility validated against FACILITY.Facility. 
- WorkCenter validated against WORK_CENTER.WorkCenter. 
- If Occupation and Facility are provided, Occupation validated agaist OCCUPATION.Occupation and OCCUPATION.Facility.

## System Processing

- String inputs are trimmed. 
- Inputs are run through all validations. 
- A LITE_LABOR record is created from the specified inputs. In addition, the record is created with an indirect labor type and an open labor status. TimeZoneID is taken from the EmployeeID input if it exists, otherwise it is the time zone of the logged in user. StartTime is converted to UTC from ActivityTime using TimeZoneID. 
- LiteLaborID is returned from the new record: LITE_LABOR.ID.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.LiteLabor.LiteLaborManager.StartIndirectLite 
- TRANSACTION_HISTORY_LABOR 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_PROP_BAG

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | EmployeeID | EmployeeID |
|  | LaborType | Labor Type |
|  | LaborStatus | Labor Status |
|  | TimeZoneID | Employee Time Zone ID |
|  | StartTime | UTC Start Time |
|  | StartTimeLocal | Start Time based on employee's time zone ID |
|  | WorkCenter | Work Center |
|  | Occupation | Occupation |
|  | Facility | Facility |
