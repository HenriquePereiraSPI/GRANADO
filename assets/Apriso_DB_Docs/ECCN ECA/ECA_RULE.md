# ECA_RULE

**Database:** Operational

**Description:** The table stores linking between ECA and geographic region or country.

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

## Primary Key

- **PK_ECA_RULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_RULE_CITIZENSHIP_COUNTRY** — ECA_RULE -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_ECA_RULE_COUNTRY** — ECA_RULE -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ECA_RULE_COUNTRY_BIRTH** — ECA_RULE -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_ECA_RULE_ECA** — ECA_RULE -> ECA (`EcaID -> ID`)
- **FK_ECA_RULE_GEOGRAPHIC_REGION** — ECA_RULE -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_ECA_RULE_UNIT** — ECA_RULE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_RULE_CITIZENSHIP_COUNTRY** on `CitizenshipCountry`
- **IF_ECA_RULE_COUNTRY** on `CountryCode`
- **IF_ECA_RULE_COUNTRY_BIRTH** on `CountryOfBirth`
- **IF_ECA_RULE_ECA** on `EcaID`
- **IF_ECA_RULE_GEOGRAPHIC_REGION** on `GeographicRegionID`
- **IF_ECA_RULE_UNIT** on `UnitID`
