# ADDRESS_TRANSLATION

**Database:** Operational

**Description:** Stores all parts of an address that can differ between languages.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | ID of the Address involved. |
| AddressLineFifth | NVARCHAR(40) | True |  | False |  | Line 5 of the Details section of the address (in a given language). |
| AddressLineFirst | NVARCHAR(40) | True |  | False |  | Line 1 of the Details section of the address (in a given language). |
| AddressLineFourth | NVARCHAR(40) | True |  | False |  | Line 4 of the Details section of the address (in a given language). |
| AddressLineSecond | NVARCHAR(40) | True |  | False |  | Line 2 of the Details section of the address (in a given language). |
| AddressLineThird | NVARCHAR(40) | True |  | False |  | Line 3 of the Details section of the address (in a given language). |
| AddressNameFirst | NVARCHAR(40) | True |  | False |  | Line 1 of the Name section of the address (in a given language). |
| AddressNameSecond | NVARCHAR(40) | True |  | False |  | Line 2 of the Name section of the address (in a given language). |
| AddressNameThird | NVARCHAR(40) | True |  | False |  | Line 3 of the Name section of the address (in a given language). |
| AddressTypeOther | NVARCHAR(70) | True |  | False |  | For future use. |
| AgencyOther | NVARCHAR(80) | True |  | False |  | For future use. |
| Building | NVARCHAR(40) | True |  | False |  | For future use. |
| City | NVARCHAR(40) | True |  | False |  | City of the address. |
| County | NVARCHAR(40) | True |  | False |  | County of the address. |
| Department | NVARCHAR(40) | True |  | False |  | For future use. |
| District | NVARCHAR(40) | True |  | False |  | District of the address. |
| LanguageID | INT(10,0) | False |  | True |  | ID for the language of the entity. |
| Region | NVARCHAR(40) | True |  | False |  | For future use. |
| Street | NVARCHAR(40) | True |  | False |  | Street of the address. |
| StreetSupplementFirst | NVARCHAR(40) | True |  | False |  | 1st supplementary line for the street of the address. |
| StreetSupplementSecond | NVARCHAR(40) | True |  | False |  | 2nd supplementary line for the street of the address. |

## Primary Key

- **PK_ADDRESS_TRANSLATIONS** on `AddressID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_ADDRESS_TRANSLATIONS_ADDRESSES** — ADDRESS_TRANSLATION -> ADDRESS (`AddressID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
