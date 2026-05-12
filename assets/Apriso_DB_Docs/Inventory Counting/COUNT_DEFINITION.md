# COUNT_DEFINITION

**Database:** Operational

**Description:** Stores information needed when counting an inventory. This table provides information if counting needs the inventory to be locked against external (reconciliation excluded) inventory movements and ad

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustmentWarehouseLocationID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION | James |
| AllowDecrease | BIT | True |  | False |  | Flag to allow inventory to be decremented while a Count is in-progress at the location defined by the Count Document. |
| AllowIncrease | BIT | True |  | False |  | Flag to allow inventory to be incremented while a Count is in-progress at the location defined by the Count Document. |
| CountDefinition | INT(10,0) | False |  | True |  | <null> |
| CountTaskLevel | INT(10,0) | True |  | False |  | Defines at what location level the counting documents are to be created. |
| IncreaseTransactionCode | NVARCHAR(10) | False |  | False | TRANSACTION_ | Transaction Code used to increase inventory during an inventory count. |
| MoveTransactionCode | NVARCHAR(10) | False |  | False | TRANSACTION_ | Transaction Code used to move inventory during an inventory count. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_DEFINITION** on `CountDefinition`

## Foreign Keys (this table -> other)

- **FK_COUNT_DEFINITION_TRANSACTION_** — COUNT_DEFINITION -> TRANSACTION_ (`MoveTransactionCode -> TransactionCode`)
- **FK_COUNT_DEFINITION_TRANSACTION_1** — COUNT_DEFINITION -> TRANSACTION_ (`IncreaseTransactionCode -> TransactionCode`)
- **FK_COUNT_DEFINITION_WAREHOUSE_LOCATION** — COUNT_DEFINITION -> WAREHOUSE_LOCATION (`AdjustmentWarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_DOCUMENT_COUNT_DEFINITION** — COUNT_DOCUMENT -> COUNT_DEFINITION (`CountDefinition -> CountDefinition`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_DEFINITION_TRANSACTION_** on `MoveTransactionCode`
- **IF_COUNT_DEFINITION_TRANSACTION_1** on `IncreaseTransactionCode`
