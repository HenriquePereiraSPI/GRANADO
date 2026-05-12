# TRANSACTION_HISTORY_COUNT_DOC

**Database:** Operational

**Description:** This table is used to store all the information that is entered into the cycle count create facade. This is populated every time the document count and the final count are performed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountDefinition | INT(10,0) | True |  | False |  | Count definition. |
| CountStatus | SMALLINT(5,0) | True |  | False |  | Status of the count. |
| CountStatusDesc | NVARCHAR(80) | True |  | False |  | Description of the Count Status. |
| CountType | INT(10,0) | True |  | False |  | Count type. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility to be counted. |
| GradeID | INT(10,0) | True |  | False |  | Grade to be counted. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| InventoryStatus | SMALLINT(5,0) | True |  | False |  | Inventory Status to be counted. |
| PartnerID | INT(10,0) | True |  | False |  | Partner to be counted. |
| PartnerName | NVARCHAR(40) | True |  | False |  | Partner name of the inventory to be counted. |
| ProductID | INT(10,0) | True |  | False |  | Product to be counted. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | ID of the history record. |
| Warehouse | NVARCHAR(10) | True |  | False |  | Warehouse to be counted. |
| WarehouseLocationID | INT(10,0) | True |  | False |  | Warehouse Location to be counted. |
| Zone_ | NVARCHAR(20) | True |  | False |  | Zone to be counted. |

## Primary Key

- **PK_TRANSACTION_HISTORY_COUNT_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_COUNT_DOC_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_COUNT_DOC -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_COUNT_DOC_TRANSACTION_HISTORY** on `TransactionHistoryID`
