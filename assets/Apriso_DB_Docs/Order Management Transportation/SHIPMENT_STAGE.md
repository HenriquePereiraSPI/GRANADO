# SHIPMENT_STAGE

**Database:** Operational

**Description:** The “SHIPMENT_STAGE” table contains the legs between the loading and unloading points used in the shipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LoadPointID | INT(10,0) | True |  | False | SHIPMENT_STAGE_POINT | Laoding point of the stage |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_HEADER | Reference to the Order header (in addition to Order Type) |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_HEADER | Reference to the order type |
| StageStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Status of the stage (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnloadPointID | INT(10,0) | True |  | False | SHIPMENT_STAGE_POINT | Unlaoding point of the stage |

## Primary Key

- **PK_SHIPMENT_STAGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SHIPMENT_STAGE_ORDER_HEADER** — SHIPMENT_STAGE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SHIPMENT_STAGE_PROGRESS_STATUS** — SHIPMENT_STAGE -> PROGRESS_STATUS (`StageStatus -> ProgressStatus`)
- **FK_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT** — SHIPMENT_STAGE -> SHIPMENT_STAGE_POINT (`LoadPointID -> ID`)
- **FK_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT1** — SHIPMENT_STAGE -> SHIPMENT_STAGE_POINT (`UnloadPointID -> ID`)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_SHIPMENT_STAGE** — COST_DETAIL -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_COST_SHIPMENT_STAGE** — COST -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_ORDER_DATE_SHIPMENT_STAGE** — ORDER_DATE -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_ORDER_SHIPMENT_STAGE_DIMENSION_SHIPMENT_STAGE** — ORDER_SHIPMENT_STAGE_DIMENSION -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_ORDER_SHIPMENT_STAGE_SHIPMENT_STAGE** — ORDER_SHIPMENT_STAGE -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SHIPMENT_STAGE_ORDER_HEADER** on `OrderNo, OrderType`
- **IF_SHIPMENT_STAGE_PROGRESS_STATUS** on `StageStatus`
- **IF_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT** on `LoadPointID`
- **IF_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT1** on `UnloadPointID`
