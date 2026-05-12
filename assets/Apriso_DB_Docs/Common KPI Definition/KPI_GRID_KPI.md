# KPI_GRID_KPI

**Database:** Solution Authoring

**Description:** This table stores the relationship between a KPI Grid and its linked KPIs. It contains a link between the KPI and the KPI_GRID tables to allow tracking of what KPIs belong to which KPI Grids.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Autoincrement PK |
| KPIGridName | NVARCHAR(100) | False |  | False | KPI_GRID | Name of the KPI Grid |
| KPIName | NVARCHAR(50) | True |  | False | KPI | Name of the KPI |

## Primary Key

- **PK_KPI_GRID_KPI** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_GRID_KPI_KPI** — KPI_GRID_KPI -> KPI (`KPIName -> Name`)
- **FK_KPI_GRID_KPI_KPI_GRID** — KPI_GRID_KPI -> KPI_GRID (`KPIGridName -> Name`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_GRID_KPI_KPI** on `KPIName`
- **IF_KPI_GRID_KPI_KPI_GRID** on `KPIGridName`
