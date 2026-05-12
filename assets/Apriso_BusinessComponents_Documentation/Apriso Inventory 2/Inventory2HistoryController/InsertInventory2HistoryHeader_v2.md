# InsertInventory2HistoryHeader_v2

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.Inventory2HistoryController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** History Inventory Inventory2 Header Transaction

## Description

This Business Component method populates the INVENTORY2_HISTORY_HEADER table using input values. The table contains general information about the transaction responsible for the inventory change, e.g., Transaction Code, DFC Code, Order, WIP Order, Project. All input parameters are optional and only some of them may be used to populate the table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DFCCode | Char | No | Code of the DFC responsible for the inventory change. |
| Input | DFCRevision | Char | No | Revision of the DFC responsible for the inventory change. |
| Input | TransactionCode | Char | No | Transaction Code. |
| Input | InventoryChange | Integer | No | Inventory change type: 1=increment, 2=move, 3=decrement, 4=allocate, 5=deallocate. |
| Input | ReasonCode | Char | No | Reason Code. |
| Input | TransactionStartTime | DateTime | No | Transaction start time. |
| Input | TransactionEndTime | DateTime | No | Transaction end time. |
| Input | Comment | Char | No | User comment. |
| Input | UserTransactionToken | Char | No | User transaction token. |
| Input | WorkCenter | Char | No | Work Center. |
| Input | CostCenter | Char | No | Cost Center. |
| Input | GLCode | Char | No | The referenced General Ledger Account code. |
| Input | ProjectCode | Char | No | Project Code. |
| Input | Department | Char | No | Department. |
| Input | WipOrderNo | Char | No | WIP Order Number responsible for the inventory change. |
| Input | WipOrderType | Short | No | WIP Order Type responsible for the inventory change. |
| Input | OprSequenceNo | Char | No | Operation Sequence Number responsible for the inventory change. |
| Input | StepSequenceNo | Integer | No | Step Sequence Number responsible for the inventory change. |
| Input | OrderNo | Char | No | Order Number responsible for the inventory change. |
| Input | OrderType | Short | No | Order Type responsible for the inventory change. |
| Input | OrderLineNo | Integer | No | Order Line Number responsible for the inventory change. |
| Input | ResourceName | Char | No | Resource Name. |
| Input | ResourceType | Short | No | Resource Type. |
| Output | ID | Integer | Yes | ID of the created record. |

## System Processing

System creates a single row in the INVENTORY2_HISTORY_HEADER table. The returned ID of the row should be used as a parent key in the history detail table (column INVENTORY2_HISTORY_DETAIL.InventoryHistoryHeaderID).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | ID of created record. |
|  | (other columns) | Populated by values of BC inputs. |
