# PRODUCT_LOCATION_RESTRICTION

**Database:** Operational

**Description:** The table contains a list of the Warehouse Locations where the selected Product is allowed to be stored. Instead of using this table, it is recommended that the Putaway Determination and the PRODUCT_GROUP table be used to set restrictions on the Products and Locations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | The Warehouse Location ID where the Product is allowed. |
| ProductID | INT(10,0) | False |  | True | PRODUCT | The ID of the Product that should be restricted. |

## Primary Key

- **PK_PRODUCT_LOCATION_RESTRICTION** on `ProductID, LocationID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_LOCATION_RESTRICTION_PRODUCT** — PRODUCT_LOCATION_RESTRICTION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_LOCATION_RESTRICTION_WAREHOUSE_LOCATION** — PRODUCT_LOCATION_RESTRICTION -> WAREHOUSE_LOCATION (`LocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
