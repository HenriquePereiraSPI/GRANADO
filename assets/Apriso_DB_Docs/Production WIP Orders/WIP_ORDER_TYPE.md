# WIP_ORDER_TYPE

**Database:** Operational

**Description:** This table contains the various order types. This list can be extended.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSOrderType | NVARCHAR(50) | True |  | False |  | DELMIA Order Type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipOrderType | SMALLINT(5,0) | False |  | True |  | Link to the WIP Order type |
| WipOrderTypeUsageID | INT(10,0) | True |  | False | WIP_ORDER_TYPE_USAGE | ID of WIP Order Type Usage. |

## Primary Key

- **PK_WORK_ORDER_TYPE** on `WipOrderType`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_TYPE_WIP_ORDER_TYPE_USAGE** — WIP_ORDER_TYPE -> WIP_ORDER_TYPE_USAGE (`WipOrderTypeUsageID -> ID`)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_WIP_ORDER_TYPE** — COST_DETAIL -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_DISPOSITION_LINE_WIP_ORDER_TYPE** — DISPOSITION_LINE -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_DISPOSITION_WIP_ORDER_TYPE** — DISPOSITION -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_INSPECTION_DETERMINATION_WIPORDERTYPE** — INSPECTION_DETERMINATION -> WIP_ORDER_TYPE (`WipOrderType -> WipOrderType`)
- **FK_MATERIAL_ORDER_HEADER_WIP_ORDER_TYPE** — MATERIAL_ORDER_HEADER -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_ORDER_DATE_WIP_ORDER_TYPE** — ORDER_DATE -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_ORDER_HEADER_WIP_ORDER_TYPE** — ORDER_HEADER -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_ORDER_TYPE_DATE_WIP_ORDER_TYPE** — ORDER_TYPE_DATE -> WIP_ORDER_TYPE (`WipOrderType -> WipOrderType`)
- **FK_PROGRESS_TRANSITION_RULES_WIP_ORDER_TYPE** — PROGRESS_TRANSITION_RULES -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_REPLENISH_STRATEGY_OrderType** — REPLENISH_STRATEGY -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_SEQUENCE_WIP_ORDER_TYPE_WIP_ORDER_TYPE** — SEQUENCE_WIP_ORDER_TYPE -> WIP_ORDER_TYPE (`ParentWipOrderType -> WipOrderType`)
- **FK_SEQUENCE_WIP_ORDER_TYPE_WIP_ORDER_TYPE1** — SEQUENCE_WIP_ORDER_TYPE -> WIP_ORDER_TYPE (`ChildWipOrderType -> WipOrderType`)
- **FK_WIP_ORDER_TYPE_ORDER_CATEGORY_WIP_ORDER_TYPE** — WIP_ORDER_TYPE_ORDER_CATEGORY -> WIP_ORDER_TYPE (`WipOrderType -> WipOrderType`)
- **FK_WORK_ORDER_WORK_ORDER_TYPE** — WIP_ORDER -> WIP_ORDER_TYPE (`WipOrderType -> WipOrderType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_TYPE_WIP_ORDER_TYPE_USAGE** on `WipOrderTypeUsageID`
