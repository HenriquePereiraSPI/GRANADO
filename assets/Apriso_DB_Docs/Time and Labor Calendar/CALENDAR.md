# CALENDAR

**Database:** Operational

**Description:** Stores all the available Calendars in Apriso. Calendars are organized by Facility and Calendar Year.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarSystemTypeID | SMALLINT(5,0) | True |  | False | CALENDAR_SYSTEM_TYPE | Master list of valid calendar system types. |
| CalendarType | SMALLINT(5,0) | True |  | False | CALENDAR_TYPE | Type of the calendar. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | Company the calendar is associated with. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility the calendar is defined for. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique ID of the CALENDAR used to uniquely identify signatures between servers. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ShiftsPerDay | SMALLINT(5,0) | True | (1) | False |  | Number of shifts there are per day for the given Calendar. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone in which the calendar is kept. |

## Primary Key

- **PK_CALENDARS** on `ID`

## Foreign Keys (this table -> other)

- **FK_CALENDAR_CALENDAR_SYSTEM_TYPE** — CALENDAR -> CALENDAR_SYSTEM_TYPE (`CalendarSystemTypeID -> ID`)
- **FK_CALENDAR_TIMEZONE** — CALENDAR -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_CALENDARS_CALENDAR_TYPE** — CALENDAR -> CALENDAR_TYPE (`CalendarType -> CalendarType`)
- **FK_CALENDARS_COMPANY** — CALENDAR -> COMPANY (`Company -> Company`)
- **FK_CALENDARS_FACILITY** — CALENDAR -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_CALENDAR_DAYS_CALENDARS1** — CALENDAR_DAY -> CALENDAR (`CalendarID -> ID`)
- **FK_DEPARTMENT_CALENDAR** — DEPARTMENT -> CALENDAR (`CalendarID -> ID`)
- **FK_DEPARTMENT_MAINTENANCE_CALENDAR** — DEPARTMENT -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_EMPLOYEE_CALENDAR_CALENDARS1** — EMPLOYEE_CALENDAR -> CALENDAR (`CalendarID -> ID`)
- **FK_FACILITY_CALENDAR** — FACILITY -> CALENDAR (`CalendarID -> ID`)
- **FK_FACILITY_MAINTENANCE_CALENDAR** — FACILITY -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_PARTNER_RELATIONSHIP_CALENDAR** — PARTNER_RELATIONSHIP -> CALENDAR (`CalendarID -> ID`)
- **FK_RESOURCE__CALENDAR** — RESOURCE_ -> CALENDAR (`CalendarID -> ID`)
- **FK_RESOURCE_MAINTENANCE_CALENDAR** — RESOURCE_ -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_WAREHOUSE_CALENDAR** — WAREHOUSE -> CALENDAR (`CalendarID -> ID`)
- **FK_WAREHOUSE_LOCATION_CALENDAR** — WAREHOUSE_LOCATION -> CALENDAR (`CalendarID -> ID`)
- **FK_WORK_CENTER_CALENDAR** — WORK_CENTER -> CALENDAR (`CalendarID -> ID`)
- **FK_WORK_CENTER_MAINTENANCE_CALENDAR** — WORK_CENTER -> CALENDAR (`MaintenanceCalendarID -> ID`)

## Unique Indexes

- **UK_CALENDAR** on `FUID`

## Non-Unique Indexes

- **IXD_Company_Facility** on `Company, Facility`
- **IXD_Facility_CalendarType** on `Facility, CalendarType`
