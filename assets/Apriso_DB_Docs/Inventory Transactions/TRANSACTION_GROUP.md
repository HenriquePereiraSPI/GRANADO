# TRANSACTION_GROUP

**Database:** Operational

**Description:** The "TRANSACTION_GROUP" table defines all possible groups of a transaction.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransactionGroup | NVARCHAR(50) | False |  | True |  | Group of transactions (user-defined). |

## Primary Key

- **PK_TRANSACTION_GROUP** on `TransactionGroup`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TRANSACTIONS_TRANSACTION_GROUP** — TRANSACTION_ -> TRANSACTION_GROUP (`TransactionGroup -> TransactionGroup`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
