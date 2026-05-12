# WORK_INSTRUCTION_CLASS

**Database:** Operational

**Description:** This table stores Work Instruction Classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Local Unique Key for the Work Instruction Class. |
| Name | NVARCHAR(50) | False |  | False |  | Global Unique Key for the Work Instruction Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_INSTRUCTION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WORK_INSTRUCTION_WORK_INSTRUCTION_CLASS** — WORK_INSTRUCTION -> WORK_INSTRUCTION_CLASS (`ClassID -> ID`)

## Unique Indexes

- **UK_WORK_INSTRUCTION_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
