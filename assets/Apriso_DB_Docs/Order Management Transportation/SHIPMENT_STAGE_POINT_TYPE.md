# SHIPMENT_STAGE_POINT_TYPE

**Database:** Operational

**Description:** The "SHIPMENT_STAGE_POINT_TYPE" table defines all possible shipment stage point types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ShipmentStagePointType | SMALLINT(5,0) | False |  | True |  | The master list of shipment stage points types.  E.g Drop-off or pickup |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SHIPMENT_STAGE_POINT_TYPE** on `ShipmentStagePointType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SHIPMENT_STAGE_POINT_SHIPMENT_STAGE_POINT_TYPE** — SHIPMENT_STAGE_POINT -> SHIPMENT_STAGE_POINT_TYPE (`ShipmentStagePointType -> ShipmentStagePointType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
