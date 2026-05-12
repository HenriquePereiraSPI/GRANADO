# PACKAGING_INSTR_CLASS

**Database:** Operational

**Description:** Contains definitions for different Packaging Instruction Classes, referenced by PACKAGING_INSTR_HEADER and PACKAGING_INSTR_DETAIL.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PACKAGING_INSTR_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_CLASS** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_CLASS (`ClassID -> ID`)
- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_CLASS** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_CLASS (`ClassID -> ID`)

## Unique Indexes

- **UK_PACKAGING_INSTR_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
