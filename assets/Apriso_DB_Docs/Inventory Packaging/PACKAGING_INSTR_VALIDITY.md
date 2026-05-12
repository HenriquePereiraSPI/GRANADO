# PACKAGING_INSTR_VALIDITY

**Database:** Operational

**Description:** Contains validity dates for a given Packaging Instruction in a given Facility.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of a Packaging Instruction to a Facility. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PackagingInstructionHeaderID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | ID of the Packaging Instruction Header record for which the validity criteria are specified. |
| ValidFrom | DATETIME | True |  | False |  | Valid from date. |
| ValidTo | DATETIME | True |  | False |  | Date when the validity period ends. |

## Primary Key

- **PK_PACKAGING_INSTR_VALIDITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_VALIDITY_FACILITY** — PACKAGING_INSTR_VALIDITY -> FACILITY (`Facility -> Facility`)
- **FK_PACKAGING_INSTR_VALIDITY_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_VALIDITY -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PACKAGING_INSTR_VALIDITY_PACKAGING_INSTR_HEADER** on `PackagingInstructionHeaderID`
