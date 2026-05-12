# PACKAGING_INSTR_DIMENSION

**Database:** Operational

**Description:** Contains links between various Dimensions and Packaging Instructions (e.g. Gross weigth, Volume).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the Dimension. |
| DimensionCode | NVARCHAR(50) | False |  | False | DIMENSION | Code of the Dimension (e.g. weigh, length). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MaxValue | DECIMAL(28,10) | True |  | False |  | Maximum value of the Dimension. |
| MinValue | DECIMAL(28,10) | True |  | False |  | Minimum value of the Dimension. |
| PackagingInstructionDetailID | INT(10,0) | True |  | False | PACKAGING_INSTR_DETAIL | ID of the Packaging Instruction Detail record the table is associated with. |
| PackagingInstructionHeaderID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | ID of the Packaging Instruction Header record the Dimensions are associated with. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM of the dimensions. |

## Primary Key

- **PK_PACKAGING_INSTR_DIMENSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_DIMENSION_DIMENSION** — PACKAGING_INSTR_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_DETAIL** — PACKAGING_INSTR_DIMENSION -> PACKAGING_INSTR_DETAIL (`PackagingInstructionDetailID -> ID`)
- **FK_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_DIMENSION -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)
- **FK_PACKAGING_INSTR_DIMENSION_UOM** — PACKAGING_INSTR_DIMENSION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PACKAGING_INSTR_DIMENSION_DIMENSION** on `DimensionCode`
- **IF_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_DETAIL** on `PackagingInstructionDetailID`
- **IF_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_HEADER** on `PackagingInstructionHeaderID`
