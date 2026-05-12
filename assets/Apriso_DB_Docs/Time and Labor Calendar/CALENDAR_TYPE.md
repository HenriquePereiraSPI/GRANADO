# CALENDAR_TYPE

**Database:** Operational

**Description:** Helps the user differentiate calendars.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarType | SMALLINT(5,0) | False |  | True |  | Type of the Calendar. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CALENDAR_TYPE** on `CalendarType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CALENDARS_CALENDAR_TYPE** — CALENDAR -> CALENDAR_TYPE (`CalendarType -> CalendarType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
