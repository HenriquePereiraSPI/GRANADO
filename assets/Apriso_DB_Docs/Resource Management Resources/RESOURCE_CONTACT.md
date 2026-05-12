# RESOURCE_CONTACT

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | Link between the RESOURCE table and the CONTACT table, used to provide Contact information about the Resource. |
| DisplayNo | INT(10,0) | False |  | False |  | For future use. |
| ResourceName | NVARCHAR(80) | False |  | True | RESOURCE_ | Name of the resource |
| ResourceType | SMALLINT(5,0) | False |  | True | RESOURCE_ | Resource type + resource define uniquely a resource |

## Primary Key

- **PK_RESOURCE_CONTACT** on `ResourceName, ResourceType, ContactID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_CONTACT_CONTACT** — RESOURCE_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_RESOURCE_CONTACT_RESOURCE** — RESOURCE_CONTACT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_CONTACT_CONTACT** on `ContactID`
