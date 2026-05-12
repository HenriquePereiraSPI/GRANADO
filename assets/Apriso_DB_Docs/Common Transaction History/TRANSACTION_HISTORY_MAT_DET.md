# TRANSACTION_HISTORY_MAT_DET

**Database:** Operational

**Description:** This table stores Serial Numbers belonging to the same container or inventory, this table is a child table of TRANSACTION_HISTORY_MATERIAL.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot No. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity of the specified Lot Number. |
| QuantityToPick | DECIMAL(28,10) | True |  | False |  | Quantity to pick defined in inventory transactions. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial number used in the transaction. |
| TransactionHistoryMaterialID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY_MATERIAL | Link to the TRANSACTION_HISTORY_MATERIAL parent table. |

## Primary Key

- **PK_TRANSACTION_HISTORY_MAT_SERIAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_MAT_SERIAL_TRANSACTION_HISTORY_MATERIAL** — TRANSACTION_HISTORY_MAT_DET -> TRANSACTION_HISTORY_MATERIAL (`TransactionHistoryMaterialID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_MAT_SERIAL_TRANSACTION_HISTORY_MATERIAL** on `TransactionHistoryMaterialID`
