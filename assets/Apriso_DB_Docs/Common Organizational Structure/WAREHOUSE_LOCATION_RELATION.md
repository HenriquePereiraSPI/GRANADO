# WAREHOUSE_LOCATION_RELATION

**Database:** Operational

**Description:** The table stores Warehouse Locations relations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildLocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | The Child Warehouse Location. |
| ParentLocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | The Parent Warehouse Location. |
| RelationshipClassID | INT(10,0) | True |  | False | LOCATION_RELATIONSHIP_CLASS | The ID of Warehouse Location relationship class. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_RELATION** on `ParentLocationID, ChildLocationID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_RELATION_LRC** — WAREHOUSE_LOCATION_RELATION -> LOCATION_RELATIONSHIP_CLASS (`RelationshipClassID -> ID`)
- **FK_WAREHOUSE_LOCATION_RELATION_UNIT** — WAREHOUSE_LOCATION_RELATION -> UNIT (`UnitID -> ID`)
- **FK_WAREHOUSE_LOCATION_RELATION_WL1** — WAREHOUSE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`ParentLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_RELATION_WL2** — WAREHOUSE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`ChildLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_RELATION_LRC** on `RelationshipClassID`
- **IF_WAREHOUSE_LOCATION_RELATION_UNIT** on `UnitID`
