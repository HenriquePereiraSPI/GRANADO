# GEOGRAPHIC_REGION

**Database:** Operational

**Description:** This table stores various user-defined Regions defined in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| GeographicRegionClassID | INT(10,0) | True |  | False | GEOGRAPHIC_REGION_CLASS | Class of the Region. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Region. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Region. |
| ParentGeographicRegionID | INT(10,0) | True |  | False | GEOGRAPHIC_REGION | Reference to the parent Region. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_GEOGRAPHIC_REGION** on `ID`

## Foreign Keys (this table -> other)

- **FK_GEOGRAPHIC_REGION_GEO_REG_CLASS** — GEOGRAPHIC_REGION -> GEOGRAPHIC_REGION_CLASS (`GeographicRegionClassID -> ID`)
- **FK_REGION_PARENTREGION** — GEOGRAPHIC_REGION -> GEOGRAPHIC_REGION (`ParentGeographicRegionID -> ID`)

## Referenced By (other tables -> this)

- **FK_ADDRESS_GEOGRAPHIC_REGION** — ADDRESS -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_ECA_RULE_GEOGRAPHIC_REGION** — ECA_RULE -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_ECA_RULE_HISTORY_GEOGRAPHIC_REGION** — ECA_RULE_HISTORY -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_REGION_PARENTREGION** — GEOGRAPHIC_REGION -> GEOGRAPHIC_REGION (`ParentGeographicRegionID -> ID`)

## Unique Indexes

- **UK_GEOGRAPHIC_REGION** on `Name`

## Non-Unique Indexes

- **IF_GEOGRAPHIC_REGION_GEO_REG_CLASS** on `GeographicRegionClassID`
- **IF_REGION_PARENTREGION** on `ParentGeographicRegionID`
