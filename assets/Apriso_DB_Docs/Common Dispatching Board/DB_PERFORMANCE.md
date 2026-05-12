# DB_PERFORMANCE

**Database:** Operational

**Description:** This table stores information about the calculated performance results of a Workspace.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The ID of the performance record. |
| KeyValue | NVARCHAR(64) | True |  | False |  | The key value of the performance result. |
| PerformanceClass | SMALLINT(5,0) | False |  | False | DB_PERFORMANCE_CLASS | The foreign key to the DB_PERFORMACECLASS.PerformanceClass Enable delete cascade. |
| PerformanceValue | DECIMAL(28,10) | True |  | False |  | The value of the performance result. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to the DB_WORKSPACE.IDEnable delete cascade. |

## Primary Key

- **PK_DB_PERFORMANCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_PERFORMANCE_PERFORMANCE_CLASS** — DB_PERFORMANCE -> DB_PERFORMANCE_CLASS (`PerformanceClass -> ID`)
- **FK_DB_PERFORMANCE_WORKSPACE** — DB_PERFORMANCE -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DB_PERFORMANCE_PERFORMANCE_CLASS** on `PerformanceClass`
- **IF_DB_PERFORMANCE_WORKSPACE** on `WorkSpaceID`
