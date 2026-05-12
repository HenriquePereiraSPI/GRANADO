# StartOrder_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** StartOrder_Lite, Start, Order, Lite, StartOrder, LiteLabor, Labor

## Description

Creates a LITE_LABOR record for an order against resources or a production line. If the ProductionLineNo input is provided, the labor is created for all resources that belong to the production line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP order number against which the labor is allocated. |
| Input | WipOrderType | Short | Yes | WIP order type. |
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
| WorkCenter | Char | Work center. |
| OprSequenceNo | Char | Operation sequence number. Reference to the WIP operation (in addition to WIP order and WIP order type information). |
| StepSequenceNo | Integer | Step sequence number. |
| ProductID | Integer | ID of the product. |
| LotNo | Char | Lot number. |
| SerialNo | Char | Serial number. |
| Occupation | Char | Name of the occupation. |
| Shift | Char | Name of the shift. |

## Validations

Validation fails if:
 
 
- A source of labor is missing (EmployeeID, ResourceName and ResourceType, or ProductionLineNo). One must be provided. 
- ResourceName and ResourceType are not inputted together. 
- StepSequenceNo is inputted, and OprSequenceNo is missing. 
- LotNo and SerialNo are inputted, and ProductID is missing. 
- Occupation is inputted, and Facility, ResourceName, and ResourceType are missing. 
- Character limits are exceeded for any input. 
 

 
 
 

Database validations (if inputs are present):
 
 
- EmployeeID validated against EMPLOYEE.ID. 
- ProductionLineNo validated against WIP_LINE.ProductionLineNo. 
- Facility validated against FACILITY.Facility. 
- ReasonCode validated against REASON_CODE.ReasonCode. 
- WorkCenter validated against WORK_CENTER.WorkCenter. 
- ProductID validated against PRODUCT.ID. 
- ResourceName and ResourceType validated against RESOURCE_.ResourceName and RESOURCE_.ResourceType. 
- WipOrderNo and WipOrderType validated against WIP_ORDER.WipOrderNo and WIP_ORDER.WipOrderType. 
- WipOrderNo, WipOrderType, and OprSequenceNo validated against WIP_OPERATION.WipOrderNo, WIP_OPERATION.WipOrderType, and WIP_OPERATION.OprSequenceNo. 
- WipOrderNo, WipOrderType, OprSequenceNo, and StepSequenceNo validated against WIP_OPERATION_STEP.WipOrderNo, WIP_OPERATION_STEP.WipOrderType, WIP_OPERATION_STEP.OprSequenceNo, and WIP_OPERATION_STEP.SequenceNo. 
- ProductID and LotNo validated against LOT_NO.LotNo and LOT_NO.ProductID. 
- ProductID and SerialNo validated against SERIAL_NO.SerialNo and SERIAL_NO.ProductID. 
- Occupation and Facility validated against OCCUPATION.Facility and OCCUPATION.Occupation. In addition the record located with Occupation and Facility also has DirectLabor = 1.

## System Processing

- String inputs are trimmed. 
- Inputs are run through all validations. 
- A LITE_LABOR record is created from the specified inputs. In addition, the record is created with a direct labor type and an open labor status. TimeZoneID is taken from the EmployeeID input if it exists, otherwise it is the time zone of the logged in user. StartTime is converted to UTC from ActivityTime using TimeZoneID. 
- LiteLaborID is returned from the new record: LITE_LABOR.ID.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.LiteLabor.LiteLaborManager.StartOrderLite 
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
|  | Occupation | Occupation |
|  | WorkCenter | Work Center |
|  | ShiftName | Shift |
|  | WipOrderNo | WIP Order Number |
|  | WipOrderType | WIP Order Type |
|  | OprSequenceNo | Operation Sequence Number |
|  | StepSequenceNo | Step Sequence Number |
|  | ProductID | Product ID |
|  | LotNo | Lot Number |
|  | SerialNo | Serial Number |
|  | TimeZoneID | Employee Time Zone ID |
|  | StartTime | UTC Start Time |
|  | StartTimeLocal | Start Time based on employee's time zone ID |
|  | Labor Status | Labor Status |
