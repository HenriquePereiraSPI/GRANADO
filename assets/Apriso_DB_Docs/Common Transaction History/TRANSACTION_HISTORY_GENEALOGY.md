# TRANSACTION_HISTORY_GENEALOGY

**Database:** Operational

**Description:** Record of the Transaction History for Genealogy transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildContainer | NVARCHAR(40) | True |  | False |  | The child Container identifier. |
| ChildContainerClassID | INT(10,0) | True |  | False |  | Child Container Class: 1 - LP, 2 - Outbound Container, 3 - Master Container, 4 - Disposition Container. |
| ChildLotNo | NVARCHAR(40) | True |  | False |  | The child Lot identifier. |
| ChildProductNo | NVARCHAR(80) | True |  | False |  | The child Product or material identifier. |
| ChildProductRevision | NVARCHAR(20) | True |  | False |  | The revision identifier for the child Product or material. |
| ChildSerialNo | NVARCHAR(40) | True |  | False |  | The serial number identifier for the child Product or material. |
| ChildWipOrderNo | NVARCHAR(20) | True |  | False |  | Child WIP Order No. |
| ChildWipOrderType | SMALLINT(5,0) | True |  | False |  | Child WIP Order type. |
| Cost | DECIMAL(28,10) | True |  | False |  | Cost of the child item. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation code. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The revision for the Operation. |
| OperationStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of a work order Operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of Operations. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence number of the Operation. |
| ParentChildRatio | DECIMAL(28,10) | True |  | False |  | Parent and child ratio. |
| ParentContainer | NVARCHAR(50) | True |  | False |  | Parent Container identifier or number. |
| ParentContainerClassID | INT(10,0) | True |  | False |  | Parent Container Class: 1 - LP, 2 - Outbound Container, 3 - Master Container, 4 - Disposition Container. |
| ParentLotNo | NVARCHAR(40) | True |  | False |  | The parent Lot identifier or number. |
| ParentProductNo | NVARCHAR(80) | True |  | False |  | Parent Product identifier or number. |
| ParentProductRevision | NVARCHAR(20) | True |  | False |  | The revision of the finished Product, when the component was added to the BOM. |
| ParentSerialNo | NVARCHAR(40) | True |  | False |  | The parent Serial identifier or number. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity for the child Component. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UomCode | NVARCHAR(10) | True |  | False |  | Unit of Measure code. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The work order identifier or number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its attributes. |

## Primary Key

- **PK_TRANSACTION_HISTORY_GENEALOGY** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_GENEALOGY_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_GENEALOGY -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_GENEALOGY_TRANSACTION_HISTORY** on `TransactionHistoryID`
- **IXD_ChildProductNo_Active** on `ChildProductNo, Active`
- **IXD_ChildSerialNo_Active** on `ChildSerialNo, Active`
- **IXD_ParentProductNo_Active** on `ParentProductNo, Active`
- **IXD_ParentSerialNo_Active** on `ParentSerialNo, Active`
