# GEOGRAPHIC_REGION_CLASS

**Database:** Operational

**Description:** This table stores various user-defined Classes for Regions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Region Class. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Region Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_GEOGRAPHIC_REGION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_GEOGRAPHIC_REGION_GEO_REG_CLASS** — GEOGRAPHIC_REGION -> GEOGRAPHIC_REGION_CLASS (`GeographicRegionClassID -> ID`)

## Unique Indexes

- **UK_GEOGRAPHIC_REGION_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
