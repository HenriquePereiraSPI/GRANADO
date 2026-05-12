# WORK_BREAK

**Database:** Operational

**Description:** The WORK_BREAK table is used to store all the available breaks specific to a facility.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakType | SMALLINT(5,0) | False |  | True | BREAK_TYPE | The type of the break |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | The facility for the work break |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_BREAK** on `Facility, BreakType`

## Foreign Keys (this table -> other)

- **FK_WORK_BREAK_BREAK_TYPE** — WORK_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_BREAK_FACILITY** — WORK_BREAK -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_WORK_SHIFT_BREAK_WORK_BREAK** — WORK_SHIFT_BREAK -> WORK_BREAK (`Facility, BreakType -> Facility, BreakType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
