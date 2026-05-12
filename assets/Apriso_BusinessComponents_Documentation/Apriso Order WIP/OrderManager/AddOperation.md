# AddOperation

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

This Business Component method is used to insert a work Operation linked to a Standard Operation into a specified work order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StdOperationID | Integer | Yes | The Standard Operation that the work Operation will execute. |
| Input | WipOrderNo | Char | Yes | The work order number that the Operation is for. |
| Input | WipOrderType | Integer | Yes | The work order type that the Operation is for. |
| Input | WorkCenter | Char | Yes | The Work Center in which the Operation will be executed. |
| Input | ScheduledStartDate | DateTime | Yes | The scheduled start date for the Operation. |
| Input | ScheduledCompletionDate | DateTime | Yes | The scheduled completion date for the Operation. |
| Input | WipContentClassID | Integer | Yes | The production class that will trigger the Input quantities from the predecessor Operation. For example, GOOD with no Reason Code. |
| Input | ReasonCode | Char | Yes | The production Reason Code that will trigger the Input quantities from the predecessor Operation. For example, FAIL with Too Small as a Reason Code. |

## Validations

- The system validates that the work order exists. 
- The system validates that the Work Center exists.

## System Processing

- The system generates a unique Operation Sequence number for the work order. 
- The system creates a work Operation in that work order with a new Sequence number. 
- The system explodes the new work Operation (Components, Resource, etc.) against the inputted Standard Operation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | ALL | Creates a new record. |
| WIP_COMPONENT | ALL | Explodes the work Components per Operation Explosion. |
| WIP_REQ_RESOURCE | ALL | Explodes the work Operation Resources per Operation Explosion. |
| WIP_CONTENT | ALL | Creates default WIP content. |
| WIP_CONTENT_DETAIL | ALL | Creates default WIP content detail. |
