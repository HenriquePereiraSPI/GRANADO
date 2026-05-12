# PRODUCT_MIN_MAX_LEVEL

**Database:** Operational

**Description:** This table containst the information about product replenishment. In this table the users defines the min, max and batch size of the replenishment for a product in a facility/ warehouse bin / partner. It is used to define if replenishment of a line or a bin is required and the quantity to replenish

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility valid for that min max level (empty means valid for all) |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Define to witch warehouse location the min max level applies, might be blank if the level is independent of the location |
| MaxQuantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| MinQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Minimum quantity of  products or packaging to be introduced |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Min Max level applies to a partner |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version) |
| ReplenishmentLotSize | DECIMAL(28,10) | True | (0.0) | False |  | Lot size of the replenishment, use as an increment/rounding of the quantity to replenish |
| Seasonality | DECIMAL(28,10) | True |  | False |  | For future use. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the min, max and increment |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse code (in addition to Facility). Implemented to define a min max quantity at warehouse level |
| Zone | NVARCHAR(20) | True |  | False | ZONE | Zone (populated if min max per Zone makes sense) |

## Primary Key

- **PK_PRODUCT_MIN_MAX_LEVELS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_MIN_MAX_LEVEL_FACILITY** — PRODUCT_MIN_MAX_LEVEL -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_MIN_MAX_LEVEL_PARTNER** — PRODUCT_MIN_MAX_LEVEL -> PARTNER (`PartnerID -> ID`)
- **FK_PRODUCT_MIN_MAX_LEVEL_UOM** — PRODUCT_MIN_MAX_LEVEL -> UOM (`UomCode -> UomCode`)
- **FK_PRODUCT_MIN_MAX_LEVEL_ZONE** — PRODUCT_MIN_MAX_LEVEL -> ZONE (`Zone -> Zone`)
- **FK_PRODUCT_MIN_MAX_LEVELS_PRODUCT** — PRODUCT_MIN_MAX_LEVEL -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_MIN_MAX_LEVELS_WAREHOUSE** — PRODUCT_MIN_MAX_LEVEL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PRODUCT_MIN_MAX_LEVELS_WAREHOUSE_LOCATION** — PRODUCT_MIN_MAX_LEVEL -> WAREHOUSE_LOCATION (`LocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_MIN_MAX_LEVEL_PARTNER** on `PartnerID`
- **IF_PRODUCT_MIN_MAX_LEVEL_ZONE** on `Zone`
- **IF_PRODUCT_MIN_MAX_LEVELS_PRODUCT** on `ProductID`
