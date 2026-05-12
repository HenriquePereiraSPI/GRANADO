# DISPOSITION

**Database:** Operational

**Description:** This table contains the master information about the Quality Inspections (Dispositions) to be performed on the given product quantity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR | True |  | False |  | The free-text (no translation) description of the Disposition. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| CorrectiveActionReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| CurrentDispositionSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| Disposition | NVARCHAR(40) | False |  | True |  | The number that uniquely identifies the Quality Inspection within the Facility. |
| DispositionClassID | INT(10,0) | True |  | False | DISPOSITION_CLASS | The user-defined class of the Quality Inspection |
| DispositionType | SMALLINT(5,0) | True |  | False | DISPOSITION_TYPE | The system-defined type of Quality Inspection. Complex Assembly uses value 7 (In-Process Inspection). |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | The user status of the Disposition (Quality Inspection) defined in DISPOSITION_USER_STATUS table |
| EvaluationInspectorID | INT(10,0) | True |  | False | EMPLOYEE | ID of the employee. |
| ExecutionOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | Indicates the order that executes the Quality Inspection that exists in the WIP_ORDER table. |
| ExecutionOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | The type of Execution Order referenced as ExecutionOrderNo. This is a link to the the WIP_ORDER table. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | The Facility that owns the Quality Inspection (Disposition). |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | The grade of the product that is the subject of the Quality Inspection referenced by ProductID. |
| InspectionPlanID | INT(10,0) | True |  | False | INSPECTION_PLAN | The link to the inspection plan on which the created Disposition was based. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | For future use. |
| MRBFinishDate | DATETIME | True |  | False |  | For future use. |
| MRBFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| MRBStartDate | DATETIME | True |  | False |  | For future use. |
| MRBStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The reference to the WIP Operation (in addition to the WIP Order and WIP Order type information) (the type of Production Order used in case of Quality Inspection during production). |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | The line number of the order used as the reference to the Quality Inspection (e.g., used when a single Disposition [Quality Inspection] is created for each line of the Purchase Order). |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | The order number used as the reference to the Quality Inspection (e.g., in case of Quality Inspection at Good Receipt, this is the Purchase Order number; in case of Quality Inspection at Delivery, it is the Delivery/Shipping Order number). |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | The type of order used as the reference to the Quality Inspection (e.g., in case of Quality Inspection at Good Receipt, it is the Purchase Order number). |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The identifier of the customer or vendor used for Quality Inspection during procurement or delivery. |
| PartnerRole | INT(10,0) | True |  | False | PARTNER_ROLE | The partner Role. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The product that is the subject of the Quality Inspection. |
| QualityGateID | INT(10,0) | True |  | False | QUALITY_GATE | The link to QUALITY_GATE. |
| QualityGateSeqItemID | INT(10,0) | True |  | False | QUALITY_GATE_SEQ_ITEM | The link to QUALITY_GATE_SEQ_ITEM. |
| QualityStatusCode | NVARCHAR(20) | True |  | False | REASON_CODE | The final quality status of the Quality Inspection. References the Reason Code of the type Quality Status Code (REASON_CODE). |
| Quantity | DECIMAL(28,10) | True |  | False |  | The size (population) of the Quality Inspection expressed in the unit of measure defined in the UomCode field. If the Quality Inspection is Good Receipt, this is the Good Receipt quantity. |
| ReferenceDisposition | NVARCHAR(40) | True |  | False |  | The referenced Disposition (in case the Disposition record was created by duplicating another Disposition). |
| ReferenceFacility | NVARCHAR(40) | True |  | False |  | The referenced Facility (in case the Disposition record was created by duplicating another Disposition). |
| ResourceLifeCycle | INT(10,0) | True |  | False |  | For future use. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | For future use. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | For future use. |
| Rework | BIT | True | ((0)) | False |  | The rework. |
| RootCauseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| SampleFinishDate | DATETIME | True |  | False |  | For future use. |
| SampleFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | The identifier of the default sample plan (SAMPLE_PLAN) used for the Quality Inspection. |
| SampleSize | DECIMAL(28,10) | True |  | False |  | For future use. |
| SampleStartDate | DATETIME | True |  | False |  | For future use. |
| SampleStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SamplingProcedureID | INT(10,0) | True |  | False | SAMPLING_PROCEDURE | The link to the sampling procedure to be used to calculate the sample size. |
| ScheduledFinishDate | DATETIME | True |  | False |  | The scheduled end date and time of the Quality Inspection. |
| ScheduledStartDate | DATETIME | True |  | False |  | The scheduled start date and time of the Quality Inspection. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | For future use. |
| SeverityID | INT(10,0) | True |  | False | DISPOSITION_SEVERITY | The severity of the Quality Inspection. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| Status | SMALLINT(5,0) | False | (9) | False | DISPOSITION_STATUS | The system status of the Quality Inspection. |
| StepSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| TestEvaluationDate | DATETIME | True |  | False |  | The current UTC time. |
| TestingFinishDate | DATETIME | True |  | False |  | The actual end date and time of the Quality Inspection. |
| TestingFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| TestingStartDate | DATETIME | True |  | False |  | The actual start date and time of the Quality Inspection. |
| TestingStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(20) | True |  | False |  | The unit of measure for the size of the Quality Inspection. |
| WipOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | For future use. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The Production Order number used in case of Quality Inspection during production. |
| WiporderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The type of Production Order used in case of Quality Inspection during production. |

## Primary Key

- **PK_DISPOSITION** on `Facility, Disposition`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_CONTAINER** — DISPOSITION -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_DISPOSITION_CLASS** — DISPOSITION -> DISPOSITION_CLASS (`DispositionClassID -> ID`)
- **FK_DISPOSITION_DISPOSITION_ORDER_DETAIL** — DISPOSITION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPOSITION_DISPOSITION_SEVERITY** — DISPOSITION -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_DISPOSITION_DISPOSITION_STATUS** — DISPOSITION -> DISPOSITION_STATUS (`Status -> Status`)
- **FK_DISPOSITION_DISPOSITION_TYPE** — DISPOSITION -> DISPOSITION_TYPE (`DispositionType -> DispositionType`)
- **FK_DISPOSITION_DISPOSITION_USER_STATUS** — DISPOSITION -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_EMPLOYEE** — DISPOSITION -> EMPLOYEE (`MRBFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE_INSPECTOR** — DISPOSITION -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_EMPLOYEE1** — DISPOSITION -> EMPLOYEE (`MRBStartEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE2** — DISPOSITION -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE3** — DISPOSITION -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE4** — DISPOSITION -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE5** — DISPOSITION -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_FACILITY** — DISPOSITION -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_INSPECTION_PLAN** — DISPOSITION -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_DISPOSITION_LOT_NO** — DISPOSITION -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_ORDER_HEADER** — DISPOSITION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_DISPOSITION_PARTNER** — DISPOSITION -> PARTNER (`PartnerID -> ID`)
- **FK_DISPOSITION_PARTNEROLE** — DISPOSITION -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_DISPOSITION_PRODUCT** — DISPOSITION -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_PRODUCT_GRADE** — DISPOSITION -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_DISPOSITION_QUALITY_GATE** — DISPOSITION -> QUALITY_GATE (`QualityGateID -> ID`)
- **FK_DISPOSITION_QUALITY_GATE_SEQ_ITEM** — DISPOSITION -> QUALITY_GATE_SEQ_ITEM (`QualityGateSeqItemID -> ID`)
- **FK_DISPOSITION_REASON_CODE** — DISPOSITION -> REASON_CODE (`RootCauseReasonCode -> ReasonCode`)
- **FK_DISPOSITION_REASON_CODE1** — DISPOSITION -> REASON_CODE (`CorrectiveActionReasonCode -> ReasonCode`)
- **FK_DISPOSITION_REASON_CODE2** — DISPOSITION -> REASON_CODE (`QualityStatusCode -> ReasonCode`)
- **FK_DISPOSITION_RESOURCE_** — DISPOSITION -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_DISPOSITION_SAMPLE_PLAN** — DISPOSITION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_DISPOSITION_SAMPLING_PROCEDURE** — DISPOSITION -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_DISPOSITION_SERIAL_NO** — DISPOSITION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_SPECIFICATION** — DISPOSITION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_DISPOSITION_UNIT** — DISPOSITION -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_WIP_OPERATION** — DISPOSITION -> WIP_OPERATION (`WipOrderNo, WiporderType, WipOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_WIP_ORDER** — DISPOSITION -> WIP_ORDER (`WipOrderNo, WiporderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_WIP_ORDER_TYPE** — DISPOSITION -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_DISPOSITION_WIP_ORDER1** — DISPOSITION -> WIP_ORDER (`ExecutionOrderNo, ExecutionOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_DISPOSITION** — CAPA_LINK -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_CONTACT_DISPOSITION1** — DISPOSITION_CONTACT -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_CONTENT_DISPOSITION** — DISPOSITION_CONTENT -> DISPOSITION (`Disposition, DispositionFacility -> Disposition, Facility`)
- **FK_DISPOSITION_GROUP_CODE_DISPOSITION** — DISPOSITION_GROUP_CODE -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_LINE_DISPOSITION** — DISPOSITION_LINE -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION** — DISPOSITION_RESOURCE -> DISPOSITION (`Disposition, Facility -> Disposition, Facility`)
- **FK_DISPOSITION_TEST_DISPOSITION** — DISPOSITION_TEST -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_TEST_REASON_DISPOSITION** — DISPOSITION_TEST_REASON -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_QUALITY_DEFECT_DISPOSITION** — QUALITY_DEFECT -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DISPOSITION_CLASSIFICATIONID** on `ClassificationID`
- **IF_DISPOSITION_CONTAINER** on `Container`
- **IF_DISPOSITION_DISPOSITION** on `ReferenceDisposition, ReferenceFacility`
- **IF_DISPOSITION_DISPOSITION_CLASS** on `DispositionClassID`
- **IF_DISPOSITION_DISPOSITION_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_DISPOSITION_DISPOSITION_SEVERITY** on `SeverityID`
- **IF_DISPOSITION_DISPOSITION_STATUS** on `Status`
- **IF_DISPOSITION_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
- **IF_DISPOSITION_INSPECTION_PLAN** on `InspectionPlanID`
- **IF_DISPOSITION_LOT_NO** on `LotNo, ProductID`
- **IF_DISPOSITION_PARTNER** on `PartnerID`
- **IF_DISPOSITION_PARTNEROLE** on `PartnerRole`
- **IF_DISPOSITION_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_DISPOSITION_QUALITY_GATE** on `QualityGateID`
- **IF_DISPOSITION_QUALITY_GATE_SEQ_ITEM** on `QualityGateSeqItemID`
- **IF_DISPOSITION_RESOURCE_** on `ResourceName, ResourceType`
- **IF_DISPOSITION_SAMPLE_PLAN** on `SamplePlanID`
- **IF_DISPOSITION_SAMPLING_PROCEDURE** on `SamplingProcedureID`
- **IF_DISPOSITION_SERIAL_NO** on `SerialNo, ProductID`
- **IF_DISPOSITION_SPECIFICATION** on `SpecificationID`
- **IF_DISPOSITION_UNIT** on `UnitID`
- **IF_DISPOSITION_WIP_OPERATION** on `WipOrderNo, WiporderType, WipOprSequenceNo`
- **IF_DISPOSITION_WIP_ORDER1** on `ExecutionOrderNo, ExecutionOrderType`
- **IXD_OrderNo_OrderType_Facility_OprSequenceNo** on `OrderNo, OrderType, Facility, OprSequenceNo`
