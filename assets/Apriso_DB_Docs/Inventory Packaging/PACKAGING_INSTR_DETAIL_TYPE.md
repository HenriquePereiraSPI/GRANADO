# PACKAGING_INSTR_DETAIL_TYPE

**Database:** Operational

**Description:** Contains definitions for all possible types of Packaging Instruction Details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PackagingDetailType | SMALLINT(5,0) | False |  | True |  | Type of the Packaging Instruction Detail record (e.g. Product, Packaging Material, Packaging Instruction, Any Product). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PACKAGING_INSTR_DETAIL_TYPE** on `PackagingDetailType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_DETAIL_PACKAGING_INSTR_DETAIL_TYPE** — PACKAGING_INSTR_DETAIL -> PACKAGING_INSTR_DETAIL_TYPE (`Type -> PackagingDetailType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
