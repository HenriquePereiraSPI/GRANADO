# INVENTORY2_HISTORY_HEADER

**Database:** Operational

**Description:** This table contains header records of inventory changes history.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(2000) | True |  | False |  | User comment. |
| CostCenter | NVARCHAR(70) | True |  | False |  | Cost center. |
| Department | NVARCHAR(40) | True |  | False |  | Department. |
| DFCCode | NVARCHAR(80) | True |  | False |  | DFC Code. |
| DFCRevision | NVARCHAR(80) | True |  | False |  | DFC Revision. |
| GLCode | NVARCHAR(40) | True |  | False |  | The referenced General Ledger Account code. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of the row. |
| InventoryChange | INT(10,0) | True |  | False |  | Inventory change type: 1=increment, 2=move, 3=decrement, 4=allocate, 5=deallocate. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation Sequence Number. |
| OrderLineNo | INT(10,0) | True |  | False |  | Order Line Number. |
| OrderNo | NVARCHAR(20) | True |  | False |  | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False |  | Order Type. |
| ProjectCode | NVARCHAR(40) | True |  | False |  | Project Code. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Resource Name. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Resource Type. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Step Sequence Number. |
| TransactionCode | NVARCHAR(10) | True |  | False |  | Transaction Code. |
| TransactionEndTime | DATETIME | True |  | False |  | Transaction end time in UTC. |
| TransactionEndTimeLocal | DATETIME | True |  | False |  | Transaction end time in local time zone. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY table. |
| TransactionStartTime | DATETIME | True |  | False |  | Transaction start time in UTC. |
| TransactionStartTimeLocal | DATETIME | True |  | False |  | Transaction start time in local time zone. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserTransactionToken | NVARCHAR(255) | True |  | False |  | User transaction token. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | WIP Order Type. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work center. |

## Primary Key

- **PK_INVENTORY2_HISTORY_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY2_HISTORY_HEADER_TH** — INVENTORY2_HISTORY_HEADER -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_INVENTORY2_HISTORY_HEADER_UNIT** — INVENTORY2_HISTORY_HEADER -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_INVENTORY2_HISTORY_DETAIL_HEADER** — INVENTORY2_HISTORY_DETAIL -> INVENTORY2_HISTORY_HEADER (`InventoryHistoryHeaderID -> ID`)
- **FK_WAREHOUSE_LOCATION_HISTORY_I2H** — WAREHOUSE_LOCATION_HISTORY -> INVENTORY2_HISTORY_HEADER (`Inventory2HistoryHeaderID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY2_HISTORY_HEADER_TH** on `TransactionHistoryID`
- **IF_INVENTORY2_HISTORY_HEADER_UNIT** on `UnitID`
