# PACKAGING_INSTR_HEADER

**Database:** Operational

**Description:** Contains definitions for Packaging Instructions and stores their statusest. Packaging instructions consist of Packaging Instruction Details defined in the PACKAGING_INSTR_DETAIL table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassID | INT(10,0) | True |  | False | PACKAGING_INSTR_CLASS | Class of the Packaging Instruction Header (user-defined). |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Code | NVARCHAR(30) | True |  | False |  | Code of the Packaging Instruction. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| SequenceID | INT(10,0) | True |  | False | SEQUENCE_ | A default Sequence of Packaging Instruction. |
| Status | SMALLINT(5,0) | True |  | False | PACKAGING_INSTR_STATUS | Status of the Packaging Instruction (e.g. Design, Active or Retired). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False | PACKAGING_INSTR_HEADER_TYPE | Type of Packaging (e.g. Receiving, Shipping). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Version | INT(10,0) | True |  | False |  | Version Number of the Packaging Instruction. |

## Primary Key

- **PK_PACKAGING_INSTR_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_CLASS** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_CLASS (`ClassID -> ID`)
- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_HEADER_TYPE** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_HEADER_TYPE (`Type -> PackagingHeaderType`)
- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_STATUS** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_STATUS (`Status -> PackagingStatus`)
- **FK_PACKAGING_INSTR_HEADER_SEQUENCE** — PACKAGING_INSTR_HEADER -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_PACKAGING_INSTR_HEADER_UNIT** — PACKAGING_INSTR_HEADER -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CONTAINER_PACKAGING_INSTR_HEADER** — CONTAINER -> PACKAGING_INSTR_HEADER (`PackagingInstrHeaderID -> ID`)
- **FK_LABEL_CONTENT_PackagingInstructionID** — LABEL_CONTENT -> PACKAGING_INSTR_HEADER (`PackagingInstructionID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_HEADER (`HeaderID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_HEADER1** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_HEADER (`PackagingInstructionID -> ID`)
- **FK_PACKAGING_INSTR_DIMENSION_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_DIMENSION -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)
- **FK_PACKAGING_INSTR_VALIDITY_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_VALIDITY -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_PACKAGING_INSTR_HEADER** — SEQUENCE_SHIP_CONFIG -> PACKAGING_INSTR_HEADER (`PackagingInstructionID -> ID`)

## Unique Indexes

- **UK_PACKAGING_INSTR_HEADER** on `FUID`

## Non-Unique Indexes

- **IDX_PACKAGING_INSTR_HEADER_CLASSIFICATIONID** on `ClassificationID`
- **IF_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_CLASS** on `ClassID`
- **IF_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_STATUS** on `Status`
- **IF_PACKAGING_INSTR_HEADER_SEQUENCE** on `SequenceID`
- **IF_PACKAGING_INSTR_HEADER_UNIT** on `UnitID`
