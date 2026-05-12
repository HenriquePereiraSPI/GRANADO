# PRODUCT_FACILITY

**Database:** Operational

**Description:** Override the Product data for a given facility

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Codes System and its Attributes unique identifier |
| DefaultWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| DefaultWarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| DistributionProdStatus | INT(10,0) | True |  | False | SALES_PRODUCT_STATUS | For future use. |
| DistributionProdStatusValid | DATETIME | True |  | False |  | For future use. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attributes unique identifier |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Assignment of special values of a product to a facility |
| FacilityProdStatus | INT(10,0) | True |  | False | FACILITY_PRODUCT_STATUS | For future use. |
| FacilityProdStatusValid | DATETIME | True |  | False |  | For future use. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| IncludeExclude | BIT | True |  | False |  | For future use. |
| InspectionRequired | BIT | True |  | False |  | For future use. |
| LotTrackingCode | TINYINT(3,0) | False |  | False |  | Lot tracking flag, must be 4 Tracked, 0 no tracked (it overwrites the PRODUCT record) |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| ProductABCClassID | INT(10,0) | True |  | False | PRODUCT_ABC_CLASS | ID of the Product ABC Class. |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| ProductRevision | NVARCHAR(20) | True |  | False |  | The product revision |
| ProductRevisionCreateDate | DATETIME | True |  | False |  | For future use. |
| ProductRevisionDiscontinueDate | DATETIME | True |  | False |  | For future use. |
| ProductRevisionECOID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| ProductRevisionEffectiveDate | DATETIME | True |  | False |  | For future use. |
| SerialTrackingCode | TINYINT(3,0) | False |  | False |  | Indicates if the product is serial tracked (4) or not (0) Overwrites the record in PRODUCT |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PRODUCT_FACILITY** on `ProductID, Facility`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_FACILITY_CODE_DOMAIN_MANAGER** — PRODUCT_FACILITY -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_PRODUCT_FACILITY_CODE_FORMAT_TYPE** — PRODUCT_FACILITY -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_PRODUCT_FACILITY_EC_ORDER** — PRODUCT_FACILITY -> EC_ORDER (`ProductRevisionECOID -> ID`)
- **FK_PRODUCT_FACILITY_FACILITY** — PRODUCT_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_FACILITY_FACILITY_PRODUCT_STATUS** — PRODUCT_FACILITY -> FACILITY_PRODUCT_STATUS (`FacilityProdStatus -> FacilityProductStatus`)
- **FK_PRODUCT_FACILITY_PRODUCT** — PRODUCT_FACILITY -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_FACILITY_PRODUCT_ABC_CLASS** — PRODUCT_FACILITY -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)
- **FK_PRODUCT_FACILITY_SALES_PRODUCT_STATUS** — PRODUCT_FACILITY -> SALES_PRODUCT_STATUS (`DistributionProdStatus -> SalesProductStatus`)
- **FK_PRODUCT_FACILITY_SPECIFICATION** — PRODUCT_FACILITY -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_FACILITY_UNIT** — PRODUCT_FACILITY -> UNIT (`UnitID -> ID`)
- **FK_PRODUCT_FACILITY_WAREHOUSE** — PRODUCT_FACILITY -> WAREHOUSE (`Facility, DefaultWarehouse -> Facility, Warehouse`)
- **FK_PRODUCT_FACILITY_WAREHOUSE_LOCATION** — PRODUCT_FACILITY -> WAREHOUSE_LOCATION (`DefaultWarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_FACILITY_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_PRODUCT_FACILITY_EC_ORDER** on `ProductRevisionECOID`
- **IF_PRODUCT_FACILITY_FACILITY_PRODUCT_STATUS** on `FacilityProdStatus`
- **IF_PRODUCT_FACILITY_PRODUCT_ABC_CLASS** on `ProductABCClassID`
- **IF_PRODUCT_FACILITY_SALES_PRODUCT_STATUS** on `DistributionProdStatus`
- **IF_PRODUCT_FACILITY_SPECIFICATION** on `SpecificationID`
- **IF_PRODUCT_FACILITY_UNIT** on `UnitID`
