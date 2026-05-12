# RESOURCE_GROUP

**Database:** Operational

**Description:** Used to categorize resources assigning them to groups

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Defines the assignment of the entity to a group (user-defined). |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the group |
| ResourceName | NVARCHAR(80) | False |  | True | RESOURCE_ | The identifier or name of the resource |
| ResourceType | SMALLINT(5,0) | False |  | True | RESOURCE_ | Resource type + resource define uniquely a resource |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_RESOURCE_GROUP** on `ResourceName, ResourceType, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_GROUP_GROUP** — RESOURCE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_RESOURCE_GROUP_RESOURCE** — RESOURCE_GROUP -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_GROUP_UNIT** — RESOURCE_GROUP -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_RESOURCE_GROUP_UNIT** on `UnitID`
