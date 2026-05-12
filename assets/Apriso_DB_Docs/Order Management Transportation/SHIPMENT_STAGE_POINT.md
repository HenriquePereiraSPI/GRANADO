# SHIPMENT_STAGE_POINT

**Database:** Operational

**Description:** The “SHIPMENT_STAGE_POINT” table contains the various loading and unloading points of the shipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_HEADER | Reference to the Order header (in addition to Order Type) |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_HEADER | Reference to the order type |
| PartnerRelationShipID | INT(10,0) | True |  | False | PARTNER_RELATIONSHIP | Relation to Partner relationship records to define the Stage point |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence of the point (define the path betweeen the various stages) |
| ShipmentStagePointType | SMALLINT(5,0) | True |  | False | SHIPMENT_STAGE_POINT_TYPE | The type of shipment stage point, e.g. drop-off or pickup |
| StagePointCode | NVARCHAR(50) | True |  | False |  | Code of the stage point in the ERP |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SHIPMENT_STAGE_POINT** on `ID`

## Foreign Keys (this table -> other)

- **FK_SHIPMENT_STAGE_POINT_ORDER_HEADER** — SHIPMENT_STAGE_POINT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SHIPMENT_STAGE_POINT_PARTNER_RELATIONSHIP** — SHIPMENT_STAGE_POINT -> PARTNER_RELATIONSHIP (`PartnerRelationShipID -> ID`)
- **FK_SHIPMENT_STAGE_POINT_SHIPMENT_STAGE_POINT_TYPE** — SHIPMENT_STAGE_POINT -> SHIPMENT_STAGE_POINT_TYPE (`ShipmentStagePointType -> ShipmentStagePointType`)

## Referenced By (other tables -> this)

- **FK_ORDER_DATE_SHIPMENT_STAGE_POINT** — ORDER_DATE -> SHIPMENT_STAGE_POINT (`ShipmentStagePointID -> ID`)
- **FK_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT** — SHIPMENT_STAGE -> SHIPMENT_STAGE_POINT (`LoadPointID -> ID`)
- **FK_SHIPMENT_STAGE_SHIPMENT_STAGE_POINT1** — SHIPMENT_STAGE -> SHIPMENT_STAGE_POINT (`UnloadPointID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SHIPMENT_STAGE_POINT_ORDER_HEADER** on `OrderNo, OrderType`
- **IF_SHIPMENT_STAGE_POINT_PARTNER_RELATIONSHIP** on `PartnerRelationShipID`
