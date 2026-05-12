# CreateDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

Method is used to create Disposition record that represents the header of the quality inspection.

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
| Input | ScheduledEnd | DateTime | No | Scheduled end date and time of the Inspection. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | Quantity | Decimal | Yes | Size of the QUI (size of the population of material being a subject of inspection). |
| Input | UomCode | Char | Yes | Unit of measure for the size of the Disposition. |
| Input | Comment | Char | No | Free-text (no translation) description of the Disposition. |
| Input | SamplePlanID | Integer | No | Unique identifier of the sample plan to be used. |
| Input | OrderNo | Char | No | Order Number Disposition is assigned to. |
| Input | OrderType | Integer | No | Order Type (e.g. Delivery or Purchase) to which Disposition is assigned. |
| Input | OrderLineNo | Integer | No | Order Line Number. |
| Input | WipOrderNo | Char | No | Number of WIP Order linked to the Disposition. |
| Input | WipOrderType | Integer | No | Type of WIP Order linked to the Disposition. |
| Input | PartnerID | Integer | No | Customer or Vendor Identifier. |
| Input | ExecutionOrderNo | Char | No | Inspection Order. |
| Input | ExecutionOrderType | Integer | No | Inspection Order Type. |
| Output | DispositionNumberCreated | Char | No | Unique identifier of the newly created Disposition. |

## Validations

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
- SamplePlanID must exist in SAMPLE_PLAN table (if specified). 
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
- ExecutionOrderType: 
 
- must be greater than 0 when ExecutionOrderNo is provided, 
- must exist in WIP_ORDER_TYPE table. 
 
- ExecutionOrderNo: 
 
- if provided must exist in WIP_ORDER table, 
- cannot be of Completed status (WIP_ORDER. WorkOrderStatus).

## System Processing

- Disposition record is created based on parameters passed as inputs to the method accordingly to the Impacted Tables & Fields table below. 
- Status of the disposition is set to "New" (Status column in the DISPOSITION table) 
- If DispositionNumber is not specified it is generated automatically based on SEQUENCE_ table (DISPOSITION is a sequence name). 
- If DispositionUserStatusID is already defined for the status (in DISPOSITION_STATUS table) it is copied to DISPOSITION.DispositionUserStatusID field.

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
|  | Comment_ | Inputted Comment |
|  | SamplePlanID | Inputted SamplePlanID |
|  | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | PartnerID | Inputted PartnerID |
|  | ExecutionOrderNo | Inputted ExecutionOrderNo |
|  | ExecutionOrderType | Inputted ExecutionOrderType |
|  | DispositionUserStatusID | Populated from DispositionUserStatusID field if it is already defined for the status in the DISPOSITION_STATUS table |
