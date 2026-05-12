# TRANSACTION_HISTORY_WEIGH_LNDT

**Database:** Operational

**Description:** This table contains transaction history of the Weighing Line details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovedByEmployee | NVARCHAR(50) | True |  | False |  | Approved by Employee. |
| Container | NVARCHAR(40) | True |  | False |  | Source Container used for weighing the material. |
| DestinationContainer | NVARCHAR(40) | True |  | False |  | Destination Container used. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee who performed the weighing. |
| GrossWeight | DECIMAL(28,10) | True |  | False |  | Gross weight. |
| GroupNo | NVARCHAR(80) | True |  | False |  | Weighing Group number. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of a record. |
| LotNo | NVARCHAR(40) | True |  | False |  | Source Lot Number. |
| Manual | BIT | True |  | False |  | Indicates if the weight was input manually, regardless of the weighing mode used. |
| Mode_ | NVARCHAR(20) | True |  | False |  | Weighing mode used to weigh the line: POUR, SUBTRACTIVE, SOURCE, DECLARATION or INTRODUCTION. |
| NetWeight | DECIMAL(28,10) | True |  | False |  | Net weight. |
| Scale | NVARCHAR(80) | True |  | False |  | Name of the scale used. |
| ScaleStation | NVARCHAR(80) | True |  | False |  | Name of Scale Station used. |
| SequenceNo | INT(10,0) | True |  | False |  | Line sequence number. |
| SignedByEmployee | NVARCHAR(50) | True |  | False |  | Signed by Employee. |
| TareWeight | DECIMAL(28,10) | True |  | False |  | Tare weight. |
| Transaction_ | NVARCHAR(40) | True |  | False |  | Transaction name. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | ID of the Transaction History record. |
| UomCode | NVARCHAR(10) | True |  | False |  | UOM code used by the scale. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| WarehouseLocation | NVARCHAR(80) | True |  | False |  | Warehouse Location. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WEIGH_LNDT** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WEIGH_LNDT_T** — TRANSACTION_HISTORY_WEIGH_LNDT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_GroupNo** on `GroupNo`
- **IXD_TransactionHistoryID** on `TransactionHistoryID`
