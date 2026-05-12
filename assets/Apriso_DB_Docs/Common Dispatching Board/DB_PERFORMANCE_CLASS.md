# DB_PERFORMANCE_CLASS

**Database:** Operational

**Description:** This table stores information about Performance Class. The Performance Class is a formula of the different performances of a Workspace.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The GUID. |
| ID | SMALLINT(5,0) | False |  | True |  | The ID of the performance class. |
| Name | NVARCHAR(64) | True |  | False |  | The performance class name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code of the performance result. |

## Primary Key

- **PK_DB_PERFORMANCE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_PERFORMANCE_CLASS_UOM** — DB_PERFORMANCE_CLASS -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_DB_PERFORMANCE_PERFORMANCE_CLASS** — DB_PERFORMANCE -> DB_PERFORMANCE_CLASS (`PerformanceClass -> ID`)

## Unique Indexes

- **UK_DB_PERFORMANCE_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
