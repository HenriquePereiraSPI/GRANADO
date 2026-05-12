# WIP_ORDER_TYPE_USAGE

**Database:** Operational

**Description:** This table contains system defined Order Usages of the Order Type.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of the Order Usage record. |
| Name | NVARCHAR(30) | False |  | False |  | Unique Name of the Order Usage record. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WIP_ORDER_TYPE_USAGE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_ORDER_TYPE_WIP_ORDER_TYPE_USAGE** — WIP_ORDER_TYPE -> WIP_ORDER_TYPE_USAGE (`WipOrderTypeUsageID -> ID`)

## Unique Indexes

- **ORDER_USAGE_UNIQUE** on `Name`

## Non-Unique Indexes

- **** on ``
