# TRANSACTION_HISTORY_WEIGH_H

**Database:** Operational

**Description:** This table contains transaction history of the Weighing Groups.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Allocate | BIT | True |  | False |  | When set to true, the weighing module will allocate all materials weighed to a given order. |
| CheckListGroup | NVARCHAR(40) | True |  | False |  | Check List Group. |
| CheckListGroupClassID | INT(10,0) | True |  | False |  | ID of the Check List Group Class. |
| CheckListGroupType | SMALLINT(5,0) | True |  | False |  | Check List Group Type. |
| CompletionDate | DATETIME | True |  | False |  | Completion date (UTC). |
| Description | NVARCHAR(80) | True |  | False |  | Description text. |
| Disposition | NVARCHAR(40) | True |  | False |  | Quality Disposition. |
| DocumentURL | NVARCHAR(1024) | True |  | False |  | When populated, the weighing module will display the link to the document. |
| DueDate | DATETIME | True |  | False |  | Due date (UTC). |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number. |
| EnforceSequence | BIT | True |  | False |  | When set to true, the weighing module will force the user to weigh all the lines in the order specified in SequenceNo. |
| Facility | NVARCHAR(40) | True |  | False |  | Group Facility. |
| GenealogyRequired | BIT | True |  | False |  | When set to true, the weighing module will add components to the Genealogy. |
| GroupNo | NVARCHAR(80) | True |  | False |  | Weighing Group number. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of a record. |
| LineSequenceNo | INT(10,0) | True |  | False |  | Disposition line sequence number. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot for which the components are weighed. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Link to WIP Operation. |
| ProductDescription | NVARCHAR(1000) | True |  | False |  | Description of the Product. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product number for which the components are weighed. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity (i.e. Lot quantity, Order quantity). |
| ReleaseOnComplete | BIT | True |  | False |  | When set to true, the weighing module will release the Container upon completion of the Weighing Group. |
| SafetyInstrGroup | NVARCHAR(40) | True |  | False |  | Safety Instruction Group. When populated, the weighing module will display the group safety instructions. |
| SafetyInstrGroupClassID | INT(10,0) | True |  | False |  | ID of the Safety Instruction Class. |
| SafetyInstrGroupType | SMALLINT(5,0) | True |  | False |  | Safety Instruction Group Type. |
| ScaleStation | NVARCHAR(80) | True |  | False |  | Scale Station for the Weighing Group. |
| SignatureRequired | BIT | True |  | False |  | When set to true, the weighing module will require an electronic signature upon the completion of the Weighing Group. |
| SingleContainer | BIT | True |  | False |  | When set to true, all lines will have to be placed inside the same Container. |
| Skill | NVARCHAR(40) | True |  | False |  | Skill required for weighing. |
| StartDate | DATETIME | True |  | False |  | Start date (UTC). |
| Transaction_ | NVARCHAR(40) | True |  | False |  | Transaction name. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | ID of the Transaction History record. |
| UomCode | NVARCHAR(10) | True |  | False |  | UOM of the quantity. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| ValidateStagingLocation | BIT | True |  | False |  | When set to true, any material used during the weighing must be located at the same location as the Scale Station in use. |
| WeighMechanism | NVARCHAR(80) | True |  | False |  | Defines the execution mode for the Weighing Group i.e. User, Automatic (PLCs, Robots, etc.). |
| WeighStatus | NVARCHAR(80) | True |  | False |  | Weigh Status indicating the status of the Weighing Group. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | Link to WIP Order. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Link to WIP Order. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WEIGH_H** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WEIGH_H_T** — TRANSACTION_HISTORY_WEIGH_H -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_GroupNo** on `GroupNo`
- **IXD_TransactionHistoryID** on `TransactionHistoryID`
