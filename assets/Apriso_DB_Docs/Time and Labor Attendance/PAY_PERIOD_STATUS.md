# PAY_PERIOD_STATUS

**Database:** Operational

**Description:** Contains definitions for the valid statuses for any given Pay Period.  Each Pay Period must exist in one of these statuses.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Status | SMALLINT(5,0) | False |  | True |  | Master list of Statuses for Pay Periods. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PAY_PERIOD_STATUS** on `Status`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PAY_PERIODS_PAY_PERIOD_STATUS** — PAY_PERIOD -> PAY_PERIOD_STATUS (`Status -> Status`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
