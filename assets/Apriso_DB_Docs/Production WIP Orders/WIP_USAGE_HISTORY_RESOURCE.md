# WIP_USAGE_HISTORY_RESOURCE

**Database:** Operational

**Description:** This child table stores the usage history of Resources. In Complex Assembly, this is used to store Tool usage during the production process.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(512) | True |  | False |  | The comment about the usage. |
| EmployeeNo | NVARCHAR(50) | False |  | False |  | The Employee who used the Resource. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP usage history Resource. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | The Reason Code of the usage. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | The ID of the used Resource. |
| UsageDate | DATETIME | False |  | False |  | The time when the Resource was used. |
| WipReqResourceID | INT(10,0) | True |  | False |  | The ID of the related WIP-required Resource record. |
| WipUsageHistoryID | INT(10,0) | False |  | False | WIP_USAGE_HISTORY | The ID of the parent record in WIP_USAGE_HISTORY. |

## Primary Key

- **PK_WIP_USAGE_HISTORY_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_USAGE_HISTORY_RESOURCE_RESOURCE** — WIP_USAGE_HISTORY_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WIP_USAGE_HISTORY_RESOURCE_WIP_USAGE_HISTORY** — WIP_USAGE_HISTORY_RESOURCE -> WIP_USAGE_HISTORY (`WipUsageHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_USAGE_HISTORY_RESOURCE_RESOURCE** on `ResourceID`
- **IF_WIP_USAGE_HISTORY_RESOURCE_WIP_USAGE_HISTORY** on `WipUsageHistoryID`
