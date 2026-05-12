# InsertWipUsageHistoryWIRevision

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** Work Instruction Revision Usage History Serial WIP Order

## Description

The purpose of this Business Component method is to write the history of Work Instruction revision usage to the WIP_USAGE_HISTORY_WI_REVISION table in the context of WIP Order, Serial Number, and other entities. The context of the usage is stored in the WIP_USAGE_HISTORY parent table. For more details, see the InsertWipUsageHistory BC method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipUsageHistoryID | Integer | Yes | The ID of the parent record in WIP_USAGE_HISTORY. |
| Input | WorkInstrRevisionID | Integer | Yes | The ID of the used Work Instruction revision. |
| Input | EmployeeNo | Char | No | The employee who used the WI revision. |
| Input | Comment | Char | No | The comment about the usage. |
| Output | WipUsageHistoryWIRevisionID | Integer | Yes | The ID of the created history record. |

## Validations

- The system validates if WipUsageHistoryID is provided and exists in the WIP_USAGE_HISTORY table. 
- The system validates if WorkInstrRevisionID is provided and exists in the WORK_INSTR_REVISION table.

## System Processing

- The system creates a new record in the WIP_USAGE_HISTORY_WI_REVISION table using the provided Inputs. 
- The system returns the ID of the created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_USAGE_HISTORY_WI_REVISION | ID | WipUsageHistoryWIRevisionID |
|  | WipUsageHistoryID | WipUsageHistoryID |
|  | WorkInstrRevisionID | WorkInstrRevisionID |
|  | UsageDate | The current UTC time. |
|  | EmployeeNo | EmployeeNo (or current Employee Number when the value of Input is not provided). |
|  | Comment_ | Comment |
