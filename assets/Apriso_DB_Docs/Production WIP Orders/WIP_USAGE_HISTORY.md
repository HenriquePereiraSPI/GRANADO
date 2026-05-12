# WIP_USAGE_HISTORY

**Database:** Operational

**Description:** This is the header table that stores the history of usages of various WIP entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Department | NVARCHAR(40) | True |  | False |  | The Department. |
| Facility | NVARCHAR(40) | True |  | False |  | The Facility. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP usage history. |
| LotNo | NVARCHAR(40) | True |  | False |  | The Lot Number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The WIP Operation Sequence number. |
| Process | NVARCHAR(80) | True |  | False |  | The name of the Process. |
| ProcessRevision | NVARCHAR(80) | True |  | False |  | The revision of the Process. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | The Production Line. |
| ProductNo | NVARCHAR(80) | True |  | False |  | The product number. |
| ProductRevision | NVARCHAR(20) | True |  | False |  | The product revision. |
| RecipeID | INT(10,0) | True |  | False |  | The ID of the Recipe. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The name of the Resource. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | The type of the Resource. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial Number. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The WIP Operation Step Sequence number. |
| Warehouse | NVARCHAR(10) | True |  | False |  | The Warehouse. |
| WarehouseLocationID | INT(10,0) | True |  | False |  | The ID of the Warehouse Location. |
| WipOrderNo | NVARCHAR(40) | False |  | False |  | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False |  | The WIP Order type. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | The Work Center. |
| Zone | NVARCHAR(20) | True |  | False |  | The Zone. |

## Primary Key

- **PK_WIP_USAGE_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_USAGE_HISTORY_RESOURCE_WIP_USAGE_HISTORY** — WIP_USAGE_HISTORY_RESOURCE -> WIP_USAGE_HISTORY (`WipUsageHistoryID -> ID`)
- **FK_WIP_USAGE_HISTORY_SIGNATURE_WIP_USAGE_HISTORY** — WIP_USAGE_HISTORY_SIGNATURE -> WIP_USAGE_HISTORY (`WipUsageHistoryID -> ID`)
- **FK_WIP_USAGE_HISTORY_WI_REVISION_WIP_USAGE_HISTORY** — WIP_USAGE_HISTORY_WI_REVISION -> WIP_USAGE_HISTORY (`WipUsageHistoryID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
