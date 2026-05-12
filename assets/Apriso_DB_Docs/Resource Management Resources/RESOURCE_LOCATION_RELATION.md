# RESOURCE_LOCATION_RELATION

**Database:** Operational

**Description:** Stores many to many relation between machine resources and locations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of resource location relation |
| LocationRelationshipClassID | INT(10,0) | True |  | False | LOCATION_RELATIONSHIP_CLASS | Link to LOCATION_RELATIONSHIP_CLASS table |
| Name | NVARCHAR(100) | True |  | False |  | Resource location relation name |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | Link to RESOURCE_ table |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Link to WAREHOUSE_LOCATION table |
| Zone | NVARCHAR(20) | True |  | False | ZONE | Link to the ZONE table. |

## Primary Key

- **PK_RESOURCE_LOCATION_RELATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LOCATION_RELATION_LOCATIONID** — RESOURCE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_RESOURCE_LOCATION_RELATION_RELATIONSHIPCLASSID** — RESOURCE_LOCATION_RELATION -> LOCATION_RELATIONSHIP_CLASS (`LocationRelationshipClassID -> ID`)
- **FK_RESOURCE_LOCATION_RELATION_RESOURCEID** — RESOURCE_LOCATION_RELATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_LOCATION_RELATION_ZONE** — RESOURCE_LOCATION_RELATION -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_RESOURCE_LOCATION_RELATION_1** on `Name, ResourceID, WarehouseLocationID, LocationRelationshipClassID`

## Non-Unique Indexes

- **IF_RESOURCE_LOCATION_RELATION_RELATIONSHIPCLASSID** on `LocationRelationshipClassID`
- **IF_RESOURCE_LOCATION_RELATION_RESOURCEID** on `ResourceID`
- **IF_RESOURCE_LOCATION_RELATION_ZONE** on `Zone`
