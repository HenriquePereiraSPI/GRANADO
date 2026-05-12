# RESOURCE_RESOURCE_LINK

**Database:** Operational

**Description:** The “RESOURCE_RESOURCE_LINK” table is used to store information about resource assignment such as the time a resource was assigned to parent resource, parent resource, the time a resource was released from the parent resource, duration of the assignment in seconds, class of the resource assignment, etc.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssignedOn | DATETIME | True |  | False |  | Date of assignment of the child resource to the parent resource |
| DurationSeconds | INT(10,0) | True |  | False |  | Defines for how long the linked between the 2 resources is valid |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ParentResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Relation with the parent resource |
| ParentResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Relation with the parent resource |
| ReleasedOn | DATETIME | True |  | False |  | Date of release of the link between the two resources |
| ResourceLinkClassID | INT(10,0) | True |  | False | RESOURCE_LINK_CLASS | Class of link between resources. User-defined. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The child resource name |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |

## Primary Key

- **PK_RESOURCE_RESOURCE_USED** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_RESOURCE_LINK_RESOURCE_LINK_CLASS** — RESOURCE_RESOURCE_LINK -> RESOURCE_LINK_CLASS (`ResourceLinkClassID -> ID`)
- **FK_RESOURCE_RESOURCE_USED_RESOURCE_** — RESOURCE_RESOURCE_LINK -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_RESOURCE_USED_RESOURCE_1** — RESOURCE_RESOURCE_LINK -> RESOURCE_ (`ParentResourceName, ParentResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_RESOURCE_LINK_RESOURCE_LINK_CLASS** on `ResourceLinkClassID`
- **IF_RESOURCE_RESOURCE_USED_RESOURCE_1** on `ResourceName, ResourceType`
- **IXD_ParentResourceName_ParentResourceType_ResourceName_ResourceType** on `ParentResourceName, ParentResourceType, ResourceName, ResourceType`
