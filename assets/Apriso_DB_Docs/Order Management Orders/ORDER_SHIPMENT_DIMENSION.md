# ORDER_SHIPMENT_DIMENSION

**Database:** Operational

**Description:** Contains the various Dimensions of an Order (e.g. number of boxes) or shipment (total weight).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the Dimension. |
| Container_ | NVARCHAR(40) | True |  | False | CONTAINER | Container Number, populated when the dimension applied to the Container in the context of a shipment. |
| DimensionCode | NVARCHAR(50) | True |  | False | DIMENSION | Code of the Dimension (e.g. weigh, length). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MaxValue_ | DECIMAL(28,10) | True |  | False |  | Maximum value of the Dimension. |
| MinValue_ | DECIMAL(28,10) | True |  | False |  | Minimum value of the Dimension. |
| OrderLineNo | INT(10,0) | True |  | False |  | Link to the Order Item. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_HEADER | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_HEADER | Reference to the Order Type. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | UoM of the Dimensions. |

## Primary Key

- **PK_ORDER_SHIPMENT_DIMENSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_SHIPMENT_DIMENSION_CONTAINER** — ORDER_SHIPMENT_DIMENSION -> CONTAINER (`Container_ -> Container`)
- **FK_ORDER_SHIPMENT_DIMENSION_DIMENSION** — ORDER_SHIPMENT_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_ORDER_SHIPMENT_DIMENSION_ORDER_HEADER** — ORDER_SHIPMENT_DIMENSION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SHIPMENT_DIMENSION_UOM** — ORDER_SHIPMENT_DIMENSION -> UOM (`UOMCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_SHIPMENT_DIMENSION_CONTAINER** on `Container_`
- **IF_ORDER_SHIPMENT_DIMENSION_DIMENSION** on `DimensionCode`
- **IF_ORDER_SHIPMENT_DIMENSION_ORDER_HEADER** on `OrderNo, OrderType`
