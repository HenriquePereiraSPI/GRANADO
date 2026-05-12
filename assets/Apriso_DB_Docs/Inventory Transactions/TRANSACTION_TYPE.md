# TRANSACTION_TYPE

**Database:** Operational

**Description:** The "TRANSACTION_RESTRICTION_TYPE" table defines all possible restriction types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransactionType | SMALLINT(5,0) | False |  | True |  | Type of transaction (user-defined). |

## Primary Key

- **PK_TRANSACTION_TYPE** on `TransactionType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_CODE_TRANSACTION_TYPE** — TRANSACTION_ -> TRANSACTION_TYPE (`TransactionType -> TransactionType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
