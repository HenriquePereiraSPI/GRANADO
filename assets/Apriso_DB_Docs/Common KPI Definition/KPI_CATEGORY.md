# KPI_CATEGORY

**Database:** Solution Authoring

**Description:** Defines categories for the KPIs to be in

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Name | NVARCHAR(50) | False |  | True |  | The name of the category |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_KPI_CATEGORY** on `Name`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_KPI_KPI_CATEGORY** — KPI -> KPI_CATEGORY (`Category_ -> Name`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
