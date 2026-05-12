# PACKAGING_INSTR_STATUS

**Database:** Operational

**Description:** Contains definitions for all the possible statuses of a Packaging Instruction.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PackagingStatus | SMALLINT(5,0) | False |  | True |  | Status of the Packaging Instruction (e.g. InDesign, Active or Retired). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PACKAGING_INSTR_STATUS** on `PackagingStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_STATUS** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_STATUS (`Status -> PackagingStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
