# SHIPMENT_TYPE

**Database:** Operational

**Description:** The "SHIPMENT_TYPE" table defines all possible shipment types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ShipmentType | SMALLINT(5,0) | False |  | True |  | Type of shipment (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SHIPMENT_TYPE** on `ShipmentType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_OUTBOUND_SHIPMENT_HEADER_SHIPMENT_TYPE** — OUTBOUND_SHIPMENT_HEADER -> SHIPMENT_TYPE (`ShipmentType -> ShipmentType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
