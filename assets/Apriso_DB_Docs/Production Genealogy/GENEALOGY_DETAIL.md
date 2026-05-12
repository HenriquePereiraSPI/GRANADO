# GENEALOGY_DETAIL

**Database:** Operational

**Description:** This table stores specific information about genealogy relations, such as the Component Serial and Lot numbers, Work Center, and Reason Code used, as well as when and by whom these were used.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Cost | DECIMAL(28,10) | True |  | False |  | The cost of the unit. |
| DSImplementLinkID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE implementation link ID. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| GenealogyID | BIGINT(19,0) | False |  | False | GENEALOGY | Genealogy ID record. |
| ID | BIGINT(19,0) | False |  | True |  | Primary Key |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The WIP Order Operation that drove the creation of genealogy. |
| OriginalOprSequenceNo | NVARCHAR(20) | True |  | False |  | Reference to the original WIP information. |
| OriginalWipOrderNo | NVARCHAR(40) | True |  | False |  | Reference to the original WIP information. |
| OriginalWipOrderType | SMALLINT(5,0) | True |  | False |  | Reference to the original WIP information. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity of the unit. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code for adding the unit to genealogy. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The WIP Order Step Sequence Number that drove the creation of genealogy. |
| UomCode | NVARCHAR(20) | True |  | False |  | UOM used for quantity. It does not have to be the default UOM but must exist in the UOM convertion for the child Product. |
| WipComponentID | INT(10,0) | True |  | False | WIP_COMPONENT | Link to the WIP_COMPONENT table. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The WIP Order Number that drove the creation of genealogy. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | The WIP Order type that drove the creation of genealogy. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center of the unit. |

## Primary Key

- **PK_GENEALOGY_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_GENEALOGY_DETAIL_GENEALOGY** — GENEALOGY_DETAIL -> GENEALOGY (`GenealogyID -> ID`)
- **FK_GENEALOGY_DETAIL_REASON_CODE** — GENEALOGY_DETAIL -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_GENEALOGY_DETAIL_WIP_COMPONENT** — GENEALOGY_DETAIL -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_GENEALOGY_DETAIL_WORK_CENTER** — GENEALOGY_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_GENEALOGY_DETAIL_GENEALOGY** on `GenealogyID`
- **IF_GENEALOGY_DETAIL_WIP_COMPONENT** on `WipComponentID`
