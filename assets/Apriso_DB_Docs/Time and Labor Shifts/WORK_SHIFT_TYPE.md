# WORK_SHIFT_TYPE

**Database:** Operational

**Description:** The type the work shift is

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkShiftType | SMALLINT(5,0) | False |  | True |  | The defintion of the work shift types to include shift 1, shift 2, and shift 3. |

## Primary Key

- **PK_WORK_SHIFT_TYPE** on `WorkShiftType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WORK_SHIFT_WORK_SHIFT_TYPE** — WORK_SHIFT -> WORK_SHIFT_TYPE (`WorkShiftType -> WorkShiftType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
