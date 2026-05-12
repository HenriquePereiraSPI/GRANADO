# DeleteWipOperation

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationDeleter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** delete remove WIP Operation

## Description

The purpose of this Business Component method is to delete existing WIP Operation, which was not started and does not have any reported quantity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |

## Validations

- The system validates that the provided WIP Operation exists. 
- The system validates that the WIP Operation is in the New status. 
- The system validates that the WIP Operation does not have any reported quantities in the WIP_CONTENT table. 
- The system validates that the WIP Operation is not on hold in the WIP_OPERATION_HOLD table. 
- The system validates that no records other than Release Date type records exist in the ORDER_DATE table. 
- The system validates that there are no references to the specified WIP Operation from any other tables.

## System Processing

- The system deletes the records related to the WIP Operation (with no quantities reported) from the WIP_CONTENT and WIP_CONTENT_DETAIL tables. 
- The system deletes Release Date type records related to the WIP Operation from the ORDER_DATE table.  
- The system deletes the record from the WIP_ORDER table. The TEXT and TEXT_TRANSLATION records are also deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
| WIP_CONTENT |  |  |
| WIP_CONTENT_DETAIL |  |  |
| ORDER_DATE |  |  |
| TEXT |  |  |
| TEXT_TRANSLATION |  |  |
