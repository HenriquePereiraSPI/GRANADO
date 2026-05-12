# CreateDispositionForWipOrder

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to create a Disposition record from the supplied WIP Order. Based on the WIP Order structure, it creates a new Disposition with Disposition Lines and Disposition Tests linked to it.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionNumber | Char | No | The Sequence number of the Quality Inspection Disposition (QID). If not provided, it is generated automatically based on the SEQUENCE_ table (DISPOSITION is a Sequence name). |
| Input | Facility | Char | No | The Facility where the Inspection takes place. |
| Input | ExecutionOrderNo | Char | Yes | The WIP Order No which is used to generate the structure of the Disposition content. |
| Input | ExecutionOrderType | Short | Yes | The WIP Order Type which is used to generate the structure of the Disposition content. |
| Input | ClassID | Integer | No | The class of the QID (a customized form of grouping Quality Inspections). |
| Input | ProductID | Integer | No | The identifier of the product that is the subject of inspection. |
| Input | GradeID | Integer | No | The inspected product grade identifier. |
| Input | Severity | Integer | No | The severity of the inspection: (1) Normal; (2) Minor; (3) Major; (4) Critical. |
| Input | ScheduledStart | DateTime | No | The scheduled start date and time of the inspection. NULL = 00:00:00.0000000, January 1, 1900. |
| Input | ScheduledEnd | DateTime | No | The scheduled end date and time of the inspection. NULL = 00:00:00.0000000, January 1, 1900. |
| Input | WipOrderNo | Char | No | The WIP Order number for which the Disposition will be created. |
| Input | WipOrderType | Short | No | The WIP Order type for which the Disposition will be created. |
| Input | PartnerID | Integer | No | The customer or vendor identifier. |
| Input | Comment | Char | No | The free-text (no translation) description of the Disposition. |
| Output | DispositionNumberCreated | Char | No | The unique identifier of the newly created Disposition. |
| Output | DispositionFacility | Char | No | The Facility where the inspection takes place. |

## Validations

- ClassID must exist in the DISPOSITION_CLASS table (if specified). 
- Facility must exist in the FACILITY table. 
- If DispositionNumber is provided, there can be no Disposition with the same number in the system (DISPOSITION table). 
- ProductID must exist in the PRODUCT table. 
- GradeID must exist in the PRODUCT_GRADE table for the given product and grade. 
- Severity must exist in the DISPOSITION_SEVERITY table. 
- If ScheduledEnd and ScheduledStart are provided (and have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 1900), the first one must be greater than the second one. 
- If PartnerID is provided, it must exist in the PARTNER table 
- ExecutionOrderType must exist in the WIP_ORDER_TYPE table. 
- ExecutionOrderNo must exist in the WIP_ORDER table.

## System Processing

- The system creates a Disposition based on the Inputs specified. 
- For every WIP Operation (WIP_OPERATION) that belongs to a WIP Order, the system performs the following operations: 
 
- If the WIP Operation does not contain any WIP Operation Step Characteristic, the system does nothing and moves to the next WIP Operation. 
- The system creates a Disposition Line by calling CreateDispositionLine_v942 and passing the following parameters: 
 
- Facility – the Facility of the created Disposition 
- Disposition – the Disposition of the created disposition 
- SequenceNo – 0 
- LineCode – WIP_OPERATION.OperationCode 
- SpecificationID – 0 
- SeverityID – DISPOSITION_SEVERITY.SeverityID 
- ExecutionOrderNo – the Input parameter 
- ExecutionOrderType – the Input parameter 
- WorkCenter – WIP_OPERATION.WorkCenter  
 
- For every WIP Operation Step Characteristic (WIP_OPERATION_STEP_CHAR) that belongs to a WIP Operation, the system performs the following operations: 
 
- Creates a Disposition Test by calling CreateDispositionTest_v942 and passing the following parameters: 
 
- Facility – the Facility of the created Disposition Line 
- Disposition – the Disposition of the created Disposition Line 
- LineSequenceNo – the Sequence number of the created Disposition Line 
- SequenceNo – 0 
- InspectionCharacteristic – WIP_OPERATION_STEP_CHAR.Characteristic 
- CharacteristicRevision – WIP_OPERATION_STEP_CHAR.Revision 
- RecordingType – CHARACTERISTIC_REVISION. RecordingType 
- SeverityID – DISPOSITION_SEVERITY.SeverityID 
- Comment – WIP_OPERATION_STEP_CHAR.Comment 
- UHL – WIP_ OPEARATION_STEP_CHAR.UpperCoherenceLimit or Decimal.MinValue (if not specified) 
- USL – WIP_OPERATION_STEP_CHAR.UpperSpecificationlimit or Decimal.MinValue (if not specified) 
- UCL – WIP_OPERATION_STEP_CHAR.UpperControlLimit or Decimal.MinValue (if not specified) 
- LCL –WIP_OPERATION_STEP_CHAR.LowerControlLimit or Decimal.MinValue (if not specified) 
- LSL – WIP_OPERATION_STEP_CHAR.LowerSpecificationLimit or Decimal.MinValue (if not specified) 
- LHL –WIP_OPERATION_STEP_CHAR.LowerCoherenceLimit or Decimal.MinValue (if not specified) 
- TargetValue – WIP_OPERATION_STEP_CHAR.TargetValue or Decimal.MinValue (if not specified) 
- CharacteristicDecimals – WIP_OPERATION_STEP_CHAR.CharacteristicDecimals or negative value (if not specified) 
- Required – CHARACTERISTIC_REVISION.Required 
- ReadingValidation – CHARACTERISTIC_REVISION.ReadingValidaton 
- NoOfReadings – CHARACTERISTIC_REVISION.NoOfReadings or negative value (if not specified) 
- OverrideSumResults – CHARACTERISTIC_REVISION.OverrideSumResults 
- SPCCharacteristic – CHARACTERISTIC_REVISION.SPCCharacteristic 
- Destructive – CHARACTERISTIC_REVISION.Destructive 
- Additive – CHARACTERISTIC_REVISION.Additive 
- SampleQuantity – CHARACTERISTIC_REVISION.SampleQuantity 
- SampleUomCode – CHARACTERISTIC_REVISION.SampleUomCode 
- Certificate – CHARACTERISTIC_REVISION.Certificate 
- RecordDefect – CHARACTERISTIC_REVISION.RecordDefect 
- USLDefectCode – CHARACTERISTIC_REVISION.USLDefectCode 
- LSLDefectCode – CHARACTERISTIC_REVISION.LSLDefectCode 
- DefectCode – CHARACTERISTIC_REVISION.DefectCode 
- Resources – the list of ResourceIDs defined in INSPECTION_PLAN_RESOURCE 
- CopyAttributes – false 
- CopyGroupCodes – false 
- RecordResultsOnSamples – false 
- ResourceType – CHARACTERISTIC_REVISION.ResourceType 
- ResourceClassID – CHARACTERISTIC_REVISION.ResourceClassID 
- Resources - ResourceID's for CharacteristicRevision (CHARACTERISTIC_REV_RESOURCE.ResourceID) 
- CalculateConformity – false 
- ConformityOperationID – 0 
-  ExecutionOprSequenceNo – WIP_OPERATION_STEP_CHAR.WipOrderNo  
-  ExecutionOprStepSequenceNo – WIP_OPERATION_STEP_CHAR.WipOrderType  
-  ExecutionOrderNo – WIP_OPERATION_STEP_CHAR.OprSequenceNo  
-  ExecutionOrderType – WIP_OPERATION_STEP_CHAR.SequenceNo  
 
 
 
- For every Inspection Characteristic Attribute (WIP_OPERATION_STEP_CHAR_ATTR) that belongs to the INSPECTION_CHARACTERISTIC table, the system creates a Disposition Test Attribute by calling DispositionTestAttributeManager.CreateDispositionTestAttribute and passing the following parameters: 
 
- DispositionTestID – the ID of the created disposition test 
- Attribute – WIP_OPERATION_STEP_CHAR_ATTR.Attribute 
- Description – null 
- Conforming – WIP_OPERATION_STEP_CHAR_ATTR.Conforming 
- DefectReasonCode – CHARACTERISTIC_REV_ATTRIBUTE.DefectReasonCode 
- Group – CHARACTERISTIC_REV_ATTRIBUTE.Group 
- GroupType – CHARACTERISTIC_REV_ATTRIBUTE.GroupType 
- GroupClassID – CHARACTERISTIC_REV_ATTRIBUTE.GroupClassID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [All tables populated by CreateDisposition_v942, CreateDispositionLine_v942, CreateDispositionTest, and CreateDispositionTestAttribute] |  |  |
