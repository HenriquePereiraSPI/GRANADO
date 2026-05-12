# StartProduct_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** Start, Product, Lite, StartProduct, StartProduct_Lite, Labor, LiteLabor

## Description

Creates a LITE_LABOR record referencing a PRODUCT record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ID of the product. |
| Input | WorkCenter | Char | Yes | Work center. |
| Input | ActivityTime | DateTime | Yes | Activity time. The value must be specified as local (it is automatically converted and stored as UTC). |
| Output | LiteLaborID | Integer | Yes | ID of the generated LITE_LABOR record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| EmployeeID | Integer | ID of the employee with whom the labor is associated. |
| ResourceName | Char | Name of the resource. |
| ResourceType | Short | Type of the resource. |
| ProductionLineNo | Char | Production line number. |
| Facility | Char | Facility in which the labor was performed. |
| ReasonCode | Char | ReasonCode indicating why the entity is on hold. |
| LotNo | Char | Lot number. |
| SerialNo | Char | Serial number. |
| Shift | Char | Name of the shift. |

## Validations

Validation fails if:
 
 
- A source of labor is missing (EmployeeID, ResourceName and ResourceType, or ProductionLineNo). One must be provided. 
- ResourceName and ResourceType are not inputted together. 
- Character limits are exceeded for any input. 
 

 
 
 

Database validations (if inputs are present):
 
 
- EmployeeID validated against EMPLOYEE.ID. 
- ProductionLineNo validated against WIP_LINE.ProductionLineNo. 
- Facility validated against FACILITY.Facility. 
- ReasonCode validated against REASON_CODE.ReasonCode. 
- WorkCenter validated against WORK_CENTER.WorkCenter. 
- ProductID validated against PRODUCT.ID. 
- ResourceName and ResourceType validated against RESOURCE_.ResourceName and RESOURCE_.ResourceType. 
- ProductID and LotNo validated against LOT_NO.LotNo and LOT_NO.ProductID. 
- ProductID and SerialNo validated against SERIAL_NO.SerialNo and SERIAL_NO.ProductID.

## System Processing

- String inputs are trimmed. 
- Inputs are run through all validations. 
- A LITE_LABOR record is created from the specified inputs. 
- In addition, the record is created with a product labor type and an open labor status. 
- TimeZoneID is taken from the EmployeeID input if it exists, otherwise it is the time zone of the logged in user. 
- The provided ActivityTime input is saved as LITE_LABOR.StartTimeLocal. 
- The provided ActivityTime input is converted to UTC time using TimeZoneID, and is stored as LITE_LABOR.StartTime.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.LiteLabor.LiteLaborManager.StartProductLite 
- TRANSACTION_HISTORY_LABOR 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_PROP_BAG

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | EmployeeID | Employee ID |
|  | ResourceName | Resource Name |
|  | ResourceType | Resource Type |
|  | ProductionLineNo | Production Line Number |
|  | LaborType | Labor Type |
|  | Facility | Facility |
|  | ReasonCode | Reason Code |
|  | WorkCenter | Work Center |
|  | ShiftName | Shift |
|  | ProductID | Product ID |
|  | LotNo | Lot Number |
|  | SerialNo | Serial Number |
|  | TimeZoneID | Employee Time Zone ID |
|  | StartTime | UTC Start Time |
|  | StartTimeLocal | Start Time based on employee's time zone ID |
|  | Labor Status | Labor Status |
