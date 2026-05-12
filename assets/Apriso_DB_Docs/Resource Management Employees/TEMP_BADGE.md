# TEMP_BADGE

**Database:** Operational

**Description:** The TEMP_BADGE table is used to store all the temporary badges in the system.   Temporary badges are then temporarily linked to Employees through the EMPLOYEE_TEMP_BADGE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BadgeNo | NVARCHAR(20) | False |  | True |  | The badge number for the temporary badge |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | The facility the temporary badge is valid in |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TEMPORARY_BADGES** on `Facility, BadgeNo`

## Foreign Keys (this table -> other)

- **FK_TEMP_BADGE_FACILITY** — TEMP_BADGE -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_TEMPORARY_BADGES_TEMPORARY_BADGES** — EMPLOYEE_TEMP_BADGE -> TEMP_BADGE (`Facility, BadgeNo -> Facility, BadgeNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_BadgeNo** on `BadgeNo`
