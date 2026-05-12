# ECA_RULE_HISTORY

**Database:** Operational

**Description:** The table stores history for ECA_RULE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AccessType | SMALLINT(5,0) | False |  | False |  | Type of Access (0-Allow, 1-Deny). |
| CitizenshipCountry | NVARCHAR(3) | True |  | False | COUNTRY | Citizenship of the Employee. |
| CountryCode | NVARCHAR(3) | True |  | False | COUNTRY | Code of the Country. |
| CountryOfBirth | NVARCHAR(3) | True |  | False | COUNTRY | Country of birth. |
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| GeographicRegionID | INT(10,0) | True |  | False | GEOGRAPHIC_REGION | Reference to the Region. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValidFrom | DATETIME | True |  | False |  | Valid from date. |
| ValidTo | DATETIME | True |  | False |  | Valid to date. |

## Primary Key

- **PK_ECA_RULE_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_RULE_HISTORY_CITIZENSHIP_COUNTRY** — ECA_RULE_HISTORY -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_ECA_RULE_HISTORY_COUNTRY** — ECA_RULE_HISTORY -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ECA_RULE_HISTORY_COUNTRY_BIRTH** — ECA_RULE_HISTORY -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_ECA_RULE_HISTORY_ECA** — ECA_RULE_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECA_RULE_HISTORY_GEOGRAPHIC_REGION** — ECA_RULE_HISTORY -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_ECA_RULE_HISTORY_UNIT** — ECA_RULE_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_RULE_HISTORY_CITIZENSHIP_COUNTRY** on `CitizenshipCountry`
- **IF_ECA_RULE_HISTORY_COUNTRY** on `CountryCode`
- **IF_ECA_RULE_HISTORY_COUNTRY_BIRTH** on `CountryOfBirth`
- **IF_ECA_RULE_HISTORY_ECA** on `EcaID`
- **IF_ECA_RULE_HISTORY_GEOGRAPHIC_REGION** on `GeographicRegionID`
- **IF_ECA_RULE_HISTORY_UNIT** on `UnitID`
