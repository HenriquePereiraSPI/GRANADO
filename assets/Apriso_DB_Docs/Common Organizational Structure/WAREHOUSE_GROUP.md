# WAREHOUSE_GROUP

**Database:** Operational

**Description:** Contains the assignment of a warehouse to a user-defined groups

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True | WAREHOUSE | Used to uniquely identify a warehouse |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Defines the assignment of the entity to a group (user-defined). |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the group |
| Warehouse | NVARCHAR(10) | False |  | True | WAREHOUSE | Group of warehouse (user-defined). |

## Primary Key

- **PK_WAREHOUSE_GROUP** on `Facility, Warehouse, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_GROUP_GROUP** — WAREHOUSE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WAREHOUSE_GROUP_WAREHOUSE** — WAREHOUSE_GROUP -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
