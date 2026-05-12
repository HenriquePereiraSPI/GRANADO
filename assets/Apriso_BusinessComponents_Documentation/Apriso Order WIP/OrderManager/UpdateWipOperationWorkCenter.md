# UpdateWipOperationWorkCenter

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Commom.Wip`
**Status:** Active
**Keywords:** Update WIP Operation WorkCenter Work Center

## Description

This Business Component method updates a WIP Operation and its associated tasks with a new Work Center. It updates only the WIP Operation in the New or Started status and labor tasks that are in the New, Started, Abandoned, or Dispatched status. Tasks of other types and in other statuses are ignored.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The Operation Sequence number. |
| Input | WorkCenter | Char | Yes | The Work Center. |

## Validations

- The system validates that the Work Center exists. 
- The system validates that the WIP Operation exists and its status is New or Started.

## System Processing

- The system updates WIP_OPERATION.WorkCenter with the inputted WorkCenter. 
- The system finds the labor tasks in the New, Started, Abandoned, or Dispatched status associated with the WIP Order and updates the TASK.WorkCenter column with the provided WorkCenter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WorkCenter | WorkCenter |
| TASK | WorkCenter | WorkCenter |
