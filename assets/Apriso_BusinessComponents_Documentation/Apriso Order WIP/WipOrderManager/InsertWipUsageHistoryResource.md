# InsertWipUsageHistoryResource

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** Resource Usage History Serial WIP Order

## Description

The purpose of this Business Component method is to write the history of Resource usage to the WIP_USAGE_HISTORY_RESOURCE table in the context of WIP Order, Serial Number, and other entities. The context of the usage is stored in the WIP_USAGE_HISTORY parent table. For more details, see the InsertWipUsageHistory BC method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipUsageHistoryID | Integer | Yes | The ID of the parent record in WIP_USAGE_HISTORY. |
| Input | ResourceID | Integer | Yes | The ID of the used Resource. |
| Input | EmployeeNo | Char | No | The employee who used the Resource. |
| Input | ReasonCode | Char | No | The Reason Code of the usage. |
| Input | Comment | Char | No | The comment about the usage. |
| Input | WipReqResourceID | Integer | No | The ID of the related WIP Required Resource record. |
| Output | WipUsageHistoryResourceID | Integer | Yes | The ID of the created history record. |

## Validations

- The system validates if WipUsageHistoryID is provided and exists in the WIP_USAGE_HISTORY table. 
- The system validates if ResourceID is provided and exists in the RESOURCE table.

## System Processing

- The system creates a new record in the WIP_USAGE_HISTORY_RESOURCE table using the provided Inputs.  
- The system returns the ID of the created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_USAGE_HISTORY_RESOURCE | ID | WipUsageHistoryResourceID |
|  | WipUsageHistoryID | WipUsageHistoryID |
|  | ResourceID | ResourceID |
|  | UsageDate | The current UTC time. |
|  | EmployeeNo | EmployeeNo (or current Employee Number when the value of Input is not provided). |
|  | ReasonCode | ReasonCode |
|  | Comment_ | Comment |
|  | WipReqResourceID | WipReqResourceID |
