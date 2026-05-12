# CreateDispositionFromInspectionPlan_v2

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to create Disposition record that represents the header of the quality inspection. It has similar set of inputs as CreateDispositon BC plus additional ones. Based on the Inspection Plan structure it creates a new disposition with lines and disposition tests attached.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionNumber | Char | No | Sequence number of the Quality Inspection Disposition (QID). If not provided it is generated automatically based on SEQUENCE_ table (DISPOSITION is a sequence name). |
| Input | Type | Integer | Yes | Type of the QID:(1) Disposition Created by Sample Plan; (2) Disposition Created by Ad-Hoc Defect Detection; (3) Defect; (4) Test Results; (5) Inspection at Good Receipt for Purchase Order; (6) Inspection at Good Receipt from Production; (7) In-process Inspection; (8) Inspection at Good Issue; (9) Audit; (10) Recurring Inspection; (11) Maintenance Inspection; (12) Template; (13) Miscellaneous Inspection. |
| Input | ClassID | Integer | No | Class of the QID, customized form of grouping quality inspections. |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |
| Input | ProductID | Integer | Yes | Identifier of a product being the subject of Inspection. |
| Input | GradeID | Integer | No | Inspected product grade identifier. |
| Input | Severity | Integer | No | Severity of the Inspection: (1) Normal; (2) Minor; (3) Major; (4) Critical. |
| Input | ScheduledStart | DateTime | No | Scheduled start date and time of the Inspection. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | InspectionPlanID | Integer | Yes | Inspection Plan the Disposition will be created for |
| Input | ScheduledEnd | DateTime | No | Scheduled end date and time of the Inspection. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | Quantity | Decimal | Yes | Size of the QUI (size of the population of material being a subject of inspection). |
| Input | UomCode | Char | Yes | Unit of measure for the size of the Disposition. |
| Input | Comment | Char | No | Free-text (no translation) description of the Disposition. |
| Input | SamplingProcedureID | Integer | No | The ID of the sampling procedure. |
| Input | OrderNo | Char | No | Order Number Disposition is assigned to. |
| Input | OrderType | Integer | No | Order Type (e.g. Delivery or Purchase) to which Disposition is assigned. |
| Input | OrderLineNo | Integer | No | Order Line Number. |
| Input | WipOrderNo | Char | No | Number of WIP Order linked to the Disposition. |
| Input | WipOrderType | Integer | No | Type of WIP Order linked to the Disposition. |
| Input | PartnerID | Integer | No | Customer or Vendor Identifier. |
| Input | ExecutionOrderNo | Char | No | Inspection Order. |
| Input | ExecutionOrderType | Integer | No | Inspection Order Type. |
| Input | QualiteGateID | Integer | No | Quality Gate ID |
| Input | QualityGateSeqItemID | Integer | No | Quality Gate Sequence Item ID |
| Output | DispositionNumberCreated | Char | No | Unique identifier of the newly created Disposition. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| PartnerRole | Integer | The Customer or Vendor Role. |

## Validations

- If SamplingProcedureID is provided, the system validates that it exists in the SAMPLING_PROCEDURE table; it will be persisted into the DISPOSITION table. 
- Type must exist in DISPOSITION_TYPE table. 
- ClassID must exist in DISPOSITION_CLASS table (if specified). 
- Facility must exist in FACILITY table. 
- If DispositionNumber is provided there can be no Disposition with the same number in system (DISPOSITION table). 
- ProductID must exist in PRODUCT table. 
- GradeID must exist in PRODUCT_GRADE for the given Product and Grade. 
- Severity must exist in DISPOSITION_SEVERITY table. 
- If ScheduledEnd and ScheduledStart were provided (and have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001) the first one must be greater than the second one. 
- Quantity must be greater than 0. 
- UomCode must exist in UOM table. 
- OrderType 
 
- must be greater than 0 (when OrderNo is specified), 
- must exist in WIP_ORDER_TYPE table. 
 
- OrderNo must exist in ORDER_HEADER table. 
- If OrderNo is specified and OrderLineNo is greater than 0, the record must exist in ORDER_DETAIL table. 
- WipOrderType: 
 
- must be greater than 0 when WipOrderNo is provided, 
- must exist in WIP_ORDER_TYPE table. 
 
- If WipOrderNo is provided it must exist in WIP_ORDER table. 
- PartnerID if provided must exist in PARTNER table. 
- If PartnerRole is provided, the system validates that it exists in the PARTNER_ROLE table. 
- QualityGateID must exist in QUALITY_GATE table. 
- QualityGateSeqItemID must exist in QUALITY_GATE_SEQ_ITEM table. 
- ExecutionOrderType: 
 
- must be greater than 0 when ExecutionOrderNo is provided, 
- must exist in WIP_ORDER_TYPE table. 
 
- ExecutionOrderNo: 
 
- if provided must exist in WIP_ORDER table, 
- cannot be of Completed status (WIP_ORDER. WorkOrderStatus).

## System Processing

The system:
 
 
- Creates Disposition based on the provided inputs (the same as for CreateDisposition plus InspectionPlanID will be persisted into the DISPOSITION table). If the PartnerRole Dynamic Input is provided, it will be persisted into the DISPOSITION table.  
- Assigns created disposition to groups (DISPOSITION_GROUP_CODE) defined for Inspection Plan (INSPECTION_PLAN_GROUP) 
- Assigns created disposition to equipments (DISPOSITION_RESOURCE) defined for Inspection Plan (INSPECTION_PLAN_RESOURCE) 
- For every Inspection Line (INSPECTION_LINE) that belongs to Inspection Plan performs the following operations: 
 
- Creates Disposition Line by calling CreateDispositonLine_v942 and passing the following parameters: 
 
- Facility - Facility of the created disposition 
- Disposition - Disposition of the created disposition 
- SequenceNo - INSPECTION_LINE.SequenceNo 
- LineCode - INSPECTION_LINE.Code 
- SeverityID - ID of (DISPOSITION_SEVERITY.SeverityCode = 'Normal') 
- Comment - INSPECTION_LINE.Comment 
 
- Assigns created disposition line to equipments (DISPOSITION_RESOURCE) defined for Inspection Line (INSPECTION_PLAN_RESORUCE) 
- For every Inspection Characteristic (INSPECTION_CHARACTERISTIC) that belongs to Inspection Line performs the following operations: 
 
- Creates Disposition Test by calling CreateDispositionTest_v942 and passing the following parameters: 
 
- Facility - Facility of the created disposition line 
- Disposition - Disposition of the created disposition line 
- LineSequenceNo - Sequence Number of the created disposition line 
- SequenceNo - INSPECTION_CHARACTERISTIC.SequenceNo 
- InspectionCharacteristic - CHARACTERISTIC_REVISION.Characteristic (INSPECTION_CHARACTERISTIC.CharacteristicRevisionID) 
- CharacteristicRevision - CHARACTERISTIC_REVISION.Revision (INSPECTION_CHARACTERISTIC.CharacteristicRevisionID) 
- RecordingType - INSPECTION_CHARACTERISTIC. RecordingType 
- SeverityID - ID of (DISPOSITION_SEVERITY.SeverityCode = 'Normal') 
- Comment - INSPECTION_CHARACTERISTIC.Comment 
- UHL - INSPECTION_CHARACTERISTIC.UpperCoherenceLimit or Decimal.MinValue if not specified 
- USL - INSPECTION_CHARACTERISTIC.UpperSpecificationlimit or Decimal.MinValue if not specified 
- UCL - INSPECTION_CHARACTERISTIC.UpperControlLimit or Decimal.MinValue if not specified 
- LCL - INSPECTION_CHARACTERISTIC.LowerControlLimit or Decimal.MinValue if not specified 
- LSL - INSPECTION_CHARACTERISTIC.LowerSpecificationLimit or Decimal.MinValue if not specified 
- LHL - INSPECTION_CHARACTERISTIC.LowerCoherenceLimit or Decimal.MinValue if not specified 
- TargetValue - INSPECTION_CHARACTERISTIC.TargetValue or Decimal.MinValue if not specified 
- CharacteristicDecimals - INSPECTION_CHARACTERISTIC.CharacteristicDecimals or negative value if not specified 
- Required - INSPECTION_CHARACTERISTIC.Required 
- ReadingValidation - INSPECTION_CHARACTERISTIC.ReadingValidaton 
- NoOfReadings - INSPECTION_CHARACTERISTIC.NoOfReadings or negative value if not specified 
- OverrideSumResults - CHARACTERISTIC_REVISION.OverrideSumResults 
- SPCCharacteristic - CHARACTERISTIC_REVISION.SPCCharacteristic 
- Destructive - INSPECTION_CHARACTERISTIC.Destructive 
- Additive - INSPECTION_CHARACTERISTIC.Additive 
- SamplingProcedureID - INSPECTION_CHARACTERISTIC.SamplingProcedureID 
- TestMethod - INSPECTION_CHARACTERISTIC.TestMethod 
- SampleSize - INSPECTION_CHARACTERISTIC.SampleSize or negative value if not specified 
- NoOfSamples - 0 (not used) 
- SampleQuantity - INSPECTION_CHARACTERISTIC.SampleQuantity 
- SampleUomCode - INSPECTION_CHARACTERISTIC.SampleUomCode 
- Certificate - INSPECTION_CHARACTERISTIC.Certificate 
- RecordDefect - INSPECTION_CHARACTERISTIC.RecordDefect 
- USLDefectCode - INSPECTION_CHARACTERISTIC.USLDefectCode 
- LSLDefectCode - INSPECTION_CHARACTERISTIC.LSLDefectCode 
- DefectCode - INSPECTION_CHARACTERISTIC.DefectCode 
- Resources - list of ResourceIDs defined in INSPECTION_PLAN_RESOURCE 
- CopyAttributes - false 
- CopyGroupCodes - true 
- RecordResultsOnSamples - INSPECTION_CHARACTERISTIC.ResultsOnSamples 
- ResourceType - INSPECTION_CHARACTERISTIC.ResourceType 
- ResourceClassID - INSPECTION_CHARACTERISTIC.ResourceClassID 
- CalculateConformity - INSPECTION_CHARACTERISTIC.CalculateConformity 
- ConformityDFCRevisionFUID - INSPECTION_CHARACTERISTIC.ConformityDFCRevisionFUID 
 
 
- For every Inspection Characteristic Attribute (INSPECTION_CHARACTERISTIC_ATTR) that belongs to the INSPECTION_CHARACTERISTIC creates Disposition Test Attribute by calling DispositionTestAttributeManager.CreateDispositionTestAttribute and passing the following parameters: 
 
- DispositionTestID - ID of the created disposition test 
- Attribute - INSPECTION_CHARACTERISTIC_ATTR.Attribute 
- Description - INSPECTION_CHARACTERISTIC.Medium (from TEXT_TRANSLATION) 
- Conforming - INSPECTION_CHARACTERISTIC.Conforming 
- DefectReasonCode - INSPECTION_CHARACTERISTIC.DefectReasonCode

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Disposition | Inputted DispositionNumber or generated automatically based on SEQUENCE_ table |
|  | Facility | Inputted Facility |
|  | DispositionType | Inputted Type |
|  | DispositionClassID | Inputted ClassID |
|  | ProductID | Inputted ProductID |
|  | GradeID | Inputted GradeID |
|  | SeverityID | Inputted Severity |
|  | ScheduledStartDate | Inputted ScheduledStart |
|  | ScheduledFinishDate | Inputted ScheduledEnd |
|  | Quantity | Inputted Quantity |
|  | UomCode | Inputted UomCode |
|  | Status | "New" |
|  | Comment | Inputted Comment |
|  | SamplingProcedureID | Inputted SamplingProcedureID |
|  | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | PartnerID | Inputted PartnerID |
|  | PartnerRole | Inputted PartnerRole |
|  | ExecutionOrderNo | Inputted ExecutionOrderNo |
|  | ExecutionOrderType | Inputted ExecutionOrderType |
|  | InspectionPlanID | InspectionPlanID |
|  | QualityGateID | Inputted QualityGateID or from inspectionPlan |
|  | QulatyGateSeqItemID | Inputted QualityGateSeqItemID or from inspectionPlan |
| DISPOSITION_GROUP_CODE | Disposition | DISPOSITION.Disposition |
|  | Facility | DISPOSITION.Facility |
|  | Group | INSPECTION_PLAN_GROUP.Group |
|  | GroupType | INSPECTION_PLAN_GROUP.GroupType |
|  | GroupClassID | INSPECTION_PLAN_GROUP.GroupClassID |
| DISPOSITION_RESOURCE | Disposition | DISPOSITION.Disposition |
|  | Facility | DISPOSITION.Facility |
|  | LineSequenceNo | DISPOSITION_LINE.LineSequenceNo |
|  | DispostionTestID | DISPOSITION_TEST.ID |
|  | ResourceID | INSPECTION_PLAN_RESOURCE.ResourceID |
| DISPOSITION_LINE | Disposition | DISPOSITION.Disposition |
|  | Facility | DISPOSITION.Facility |
|  | LineSequenceNo | INSPECTION_LINE.SequenceNo |
|  | LineCode | INSPECTION_LINE.Code |
|  | SeverityID | ID of (DISPOSITION_SEVERITY. SeverityCode = 'Normal') |
|  | Comment | INSPECTION_LINE.Comment |
| DISPOSITION_TEST | Facility | DISPOSITION.Facility |
|  | Disposition | DISPOSITION.Disposition |
|  | LineSequenceNo | DISPOSITION_LINE.LineSequenceNo |
|  | SequenceNo | INSPECTION_CHARACTERISTIC.SequenceNo |
|  | Characteristic | CHARACTERISTIC_REVISION.Characteristic (referenced by INSPECTION_CHARACTERISTIC.CharacteristicRevisionID) |
|  | CharacteristicRevision | CHARACTERISTIC_REVISION.Revision (referenced by INSPECTION_CHARACTERISTIC.CharacteristicRevisionID) |
|  | RecordingType | INSPECTION_CHARACTERISTIC. RecordingType |
|  | SeverityID | ID of DISPOSITION_SEVERITY.SeverityCode = 'Normal' |
|  | Comment | INSPECTION_CHARACTERISTIC.Comment |
|  | UpperCoherenceLimit | INSPECTION_CHARACTERISTIC.UpperCoherenceLimit |
|  | UpperSpecificationLimit | INSPECTION_CHARACTERISTIC.UpperSpecificationlimit |
|  | UpperControlLimit | INSPECTION_CHARACTERISTIC.UpperControlLimit |
|  | LowerControlLimit | INSPECTION_CHARACTERISTIC.LowerControlLimit |
|  | LowerSpecificationLimit | INSPECTION_CHARACTERISTIC.LowerSpecificationLimit |
|  | LowerCoherenceLimit | INSPECTION_CHARACTERISTIC.LowerCoherenceLimit |
|  | TargetValue | INSPECTION_CHARACTERISTIC.TargetValue |
|  | CharacteristicDecimals | INSPECTION_CHARACTERISTIC.CharacteristicDecimals |
|  | Required | INSPECTION_CHARACTERISTIC.Required |
|  | ReadingValidation | INSPECTION_CHARACTERISTIC.ReadingValidaton |
|  | NoOfReadings | INSPECTION_CHARACTERISTIC.NoOfReadings |
|  | OverrideSumResults | CHARACTERISTIC_REVISION.OverrideSumResults |
|  | SPCCharacteristic | CHARACTERISTIC_REVISION.SPCCharacteristic |
|  | Destructive | INSPECTION_CHARACTERISTIC.Destructive |
|  | Additive | INSPECTION_CHARACTERISTIC.Additive |
|  | SamplingProcedureID | INSPECTION_CHARACTERISTIC.SamplingProcedureID |
|  | TestMethod | INSPECTION_CHARACTERISTIC.TestMethod |
|  | SampleSize | INSPECTION_CHARACTERISTIC.SampleSize |
|  | SampleQuantity | INSPECTION_CHARACTERISTIC.SampleQuantity |
|  | SampleUomCode | INSPECTION_CHARACTERISTIC.SampleUomCode |
|  | Certificate | INSPECTION_CHARACTERISTIC.Certificate |
|  | RecordDefect | INSPECTION_CHARACTERISTIC.RecordDefect |
|  | USLDefectCode | INSPECTION_CHARACTERISTIC.USLDefectCode |
|  | LSLDefectCode | INSPECTION_CHARACTERISTIC.LSLDefectCode |
|  | DefectCode | INSPECTION_CHARACTERISTIC.DefectCode |
|  | ResultsOnSamples | INSPECTION_CHARACTERISTIC.ResultsOnSamples |
|  | ResourceType | INSPECTION_CHARACTERISTIC.ResourceType |
|  | RecourceClassID | INSPECTION_CHARACTERISTIC.ResourceClassID |
|  | CalculateCoformity | INSPECTION_CHARACTERISTIC.CalculateConformity |
|  | ConformityDFCRevisionFUID | INSPECTION_CHARACTERISTIC.ConformityDFCRevisionFUID |
| DISPOSITION_TEST_ATTRIBUTE | DispositionTestID | DISPOSITION_TEST.ID |
|  | Attribute | INSPECTION_CHARACTERISTIC_ATTR.Attribute |
|  | Medium | INSPECTION_CHARACTERISTIC.Medium |
|  | Conforming | INSPECTION_CHARACTERISTIC.Conforming |
|  | DefectReasonCode | INSPECTION_CHARACTERISTIC.DefectReasonCode |
