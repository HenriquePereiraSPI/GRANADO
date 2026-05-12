# PRODUCT

**Database:** Operational

**Description:** This table stores all the valid products for a Company.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ABCFlag | NVARCHAR(10) | True |  | False |  | This column is obsolete. Use the PRODUCT_ABC_CLASS table instead. |
| AlternateUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | The unique identifier of the codes system and its attributes. |
| CommodityCode | NVARCHAR(40) | True |  | False |  | The commodity code of the product. |
| CrossDistribProdStatus | INT(10,0) | True |  | False | SALES_PRODUCT_STATUS | For future use. |
| CrossDistribProdStatusValid | DATETIME | True |  | False |  | For future use. |
| CrossFacilityProdStatus | INT(10,0) | True |  | False | FACILITY_PRODUCT_STATUS | For future use. |
| CrossFacilityProdStatusValid | DATETIME | True |  | False |  | For future use. |
| CycleCountFlag | BIT | True | (1) | False |  | This column is obsolete. Use the COUNT_FREQUENCY and COUNT_FREQUENCY_LINK tables instead. |
| DefaultOverReceivePercentage | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| DefaultProductRevision | BIT | True |  | False |  | For future use. |
| DefaultUomCode | NVARCHAR(10) | True |  | False | UOM | The default UOM of the product in the system. |
| DefaultWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| DefaultWarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | The unique identifier of the domain manager and its attributes. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility to which the product belongs. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| FractionAllowed | BIT | False | (0) | False |  | Defines if the decimal of the basic unit of measure is allowed or not when dealing with this product in inventory. If not, the system will perform rounding. |
| FUID | NVARCHAR(36) | True |  | False |  | The unique identifier of the entity across multiple DELMIA Apriso instances. |
| HarmonizedTariffCode | NVARCHAR(35) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the product and its attributes. |
| InspectionRequired | BIT | True | (0) | False |  | For future use. |
| KanbanFlag | BIT | True | (0) | False |  | For future use. |
| LastCycleCountDate | DATETIME | True |  | False |  | This column is obsolete. Use the COUNT_FREQUENCY and COUNT_FREQUENCY_LINK tables instead. |
| LotTrackingCode | TINYINT(3,0) | False |  | False |  | Indicates if the product is lot-tracked (4) or not (0). |
| NextCycleCountDate | DATETIME | True |  | False |  | This column is obsolete. Use the COUNT_FREQUENCY and COUNT_FREQUENCY_LINK tables instead. |
| OAProductID | INT(10,0) | True |  | False |  | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | The owner Facility linked to the product. |
| PLMEntityID | INT(10,0) | True |  | False | PLM_ENTITY | The link to the PLM Entity. |
| ProductABCClassID | INT(10,0) | True |  | False | PRODUCT_ABC_CLASS | ID of the Product ABC Class. |
| ProductInventoryType | SMALLINT(5,0) | True |  | False | PRODUCT_INVENTORY_TYPE | The type of product for inventory management purposes. |
| ProductNo | NVARCHAR(80) | False |  | False |  | The product number. |
| ProductRevision | NVARCHAR(20) | True | ('1.0') | False |  | The product revision |
| ProductRevisionCreateDate | DATETIME | True |  | False |  | For future use. |
| ProductRevisionDiscontinueDate | DATETIME | True |  | False |  | The end date of the validity period of a product/revision. |
| ProductRevisionECOID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| ProductRevisionEffectiveDate | DATETIME | True |  | False |  | The start date of the validity period of a product/revision. |
| RevisionControlFlag | BIT | False | (0) | False |  | Indicates if the entity is revision controlled. Not used. |
| RotationDays | INT(10,0) | True |  | False |  | For future use. |
| RotationType | NVARCHAR(5) | True |  | False | ROTATION_TYPE | For future use. |
| SerialTrackingCode | TINYINT(3,0) | False |  | False |  | Indicates if the product is serial-tracked (4) or not (0). Overwritten by the record in PRODUCT_FACILITY. |
| ShelfLifeDays | INT(10,0) | True |  | False |  | For future use. |
| SKUCode | NVARCHAR(50) | True |  | False |  | The SKU code. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UNNACode | NVARCHAR(40) | True |  | False |  | For future use. |

## Primary Key

- **PK_PRODUCT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_CODE_DOMAIN_MANAGER** — PRODUCT -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_PRODUCT_CODE_FORMAT_TYPE** — PRODUCT -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_PRODUCT_EC_ORDER** — PRODUCT -> EC_ORDER (`ProductRevisionECOID -> ID`)
- **FK_PRODUCT_FACILITY** — PRODUCT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_FACILITY_PRODUCT_STATUS** — PRODUCT -> FACILITY_PRODUCT_STATUS (`CrossFacilityProdStatus -> FacilityProductStatus`)
- **FK_PRODUCT_FACILITY1** — PRODUCT -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PRODUCT_PLM_ENTITY** — PRODUCT -> PLM_ENTITY (`PLMEntityID -> ID`)
- **FK_PRODUCT_PRODUCT_ABC_CLASS** — PRODUCT -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)
- **FK_PRODUCT_PRODUCT_INVENTORY_TYPE** — PRODUCT -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_PRODUCT_ROTATION_TYPE** — PRODUCT -> ROTATION_TYPE (`RotationType -> RotationType`)
- **FK_PRODUCT_SALES_PRODUCT_STATUS** — PRODUCT -> SALES_PRODUCT_STATUS (`CrossDistribProdStatus -> SalesProductStatus`)
- **FK_PRODUCT_SPECIFICATION** — PRODUCT -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_UNIT** — PRODUCT -> UNIT (`UnitID -> ID`)
- **FK_PRODUCT_UOM** — PRODUCT -> UOM (`DefaultUomCode -> UomCode`)
- **FK_PRODUCT_UOM1** — PRODUCT -> UOM (`AlternateUomCode -> UomCode`)
- **FK_PRODUCT_WAREHOUSE** — PRODUCT -> WAREHOUSE (`Facility, DefaultWarehouse -> Facility, Warehouse`)
- **FK_PRODUCT_WAREHOUSE_LOCATION** — PRODUCT -> WAREHOUSE_LOCATION (`DefaultWarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_PRODUCT** — ALERT_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_ASSET_PRODUCT** — ASSET -> PRODUCT (`ProductID -> ID`)
- **FK_CAPA_LINK_PRODUCT** — CAPA_LINK -> PRODUCT (`ProductID -> ID`)
- **FK_CAPACITY_RESOURCE_PRODUCT** — CAPACITY_RESOURCE -> PRODUCT (`ProductId -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_PRODUCT** — CHECK_LIST_CHECK_POINT -> PRODUCT (`ProductID -> ID`)
- **FK_CHECK_LIST_HISTORY_PRODUCT** — CHECK_LIST_HISTORY -> PRODUCT (`ProductID -> ID`)
- **FK_CODE_CLASS_NUMBER_PRODUCT** — CODE_CLASS_NUMBER -> PRODUCT (`ProductID -> ID`)
- **FK_CODE_UPC_PRODUCT** — CODE_UPC -> PRODUCT (`ProductID -> ID`)
- **FK_COMPONENT_PRODUCTID** — COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_COMPONENT_SUBSTITUTE_PRODUCT** — COMPONENT_SUBSTITUTE -> PRODUCT (`SubstituteProductID -> ID`)
- **FK_COST_DETAIL_PRODUCT** — COST_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_COST_PRODUCT** — COST -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_PRODUCT** — COUNT_DISPOSITION_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_DOCUMENT_PRODUCT** — COUNT_DOCUMENT -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_PRODUCT** — COUNT_FREQUENCY_LINK -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_LOCK_PRODUCT** — COUNT_LOCK -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_RECORD_PRODUCT** — COUNT_RECORD -> PRODUCT (`ProductID -> ID`)
- **FK_CROSS_DOCK_LINK_PRODUCT** — CROSS_DOCK_LINK -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_CONTENT_PRODUCT** — DISPOSITION_CONTENT -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_LINE_PRODUCT** — DISPOSITION_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_PRODUCT** — DISPOSITION -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_READING_PRODUCT** — DISPOSITION_READING -> PRODUCT (`ProductID -> ID`)
- **FK_ECA_OBJECT_HISTORY_PRODUCT** — ECA_OBJECT_HISTORY -> PRODUCT (`ProductID -> ID`)
- **FK_ECA_OBJECT_PRODUCT** — ECA_OBJECT -> PRODUCT (`ProductID -> ID`)
- **FK_ECM_ORDER_PRODUCT_PRODUCT_DESTINATION_ID** — ECM_ORDER_PRODUCT -> PRODUCT (`ProductDestinationID -> ID`)
- **FK_ECM_ORDER_PRODUCT_PRODUCT_ID** — ECM_ORDER_PRODUCT -> PRODUCT (`ProductID -> ID`)
- **FK_EMPLOYEE_HAZMAT_EXPOSURE_PRODUCT** — EMPLOYEE_HAZMAT_EXPOSURE -> PRODUCT (`ProductID -> ID`)
- **FK_EPC_TAG_EPC_PRODUCT** — EPC_TAG -> PRODUCT (`ProductID -> ID`)
- **FK_EXTERNAL_SEQUENCE_PRODUCT** — EXTERNAL_SEQUENCE -> PRODUCT (`ProductID -> ID`)
- **FK_INBOUND_ORDER_DISTRIBUTIONS_PRODUCT** — INBOUND_ORDER_DISTRIBUTION -> PRODUCT (`ProductID -> ID`)
- **FK_INSPECTION_DETERMINATION_PRODUCT** — INSPECTION_DETERMINATION -> PRODUCT (`ProductID -> ID`)
- **FK_INTERNAL_ORDER_DETAIL_PRODUCT** — MATERIAL_ORDER_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY_CONTAINER_PRODUCT** — INVENTORY_CONTAINER -> PRODUCT (`LastProductID -> ID`)
- **FK_INVENTORY_COUNT_PRODUCT** — INVENTORY_COUNT -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY_PRODUCT** — INVENTORY -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY_SERIAL_NO_PRODUCT** — INVENTORY_SERIAL_NO -> PRODUCT (`LastProductID -> ID`)
- **FK_INVENTORY2_PRODUCT** — INVENTORY2 -> PRODUCT (`ProductID -> ID`)
- **FK_KANBAN_CARD_ProductID** — KANBAN_CARD -> PRODUCT (`ProductID -> ID`)
- **FK_LABEL_CONTENT_ProductID** — LABEL_CONTENT -> PRODUCT (`ProductID -> ID`)
- **FK_LABOR_PRODUCT** — LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_LITE_LABOR_PRODUCT** — LITE_LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_MRP1_PRODUCT** — MRP1 -> PRODUCT (`ProductID -> ID`)
- **FK_OPERATION_COMPONENT_PRODUCT** — OPERATION_COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_PACKAGING_INSTR_DETAIL_PRODUCT** — PACKAGING_INSTR_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PRODUCT** — PACKAGING_INSTR_USAGE -> PRODUCT (`ProductID -> ID`)
- **FK_PARTNER_PRODUCT_PRODUCT** — PARTNER_PRODUCT -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_ALIAS_PRODUCT** — PRODUCT_ALIAS -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_BOM_PRODUCT** — PRODUCT_PROCESS -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_CHARACTERISTIC_PRODUCT** — PRODUCT_CHARACTERISTIC -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_COMPONENT_PRODUCT** — PRODUCT_COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_COST_PRODUCT** — PRODUCT_COST -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_CUSTOM_FIELDS_PRODUCT** — PRODUCT_CUSTOM_FIELDS -> PRODUCT (`ID -> ID`)
- **FK_PRODUCT_DIMENSIONS_PRODUCT** — PRODUCT_DIMENSION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_ECCN_HISTORY_PRODUCT** — PRODUCT_ECCN_HISTORY -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_ECCN_PRODUCT** — PRODUCT_ECCN -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_FACILITY_PRODUCT** — PRODUCT_FACILITY -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_GRADE_PRODUCT** — PRODUCT_GRADE -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_GROUP_PRODUCT** — PRODUCT_GROUP -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_HOLDS_PRODUCT** — PRODUCT_HOLD -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_INFORMATION_PRODUCT** — PRODUCT_INFORMATION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_INVENTORY_BALANCES_PRODUCT** — PRODUCT_INVENTORY_BALANCE -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_LOCATION_RESTRICTION_PRODUCT** — PRODUCT_LOCATION_RESTRICTION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_MIN_MAX_LEVELS_PRODUCT** — PRODUCT_MIN_MAX_LEVEL -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_PRODUCT** — PRODUCT_SUBSTITUTE -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_PRODUCT_1** — PRODUCT_SUBSTITUTE -> PRODUCT (`SubstituteProductID -> ID`)
- **FK_PRODUCT_UNIT_REGION** — UNIT_REGION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_UOM_CONVERSION_PRODUCT** — PRODUCT_UOM_CONVERSION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_UOM_PRODUCT** — PRODUCT_UOM -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_WAREHOUSE_RESTRICTION_PRODUCT** — PRODUCT_WAREHOUSE_RESTRICTION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_ZONE_RESTRICTION_PRODUCT** — PRODUCT_ZONE_RESTRICTION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCTION_VERSION_PRODUCT** — PRODUCTION_VERSION -> PRODUCT (`ProductID -> ID`)
- **FK_QUALITY_DEFECT_COMPONENTPRODUCTID** — QUALITY_DEFECT -> PRODUCT (`ComponentProductID -> ID`)
- **FK_QUALITY_DEFECT_PRODUCT** — QUALITY_DEFECT -> PRODUCT (`ProductID -> ID`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_PRODUCT** — QUALITY_DEFECT_VISUAL_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_RECIPE_PRODUCT** — RECIPE -> PRODUCT (`ProductID -> ID`)
- **FK_REPLENISH_STRATEGY_CONTENT_ProductID** — REPLENISH_STRATEGY_CONTENT -> PRODUCT (`ProductID -> ID`)
- **FK_RESOURCE_D_PRODUCT_ID** — RESOURCE_D -> PRODUCT (`ProductID -> ID`)
- **FK_RESOURCE_LABOR_PRODUCT** — RESOURCE_LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_RESOURCE_PRODUCT_ID** — RESOURCE_ -> PRODUCT (`ProductID -> ID`)
- **FK_SAFETY_INSTRUCTION_USAGE_PRODUCT** — SAFETY_INSTRUCTION_USAGE -> PRODUCT (`ProductID -> ID`)
- **FK_SAMPLE_PRODUCT** — SAMPLE -> PRODUCT (`ProductID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_PRODUCT** — SEQUENCE_QUEUE_ITEM -> PRODUCT (`ProductID -> ID`)
- **FK_SEQUENCE_SCHEDULE_DETAIL_PRODUCT** — SEQUENCE_SCHEDULE_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_SERIAL_NO_PRODUCT** — SERIAL_NO -> PRODUCT (`ProductID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_PRODUCT** — SOFT_INVENTORY2_ALLOCATION -> PRODUCT (`ProductID -> ID`)
- **FK_SPC_CHART_PRODUCT** — SPC_CHART -> PRODUCT (`ProductID -> ID`)
- **FK_UNIT_ANNOTATION_PRODUCT** — UNIT_ANNOTATION -> PRODUCT (`ProductID -> ID`)
- **FK_UNIT_USAGE_PRODUCT** — UNIT_USAGE -> PRODUCT (`ProductID -> ID`)
- **FK_WEIGH_HEADER_PRODUCT** — WEIGH_HEADER -> PRODUCT (`ProductID -> ID`)
- **FK_WEIGH_LINE_PRODUCT** — WEIGH_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_CHECK_LIST_PRODUCT** — WIP_CHECK_LIST -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_COMPONENT_PRODUCT** — WIP_COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_CONTENT_DETAIL_PRODUCT** — WIP_CONTENT_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_PRODUCT** — WIP_DATA_COLLECT_READING -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_REQ_COMPONENT_LOT_NO_PRODUCT** — WIP_REQ_COMPONENT_LOT_NO -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_REQ_COMPONENT_SERIAL_NO_PRODUCT** — WIP_REQ_COMPONENT_SERIAL_NO -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_PRODUCT** — WIP_SIGNATURE_SIGNOFF -> PRODUCT (`ProductID -> ID`)
- **FK_WORK_ORDER_PRODUCT** — WIP_ORDER -> PRODUCT (`ProductID -> ID`)

## Unique Indexes

- **UK_PRODUCT** on `FUID`
- **UK_PRODUCT_PRODUCT_NO_PRODUCT_REVISION** on `ProductNo, ProductRevision`

## Non-Unique Indexes

- **IDX_PRODUCT_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_PRODUCT_DefaultWarehouseLocationID** on `DefaultWarehouseLocationID`
- **IF_PRODUCT_DSID** on `DSID`
- **IF_PRODUCT_EC_ORDER** on `ProductRevisionECOID`
- **IF_PRODUCT_FACILITY_PRODUCT_STATUS** on `CrossFacilityProdStatus`
- **IF_PRODUCT_PLM_ENTITY** on `PLMEntityID`
- **IF_PRODUCT_PRODUCT_ABC_CLASS** on `ProductABCClassID`
- **IF_PRODUCT_SALES_PRODUCT_STATUS** on `CrossDistribProdStatus`
- **IF_PRODUCT_SPECIFICATION** on `SpecificationID`
- **IF_PRODUCT_UNIT** on `UnitID`
- **IXD_ProductNo** on `ProductNo`
