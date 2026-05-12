# DATE_TYPE

**Database:** Operational

**Description:** Defines what type of date information can be stored for any given order level. The actual date value is stored in the "ORDER_DATE" table, which supports lnkingdates to the following levels: Order Header, Order Detail, Wip Order,Wip Operation,Shipment Stage and Shipment Stage Point.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DateType | SMALLINT(5,0) | False |  | True |  | Type of the Date. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DATE_TYPE** on `DateType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ORDER_DATE_DATE_TYPE** — ORDER_DATE -> DATE_TYPE (`DateType -> DateType`)
- **FK_ORDER_TYPE_DATE_DATE_TYPE** — ORDER_TYPE_DATE -> DATE_TYPE (`DateType -> DateType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
