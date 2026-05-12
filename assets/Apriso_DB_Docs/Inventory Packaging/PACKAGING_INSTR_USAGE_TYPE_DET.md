# PACKAGING_INSTR_USAGE_TYPE_DET

**Database:** Operational

**Description:** Contains descriptions of the ways a Packaging Instruction Usage will be accessed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Department | BIT | True |  | False |  | Ability to use the Department in the Packaging Instruction Determination. |
| Facility | BIT | True |  | False |  | Assignment of a Packaging Instruction to a Facility. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PackagingInstrUsageType | SMALLINT(5,0) | True |  | False | PACKAGING_INSTR_USAGE_TYPE | Type of the Packaging Instruction for determining its usage. |
| Partner | BIT | True |  | False |  | Determines if the Packaging Instruction Usage requires a Partner to be specified. |
| Product | BIT | True |  | False |  | Determines if the Packaging Instruction Usage requires a Product to be specified. |
| ProductGroup | BIT | True |  | False |  | Determines if the Packaging Instruction Usage requires a Product Group to be specified. |
| Resource_ | BIT | True |  | False |  | Allows the determination of the Packaging to be based on a Resource. |
| ResourceClass | BIT | True |  | False |  | Allows the determination of the Packaging to be based on a Resource Class. |
| ResourceType | BIT | True |  | False |  | Resource Type + Resource uniquely define a Resource. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence that the usage is used for. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipOrder | BIT | True |  | False |  | Determines if the Packaging Instruction Usage requires a WIP Order to be specified. |
| WorkCenter | BIT | True |  | False |  | Determines if the Packaging Instruction Usage requires a Work Center to be specified. |

## Primary Key

- **PK_PACKAGING_INSTR_USAGE_TYPE_DET** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_USAGE_TYPE_DET_PACKAGING_INSTR_USAGE_TYPE** — PACKAGING_INSTR_USAGE_TYPE_DET -> PACKAGING_INSTR_USAGE_TYPE (`PackagingInstrUsageType -> UsageType`)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_USAGE_TYPE_DET** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_USAGE_TYPE_DET (`PackagingInstrUsageTypeDetID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
