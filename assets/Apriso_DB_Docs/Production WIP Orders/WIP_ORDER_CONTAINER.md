# WIP_ORDER_CONTAINER

**Database:** Operational

**Description:** This table is used to persit the assignment of a container to a WIP Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| QuantityProcessed | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToPick | DECIMAL(28,10) | True |  | False |  | The inventory Quantity allocated to a WIP Order for this Container |
| QuantityToPickReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToPut | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToPutReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| TargetQuantity | DECIMAL(28,10) | True |  | False |  | For future use. |
| WipOrderContentID | INT(10,0) | True |  | False | WIP_ORDER_CONTENT | For future use. |

## Primary Key

- **PK_WIP_ORDER_CONTAINER** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_CONTAINER_CONTAINER** — WIP_ORDER_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_WIP_ORDER_CONTAINER_WIP_ORDER_CONTENT** — WIP_ORDER_CONTAINER -> WIP_ORDER_CONTENT (`WipOrderContentID -> ID`)

## Referenced By (other tables -> this)

- **FK_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTAINER** — WIP_ORDER_CONTENT_SERIAL -> WIP_ORDER_CONTAINER (`WipOrderContainerID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_CONTAINER_CONTAINER** on `Container`
- **IXD_WipOrderContentID_Container** on `WipOrderContentID, Container`
