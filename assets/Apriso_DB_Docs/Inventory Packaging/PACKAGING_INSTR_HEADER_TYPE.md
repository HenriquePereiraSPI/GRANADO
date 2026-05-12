# PACKAGING_INSTR_HEADER_TYPE

**Database:** Operational

**Description:** Contains definitions for all the possible types of Packaging Instructions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PackagingHeaderType | SMALLINT(5,0) | False |  | True |  | Type of the Packaging Instruction. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PACKAGING_INSTR_HEADER_TYPE** on `PackagingHeaderType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_HEADER_PACKAGING_INSTR_HEADER_TYPE** — PACKAGING_INSTR_HEADER -> PACKAGING_INSTR_HEADER_TYPE (`Type -> PackagingHeaderType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
