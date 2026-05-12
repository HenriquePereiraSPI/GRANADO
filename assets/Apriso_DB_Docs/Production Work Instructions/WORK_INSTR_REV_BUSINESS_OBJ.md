# WORK_INSTR_REV_BUSINESS_OBJ

**Database:** Operational

**Description:** This table is used to store FlexParts used in the Work Instruction revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BusinessObjectAlias | NVARCHAR(255) | False |  | True |  | Reference to the Alias column in the BUSINESS_OBJECT table. |
| WorkInstructionRevisionID | INT(10,0) | False |  | True | WORK_INSTR_REVISION | Reference to the WORK_INSTR_REVISION table. |

## Primary Key

- **PK_WORK_INSTR_REV_BUSINESS_OBJ** on `WorkInstructionRevisionID, BusinessObjectAlias`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTR_REV_BUSINESS_OBJ_WORK_INSTR_REVISION** — WORK_INSTR_REV_BUSINESS_OBJ -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- WORK_INSTR_REV_BUSINESS_OBJ -> BUSINESS_OBJECT (`BusinessObjectAlias -> Alias`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_INSTR_REV_BUSINESS_OBJ_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
