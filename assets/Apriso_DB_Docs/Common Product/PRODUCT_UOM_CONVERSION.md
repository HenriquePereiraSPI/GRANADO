# PRODUCT_UOM_CONVERSION

**Database:** Operational

**Description:** The “PRODUCT_UOM_CONVERSION” table is used to store conversion factor between source and destination uom code for a given product. Additionally the table enables to specify function, which would be used to do the conversion instead of using conversion factor.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConversionFactor | DECIMAL(28,10) | True |  | False |  | Factor used during conversion of one UOM to the other |
| DFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version) |
| UomCodeFrom | NVARCHAR(10) | False |  | False | UOM | Source UOM |
| UomCodeTo | NVARCHAR(10) | False |  | False | UOM | Target UOM |

## Primary Key

- **PK_PRODUCT_UOM_CONVERSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_UOM_CONVERSION_PRODUCT** — PRODUCT_UOM_CONVERSION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_UOM_CONVERSION_UOM** — PRODUCT_UOM_CONVERSION -> UOM (`UomCodeFrom -> UomCode`)
- **FK_PRODUCT_UOM_CONVERSION_UOM1** — PRODUCT_UOM_CONVERSION -> UOM (`UomCodeTo -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- PRODUCT_UOM_CONVERSION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- PRODUCT_UOM_CONVERSION -> DFC (`DFCFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_UOM_CONVERSION_DFC** on `DFCFUID`
- **IF_PRODUCT_UOM_CONVERSION_DFC_REVISION** on `DFCRevisionFUID`
- **IXD_ProductID_UomCodeFrom_UomCodeTo** on `ProductID, UomCodeFrom, UomCodeTo`
