# LOT_NO

**Database:** Operational

**Description:** This table stores the master list of Lot Numbers (or batches) for all the products in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualPotencyPercent | DECIMAL(28,10) | True |  | False |  | The actual potency of the lot. |
| AvailabilityDate | DATETIME | True | (getutcdate()) | False |  | The date of availability of the lot (not used by Business Components). |
| BestAfterDate | DATETIME | True |  | False |  | The best after date. |
| BestBeforeDate | DATETIME | True |  | False |  | The best before date. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | The unique identifier of the code system and its attributes. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | The unique identifier of the domain manager and its attributes. |
| ExpirationDate | DATETIME | True |  | False |  | The expiration date of the lot. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The assignment of the lot record to a Facility. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| LastInspectionDateTime | DATETIME | True | (getutcdate()) | False |  | The date of the last inspection of the lot. |
| LotNo | NVARCHAR(40) | False |  | True |  | The Lot Number (usually not the supplier lot). Must be unique per ProductID. |
| NextInspectionDateTime | DATETIME | True | (getutcdate()) | False |  | The next inspection date of the lot. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The ID of the partner that provided the lot (used for traceability). |
| PartnerLotNo | NVARCHAR(40) | True |  | False |  | The partner Lot Number (external number). |
| ProductID | INT(10,0) | False |  | True | PRODUCT_GRADE | The reference to a product (product number and product version). |
| ReferenceText | NVARCHAR(60) | True |  | False |  | For future use. |
| RotationDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_LOT_NUMBER** on `LotNo, ProductID`

## Foreign Keys (this table -> other)

- **FK_LOT_NO_CODE_DOMAIN_MANAGER** — LOT_NO -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_LOT_NO_CODE_FORMAT_TYPE** — LOT_NO -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_LOT_NO_FACILITY** — LOT_NO -> FACILITY (`Facility -> Facility`)
- **FK_LOT_NO_PARTNER** — LOT_NO -> PARTNER (`PartnerID -> ID`)
- **FK_LOT_NO_PRODUCT_GRADE** — LOT_NO -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_LOT_NO_SPECIFICATION** — LOT_NO -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_LOT_NO_UNIT** — LOT_NO -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_LOT_NO** — ALERT_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_ASSET_LOT_NO** — ASSET -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CAPA_LINK_LOT_NO** — CAPA_LINK -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CHECK_LIST_HISTORY_LOT_NO** — CHECK_LIST_HISTORY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CODE_CLASS_NUMBER_LOT_NO** — CODE_CLASS_NUMBER -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CODE_SERIAL_NUMBER_LOT_NO** — CODE_SERIAL_NUMBER -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CODE_UPC_LOT_NO** — CODE_UPC -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CONTAINMENT_LOT_NO_LOT_NO** — CONTAINMENT_LOT_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COST_DETAIL_LOT_NO** — COST_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COST_LOT_NO** — COST -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COUNT_LOCK_LOT_NO** — COUNT_LOCK -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_CONTENT_LOT_NO** — DISPOSITION_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_LINE_LOT_NO** — DISPOSITION_LINE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_LOT_NO** — DISPOSITION -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_READING_LOT_NO** — DISPOSITION_READING -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_TEST_REASON_LOT_NO** — DISPOSITION_TEST_REASON -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_EPC_TAG_EPC_LOT_NO** — EPC_TAG -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_GENEALOGY_LOT_NO** — GENEALOGY -> LOT_NO (`ParentProductID, ParentLotNo -> ProductID, LotNo`)
- **FK_GENEALOGY_LOT_NO1** — GENEALOGY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INBOUND_ORDER_DISTRIBUTION_LOT_NO** — INBOUND_ORDER_DISTRIBUTION -> LOT_NO (`ProductID, RequestedLotID -> ProductID, LotNo`)
- **FK_INTERNAL_CONTENT_LOT_NO** — MATERIAL_ORDER_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INTERNAL_ORDER_DETAIL_LOT_NO** — MATERIAL_ORDER_DETAIL -> LOT_NO (`ProductID, RequestedLotNo -> ProductID, LotNo`)
- **FK_INVENTORY_COUNT_LOT_NO** — INVENTORY_COUNT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INVENTORY_LOT_NO** — INVENTORY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INVENTORY2_LOT_NO** — INVENTORY2 -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_KANBAN_CARD_LOTNO** — KANBAN_CARD -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LABEL_CONTENT_LotNo** — LABEL_CONTENT -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_LABOR_DETAILS_LOT_NO** — LABOR_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LABOR_LOT_NO** — LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LITE_LABOR_LOT_NO** — LITE_LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LOT_NO_HOLDS_LOT_NO** — LOT_NO_HOLD -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_LOT_NO_INVENTORY_BALANCES_LOT_NO** — LOT_NO_INVENTORY_BALANCE -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_MATERIAL_ORDER_LOT_NO_LOT_NO** — MATERIAL_ORDER_LOT_NO -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_ORDER_DETAIL_LOT_NO** — ORDER_DETAIL -> LOT_NO (`ProductID, RequestedLotNo -> ProductID, LotNo`)
- **FK_ORDER_SCHEDULE_LOT_NO** — ORDER_SCHEDULE -> LOT_NO (`ProductID, RequestedLotID -> ProductID, LotNo`)
- **FK_QUALITY_DEFECT_LOT_NO** — QUALITY_DEFECT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_QUALITY_DEFECT_LOT_NO1** — QUALITY_DEFECT -> LOT_NO (`ComponentProductID, ComponentLotNo -> ProductID, LotNo`)
- **FK_RECEIPT_CONTENT_LOT_NO** — RECEIPT_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RECEIPT_DETAIL_LOT_NO** — RECEIPT_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RESOURCE_CONTENT_LOT_NO** — RESOURCE_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RESOURCE_LABOR_DETAIL_LOT_NO** — RESOURCE_LABOR_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RESOURCE_LABOR_LOT_NO** — RESOURCE_LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SAMPLE_LOT_NO** — SAMPLE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SERIAL_NO_LOT_NO** — SERIAL_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SOFT_INVENTORY2_ALLOCATION_LOT_NO** — SOFT_INVENTORY2_ALLOCATION -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_TASK_MATERIAL_USE_LOT_NO** — TASK_MATERIAL_USE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WEIGH_HEADER_LOT_NO** — WEIGH_HEADER -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WEIGH_LINE_LOT_NO** — WEIGH_LINE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_CONTENT_DETAIL_LOT_NO** — WIP_CONTENT_DETAIL -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WIP_CONTENT_LOT_NO** — WIP_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_DATA_COLLECT_READING_LOT_NO** — WIP_DATA_COLLECT_READING -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_LOT_NO_STATUS_LOT_NO** — WIP_LOT_NO_STATUS -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_ORDER_CONTENT_LOT_NO** — WIP_ORDER_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_ORDER_LOTS_LOT_NO** — WIP_ORDER_LOT -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WIP_ORDER_SERIAL_NO_LOT_NO** — WIP_ORDER_SERIAL_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_SIGNATURE_SIGNOFF_LOT_NO** — WIP_SIGNATURE_SIGNOFF -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_STEP_CONTENT_LOT_NO** — WIP_STEP_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_LOT_NO_CLASSIFICATIONID** on `ClassificationID`
- **IF_LOT_NO_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_LOT_NO_EXPDATE_LOT_PRODUCT** on `ExpirationDate, LotNo, ProductID`
- **IF_LOT_NO_PARTNER** on `PartnerID`
- **IF_LOT_NO_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_LOT_NO_SPECIFICATION** on `SpecificationID`
- **IF_LOT_NO_UNIT** on `UnitID`
- **IXD_ProductID_PartnerID** on `ProductID, PartnerID`
