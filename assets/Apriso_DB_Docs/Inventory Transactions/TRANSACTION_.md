# TRANSACTION_

**Database:** Operational

**Description:** The “TRANSACTION_” defines transactions used in Apriso. Transaction is defined by its code, type and group and provides information about entities, which are necessary to exist to use the transaction. These entities can be such as cost center, project, reason, partner, comment, order, GL and WIP Order. Additionally the transaction defines the valid operation, which can be performed such as inventory increment, inventory decrement, inventory movement, containers merging, etc. The content of the table is displayed through Cockpit.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AutoReverseAllowed | BIT | True |  | False |  | For future use. |
| CommentRequired | BIT | True |  | False |  | Flagged if a comment must be entered when moving or adjusting inventory |
| CostCenterRequired | BIT | True |  | False |  | Flagged if a cost center must be passed to the Move or Adjust business components when a Transaction code is used |
| FromTransit | BIT | True |  | False |  | For future use. |
| GLRequired | BIT | True |  | False |  | Defines if a GL account must be passed as an input when this transaction code is sued with Adjust or Move components |
| HostMessageType | NVARCHAR(10) | True |  | False |  | For future use. |
| HostTransactionCode | NVARCHAR(10) | True |  | False |  | SAP transaction (MB1B, MB31,,,), used in the IDOC |
| InventoryChange | NVARCHAR(1) | True |  | False |  | Indicate if the transaction is a move or an adjust |
| MergeContainers | BIT | True |  | False |  | Flagged if the container are to be merged during a move, |
| OrderReferenceRequired | BIT | True |  | False |  | Reference to an Order is required when invoking Move or Adjust components for this transaction |
| PartnerRequired | BIT | True |  | False |  | Partner is required as an input when this Transaction is used with Move or Adjust component |
| ProjectCodeRequired | BIT | True |  | False |  | Project is required as a reference when running the transaction with Move or Adjust |
| ReasonCodeRequired | BIT | True |  | False |  | Flagged is a reason code has to be passed to Move and Adjust |
| ReverseTransactionCode | NVARCHAR(10) | True |  | False | TRANSACTION_ | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ToTransit | BIT | True |  | False |  | For future use. |
| TrackPrevious | BIT | True |  | False |  | Defines if last position of a container should be persisted in DB when moved |
| TransactionCode | NVARCHAR(10) | False |  | True |  | The transaction code used by the Move and Adjust components |
| TransactionGroup | NVARCHAR(50) | True |  | False | TRANSACTION_GROUP | Group of transactions (user-defined). |
| TransactionType | SMALLINT(5,0) | True |  | False | TRANSACTION_TYPE | Type of transaction (user-defined). |
| WipOrderReferenceRequired | BIT | True |  | False |  | A reference to a WIP Order is required to use this transaction (Move and Adjust BC) |

## Primary Key

- **PK_TRANSACTION_CODE** on `TransactionCode`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION__TRANSACTION_** — TRANSACTION_ -> TRANSACTION_ (`ReverseTransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CODE_TRANSACTION_TYPE** — TRANSACTION_ -> TRANSACTION_TYPE (`TransactionType -> TransactionType`)
- **FK_TRANSACTIONS_TRANSACTION_GROUP** — TRANSACTION_ -> TRANSACTION_GROUP (`TransactionGroup -> TransactionGroup`)

## Referenced By (other tables -> this)

- **FK_COUNT_DEFINITION_TRANSACTION_** — COUNT_DEFINITION -> TRANSACTION_ (`MoveTransactionCode -> TransactionCode`)
- **FK_COUNT_DEFINITION_TRANSACTION_1** — COUNT_DEFINITION -> TRANSACTION_ (`IncreaseTransactionCode -> TransactionCode`)
- **FK_COUNT_PROCEDURE_TRAN_1** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeIncrease -> TransactionCode`)
- **FK_COUNT_PROCEDURE_TRAN_2** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeDecrease -> TransactionCode`)
- **FK_COUNT_PROCEDURE_TRAN_3** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeMove -> TransactionCode`)
- **FK_KANBAN_CARD_HISTORY_TransactionCode** — KANBAN_CARD_HISTORY -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION__TRANSACTION_** — TRANSACTION_ -> TRANSACTION_ (`ReverseTransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CODE_TO_REASON_CODE_TRANSACTION_CODE** — TRANSACTION_REASON_CODE -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CODE_TO_SPECIAL_STOCK_TYPE_TRANSACTION_CODE** — TRANSACTION_INVENTORY_CLASS -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CODE_TO_STOCK_TYPE_TRANSACTION_CODE** — TRANSACTION_INVENTORY_STATUS -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CONCURRENCY_TRANSACTION_CODE** — TRANSACTION_CONCURRENCY -> TRANSACTION_ (`StartTransactionCode -> TransactionCode`)
- **FK_TRANSACTION_CONCURRENCY_TRANSACTION_CODE1** — TRANSACTION_CONCURRENCY -> TRANSACTION_ (`OpenTransactionCode -> TransactionCode`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_TRANSACTION_** — TRANSACTION_PRODUCT_INV_TYPE -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_ (`TransactionCode -> TransactionCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION__TRANSACTION_** on `ReverseTransactionCode`
- **IF_TRANSACTIONS_TRANSACTION_GROUP** on `TransactionGroup`
