# RESOURCE_ADDRESS

**Database:** Operational

**Description:** Contains the various addresses of a resource

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| ResourceName | NVARCHAR(80) | False |  | True | RESOURCE_ | Link to addresses |
| ResourceType | SMALLINT(5,0) | False |  | True | RESOURCE_ | Resource type + resource define uniquely a resource |

## Primary Key

- **PK_RESOURCE_ADDRESS** on `ResourceName, ResourceType, AddressID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_ADDRESS_ADDRESS** — RESOURCE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_RESOURCE_ADDRESS_RESOURCE** — RESOURCE_ADDRESS -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_ADDRESS_ADDRESS** on `AddressID`
