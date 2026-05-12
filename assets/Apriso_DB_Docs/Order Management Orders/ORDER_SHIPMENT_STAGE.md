# ORDER_SHIPMENT_STAGE

**Database:** Operational

**Description:** Contains the legs between the loading and unloading points used in the shipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| IncotermCode | NVARCHAR(3) | True |  | False | INCOTERM | Incoterm code assigned to the Shipment Stage. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_HEADER | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_HEADER | Reference to the Order Type. |
| ShipmentStageID | INT(10,0) | True |  | False | SHIPMENT_STAGE | Shipment Stage the Order is associated with. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_ORDER_SHIPMENT_STAGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_SHIPMENT_STAGE_INCOTERM** — ORDER_SHIPMENT_STAGE -> INCOTERM (`IncotermCode -> IncotermCode`)
- **FK_ORDER_SHIPMENT_STAGE_ORDER_HEADER** — ORDER_SHIPMENT_STAGE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SHIPMENT_STAGE_SHIPMENT_STAGE** — ORDER_SHIPMENT_STAGE -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_ORDER_SHIPMENT_STAGE_UNIT** — ORDER_SHIPMENT_STAGE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_SHIPMENT_STAGE_INCOTERM** on `IncotermCode`
- **IF_ORDER_SHIPMENT_STAGE_ORDER_HEADER** on `OrderNo, OrderType`
- **IF_ORDER_SHIPMENT_STAGE_SHIPMENT_STAGE** on `ShipmentStageID`
- **IF_ORDER_SHIPMENT_STAGE_UNIT** on `UnitID`
