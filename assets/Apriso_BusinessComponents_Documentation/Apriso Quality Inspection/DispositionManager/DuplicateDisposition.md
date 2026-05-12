# DuplicateDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

Method is used to create Disposition based on existing one passed as a parameter which includes: creation of the new Disposition record, duplication of all Disposition Lines and Tests assigned to the Disposition being duplicated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ReferenceDispositionNumber | Char | Yes | Number of an original Disposition (to the one being duplicated). |
| Input | ReferenceFacility | Char | Yes | Facility where the Inspection of the original Disposition (to the one being duplicated) takes place. |
| Input | DuplicateDispositionLine | Boolean | Yes | Determines if the Disposition Lines are to be duplicated as well (True) or the duplicate Disposition should have no Disposition Lines (False). |
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

- ReferenceDispositionNumber and ReferenceFacility must exist in DISPOSITION table. 
- Validations performed during call to Create Quality Disposition Business Component.

## System Processing

- Invokes logic of BC method: Create Quality Disposition. 
- Updates created disposition with the number of the reference disposition (Disposition.ReferenceDisposition updated with ReferenceDispositionNumber parameter and Disposition.ReferenceFacility updated with ReferenceFacility paremeter). 
- If DuplicateDispositionLine parameter is set to True then retrieves all active lines (Disposition_Line) assigned to the referenced Disposition (ReferenceDispositionNumber, ReferenceFacility) and for every line invokes the logic of BC method: Duplicate Disposition Line.

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
| [All tables populated by Duplicate Disposition Line method] |  |  |
