# CALENDAR_DAY

**Database:** Operational

**Description:** Stores Calendar details for every day of a calendar year. Each CALENDAR is expected to have 365 CALENDAR_DAY rows, one for each day of the year.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarDay | DATETIME | False |  | True |  | Day for the current record in the Calendar. |
| CalendarID | INT(10,0) | False |  | True | CALENDAR | ID of the Calendar record the table is associated with. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Earn code linked ot a specific Calendar day. It is used by Time Manager for work week computations. |
| Hours | DECIMAL(28,10) | True | (0.0) | False |  | Specifies the normal work hours for a specific calendar day (reference only). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CALENDAR_DAYS** on `CalendarID, CalendarDay`

## Foreign Keys (this table -> other)

- **FK_CALENDAR_DAYS_CALENDARS1** — CALENDAR_DAY -> CALENDAR (`CalendarID -> ID`)
- **FK_CALENDAR_DAYS_EARN_CODES1** — CALENDAR_DAY -> EARN_CODE (`EarnCode -> EarnCode`)

## Referenced By (other tables -> this)

- **FK_CALENDAR_DAY_DESCRIPTION_CALENDAR_DAY** — CALENDAR_DAY_DESCRIPTION -> CALENDAR_DAY (`CalendarID, CalendarDay -> CalendarID, CalendarDay`)
- **FK_EMPLOYEE_CALL_IN_SCHEDULE_CALENDAR_DAY** — EMPLOYEE_CALL_IN_SCHEDULE -> CALENDAR_DAY (`CalendarID, CalendarDay -> CalendarID, CalendarDay`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_CalendarDay** on `CalendarDay`
