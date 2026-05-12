# UOM_BASIS

**Database:** Operational

**Description:** The “UOM_BASIS” table links unit of measure basis to a standard uom code.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitOfMeasureBasis | NVARCHAR(10) | False |  | True |  | Base UOM |
| UomCodeStandard | NVARCHAR(10) | True |  | False | UOM | For future use. |

## Primary Key

- **PK_UOM_BASIS** on `UnitOfMeasureBasis`

## Foreign Keys (this table -> other)

- **FK_UOM_BASIS_UOM** — UOM_BASIS -> UOM (`UomCodeStandard -> UomCode`)

## Referenced By (other tables -> this)

- **FK_UOM_UOM_BASIS** — UOM -> UOM_BASIS (`UnitOfMeasureBasis -> UnitOfMeasureBasis`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
