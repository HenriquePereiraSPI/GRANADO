# PAY_RULE_HOLIDAY_MULTIPLIER

**Database:** Operational

**Description:** Stores configuration settings for all Holiday multipliers for an Employee's Pay Rule.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| HolidayMultiplier | SMALLINT(5,0) | False |  | True |  | Used when an Employee works on a Scheduled Holiday. Options for this setting include: Regular, Overtime and Double time. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PAY_RULE_HOLIDAY_MULTIPLIER** on `HolidayMultiplier`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PAY_RULES_PAY_RULE_HOLIDAY_MULTIPLIER** — PAY_RULE -> PAY_RULE_HOLIDAY_MULTIPLIER (`HolidayMultiplier -> HolidayMultiplier`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
