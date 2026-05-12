# PACKAGING_INSTR_DETAIL

**Database:** Operational

**Description:** Stores details concerning Packaging Instructions. For each Packaging Instruction Detail (other than Text Information), a quantity and Unit of measure can be provided.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassID | INT(10,0) | True |  | False | PACKAGING_INSTR_CLASS | Class of the Packaging Instruction Detail (user-defined). |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| HeaderID | INT(10,0) | False |  | False | PACKAGING_INSTR_HEADER | ID of the Packaging Instruction Header record the table is associated with. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MainPackagingFlag | BIT | True |  | False |  | Flag that indicates whether the packaging is the main packaging material (i.e. all the other packaging and the product are in this packaging). |
| MaxQuantity | DECIMAL(28,10) | True |  | False |  | Maximum quantity of packaging or product to be used |
| MinQuantity | DECIMAL(28,10) | True |  | False |  | Minimum number of items for the Packaging Instruction. |
| PackagingInstructionID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | ID of the Packaging Instruction record the table is associated with. Used in case the records represents packaging instruction (e.g. 2 level packaging) |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a Product (Product Number and Product Version). |
| QuantityFactor | DECIMAL(28,10) | True |  | False |  | Factor the quantity must be defined in. |
| SequenceID | INT(10,0) | True |  | False | SEQUENCE_ | ID of the Sequence used to generate Serial Numbers. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence of the detail. |
| TargetQuantity | DECIMAL(28,10) | True |  | False |  | Targeted quantity of the instruction for a Product/Packaging. |
| Type | SMALLINT(5,0) | True |  | False | PACKAGING_INSTR_DETAIL_TYPE | Type of Packaging (e.g. UM, UC, UMG or UMS). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOM | NVARCHAR(10) | True |  | False | UOM | UoM code for the quantities. |

## Primary Key

- **PK_PACKAGING_INSTR_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_CLASS** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_CLASS (`ClassID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_DETAIL_TYPE** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_DETAIL_TYPE (`Type -> PackagingDetailType`)
- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_HEADER (`HeaderID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER1** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_HEADER (`PackagingInstructionID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PRODUCT** — PACKAGING_INSTR_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_SEQUENCE** — PACKAGING_INSTR_DETAIL -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_UNIT** — PACKAGING_INSTR_DETAIL -> UNIT (`UnitID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_UOM** — PACKAGING_INSTR_DETAIL -> UOM (`UOM -> UomCode`)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_DETAIL** — PACKAGING_INSTR_DIMENSION -> PACKAGING_INSTR_DETAIL (`PackagingInstructionDetailID -> ID`)

## Unique Indexes

- **UK_PACKAGING_INSTR_DETAIL** on `FUID`

## Non-Unique Indexes

- **IDX_PACKAGING_INSTR_DETAIL_CLASSIFICATIONID** on `ClassificationID`
- **IF_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_CLASS** on `ClassID`
- **IF_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER** on `HeaderID`
- **IF_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER1** on `PackagingInstructionID`
- **IF_PACKAGING_INSTR_DETAIL_PRODUCT** on `ProductID`
- **IF_PACKAGING_INSTR_DETAIL_SEQUENCE** on `SequenceID`
- **IF_PACKAGING_INSTR_DETAIL_UNIT** on `UnitID`
