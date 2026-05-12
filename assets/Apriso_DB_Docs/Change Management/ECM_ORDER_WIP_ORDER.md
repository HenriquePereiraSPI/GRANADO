# ECM_ORDER_WIP_ORDER

**Database:** Operational

**Description:** Table contains all WIP orders affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |
| Standard | BIT | True |  | False |  | Link Type (Manual, Automatic). |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_ORDER | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_ORDER | WIP Order Type. |

## Primary Key

- **PK_ECM_ORDER_WIP_ORDER** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_WIP_ORDER_ECM_ORDER** — ECM_ORDER_WIP_ORDER -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_WIP_ORDER_PROGRESS_STATUS** — ECM_ORDER_WIP_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_WIP_ORDER_WIP_ORDER** — ECM_ORDER_WIP_ORDER -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_WIP_ORDER_EOID_POID** on `EcmOrderID, WipOrderNo, WipOrderType`

## Non-Unique Indexes

- **IF_ECM_ORDER_WIP_ORDER_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ECM_ORDER_WIP_ORDER_WIP_ORDER** on `WipOrderNo, WipOrderType`
