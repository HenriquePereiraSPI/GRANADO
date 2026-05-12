# KPI_CONTEXT

**Database:** Solution Authoring

**Description:** Defines available contexts for the KPIs (Resource, Order, etc)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Name | NVARCHAR(50) | False |  | True |  | The name of the context |
| RealTimeTableName | NVARCHAR(50) | True |  | False |  | The table to use for updating real time calculations |
| SelectForSourceTableMsSql | NVARCHAR(800) | True |  | False |  | The select statement to select fields and join source tables |
| SelectForSourceTableOracle | NVARCHAR(800) | True |  | False |  | The select statement to select fields and join source tables |
| SourceTableNames | NVARCHAR(175) | True |  | False |  | Store the name of the source tables |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeSeriesTableName | NVARCHAR(50) | True |  | False |  | The table to use for historical calculations |
| WhereClauseMsSql | NVARCHAR(800) | True |  | False |  | Indicate the condition to join source tables an RealTimeTable |
| WhereClauseOracle | NVARCHAR(800) | True |  | False |  | Indicate the condition to join source tables an RealTimeTable |

## Primary Key

- **PK_KPI_CONTEXT** on `Name`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_KPI_KPI_CONTEXT** — KPI -> KPI_CONTEXT (`Context_ -> Name`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
