# KPI_TERM_ASSOCIATION

**Database:** Solution Authoring

**Description:** This table stores the relationship between KPI Terms and KPI Term Parents.  This holds the relationship for when a KPI Term is used in the calculation of another KPI Term; i.e. its parent.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Auto-increment PK |
| KPIName | NVARCHAR(50) | True |  | False | KPI | The parent KPI the KPI Term is associated with |
| KPITermName | NVARCHAR(100) | True |  | False | KPI_TERM | The name of the KPI Term |
| ParentKPITermName | NVARCHAR(100) | True |  | False | KPI_TERM | The parent KPI Term the KPI Term is associated with |

## Primary Key

- **PK_KPI_TERM_ASSOCIATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_TERM_ASSOCIATION_KPI** — KPI_TERM_ASSOCIATION -> KPI (`KPIName -> Name`)
- **FK_KPI_TERM_ASSOCIATION_KPI_TERM** — KPI_TERM_ASSOCIATION -> KPI_TERM (`KPITermName -> Name`)
- **FK_KPI_TERM_ASSOCIATION_KPI_TERM1** — KPI_TERM_ASSOCIATION -> KPI_TERM (`ParentKPITermName -> Name`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_TERM_ASSOCIATION_KPI** on `KPIName`
- **IF_KPI_TERM_ASSOCIATION_KPI_TERM** on `KPITermName`
- **IF_KPI_TERM_ASSOCIATION_KPI_TERM1** on `ParentKPITermName`
