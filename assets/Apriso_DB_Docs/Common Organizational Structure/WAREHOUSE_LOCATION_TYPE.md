# WAREHOUSE_LOCATION_TYPE

**Database:** Operational

**Description:** Contain the type of warehouse locations. Can be used to categorized the locations. This is not used by the business component by used by the Apriso templates

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocationFlag | BIT | False | (0) | False |  | For future use. |
| CycleCountFlag | BIT | False | (0) | False |  | Determines if this type of location is cycle counted |
| MoveFromFlag | BIT | False | (0) | False |  | Not used. |
| MoveToFlag | BIT | False | (0) | False |  | Not used. |
| MultipleInventoryClassFlag | BIT | False | (0) | False |  | For future use. |
| MultipleInventoryOwnerFlag | BIT | False | (0) | False |  | For future use. |
| MultipleInventoryStatusFlag | BIT | False | (0) | False |  | For future use. |
| MultipleLotFlag | BIT | False | (0) | False |  | For future use. |
| MultipleProductFlag | BIT | False | (0) | False |  | For future use. |
| MultipleRotationFlag | BIT | False | (0) | False |  | For future use. |
| MultipleUomFlag | BIT | False | (0) | False |  | For future use. |
| PutawayFlag | BIT | False | (0) | False |  | For future use. |
| QtyAdjustmentFlag | BIT | False | (0) | False |  | For future use. |
| ReplenishFromFlag | BIT | False | (0) | False |  | For future use. |
| ReplenishToFlag | BIT | False | (0) | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WarehouseLocationType | SMALLINT(5,0) | False |  | True |  | type of location |

## Primary Key

- **PK_LOCATION_TYPE** on `WarehouseLocationType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LOCATION_LOCATION_TYPE** — WAREHOUSE_LOCATION -> WAREHOUSE_LOCATION_TYPE (`WarehouseLocationType -> WarehouseLocationType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
