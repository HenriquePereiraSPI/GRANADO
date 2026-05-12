# TRANSACTION_HISTORY_COUNT

**Database:** Operational

**Description:** This table is used to store all the information that is entered into the count facade. This is populated every time the count is called (and when the final count is performed).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(1000) | True |  | False |  | Comment on count/adjust. |
| Container_ | NVARCHAR(40) | True |  | False |  | Container that is counted. |
| CountNumber | INT(10,0) | True |  | False |  | The number of counting that was performed. |
| CountStatus | SMALLINT(5,0) | True |  | False |  | Status of the count. |
| DocumentNumber | NVARCHAR(40) | True |  | False |  | Number of the counting document. |
| EndCount | BIT | True |  | False |  | Flag indicating the count has ended. |
| EndFinalCount | BIT | True |  | False |  | Flag indicating the final count is completed. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility that is counted. |
| GradeCode | NVARCHAR(20) | True |  | False |  | Grade of the Product that is counted. |
| GradeID | INT(10,0) | True |  | False |  | Grade of the inventory to be counted. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| InContainer | NVARCHAR(40) | True |  | False |  | Master container (used to check structure). |
| InventoryStatus | SMALLINT(5,0) | True |  | False |  | Status of the Product that is counted. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number that is counted. |
| NotFound_ | BIT | True |  | False |  | Flag indicating the product was not found. |
| PartnerID | INT(10,0) | True |  | False |  | ID of the Partner stock that is counted. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product that is counted. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Amount of stock that is counted. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial Number that is counted. |
| ToleranceCurrency | DECIMAL(28,10) | True |  | False |  | Currency code of the tolerances. |
| TolerancePercentage | DECIMAL(28,10) | True |  | False |  | Tolerance percentage to accept/reject count. |
| ToleranceStrategyRecount | INT(10,0) | True |  | False |  | Recounting strategy. |
| TransactionCode | NVARCHAR(10) | True |  | False |  | Transaction code used to perform the adjust (if required). |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | ID of the history record. |
| Uncount | BIT | True |  | False |  | Allows for stock to be uncounted. |
| UomCode | NVARCHAR(10) | True |  | False |  | UOM that is counted. |
| Warehouse | NVARCHAR(10) | True |  | False |  | Warehouse that is counted. |
| WarehouseLocation | NVARCHAR(40) | True |  | False |  | Warehouse Location that is counted. |
| Zone_ | NVARCHAR(20) | True |  | False |  | Zone that is counted. |

## Primary Key

- **PK_TRANSACTION_HISTORY_COUNT** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_COUNT_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_COUNT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_COUNT_TRANSACTION_HISTORY** on `TransactionHistoryID`
