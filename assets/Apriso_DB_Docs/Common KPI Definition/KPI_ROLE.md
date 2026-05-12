# KPI_ROLE

**Database:** Solution Authoring

**Description:** Contains the necessary link between a KPI and its Roles

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| KpiName | NVARCHAR(50) | False |  | True | KPI | Unique identifier of KPI |
| Role | NVARCHAR(40) | False |  | True |  | Reference to the Role column in the ROLE table. |

## Primary Key

- **PK_KPI_ROLE** on `KpiName, Role`

## Foreign Keys (this table -> other)

- **FK_KPI_ROLE_KPI** — KPI_ROLE -> KPI (`KpiName -> Name`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_ROLE_ROLE** on `Role`
