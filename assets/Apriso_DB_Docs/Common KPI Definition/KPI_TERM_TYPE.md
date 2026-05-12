# KPI_TERM_TYPE

**Database:** Solution Authoring

**Description:** Types of terms for constructing key performance indicator calculations

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | The name of the type |

## Primary Key

- **PK_KPI_TERM_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_KPI_TERM_KPI_TERM_TYPE** — KPI_TERM -> KPI_TERM_TYPE (`Type -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
