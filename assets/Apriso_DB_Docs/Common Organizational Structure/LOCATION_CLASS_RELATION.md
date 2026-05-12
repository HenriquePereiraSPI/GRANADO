# LOCATION_CLASS_RELATION

**Database:** Operational

**Description:** This table stores Warehouse Locations Class relations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildLocationClassID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION_CLASS | The Child Warehouse Location Class. |
| ParentLocationClassID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION_CLASS | The Parent Warehouse Location Class. |
| RelationshipClassID | INT(10,0) | True |  | False | LOCATION_RELATIONSHIP_CLASS | ID of the Location Relationship Class. |

## Primary Key

- **PK_LOCATION_CLASS_RELATION** on `ParentLocationClassID, ChildLocationClassID`

## Foreign Keys (this table -> other)

- **FK_LOCATION_CLASS_RELATION_LRC** — LOCATION_CLASS_RELATION -> LOCATION_RELATIONSHIP_CLASS (`RelationshipClassID -> ID`)
- **FK_LOCATION_CLASS_RELATION_WL1** — LOCATION_CLASS_RELATION -> WAREHOUSE_LOCATION_CLASS (`ParentLocationClassID -> ID`)
- **FK_LOCATION_CLASS_RELATION_WL2** — LOCATION_CLASS_RELATION -> WAREHOUSE_LOCATION_CLASS (`ChildLocationClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LOCATION_CLASS_RELATION_LRC** on `RelationshipClassID`
- **IF_LOCATION_CLASS_RELATION_WL2** on `ChildLocationClassID`
