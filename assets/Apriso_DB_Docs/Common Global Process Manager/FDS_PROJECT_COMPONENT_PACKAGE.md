# FDS_PROJECT_COMPONENT_PACKAGE

**Database:** Solution Authoring

**Description:** Contains information about which Package contain specific Project entity

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PackageInfoID | INT(10,0) | False |  | True | FDS_PACKAGE_INFO | Link to package on which the action was performed. |
| ProjectComponentID | INT(10,0) | False |  | True | FDS_PROJECT_COMPONENT |  |
| Properties | NVARCHAR | True |  | False |  | Custom properties for component. |

## Primary Key

- **PK_FDS_PROJECT_COMPONENT_PACKAGE** on `ProjectComponentID, PackageInfoID`

## Foreign Keys (this table -> other)

- **FK_FDS_PROJECT_COMPONENT_PACKAGE_FDS_PACKAGE_INFO** — FDS_PROJECT_COMPONENT_PACKAGE -> FDS_PACKAGE_INFO (`PackageInfoID -> ID`)
- **FK_FDS_PROJECT_COMPONENT_PACKAGE_FDS_PROJECT_COMPONENT** — FDS_PROJECT_COMPONENT_PACKAGE -> FDS_PROJECT_COMPONENT (`ProjectComponentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FDS_PROJECT_COMPONENT_PACKAGE_FDS_PACKAGE_INFO** on `PackageInfoID`
