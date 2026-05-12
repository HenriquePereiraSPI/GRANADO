# MI_POINT_GROUP

**Database:** Operational

**Description:** List of logical groups of points

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Alias | NVARCHAR(255) | False |  | False |  | Unique alias of Point |
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| DataSourceID | INT(10,0) | False |  | False | MI_DATA_SOURCE | Link to parent Data Source |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Point |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Point Group |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification |
| ParentID | INT(10,0) | True |  | False | MI_POINT_GROUP | Link to the parent Point Group |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description  (for grouping and sorting) |

## Primary Key

- **PK_MI_POINT_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_POINT_GROUP_MI_DATA_SOURCE** — MI_POINT_GROUP -> MI_DATA_SOURCE (`DataSourceID -> ID`)
- **FK_MI_POINT_GROUP_MI_POINT_GROUP** — MI_POINT_GROUP -> MI_POINT_GROUP (`ParentID -> ID`)

## Referenced By (other tables -> this)

- **FK_MI_POINT_GROUP_MI_POINT_GROUP** — MI_POINT_GROUP -> MI_POINT_GROUP (`ParentID -> ID`)
- **FK_MI_POINT_MI_POINT_GROUP** — MI_POINT -> MI_POINT_GROUP (`PointGroupID -> ID`)

## Unique Indexes

- **IX_MI_POINT_GROUP** on `DataSourceID, Alias, ParentID`

## Non-Unique Indexes

- **IF_MI_POINT_GROUP_MI_POINT_GROUP** on `ParentID`
