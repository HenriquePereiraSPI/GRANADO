# QUALITY_DEFECT

**Database:** Operational

**Description:** This is the main table for Quality Defects. It stores all the data related to the defects as well as references to entities against which the given defect was created.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicRevisionID | INT(10,0) | True |  | False | CHARACTERISTIC_REVISION | The link to the Characteristic revision. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Description of Quality Defect. |
| ComponentLotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number of the component the Defect is reported against. |
| ComponentProductID | INT(10,0) | True |  | False | PRODUCT | The ComponentProductID column in the QUALITY_DEFECT table. |
| ComponentQuantity | DECIMAL(28,10) | True |  | False |  | The quantity of affected component in product's default UOM. |
| ComponentSerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial Number of the component the Defect is reported against. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The Container number to which the Quality Defect is assigned. |
| CorrectiveActionReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The corrective action code of the Quality Defect (REASON_CODE.ReasonType = 27 - Corrective Action Code). |
| DefectFacility | NVARCHAR(40) | True |  | False | FACILITY | The DefectFacility column in the QUALITY_DEFECT table. |
| DefectNo | NVARCHAR(20) | False |  | False |  | The unique number of the defect. |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code of the Quality Defect (REASON_CODE.ReasonType = 25 - Defect Code). |
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION | The Disposition to which the Quality Defect is assigned. |
| DispositionReadingID | BIGINT(19,0) | True |  | False | DISPOSITION_READING | The Disposition reading to which the Quality Defect is assigned. |
| DispositionTestID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST | The Disposition test to which the Quality Defect is assigned. |
| DispositionTestSampleID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST_SAMPLE | The reference to DISPOSITION_TEST_SAMPLE. |
| DocumentID | INT(10,0) | True |  | False | DOCUMENT | ID of the document linked to this quality defect. |
| DSModelInstanceID | NVARCHAR(80) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID found in a 3D model identifying the defect area. |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION | The Facility of the Disposition to which the Quality Defect is assigned. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Quality Defect. |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | The Disposition line to which the Quality Defect is assigned. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number to which the Quality Defect is assigned. |
| NoOfDefects | SMALLINT(5,0) | False |  | False |  | The number of defects if multiple defects are kept in a single record. |
| NoticeID | INT(10,0) | True |  | False | NOTICE | ID of the notice linked to this quality defect. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation to which the Quality Defect is assigned. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The Column PartnerID column in the QUALITY_DEFECT table. |
| PartnerRole | INT(10,0) | True |  | False | PARTNER_ROLE | The PartnerRole column in the QUALITY_DEFECT table. |
| ProcessComponentID | INT(10,0) | True |  | False | PROCESS_COMPONENT | ID of the process component linked to this quality defect. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | ID of the process linked to this quality defect. |
| ProcessSignatureID | INT(10,0) | True |  | False | PROCESS_SIGNATURE | ID of the process signature linked to this quality defect. |
| ProductComponentID | INT(10,0) | True |  | False | PRODUCT_COMPONENT | ID of the product component linked to this quality defect. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The product identifier to which the Quality Defect is assigned. |
| QualityDefectSeverityID | INT(10,0) | True | (1) | False | QUALITY_DEFECT_SEVERITY | The severity of the defect (Normal, Minor, Major, Critical). |
| QualityDefectStatusID | INT(10,0) | False |  | False | QUALITY_DEFECT_STATUS | The status of the Quality Defect (New, Opened, Cancelled, Closed). |
| QualityDefectType | SMALLINT(5,0) | False |  | False | QUALITY_DEFECT_TYPE | The Quality Defect type. |
| ReferenceQualityDefectID | INT(10,0) | True |  | False | QUALITY_DEFECT | The referenced Quality Defect if the defect is the result of another Quality Defect. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | ID of the resource class linked to this quality defect. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The Resource ID to which the Quality Defect is assigned. |
| RootCauseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The root cause code of the Quality Defect (REASON_CODE.ReasonType = 26 - Root Cause Code). |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial Number to which the Quality Defect is assigned. |
| SignatureHeaderDefinitionID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature Definition the quality defect is assigned to. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | The WIP Operation Step sequence number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipComponentID | INT(10,0) | True |  | False | WIP_COMPONENT | ID of the WIP component linked to this quality defect. |
| WipDataCollectID | BIGINT(19,0) | True |  | False | WIP_DATA_COLLECT | The link to WIP_DATA_COLLECT table. |
| WipDataCollectReadingID | BIGINT(19,0) | True |  | False | WIP_DATA_COLLECT_READING | The link to WIP_DATA_COLLECT_READING table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number to which the Quality Defect is assigned. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type to which the Quality Defect is assigned. |
| WorkInstructionRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | The reference to the Work Instruction revision. |

## Primary Key

- **PK_QUALITY_DEFECT** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_CHARACTERISTIC_REVISION** — QUALITY_DEFECT -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_QUALITY_DEFECT_COMPONENTPRODUCTID** — QUALITY_DEFECT -> PRODUCT (`ComponentProductID -> ID`)
- **FK_QUALITY_DEFECT_CONTAINER** — QUALITY_DEFECT -> CONTAINER (`Container -> Container`)
- **FK_QUALITY_DEFECT_DEFECTFACILITY** — QUALITY_DEFECT -> FACILITY (`DefectFacility -> Facility`)
- **FK_QUALITY_DEFECT_DISPOSITION** — QUALITY_DEFECT -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_QUALITY_DEFECT_DISPOSITION_LINE** — QUALITY_DEFECT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_QUALITY_DEFECT_DISPOSITION_READING** — QUALITY_DEFECT -> DISPOSITION_READING (`DispositionReadingID -> ID`)
- **FK_QUALITY_DEFECT_DISPOSITION_TEST** — QUALITY_DEFECT -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_QUALITY_DEFECT_DISPOSITION_TEST_SAMPLE** — QUALITY_DEFECT -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)
- **FK_QUALITY_DEFECT_DOCUMENT** — QUALITY_DEFECT -> DOCUMENT (`DocumentID -> ID`)
- **FK_QUALITY_DEFECT_FACILITY** — QUALITY_DEFECT -> FACILITY (`Facility -> Facility`)
- **FK_QUALITY_DEFECT_LOT_NO** — QUALITY_DEFECT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_QUALITY_DEFECT_LOT_NO1** — QUALITY_DEFECT -> LOT_NO (`ComponentProductID, ComponentLotNo -> ProductID, LotNo`)
- **FK_QUALITY_DEFECT_NOTICE** — QUALITY_DEFECT -> NOTICE (`NoticeID -> ID`)
- **FK_QUALITY_DEFECT_PARTNER** — QUALITY_DEFECT -> PARTNER (`PartnerID -> ID`)
- **FK_QUALITY_DEFECT_PARTNEROLE** — QUALITY_DEFECT -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_QUALITY_DEFECT_PROCESS** — QUALITY_DEFECT -> PROCESS (`ProcessID -> ID`)
- **FK_QUALITY_DEFECT_PROCESS_COMPONENT** — QUALITY_DEFECT -> PROCESS_COMPONENT (`ProcessComponentID -> ID`)
- **FK_QUALITY_DEFECT_PROCESS_SIGNATURE** — QUALITY_DEFECT -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_QUALITY_DEFECT_PRODUCT** — QUALITY_DEFECT -> PRODUCT (`ProductID -> ID`)
- **FK_QUALITY_DEFECT_PRODUCT_COMPONENT** — QUALITY_DEFECT -> PRODUCT_COMPONENT (`ProductComponentID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT** — QUALITY_DEFECT -> QUALITY_DEFECT (`ReferenceQualityDefectID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT_SEVERITY** — QUALITY_DEFECT -> QUALITY_DEFECT_SEVERITY (`QualityDefectSeverityID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT_STATUS** — QUALITY_DEFECT -> QUALITY_DEFECT_STATUS (`QualityDefectStatusID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT_TYPE** — QUALITY_DEFECT -> QUALITY_DEFECT_TYPE (`QualityDefectType -> QualityDefectType`)
- **FK_QUALITY_DEFECT_REASON_CODE** — QUALITY_DEFECT -> REASON_CODE (`DefectReasonCode -> ReasonCode`)
- **FK_QUALITY_DEFECT_REASON_CODE1** — QUALITY_DEFECT -> REASON_CODE (`RootCauseReasonCode -> ReasonCode`)
- **FK_QUALITY_DEFECT_REASON_CODE2** — QUALITY_DEFECT -> REASON_CODE (`CorrectiveActionReasonCode -> ReasonCode`)
- **FK_QUALITY_DEFECT_RESOURCE_** — QUALITY_DEFECT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_QUALITY_DEFECT_RESOURCE_CLASS** — QUALITY_DEFECT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_QUALITY_DEFECT_SERIAL_NO** — QUALITY_DEFECT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_SERIAL_NO1** — QUALITY_DEFECT -> SERIAL_NO (`ComponentProductID, ComponentSerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_SIGNATURE_HEADER_DEFINITION** — QUALITY_DEFECT -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_QUALITY_DEFECT_UNIT** — QUALITY_DEFECT -> UNIT (`UnitID -> ID`)
- **FK_QUALITY_DEFECT_WIP_COMPONENT** — QUALITY_DEFECT -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_QUALITY_DEFECT_WIP_DATA_COLLECT** — QUALITY_DEFECT -> WIP_DATA_COLLECT (`WipDataCollectID -> ID`)
- **FK_QUALITY_DEFECT_WIP_DATA_COLLECT_READING** — QUALITY_DEFECT -> WIP_DATA_COLLECT_READING (`WipDataCollectReadingID -> ID`)
- **FK_QUALITY_DEFECT_WIP_OPERATION** — QUALITY_DEFECT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_QUALITY_DEFECT_WIP_OPERATION_STEP** — QUALITY_DEFECT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_QUALITY_DEFECT_WIP_ORDER** — QUALITY_DEFECT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_QUALITY_DEFECT_WORK_INSTR_REVISION** — QUALITY_DEFECT -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_QUALITY_DEFECT** — CAPA_LINK -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_QUALITY_DEFECT_LOCATION_QUALITY_DEFECT** — QUALITY_DEFECT_LOCATION -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT** — QUALITY_DEFECT -> QUALITY_DEFECT (`ReferenceQualityDefectID -> ID`)
- **FK_QUALITY_DEFECT_QUALITY_DEFECT_VISUAL** — QUALITY_DEFECT_VISUAL -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LINK_QUALITY_DEFECT** — WIP_SIGNATURE_SIGNOFF_LINK -> QUALITY_DEFECT (`QualityDefectID -> ID`)

## Unique Indexes

- **UK_QUALITY_DEFECT** on `DefectNo`

## Non-Unique Indexes

- **IDX_QUALITY_DEFECT_CLASSIFICATIONID** on `ClassificationID`
- **IF_QUALITY_DEFECT_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_QUALITY_DEFECT_COMPONENTPRODUCTID** on `ComponentProductID`
- **IF_QUALITY_DEFECT_CONTAINER** on `Container`
- **IF_QUALITY_DEFECT_DISPOSITION_LINE** on `Disposition, Facility, LineSequenceNo`
- **IF_QUALITY_DEFECT_DISPOSITION_READING** on `DispositionReadingID`
- **IF_QUALITY_DEFECT_DISPOSITION_TEST** on `DispositionTestID`
- **IF_QUALITY_DEFECT_DISPOSITION_TEST_SAMPLE** on `DispositionTestSampleID`
- **IF_QUALITY_DEFECT_DOCUMENT** on `DocumentID`
- **IF_QUALITY_DEFECT_LOT_NO** on `LotNo, ProductID`
- **IF_QUALITY_DEFECT_LOT_NO1** on `ComponentLotNo, ComponentProductID`
- **IF_QUALITY_DEFECT_NOTICE** on `NoticeID`
- **IF_QUALITY_DEFECT_PARTNER** on `PartnerID`
- **IF_QUALITY_DEFECT_PARTNEROLE** on `PartnerRole`
- **IF_QUALITY_DEFECT_PROCESS** on `ProcessID`
- **IF_QUALITY_DEFECT_PROCESS_COMPONENT** on `ProcessComponentID`
- **IF_QUALITY_DEFECT_PROCESS_SIGNATURE** on `ProcessSignatureID`
- **IF_QUALITY_DEFECT_PRODUCT** on `ProductID`
- **IF_QUALITY_DEFECT_PRODUCT_COMPONENT** on `ProductComponentID`
- **IF_QUALITY_DEFECT_QUALITY_DEFECT** on `ReferenceQualityDefectID`
- **IF_QUALITY_DEFECT_QUALITY_DEFECT_SEVERITY** on `QualityDefectSeverityID`
- **IF_QUALITY_DEFECT_QUALITY_DEFECT_STATUS** on `QualityDefectStatusID`
- **IF_QUALITY_DEFECT_RESOURCE_** on `ResourceID`
- **IF_QUALITY_DEFECT_RESOURCE_CLASS** on `ResourceClassID`
- **IF_QUALITY_DEFECT_SERIAL_NO** on `SerialNo, ProductID`
- **IF_QUALITY_DEFECT_SERIAL_NO1** on `ComponentSerialNo, ComponentProductID`
- **IF_QUALITY_DEFECT_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderDefinitionID`
- **IF_QUALITY_DEFECT_UNIT** on `UnitID`
- **IF_QUALITY_DEFECT_WIP_COMPONENT** on `WipComponentID`
- **IF_QUALITY_DEFECT_WIP_DATA_COLLECT** on `WipDataCollectID`
- **IF_QUALITY_DEFECT_WIP_DATA_COLLECT_READING** on `WipDataCollectReadingID`
- **IF_QUALITY_DEFECT_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_QUALITY_DEFECT_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
- **IF_QUALITY_DEFECT_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
