# PACKAGING_INSTR_USAGE_TYPE

**Database:** Operational

**Description:** Contains definitions for all the possible types of Packaging Instruction Usages.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UsageType | SMALLINT(5,0) | False |  | True |  | Type of the usage the Packaging Instruction can be used for (e.g. shipping, receiving), |

## Primary Key

- **PK_PACKAGING_INSTR_USAGE_TYPE** on `UsageType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_USAGE_TYPE** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_USAGE_TYPE (`UsageType -> UsageType`)
- **FK_PACKAGING_INSTR_USAGE_TYPE_DET_PACKAGING_INSTR_USAGE_TYPE** — PACKAGING_INSTR_USAGE_TYPE_DET -> PACKAGING_INSTR_USAGE_TYPE (`PackagingInstrUsageType -> UsageType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
