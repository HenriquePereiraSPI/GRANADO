# INVENTORY_CONTAINER

**Database:** Operational

**Description:** Stores information about Inventories in a Container such as available and allocated quantities. UoM code of the quantities is the same as for the Inventory being stored in the Container.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | True | CONTAINER | Reference to the Container that contains the Inventory described in the Inventory Container row. |
| InventoryID | INT(10,0) | False |  | True | INVENTORY | Link with Inventory used to retrieve the content of a Container. |
| LastFacility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| LastGradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LastInventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Last status of the Container. |
| LastPartnerID | INT(10,0) | True |  | False | PARTNER | Last PartnerID (inventory owner). |
| LastProductID | INT(10,0) | True |  | False | PRODUCT | Last ProductID (inventory owner). |
| LastWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Last Warehouse the Container was located at. |
| LastWarehouseLocation | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Last Warehouse Location the container was located at. |
| QuantityAllocated | DECIMAL(28,10) | True | (0) | False |  | Quantity allocated to an Order. |
| QuantityException | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityInActive | DECIMAL(28,10) | True |  | False |  | Quantity of unactivated inventory (e.g.  labels printed in advance). |
| QuantityOnHand | DECIMAL(28,10) | True | (0) | False |  | Quantity of unallocated Inventory. |
| QuantityToPick | DECIMAL(28,10) | True | (0) | False |  | Quantity allocated to the WIP Order for this Container. Corresponds to the sum of the same field in WIP_ORDER_CONTAINER. |
| QuantityToPickReleased | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityToPut | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityToPutReleased | DECIMAL(28,10) | True | (0) | False |  | For future use. |

## Primary Key

- **PK_INVENTORY_CONTAINER** on `Container, InventoryID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_CONTAINER_CONTAINER** — INVENTORY_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_INVENTORY_CONTAINER_FACILITY** — INVENTORY_CONTAINER -> FACILITY (`LastFacility -> Facility`)
- **FK_INVENTORY_CONTAINER_GRADE** — INVENTORY_CONTAINER -> GRADE (`LastGradeID -> ID`)
- **FK_INVENTORY_CONTAINER_INVENTORY** — INVENTORY_CONTAINER -> INVENTORY (`InventoryID -> ID`)
- **FK_INVENTORY_CONTAINER_INVENTORY_STATUS** — INVENTORY_CONTAINER -> INVENTORY_STATUS (`LastInventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_CONTAINER_PARTNER** — INVENTORY_CONTAINER -> PARTNER (`LastPartnerID -> ID`)
- **FK_INVENTORY_CONTAINER_PRODUCT** — INVENTORY_CONTAINER -> PRODUCT (`LastProductID -> ID`)
- **FK_INVENTORY_CONTAINER_WAREHOUSE** — INVENTORY_CONTAINER -> WAREHOUSE (`LastFacility, LastWarehouse -> Facility, Warehouse`)
- **FK_INVENTORY_CONTAINER_WAREHOUSE_LOCATION** — INVENTORY_CONTAINER -> WAREHOUSE_LOCATION (`LastWarehouseLocation -> ID`)

## Referenced By (other tables -> this)

- **FK_INVENTORY_SERIAL_NO_INVENTORY_CONTAINER** — INVENTORY_SERIAL_NO -> INVENTORY_CONTAINER (`Container, InventoryID -> Container, InventoryID`)
- **FK_TASK_MATERIAL_USE_INVENTORY_CONTAINER** — TASK_MATERIAL_USE -> INVENTORY_CONTAINER (`SourceInventoryID, SourceContainer -> InventoryID, Container`)
- **FK_TASK_MATERIAL_USE_INVENTORY_CONTAINER1** — TASK_MATERIAL_USE -> INVENTORY_CONTAINER (`DestInventoryID, DestContainer -> InventoryID, Container`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY_CONTAINER_GRADE** on `LastGradeID`
- **IF_INVENTORY_CONTAINER_INVENTORY** on `InventoryID`
- **IF_INVENTORY_CONTAINER_INVENTORY_STATUS** on `LastInventoryStatus`
- **IF_INVENTORY_CONTAINER_PARTNER** on `LastPartnerID`
- **IF_INVENTORY_CONTAINER_PRODUCT** on `LastProductID`
