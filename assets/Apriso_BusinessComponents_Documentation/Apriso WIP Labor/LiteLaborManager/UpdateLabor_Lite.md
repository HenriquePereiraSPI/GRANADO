# UpdateLabor_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** UpdateLabor_Lite, UpdateLabor, Update, Labor, Lite, LiteLabor

## Description

Updates a lite labor record of any type. Flexible and relies on the user to ensure the data is consistent. 
 

 Changing a lite labor record's EmployeeID is not supported. Instead, delete the record and create a new one under the correct employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LiteLaborID | Integer | Yes | ID of an existing LITE_LABOR record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ResourceName | Char | Name of the resource. |
| ResourceType | Short | Type of the resource. |
| ProductionLineNo | Char | Production line number. |
| Facility | Char | Facility that the labor was performed in. |
| ReasonCode | Char | ReasonCode indicating why the entity is on hold. |
| WorkCenter | Char | Work center. |
| WipOrderNo | Char | WIP order number. |
| WipOrderType | Short | Wip order type. |
| OprSequenceNo | Char | Operation sequence number. Reference to the WIP operation (in addition to WIP order and WIP order type information). |
| StepSequenceNo | Integer | Step sequence number. |
| ProductID | Integer | ID of the product. |
| LotNo | Char | Lot number. |
| SerialNo | Char | Serial number. |
| Occupation | Char | Name of the occupation. |
| StartTime | DateTime | Local start time. |
| EndTime | DateTime | Local end time. |
| Shift | Char | Name of the shift. |
| LaborStatus | Short | Status of the record. |
| LaborType | Short | Labor type. |

## Validations

Validation fails if:
 
 
- The LITE_LABOR record referenced by LITE_LABOR.ID does not exist. 
- ResourceName and ResourceType are not inputted together. 
- WipOrderNo and WipOrderType are not inputted together. 
- OprSequenceNo is inputted when WipOrderNo and WipOrderType are missing. 
- StepSequenceNo is inputted, and OprSequenceNo is missing. 
- LotNo or SerialNo are inputted, and ProductID is missing. 
- Occupation is inputted, and Facility is missing. 
- Character limits are exceeded for any input. 
 

 
 
 

Database Validations (if inputs are present):
 
 
- ProductionLineNo validated against WIP_LINE.ProductionLineNo. 
- Facility validated against FACILITY.Facility. 
- ReasonCode validated against REASON_CODE.ReasonCode. 
- WorkCenter validated against WORK_CENTER.WorkCenter. 
- ProductID validated against PRODUCT.ID. 
- LaborType validated against LABOR_TYPE.Type. 
- ResourceName, ResourceType validated against RESOURCE_.ResourceName and RESOURCE_.ResourceType. 
- WipOrderNo, WipOrderType validated against WIP_ORDER.WipOrderNo, WIP_ORDER.WipOrderType. 
- WipOrderNo, WipOrderType, OprSequenceNo validated against WIP_OPERATION.WipOrderNo, WIP_OPERATION.WipOrderType, WIP_OPERATION.OprSequenceNo. 
- WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo validated against WIP_OPERATION_STEP.WipOrderNo, WIP_OPERATION_STEP.WipOrderType, WIP_OPERATION_STEP.OprSequenceNo, WIP_OPERATION_STEP.SequenceNo. 
- ProductID, LotNo validated against LOT_NO.LotNo, LOT_NO.ProductID. 
- ProductID, SerialNo validated against SERIAL_NO.SerialNo, SERIAL_NO.ProductID. 
- Occupation, Facility validated against OCCUPATION.Facility, OCCUPATION.Occupation.

## System Processing

- String inputs are trimmed. 
- Inputs are run through all validations. 
- LITE_LABOR record is retrieved. 
- Record updated with specified inputs. 
- Inputs with the default Process Builder value set the corresponding column to NULL. 
- If local StartTime is inputted, convert to UTC using TimeZoneID and save to record as StartTime. 
- If local EndTime is inputted, convert to UTC using TimeZoneID and save to record as EndTime. 
- After considering new inputs, if both StartTime and EndTime exist on the record: 
- DurationInSeconds is stored as the difference in seconds from the record's EndTime - StartTime.

## Pre-Conditions

A LITE_LABOR record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | ResourceName | Resource Name |
|  | ResourceType | Resource Type |
|  | ProductionLineNo | Production Line Number |
|  | LaborType | Labor Type |
|  | Facility | Facility |
|  | ReasonCode | Reason Code |
|  | Occupation | Occupation |
|  | WorkCenter | Work Center |
|  | Shift | Shift |
|  | WipOrderNo | WIP Order Number |
|  | WipOrderType | WIP Order Type |
|  | OprSequenceNo | Operation Sequence Number |
|  | StepSequenceNo | Step Sequence Number |
|  | ProductID | Product ID |
|  | LotNo | Lot Number |
|  | SerialNo | Serial Number |
|  | StartTime | UTC Start Time |
|  | StartTimeLocal | Start Time based on employee's time zone ID |
|  | EndTime | UTC End Time |
|  | EndTimeLocal | End Time based on employee's time zone ID |
|  | Labor Status | Labor Status |
|  | DurationInSeconds | Duration In Seconds from Start Time to End Time |
