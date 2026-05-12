# KANBAN_CARD_HISTORY

**Database:** Operational

**Description:** none

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CardPrintedOn | DATETIME | True |  | False |  | Date when Kanban card was updated. |
| CompletionDate | DATETIME | True |  | False |  | End Date when card status was changed for the last time. |
| Container | NVARCHAR(40) | True |  | False |  | Container name. |
| CurrentLocation | NVARCHAR(40) | True |  | False |  | Current card location. |
| EmployeeNo | NVARCHAR(50) | False |  | False |  | Employee responsible for Kanban. |
| FromDepartment | NVARCHAR(40) | True |  | False |  | Source Department. |
| FromFacility | NVARCHAR(40) | True |  | False |  | Source Facility. |
| FromLocation | NVARCHAR(40) | True |  | False |  | Source Location. |
| FromPartnerNo | NVARCHAR(40) | True |  | False |  | Source Partner identifier. |
| FromWarehouse | NVARCHAR(10) | True |  | False |  | Source Warehouse. |
| FromWorkcenter | NVARCHAR(40) | True |  | False |  | Source Workcenter. |
| FromZone | NVARCHAR(20) | True |  | False |  | Source Zone. |
| ID | INT(10,0) | False |  | True |  | Kanban card history identifier. |
| KanbanCardNumber | NVARCHAR(40) | False |  | False |  | Referenced Kanban card identifier. |
| KanbanCardStatusName | NVARCHAR(50) | False |  | False |  | Kanban card current status. |
| LeadTimeInSeconds | INT(10,0) | True |  | False |  | Current Kanban lead time, on the time of updating the history table |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number. Linked to LOT_NO table. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | WIP Operation Number. |
| Priority | INT(10,0) | True |  | False |  | Priority of the card. Can be used when multiple cards are deliver to the same location. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Referenced Product Number. |
| ProductRevision | NVARCHAR(20) | True |  | False |  | Product Revision. Referenced to PRODUCT table with Product Number. |
| ProgressStatusName | NVARCHAR(50) | True |  | False |  | Deliver status, link to PROGRESS_STATUS table |
| ReplenishQuantity | DECIMAL(28,10) | False |  | False |  | Current Kanban size, at the time of updating the history table. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial number. |
| SourceType | NVARCHAR(20) | False |  | False |  | Kanban source type. |
| StartDate | DATETIME | True |  | False |  | Start Date when card status was changed for the last time. |
| StrategyName | NVARCHAR(40) | True |  | False |  | Referenced strategy name. |
| StrategyTypeName | NVARCHAR(50) | True |  | False |  | Strategy type. |
| ToDepartment | NVARCHAR(40) | True |  | False |  | Destination Department. |
| ToFacility | NVARCHAR(40) | True |  | False |  | Destination Facility. |
| ToLocation | NVARCHAR(40) | True |  | False |  | Destination Location. |
| ToPartnerNo | NVARCHAR(40) | True |  | False |  | Destination Partner Identifier. |
| ToWarehouse | NVARCHAR(10) | True |  | False |  | Destination Warehouse. |
| ToWorkcenter | NVARCHAR(40) | True |  | False |  | Destination Workcenter. |
| ToZone | NVARCHAR(20) | True |  | False |  | Destination Zone. |
| TransactionCode | NVARCHAR(10) | False |  | False | TRANSACTION_ | User-defined field to identify business transaction performed at Kanban card level. |
| TransactionTime | DATETIME | True |  | False |  | Date when update was made on Kanban card. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False |  | Product UOM- populated from Kanban runtime. |
| UserTransactionToken | NVARCHAR(255) | False |  | False |  | To group history records together as defined at project level. |
| ValidFrom | DATETIME | True |  | False |  | Card validity from date. |
| ValidTo | DATETIME | True |  | False |  | Card validity to date. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Order type. |

## Primary Key

- **PK_KANBAN_CARD_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_KANBAN_CARD_HISTORY_TransactionCode** — KANBAN_CARD_HISTORY -> TRANSACTION_ (`TransactionCode -> TransactionCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KANBAN_CARD_HISTORY_TransactionCode** on `TransactionCode`
