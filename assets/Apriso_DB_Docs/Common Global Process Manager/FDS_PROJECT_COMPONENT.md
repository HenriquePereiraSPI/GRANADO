# FDS_PROJECT_COMPONENT

**Database:** Solution Authoring

**Description:** Contains information about entities in the Project

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AttachType | SMALLINT(5,0) | False | ((1)) | False |  | The type of entity attachment to a package |
| Comment_ | NVARCHAR(1000) | True |  | False |  | Comment added to entity that is in Project |
| ComponentClass | NVARCHAR(100) | True |  | False |  | Class of the component. Identifies entity in more detail if the ComponenType is not enough |
| ComponentClassFUID | NVARCHAR(36) | False |  | False |  | FUID of the component class |
| ComponentType | SMALLINT(5,0) | False |  | False |  | Type of component |
| Details | NVARCHAR(500) | True |  | False |  | Detailed information about entity in the Project |
| EntityFUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of component |
| ID | INT(10,0) | False |  | True |  | Primary key |
| LastAuthor | NVARCHAR(50) | True |  | False |  | The user which last updated the entity |
| LastChanged | DATETIME | True |  | False |  | The date when the entity was last updated |
| LastModificationChecking | DATETIME | True |  | False |  | The date when checking modifications on entity was last performed |
| ModificationStatus | SMALLINT(5,0) | False |  | False |  | The status of the entity in Project ex. New, Modified, In Design etc. |
| Name | NVARCHAR(255) | False |  | False |  | Name of the entity |
| ProjectID | INT(10,0) | False |  | False | FDS_PROJECT | Link to Project |
| Properties | NVARCHAR | True |  | False |  | All properties of the entity needed by GPM |
| Version | NVARCHAR(100) | True |  | False |  | Version of the entity |

## Primary Key

- **PK_FDS_PROJECT_COMPONENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_FDS_PROJECT_COMPONENT_FDS_PROJECT** — FDS_PROJECT_COMPONENT -> FDS_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_FDS_PROJECT_COMPONENT_PACKAGE_FDS_PROJECT_COMPONENT** — FDS_PROJECT_COMPONENT_PACKAGE -> FDS_PROJECT_COMPONENT (`ProjectComponentID -> ID`)

## Unique Indexes

- **UK_FDS_PROJECT_COMPONENT** on `FUID`

## Non-Unique Indexes

- **IDX_FDS_PROJECT_COMPONENT_ENTITYFUID** on `EntityFUID`
- **IDX_FDS_PROJECT_COMPONENT_Name_ComponentClass** on `Name, ComponentClass`
- **IF_FDS_PROJECT_COMPONENT_FDS_PROJECT** on `ProjectID`
