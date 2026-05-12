# RESOURCE_COLLECTION

**Database:** Operational

**Description:** Used to create hierarchies of resources

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ParentResourceName | NVARCHAR(80) | False |  | False | RESOURCE_ | Link to the Parent resource Name |
| ParentResourceType | SMALLINT(5,0) | False |  | False | RESOURCE_ | Relation with the parent resource |
| ResourceName | NVARCHAR(80) | False |  | False | RESOURCE_ | The identifier or name of the resource |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_COLLECTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_COLLECTION_RESOURCE** — RESOURCE_COLLECTION -> RESOURCE_ (`ParentResourceName, ParentResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_COLLECTION_RESOURCE1** — RESOURCE_COLLECTION -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **FK_TASK_RESOURCE_USE_RESOURCE_COLLECTION** — TASK_RESOURCE_USE -> RESOURCE_COLLECTION (`ResourceCollectionID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_COLLECTION_RESOURCE** on `ParentResourceName, ParentResourceType`
- **IF_RESOURCE_COLLECTION_RESOURCE1** on `ResourceName, ResourceType`
