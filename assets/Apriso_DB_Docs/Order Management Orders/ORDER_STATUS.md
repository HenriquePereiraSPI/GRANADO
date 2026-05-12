# ORDER_STATUS

**Database:** Operational

**Description:** Contains definitions of all the possible statuses an Order can have.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| OrderStatus | SMALLINT(5,0) | False |  | True |  | Order status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INBOUND_STATUS** on `OrderStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_INBOUND_ORDER_DISTRIBUTION_ORDER_STATUS1** — INBOUND_ORDER_DISTRIBUTION -> ORDER_STATUS (`OrderDistributionStatus -> OrderStatus`)
- **FK_ORDER_DETAIL_ORDER_STATUS** — ORDER_DETAIL -> ORDER_STATUS (`OrderStatus -> OrderStatus`)
- **FK_ORDER_HEADER_ORDER_STATUS** — ORDER_HEADER -> ORDER_STATUS (`OrderStatus -> OrderStatus`)
- **FK_ORDER_SCHEDULE_ORDER_STATUS** — ORDER_SCHEDULE -> ORDER_STATUS (`OrderScheduleStatus -> OrderStatus`)
- **FK_ORDER_STATUS_HISTORY_FromOrderStatus** — ORDER_STATUS_HISTORY -> ORDER_STATUS (`FromOrderStatus -> OrderStatus`)
- **FK_ORDER_STATUS_HISTORY_ToOrderStatus** — ORDER_STATUS_HISTORY -> ORDER_STATUS (`ToOrderStatus -> OrderStatus`)
- **FK_RECEIPT_DETAIL_INBOUND_STATUS** — RECEIPT_DETAIL -> ORDER_STATUS (`ReceiptStatus -> OrderStatus`)
- **FK_RECEIPT_HEADER_INBOUND_STATUS** — RECEIPT_HEADER -> ORDER_STATUS (`ReceiptStatus -> OrderStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
