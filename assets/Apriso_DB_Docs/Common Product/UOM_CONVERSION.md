# UOM_CONVERSION

**Database:** Operational

**Description:** The “UOM_CONVERSION” table is used to store conversion factor between source and destination uom code. The conversion is not product based.
Additionally the table enables to specify function, which would be used to do the conversion instead of using conversion factor.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConversionFactor | DECIMAL(28,10) | True |  | False |  | Factor used during conversion of one UOM to the other |
| DFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| UomCodeFrom | NVARCHAR(10) | False |  | False | UOM | Source UOM |
| UomCodeTo | NVARCHAR(10) | False |  | False | UOM | Target UOM |

## Primary Key

- **PK_UNIT_OF_MEASURE_CONVERSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_UNIT_OF_MEASURE_CONVERSION_UOM** — UOM_CONVERSION -> UOM (`UomCodeFrom -> UomCode`)
- **FK_UNIT_OF_MEASURE_CONVERSION_UOM1** — UOM_CONVERSION -> UOM (`UomCodeTo -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- UOM_CONVERSION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- UOM_CONVERSION -> DFC (`DFCFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_UOM_CONVERSION_DFC** on `DFCFUID`
- **IF_UOM_CONVERSION_DFC_REVISION** on `DFCRevisionFUID`
- **IXD_UomCodeFrom_UomCodeTo** on `UomCodeFrom, UomCodeTo`
