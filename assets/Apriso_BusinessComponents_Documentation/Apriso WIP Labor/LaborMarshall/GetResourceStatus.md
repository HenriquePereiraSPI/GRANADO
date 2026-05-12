# GetResourceStatus

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to retrieve information regarding a resource. The method may return an order and operation being worked on a machine, or can provide the status of a resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Resource | Char | Yes | Resource Name. |
| Input | ResourceType | Integer | Yes | Resource Type. |
| Input | WipOrderNo | Char | Yes | Wip Order Number. |
| Input | WipOperationNo | Char | Yes | Wip Operation Number. |
| Input | WipOrderType | Integer | Yes | Wip Order Type. |
| Input | Status | Integer | Yes | Status. |
| Output | ReturnWipOrderNo | Char | No | Returned Wip Order Number. |
| Output | ReturnWipOperationNo | Char | No | Returned Wip Operation Number. |
| Output | ReturnWipOrderType | Integer | No | Returned Wip Order Type. |
| Output | ReturnStatus | Integer | No | Returned Status. |

## Validations

System validates the inputs as stated below
 
 
- If Resource and Resource Type are entered, system validates the entity exists in the database. 
- If WipOrderNo, WipOperationNo and WipOrderType are entered, system validates the entity exists in the database.

## System Processing

System returns information on the resource being queried.
