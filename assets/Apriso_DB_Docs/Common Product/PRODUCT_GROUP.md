# PRODUCT_GROUP

**Database:** Operational

**Description:** Contains the assignment of a product to various groups

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Defines the assignment of the entity to a group (user-defined). |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the group |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PRODUCT_GROUP** on `ProductID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_GROUP_GROUP** — PRODUCT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_PRODUCT_GROUP_PRODUCT** — PRODUCT_GROUP -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_GROUP_UNIT** — PRODUCT_GROUP -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_PRODUCT_GROUP_UNIT** on `UnitID`
