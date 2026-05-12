# COUNTRY

**Database:** Operational

**Description:** Defines valid countries in the world and their unique Country Code.  Each country is then associated with a Calendar System type, default Language and Time Zone (if only one exists).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarSystemTypeID | SMALLINT(5,0) | True |  | False | CALENDAR_SYSTEM_TYPE | Type of the Calendar System the country uses. |
| CountryCode | NVARCHAR(3) | False |  | True |  | Code of the Country. |
| DefaultLanguageID | INT(10,0) | True |  | False |  | Default language code. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time Zone for the country (null if the country has multiple time zones). |

## Primary Key

- **PK_COUNTRY** on `CountryCode`

## Foreign Keys (this table -> other)

- **FK_COUNTRY_CALENDAR_SYSTEM_TYPE** — COUNTRY -> CALENDAR_SYSTEM_TYPE (`CalendarSystemTypeID -> ID`)
- **FK_COUNTRY_TIMEZONE** — COUNTRY -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **FK_ADDRESS_COUNTRY** — ADDRESS -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_CURRENCY_COUNTRY** — CURRENCY -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ECA_RULE_CITIZENSHIP_COUNTRY** — ECA_RULE -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_ECA_RULE_COUNTRY** — ECA_RULE -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ECA_RULE_COUNTRY_BIRTH** — ECA_RULE -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_ECA_RULE_HISTORY_CITIZENSHIP_COUNTRY** — ECA_RULE_HISTORY -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_ECA_RULE_HISTORY_COUNTRY** — ECA_RULE_HISTORY -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ECA_RULE_HISTORY_COUNTRY_BIRTH** — ECA_RULE_HISTORY -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_EMPLOYEE_CITIZENSHIP_COUNTRY** — EMPLOYEE_CITIZENSHIP -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_EMPLOYEE_COUNTRY_1** — EMPLOYEE -> COUNTRY (`CurrentCountry -> CountryCode`)
- **FK_EMPLOYEE_COUNTRY_2** — EMPLOYEE -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_EMPLOYEE_COUNTRY_BIRTH** — EMPLOYEE -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_LAND_COUNTRY** — LAND -> COUNTRY (`CountryCode -> CountryCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
