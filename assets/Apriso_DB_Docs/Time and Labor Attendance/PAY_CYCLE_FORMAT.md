# PAY_CYCLE_FORMAT

**Database:** Operational

**Description:** Stores the available types of Pay Cycles that Apriso supports. Currently there are two Pay Cycle Types supported: Weekly and 9/80.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PayCycleFormat | SMALLINT(5,0) | False |  | True |  | List of the valid Pay Cycle Formats, including the following: Weekly, 9/80, BiWeekly and 6/2 (BiWeekly and 6/2 are not implemented). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PAY_CYCLE_FORMATS** on `PayCycleFormat`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PAY_CYCLES_PAY_CYCLE_FORMATS** — PAY_CYCLE -> PAY_CYCLE_FORMAT (`PayCycleFormat -> PayCycleFormat`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
