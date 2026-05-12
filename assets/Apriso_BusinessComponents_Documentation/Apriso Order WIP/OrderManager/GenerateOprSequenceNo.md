# GenerateOprSequenceNo

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this Business Component is to insert a work operation after a specified predecessor work operation and links the new operation to a standard operation. It also re-sequences the operations based on the specified predecessor operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | No | Work order number. |
| Input | wipOrderType | Integer | Yes | Work order type. |

## Validations

- Predecessor work operation exists. 
- Work center exists.

## System Processing

- Generates an operation sequence number unique for that work order. 
- Creates a work operation in that work order with new sequence number. 
- Re-routes the work order operation sequencing at the point of insertion. 
- Explodes the new work operation (components, resource, etc).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | ALL | Creates a new record. |
| WIP_OPERATION_SEQUENCE | ALL | Re-routes sequences such that the inserted operation becomes the only next of the predecessor operation, and all the old next operations of the predecessor become the next operations of the inserted operation. |
| WIP_COMPONENT | ALL | Explodes work components as per operation explosion. |
| WIP_REQ_RESOURCE | ALL | Explodes work operation resources as per operation explosion. |
| WIP_CONTENT | ALL | Creates default WIP content |
| WIP_CONTENT_DETAIL | ALL | Creates default WIP content detail |
