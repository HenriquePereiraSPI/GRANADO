# COUNT_DISPOSITION

**Database:** Operational

**Description:** This table stores the list of Count Dispositions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True |  | False |  | Date of closing the Count Disposition. |
| ActualStartDate | DATETIME | True |  | False |  | Date of the first count of any line. |
| CountDispositionNo | NVARCHAR(40) | False |  | False |  | Unique Count Disposition number. |
| CountProcedureID | INT(10,0) | False |  | False |  | Link to the COUNT_PROCEDURE_WAREHOUSE table. |
| CountStatus | SMALLINT(5,0) | False |  | False | COUNT_STATUS | Link to the COUNT_STATUS table. |
| CountType | INT(10,0) | False |  | False | COUNT_TYPE | Link to the COUNT_TYPE table. |
| Description | NVARCHAR(200) | True |  | False |  | Description of the Count Disposition. |
| DueDate | DATETIME | True |  | False |  | Expected finish date. |
| Facility | NVARCHAR(40) | False |  | False | WAREHOUSE | Link to the COUNT_PROCEDURE_WAREHOUSE table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| InventoryAccuracyRatio | DECIMAL(28,10) | True |  | False |  | Inventory accuracy of a Count Disposition. It is counted in the following way: 1 minus the number of counted Lines that required adjustment due to discrepancy divided by the total number of counted Lines. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Operation Sequence Number. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Order Type. |
| ReleaseDate | DATETIME | True |  | False |  | Date when Count Disposition is released. |
| ScheduledStartDate | DATETIME | True |  | False |  | Scheduled start date. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | Signature header ID from SIGNATURE_HEADER table. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | False |  | False | WAREHOUSE | Link to the COUNT_PROCEDURE_WAREHOUSE table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_COUNT_DISPOSITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_DISPOSITION_COUNT_STATUS** — COUNT_DISPOSITION -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_DISPOSITION_COUNT_TYPE** — COUNT_DISPOSITION -> COUNT_TYPE (`CountType -> CountType`)
- **FK_COUNT_DISPOSITION_ORDER_DETAIL** — COUNT_DISPOSITION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_COUNT_DISPOSITION_ORDER_HEADER** — COUNT_DISPOSITION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_COUNT_DISPOSITION_SIGNATURE_HEADER** — COUNT_DISPOSITION -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_COUNT_DISPOSITION_UNIT** — COUNT_DISPOSITION -> UNIT (`UnitID -> ID`)
- **FK_COUNT_DISPOSITION_WAREHOUSE** — COUNT_DISPOSITION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_DISPOSITION_WIP_OPERATION** — COUNT_DISPOSITION -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COUNT_DISPOSITION_WIP_ORDER** — COUNT_DISPOSITION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_LINE_COUNT_DISPOSITION** — COUNT_DISPOSITION_LINE -> COUNT_DISPOSITION (`CountDispositionID -> ID`)
- **FK_COUNT_DISPOSITION_RESOURCE_COUNT_DISPOSITION** — COUNT_DISPOSITION_RESOURCE -> COUNT_DISPOSITION (`CountDispositionID -> ID`)
- **FK_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION** — COUNT_DISPOSITION_STATUS_HISTORY -> COUNT_DISPOSITION (`CountDispositionID -> ID`)

## Unique Indexes

- **UK_COUNT_DISPOSITION** on `CountDispositionNo`

## Non-Unique Indexes

- **IDX_COUNT_DISPOSITION_ActualCompletionDate** on `ActualCompletionDate`
- **IDX_COUNT_DISPOSITION_ScheduledStartDate_CountStatus** on `ScheduledStartDate, CountStatus`
- **IF_COUNT_DISPOSITION_COUNT_STATUS** on `CountStatus`
- **IF_COUNT_DISPOSITION_ORDER** on `OrderNo, OrderType, OrderLineNo`
- **IF_COUNT_DISPOSITION_SIGNATURE_HEADER** on `SignatureHeaderID`
- **IF_COUNT_DISPOSITION_UNIT** on `UnitID`
- **IF_COUNT_DISPOSITION_WIP** on `WipOrderNo, WipOrderType, OprSequenceNo`
