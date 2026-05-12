# UpdateDisposition_v96

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

This Business Component method is used to update Disposition record that represents the header of the Quality Inspection. The difference between this BC method and the UpdateDisposition_v2 is that it has additional inputs.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionName | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Type | Integer | No | Type of the QID: (1) Disposition Created by Sample Plan; (2) Disposition Created by Ad-Hoc Defect Detection; (3) Defect; (4) Test Results; (5) Inspection at Good Receipt for Purchase Order; (6) Inspection at Good Receipt from Production; (7) In-process Inspection; (8) Inspection at Good Issue; (9) Audit; (10) Recurring Inspection; (11) Maintenance Inspection; (12) Template; (13) Miscellaneous Inspection. |
| Input | ClassID | Integer | No | Class of the QID, customized form of grouping quality inspections. |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |
| Input | Severity | Integer | No | Severity of the Inspection: (1) Normal; (2) Minor; (3) Major; (4) Critical. |
| Input | ScheduledStart | DateTime | No | Scheduled start date and time of the Inspection. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | ScheduledEnd | DateTime | No | Scheduled end date and time of the Inspection. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | Quantity | Decimal | No | Size of the QUI (size of the population of material being a subject of inspection). |
| Input | UomCode | Char | No | Unit of measure for the size of the Disposition. |
| Input | Comment | Char | No | Free-text (no translation) description of the Disposition. |
| Input | SamplingProcedureID | Integer | No | Sampling procedure |
| Input | SamplePlanID | Integer | No | Unique identifier of the sample plan to be used. |
| Input | OrderNo | Char | No | Order Number Disposition is assigned to. |
| Input | OrderType | Integer | No | Order Type (e.g. Delivery or Purchase) to which Disposition is assigned. |
| Input | OrderLineNo | Integer | No | Order Line Number. |
| Input | WipOrderNo | Char | No | Number of WIP Order linked to the Disposition. |
| Input | WipOrderType | Integer | No | Type of WIP Order linked to the Disposition. |
| Input | PartnerID | Integer | No | Customer or Vendor Identifier. |
| Input | PartnerRole | Integer | No | Customer or Vendor Role. |
| Input | ExecutionOrderNo | Char | No | Inspection Order. |
| Input | ExecutionOrderType | Integer | No | Inspection Order Type. |
| Input | QualityGateID | Integer | No | Quality Gate ID |
| Input | QualityGateSeqItemID | Integer | No | Quality Gate Sequence Item ID |
| Input | Rework | Boolean | No | Used to mark origin Dispositions (First Pass Yield Test). Setting to true indicates that Disposition is a descendant Disposition. |
| Input | ReferenceDisposition | Char | No | The name of the origin Disposition. |
| Input | ReferenceFacility | Char | No | Facility where the referenced Disposition Inspection the took place. |

## Validations

- SamplingProcedureID when specified exists in SAMPLING_PROCEDURE table and will be persisted into DISPOSITION table. 
- SamplingProcedureID can be changed only if Disposition status is 'New' 
- Type must exist in DISPOSITION_TYPE table. 
- ClassID must exist in DISPOSITION_CLASS table. 
- DispositionName and Facility must exist in DISPOSITION table and the disposition status must be "New", "Released" or "Started" (DISPOSITION_STATUS table). 
- Severity must exist in DISPOSITION_SEVERITY table 
- If ScheduledEnd and ScheduledStart are provided (have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001) the first one must be greater than the second one. If only ScheduledStart is provided and ScheduledFinishDate is populated in the disposition record being updated, then ScheduledStart cannot be greater than that date. If only ScheduledEnd is provided and ScheduledStartDate is populated in the disposition record being updated, then ScheduledEnd cannot be less than that date. 
- SamplePlanID must exist in SAMPLE_PLAN table. 
- OrderType must be specified if OrderNo is specified. 
- OrderNo and OrderType must exist in ORDER_HEADER table. 
- OrderNo, OrderType and OrderLineNo must exist in ORDER_DETAIL table. 
- WipOrderType must be specified if WipOrderNo is. 
- WipOrderNo and WipOrderType must exist in WIP_ORDER table. 
- PartnerID must exist in PARTNER table. 
- If PartnerRole is provided, it must exist in PARTNER_ROLE table. 
- ExecutionOrderType must be specified if ExecutionOrderNo is. 
- ExecutionOrderNo and ExecutionOrderType must exist in WIP_ORDER table. 
- Sampling Procedure; OrderNo; OrderType; OrderLineNo; WipOrderNo; WipOrderType; Partner; ExecutionOrderNo; ExecutionOrderType must not be changed if the status of the Disposition is different than "New". 
- SamplingProcedureID when specified exists in SAMPLING_PROCEDURE. 
- If QualityGateID is provided, it must exist in QUALITY_GATE table. 
- If QualityGateSeqItemID is provided, it must exist in QUALITY_GATE_SEQ_ITEM table. 
- If ReferenceDisposition and ReferenceFacility are provided then reference record must exist in the DISPOSITION table.

## System Processing

- System updates Disposition record based on all parameters passed as inputs to the method. If a parameter is not specified it is treated as it was a NULL value thus setting the appropriate field in DISPOSITION table to NULL. 
- If execution order on disposition is changed then all disposition lines belonging to this disposition are modified so that execution operations on these disposition lines are null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Disposition | Inputted DispositionName |
|  | DispositionType | Inputted Type |
|  | DispositionClassID | Inputted ClassID |
|  | Facility | Inputted Facility |
|  | SeverityID | Inputted Severity |
|  | ScheduledStartDate | Inputted ScheduledStart |
|  | ScheduledFinishDate | Inputted ScheduledEnd |
|  | Quantity | Inputted Quantity |
|  | UomCode | Inputted UomCode (if UomCode is not provided then both UomCode and Quantity field are set to Null regardless of the value of Quantity parameter) |
|  | Comment | Inputted Comment |
|  | SamplingProcedureID | Inputted SamplingProcedureID |
|  | SamplePlanID | Inputted SamplePlanID |
|  | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrdertType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | PartnerID | Inputted PartnerID |
|  | PartnerRole | Inputted PartnerRole |
|  | ExecutionOrderNo | Inputted ExecutionOrderNo |
|  | ExecutionOrderType | Inputted ExecutionOrderType |
|  | QualityGateID | Inputted QualityGateID |
|  | QulatyGateSeqItemID | Inputted QualityGateSeqItemID |
|  | Rework | Inputted Rework |
|  | ReferenceDisposition | Inputted ReferenceDisposition |
|  | ReferenceFacility | Inputted ReferenceFacility |
