# CAPA_LINK

**Database:** Operational

**Description:** This table contains links between CAPA records and affected system entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAID | INT(10,0) | False |  | False | CAPA | The ID of the parent record from the CAPA table. |
| CAPAStepID | INT(10,0) | True |  | False | CAPA_STEP | The ID of the step defined in the CAPA_STEP table. |
| CAPATaskID | INT(10,0) | True |  | False | CAPA_TASK | The ID of the task from the CAPA_TASK table. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The Container linked to the CAPA record. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | The Department linked to the CAPA record. |
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION | The Disposition number linked to the CAPA record. |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION | The Facility linked to the CAPA record. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number linked to the CAPA record. |
| OperationID | INT(10,0) | True |  | False | OPERATION | The ID of the Operation linked to the CAPA record. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation linked to the CAPA record. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The ID of the Partner linked to the CAPA record. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The ID of the Product linked to the CAPA record. |
| ProductionLineNo | NVARCHAR(40) | True |  | False | WIP_LINE | The Production Line linked to the CAPA record. |
| QualityDefectID | INT(10,0) | True |  | False | QUALITY_DEFECT | The ID of the Quality Defect linked to the CAPA record. |
| RelatedCAPAID | INT(10,0) | True |  | False | CAPA | The link to related CAPA record. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The ID of the Resource linked to the CAPA record. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial Number linked to the CAPA record. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | The WIP Operation Step sequence number. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The Warehouse linked to the CAPA record. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The ID of the Warehouse Location linked to the CAPA record. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order Number linked to the CAPA record. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order Type linked to the CAPA record. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center linked to the CAPA record. |
| Zone | NVARCHAR(20) | True |  | False | ZONE | The Zone linked to the CAPA record. |

## Primary Key

- **PK_CAPA_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_LINK_CAPA_01** — CAPA_LINK -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_LINK_CAPA_02** — CAPA_LINK -> CAPA (`RelatedCAPAID -> ID`)
- **FK_CAPA_LINK_CAPA_STEP** — CAPA_LINK -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_LINK_CAPA_TASK** — CAPA_LINK -> CAPA_TASK (`CAPATaskID -> ID`)
- **FK_CAPA_LINK_CONTAINER** — CAPA_LINK -> CONTAINER (`Container -> Container`)
- **FK_CAPA_LINK_DEPARTMENT** — CAPA_LINK -> DEPARTMENT (`Department -> Department`)
- **FK_CAPA_LINK_DISPOSITION** — CAPA_LINK -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_CAPA_LINK_FACILITY** — CAPA_LINK -> FACILITY (`Facility -> Facility`)
- **FK_CAPA_LINK_LOT_NO** — CAPA_LINK -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CAPA_LINK_OPERATION** — CAPA_LINK -> OPERATION (`OperationID -> ID`)
- **FK_CAPA_LINK_PARTNER** — CAPA_LINK -> PARTNER (`PartnerID -> ID`)
- **FK_CAPA_LINK_PRODUCT** — CAPA_LINK -> PRODUCT (`ProductID -> ID`)
- **FK_CAPA_LINK_QUALITY_DEFECT** — CAPA_LINK -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_CAPA_LINK_RESOURCE** — CAPA_LINK -> RESOURCE_ (`ResourceID -> ID`)
- **FK_CAPA_LINK_SERIAL_NO** — CAPA_LINK -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CAPA_LINK_WAREHOUSE** — CAPA_LINK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CAPA_LINK_WAREHOUSE_LOCATION** — CAPA_LINK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_CAPA_LINK_WIP_LINE** — CAPA_LINK -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_CAPA_LINK_WIP_OPERATION** — CAPA_LINK -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_CAPA_LINK_WIP_OPERATION_STEP** — CAPA_LINK -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_CAPA_LINK_WIP_ORDER** — CAPA_LINK -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_CAPA_LINK_WORK_CENTER** — CAPA_LINK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CAPA_LINK_ZONE** — CAPA_LINK -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_CAPA_LINK_CLASSIFICATIONID** on `ClassificationID`
- **IF_CAPA_LINK_CAPA_01** on `CAPAID`
- **IF_CAPA_LINK_CAPA_02** on `RelatedCAPAID`
- **IF_CAPA_LINK_CAPA_STEP** on `CAPAStepID`
- **IF_CAPA_LINK_CAPA_TASK** on `CAPATaskID`
- **IF_CAPA_LINK_CONTAINER** on `Container`
- **IF_CAPA_LINK_DISPOSITION** on `Disposition, Facility`
- **IF_CAPA_LINK_LOT_NO** on `LotNo, ProductID`
- **IF_CAPA_LINK_OPERATION** on `OperationID`
- **IF_CAPA_LINK_PARTNER** on `PartnerID`
- **IF_CAPA_LINK_PRODUCT** on `ProductID`
- **IF_CAPA_LINK_QUALITY_DEFECT** on `QualityDefectID`
- **IF_CAPA_LINK_RESOURCE** on `ResourceID`
- **IF_CAPA_LINK_SERIAL_NO** on `SerialNo, ProductID`
- **IF_CAPA_LINK_WIP_LINE** on `ProductionLineNo`
- **IF_CAPA_LINK_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_CAPA_LINK_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
- **IF_CAPA_LINK_ZONE** on `Zone`
