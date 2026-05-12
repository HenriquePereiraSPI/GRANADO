# SERIAL_NO

**Database:** Operational

**Description:** This table contains the Serial Numbers present in the system per product.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualPotencyPercent | DECIMAL(28,10) | True |  | False |  | The actual potency of the serial. |
| AvailabilityDate | DATETIME | True | (getutcdate()) | False |  | The date of availability of the Serial Number, (not used by the Business Components). |
| BestAfterDate | DATETIME | True |  | False |  | The best after date. |
| BestBeforeDate | DATETIME | True |  | False |  | The best before date. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| ExpirationDate | DATETIME | True |  | False |  | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| InActive | BIT | True |  | False |  | For future use. |
| LastInspectionDateTime | DATETIME | True | (getutcdate()) | False |  | The last inspection date of the serial (For For future use..). |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The assignment of a serial to a lot. |
| NextInspectionDateTime | DATETIME | True | (getutcdate()) | False |  | The next inspection date of the serial. |
| PartnerID | INT(10,0) | True |  | False |  | The link to the partner that delivered the serial. |
| PartnerProductNo | NVARCHAR(80) | True |  | False |  | The partner product number. |
| PartnerSerialNo | NVARCHAR(40) | True |  | False |  | The partner Serial Number (external number). |
| ProductID | INT(10,0) | False |  | True | LOT_NO | The reference to the product (product number and product version). |
| RotationDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| SerialNo | NVARCHAR(40) | False |  | True |  | The Serial Number. Must be unique per ProductID. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_SERIAL_NO** on `ProductID, SerialNo`

## Foreign Keys (this table -> other)

- **FK_SERIAL_NO_COMPANY** — SERIAL_NO -> COMPANY (`Company -> Company`)
- **FK_SERIAL_NO_GRADE** — SERIAL_NO -> GRADE (`GradeID -> ID`)
- **FK_SERIAL_NO_LOT_NO** — SERIAL_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SERIAL_NO_PRODUCT** — SERIAL_NO -> PRODUCT (`ProductID -> ID`)
- **FK_SERIAL_NO_SPECIFICATION** — SERIAL_NO -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_SERIAL_NO_UNIT** — SERIAL_NO -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_SERIALNO** — ALERT_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_ASSET_SERIAL_NO** — ASSET -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CAPA_LINK_SERIAL_NO** — CAPA_LINK -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CHECK_LIST_HISTORY_SERIAL_NO** — CHECK_LIST_HISTORY -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CODE_SERIAL_NUMBER_SERIAL_NO** — CODE_SERIAL_NUMBER -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CONTAINMENT_SERIAL_NO_SERIAL_NO** — CONTAINMENT_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_COST_DETAIL_SERIAL_NO** — COST_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_COST_SERIAL_NO** — COST -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_CONTENT_SERIAL_NO** — DISPOSITION_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_LINE_SERIAL_NO** — DISPOSITION_LINE -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_READING_SERIAL_NO** — DISPOSITION_READING -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_DISPOSITION_SERIAL_NO** — DISPOSITION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_TEST_REASON_SERIAL_NO** — DISPOSITION_TEST_REASON -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_EPC_TAG_SERIAL_NO** — EPC_TAG -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_GENEALOGY_SERIAL_NO** — GENEALOGY -> SERIAL_NO (`ParentProductID, ParentSerialNo -> ProductID, SerialNo`)
- **FK_GENEALOGY_SERIAL_NO1** — GENEALOGY -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY_COUNT_SERIAL_NO_SERIAL_NO** — INVENTORY_COUNT_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY_SERIAL_NO_SERIAL_NO** — INVENTORY_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY_SERIAL_TRANSIT_SERIAL_NO** — INVENTORY_SERIAL_TRANSIT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY2_SERIAL_NO** — INVENTORY2 -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_KANBAN_CARD_SerialNo** — KANBAN_CARD -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_LABEL_CONTENT_SerialNo** — LABEL_CONTENT -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_LABOR_DETAILS_SERIAL_NO1** — LABOR_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_LITE_LABOR_SERIAL_NO** — LITE_LABOR -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_MATERIAL_CONTENT_SERIAL_NO_SERIAL_NO** — MATERIAL_CONTENT_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_MATERIAL_ORDER_SERIAL_NO_SERIAL_NO** — MATERIAL_ORDER_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_SERIAL_NO** — QUALITY_DEFECT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_SERIAL_NO1** — QUALITY_DEFECT -> SERIAL_NO (`ComponentProductID, ComponentSerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_SERIAL_NO** — QUALITY_DEFECT_VISUAL_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RECEIPT_CONTAINER_SERIAL_NO_SERIAL_NO1** — RECEIPT_CONTAINER_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RESOURCE_CONTENT_SERIAL_NO** — RESOURCE_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RESOURCE_LABOR_DETAIL_SERIAL_NO** — RESOURCE_LABOR_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RESOURCE_SERIAL_NO_D_SERIAL_NO** — RESOURCE_SERIAL_NO_D -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RESOURCE_SERIAL_NO_SERIAL_NO** — RESOURCE_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SAMPLE_SERIAL_NO** — SAMPLE -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SEQUENCE_QUEUE_ITEM_SERIAL_NO** — SEQUENCE_QUEUE_ITEM -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SERIAL_NO_HOLDS_SERIAL_NO1** — SERIAL_NO_HOLD -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SOFT_INVENTORY2_ALLOCATION_SERIAL_NO** — SOFT_INVENTORY2_ALLOCATION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_TASK_MATERIAL_USE_SERIAL_NO** — TASK_MATERIAL_USE -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_UNIT_ANNOTATION_SERIAL_NO** — UNIT_ANNOTATION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_DATA_COLLECT_READING_SERIAL_NO** — WIP_DATA_COLLECT_READING -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_WIP_ORDER_CONTENT_SERIAL_SERIAL_NO** — WIP_ORDER_CONTENT_SERIAL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_ORDER_SERIAL_NO_SERIAL_NO** — WIP_ORDER_SERIAL_NO -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_WIP_SERIAL_NO_CONTENT_SERIAL_NO** — WIP_SERIAL_NO_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SERIAL_NO_SERIAL_NO** — WIP_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SERIAL_NO_STATUS_SERIAL_NO** — WIP_SERIAL_NO_STATUS -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SIGNATURE_SIGNOFF_SERIAL_NO** — WIP_SIGNATURE_SIGNOFF -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_STEP_SERIAL_CONTENT_SERIAL_NO** — WIP_STEP_SERIAL_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_SERIAL_NO_CLASSIFICATIONID** on `ClassificationID`
- **IF_SERIAL_NO_GRADE** on `GradeID`
- **IF_SERIAL_NO_LOT_NO** on `LotNo, ProductID`
- **IF_SERIAL_NO_PRODUCT** on `PartnerID`
- **IF_SERIAL_NO_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_SERIAL_NO_SPECIFICATION** on `SpecificationID`
- **IF_SERIAL_NO_UNIT** on `UnitID`
