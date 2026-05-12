# TRANSACTION_HISTORY_WIP_RESV

**Database:** Operational

**Description:** The reservations changes performed to a wip order using dispatching board.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Action | NVARCHAR(10) | True |  | False |  | Database action performed for this reservation. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee No used for this reservation. |
| EquipmentName | NVARCHAR(20) | True |  | False |  | Equipment Name used for this reservation. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| Name | NVARCHAR(40) | True |  | False |  | Name of the resource used for this reservation. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | Production Line no used for this reservation. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Resource name used for this reservation. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Resource type used for this reservation. |
| TransactionHistoryWipID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY_WIP | FK to Transaction_History_WIP.ID. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center used for this reservation. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WIP_RESV** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WIP_RESV_TRANSACTION_HISTORY_WIP** — TRANSACTION_HISTORY_WIP_RESV -> TRANSACTION_HISTORY_WIP (`TransactionHistoryWipID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_WIP_RESV_TRANSACTION_HISTORY_WIP** on `TransactionHistoryWipID`
