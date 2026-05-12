# ORDER_DETAIL_CONTENT_STATUS

**Database:** Operational

**Description:** Contains all system statuses of Order Detail Content.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Status | SMALLINT(5,0) | False |  | True |  | The Order Detail Content status (1 - New, 100 - ASN Message, 110 - Received, 120 - Put Away, 140 - Picked, 141 - Picked for Mix, 150 - Staged, 160 - Loaded). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ORDER_DETAIL_CONTENT_STATUS** on `Status`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ORDER_DETAIL_CONTENT_ORDER_DETAIL_CONTENT_STATUS** — ORDER_DETAIL_CONTENT -> ORDER_DETAIL_CONTENT_STATUS (`Status -> Status`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
