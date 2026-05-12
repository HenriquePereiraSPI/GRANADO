# PRODUCT_COMPONENT_FACILITY

**Database:** Operational

**Description:** Future use

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | For future use. |
| IncludeExclude | BIT | True |  | False |  | For future use. |
| ProductComponentID | INT(10,0) | False |  | True | PRODUCT_COMPONENT | For future use. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |

## Primary Key

- **PK_PRODUCT_COMPONENT_FACILITY** on `ProductComponentID, Facility`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_COMPONENT_FACILITY_COMPANY** — PRODUCT_COMPONENT_FACILITY -> COMPANY (`Company -> Company`)
- **FK_PRODUCT_COMPONENT_FACILITY_FACILITY** — PRODUCT_COMPONENT_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_COMPONENT_FACILITY_PRODUCT_COMPONENT** — PRODUCT_COMPONENT_FACILITY -> PRODUCT_COMPONENT (`ProductComponentID -> ID`)
- **FK_PRODUCT_COMPONENT_FACILITY_WAREHOUSE** — PRODUCT_COMPONENT_FACILITY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PRODUCT_COMPONENT_FACILITY_WAREHOUSE_LOCATION** — PRODUCT_COMPONENT_FACILITY -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
