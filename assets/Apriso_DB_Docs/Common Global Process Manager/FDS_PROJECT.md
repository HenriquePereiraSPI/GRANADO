# FDS_PROJECT

**Database:** Solution Authoring

**Description:** Contains information about GPM Projects and their base properties

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BuildNumber | INT(10,0) | False |  | False |  |  |
| Comment_ | NVARCHAR(1000) | True |  | False |  | Comment added to entity that is in Project. |
| CreatedFromMonitoredServer | BIT | True |  | False |  |  |
| CreatedOnThisServer | BIT | False | ((1)) | False |  | Flag indicating if Project is created on current server. |
| DefaultVersionedRepositoryID | INT(10,0) | True |  | False | VERSIONED_REPOSITORY |  |
| DisplayItemsRecursively | BIT | False |  | False |  |  |
| DomainUserCreatedBy | NVARCHAR(100) | False |  | False |  |  |
| DomainUserLastUpdatedBy | NVARCHAR(100) | False |  | False |  |  |
| FolderID | INT(10,0) | True |  | False | FDS_FOLDER | Folder where the project is located |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of project |
| ID | INT(10,0) | False |  | True |  | Primary key |
| IsFaulted | BIT | False | ((0)) | False |  | The flag that indicates if Project is faulty and should be recreated manually. |
| Name | NVARCHAR(255) | False |  | False |  | Project name |
| OwnerEmployeeNo | NVARCHAR(50) | True |  | False |  | Owner of the project |
| ParentProjectId | INT(10,0) | True |  | False | FDS_PROJECT | The reference to Parent Project ID. |
| Properties | NVARCHAR | True |  | False |  | Component dependencies, folders, default deployment options and other required properties |
| Revision | NVARCHAR(100) | False |  | False |  | Project revision |
| SourceServerName | NVARCHAR(255) | True |  | False |  | Server name the Project was created. |
| Status | SMALLINT(5,0) | False |  | False |  | Active, Archived |
| Type | SMALLINT(5,0) | False | ((0)) | False |  | Type of GPM Project. |
| Version | INT(10,0) | False |  | False |  | Project version |

## Primary Key

- **PK_FDS_PROJECT** on `ID`

## Foreign Keys (this table -> other)

- **FK_FDS_PROJECT_FDS_FOLDER** — FDS_PROJECT -> FDS_FOLDER (`FolderID -> ID`)
- **FK_FDS_PROJECT_FDS_PROJECT** — FDS_PROJECT -> FDS_PROJECT (`ParentProjectId -> ID`)
- **FK_FDS_PROJECT_VERSIONED_REPOSITORY** — FDS_PROJECT -> VERSIONED_REPOSITORY (`DefaultVersionedRepositoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_FDS_PROJECT_COMPONENT_FDS_PROJECT** — FDS_PROJECT_COMPONENT -> FDS_PROJECT (`ProjectID -> ID`)
- **FK_FDS_PROJECT_FDS_PROJECT** — FDS_PROJECT -> FDS_PROJECT (`ParentProjectId -> ID`)
- **FK_FDS_PROJECT_REFERENCE_FDS_PROJECT** — FDS_PROJECT_REFERENCE -> FDS_PROJECT (`ProjectID -> ID`)

## Business Keys (this table -> other)

- FDS_PROJECT -> EMPLOYEE (`OwnerEmployeeNo -> EmployeeNo`)

## Unique Indexes

- **UK_FDS_PROJECT** on `FUID`
- **UK_FDS_PROJECT_2** on `Name, Revision, Type, ParentProjectId`

## Non-Unique Indexes

- **IF_FDS_PROJECT_FDS_FOLDER** on `FolderID`
- **IF_FDS_PROJECT_FDS_PROJECT** on `ParentProjectId`
- **IF_FDS_PROJECT_VERSIONED_REPOSITORY** on `DefaultVersionedRepositoryID`
