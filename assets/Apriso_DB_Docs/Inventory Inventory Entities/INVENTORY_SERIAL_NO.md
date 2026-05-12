# INVENTORY_SERIAL_NO

**Database:** Operational

**Description:** Stores information about serials in inventory (e.g. Product, Serial Number and Container) where the Serial is stored and a flag indicating if the serial is a

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocatedFlag | BIT | True | (0) | False |  | Flagged if the Serial Number is allocated to the WIP Order. |
| Container | NVARCHAR(40) | True |  | False | INVENTORY_CONTAINER | Reference to the Serial Number. |
| InventoryID | INT(10,0) | True |  | False | INVENTORY | Links with Inventory and the Serial Number. |
| LastFacility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| LastGradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LastInventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Last status of the Serial. |
| LastPartnerID | INT(10,0) | True |  | False | PARTNER | Last partnerID (inventory owner). |
| LastProductID | INT(10,0) | True |  | False | PRODUCT | Last PartnerID (inventory owner). |
| LastWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| LastWarehouseLocation | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| ProductID | INT(10,0) | False |  | True | SERIAL_NO | Reference to a Product (Product Number and Product Version). |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | Serial number in Inventory. |
| ToPick | BIT | True |  | False |  | 1 - if this Serial has been allocated to a WIP Order, 0 - if the Serial is not allocated. |
| ToPut | BIT | True |  | False |  | For future use. |

## Primary Key

- **PK_INVENTORY_SERIAL_NO** on `ProductID, SerialNo`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_SERIAL_NO_FACILITY** — INVENTORY_SERIAL_NO -> FACILITY (`LastFacility -> Facility`)
- **FK_INVENTORY_SERIAL_NO_GRADE** — INVENTORY_SERIAL_NO -> GRADE (`LastGradeID -> ID`)
- **FK_INVENTORY_SERIAL_NO_INVENTORY** — INVENTORY_SERIAL_NO -> INVENTORY (`InventoryID -> ID`)
- **FK_INVENTORY_SERIAL_NO_INVENTORY_CONTAINER** — INVENTORY_SERIAL_NO -> INVENTORY_CONTAINER (`Container, InventoryID -> Container, InventoryID`)
- **FK_INVENTORY_SERIAL_NO_INVENTORY_STATUS** — INVENTORY_SERIAL_NO -> INVENTORY_STATUS (`LastInventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_SERIAL_NO_PARTNER** — INVENTORY_SERIAL_NO -> PARTNER (`LastPartnerID -> ID`)
- **FK_INVENTORY_SERIAL_NO_PRODUCT** — INVENTORY_SERIAL_NO -> PRODUCT (`LastProductID -> ID`)
- **FK_INVENTORY_SERIAL_NO_SERIAL_NO** — INVENTORY_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY_SERIAL_NO_WAREHOUSE** — INVENTORY_SERIAL_NO -> WAREHOUSE (`LastFacility, LastWarehouse -> Facility, Warehouse`)
- **FK_INVENTORY_SERIAL_NO_WAREHOUSE_LOCATION** — INVENTORY_SERIAL_NO -> WAREHOUSE_LOCATION (`LastWarehouseLocation -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY_SERIAL_NO_GRADE** on `LastGradeID`
- **IF_INVENTORY_SERIAL_NO_INVENTORY** on `InventoryID`
- **IF_INVENTORY_SERIAL_NO_INVENTORY_CONTAINER** on `Container, InventoryID`
- **IF_INVENTORY_SERIAL_NO_INVENTORY_STATUS** on `LastInventoryStatus`
- **IF_INVENTORY_SERIAL_NO_PARTNER** on `LastPartnerID`
- **IF_INVENTORY_SERIAL_NO_PRODUCT** on `LastProductID`
