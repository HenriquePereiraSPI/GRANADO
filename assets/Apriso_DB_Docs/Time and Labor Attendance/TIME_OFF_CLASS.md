# TIME_OFF_CLASS

**Database:** Operational

**Description:** The TIME_OFF_CLASS table is used to store settings to control how a PAY_RULE_EARN_CODE should behave when hours are computed in Time Manager where a specific earn code is used.  This would generally be used for non-working hours like Holiday, Sick and Vacation.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeOffClass | SMALLINT(5,0) | False |  | True |  | Specifies how this earn code affects overtime. The options include: Affects Overtime, No effect on overtime, Unpaid time off |

## Primary Key

- **PK_TIME_OFF_CLASSES** on `TimeOffClass`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PAY_RULE_EARN_CODE_TIME_OFF_CLASS** — PAY_RULE_EARN_CODE -> TIME_OFF_CLASS (`TimeOffClass -> TimeOffClass`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
