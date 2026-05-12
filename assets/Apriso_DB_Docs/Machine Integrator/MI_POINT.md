# MI_POINT

**Database:** Operational

**Description:** List of all Machine Integrator Points for Data Sources

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Access_ | INT(10,0) | True |  | False |  | Access types: 0 - ReadOnly, 1 - WriteOnly, 2 - ReadWrite. |
| Alias | NVARCHAR(255) | True |  | False |  | Unique alias of Point |
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| DataType | INT(10,0) | True |  | False |  | Point types: integer, string, Boolean, array of int. |
| Enabled | BIT | True |  | False |  | 1 - Enabled, 0 - Disabled. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Point |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Point |
| InitialValue | NVARCHAR | True |  | False |  | Initial value of the Point |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification |
| Parameters | NVARCHAR | True |  | False |  | Data Source Type specific parameters |
| PointGroupID | INT(10,0) | False |  | False | MI_POINT_GROUP | Link to parent Point Group |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description  (for grouping and sorting) |

## Primary Key

- **PK_MIPoint** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_POINT_MI_POINT_GROUP** — MI_POINT -> MI_POINT_GROUP (`PointGroupID -> ID`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_MI_FEATURE_MI_POINT** — EQUIPMENT_MI_FEATURE -> MI_POINT (`MIPointID -> ID`)
- **FK_MILogGroupPoint_MIPoint** — MI_ACTION_GROUP_POINT -> MI_POINT (`PointID -> ID`)
- **FK_RESOURCE_MI_POINT_MI_POINT** — RESOURCE_MI_POINT -> MI_POINT (`MIPointID -> ID`)

## Unique Indexes

- **IX_MI_POINT** on `FUID`
- **IX_MI_POINT_1** on `Alias, PointGroupID`

## Non-Unique Indexes

- **IF_MI_POINT_MI_POINT_GROUP** on `PointGroupID`
