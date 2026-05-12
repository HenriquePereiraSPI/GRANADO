# CreateDispositionLineWithDisposition_v941

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

Method is used to simplify the process of creating the single Disposition Line by wrapping two other BC methods: Create Quality Disposition, Create Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ClassID | Integer | No | User-defined class of the quality inspection. |
| Input | Comment | Char | No | Description of the group of test to be performed. |
| Input | Disposition | Char | No | Reference to the Disposition the given line belongs to. |
| Input | ExecutionOprSequenceNo | Char | No | Operation of the execution order referenced as ExecutionOrderNo used when the given disposition line is linked to the operation executing all tests (DISPOSITION_TEST) assigned to this line. |
| Input | ExecutionOrderNo | Char | No | Execution Order Number indicates an order that executes the quality inspection existing in WIP_ORDER table. |
| Input | ExecutionOrderType | Integer | No | Type of the execution order referenced as ExecutionOrderNo. |
| Input | Facility | Char | Yes | Reference to the facility quality inspection (Disposition) the given line belongs to. |
| Input | GradeID | Integer | No | Grade of the product being the subject of the quality inspection referenced by ProductID. |
| Input | OrderLineNo | Integer | No | Line number of the Order used as the reference to the quality inspection, e.g. used when the single disposition (quality inspection) is created for each line of the Purchase Order. |
| Input | OrderNo | Char | No | Order Number used as the reference to the quality inspection, e.g. in case of quality inspection at good receipt it is the Purchase Order Number; in case of the quality inspection at Delivery it is Delivery/Shipping Order Number. |
| Input | OrderType | Integer | No | Type of the Order used as the reference to the quality inspection, e.g. in case of quality inspection at good receipt it is the Purchase Order Number. |
| Input | PartnerID | Integer | No | Customer or Vendor Identifier used for quality inspection during procurement or delivery. |
| Input | ProductID | Integer | Yes | Identifier of a product being the subject of Inspection. |
| Input | Quantity | Decimal | Yes | Size of the QUI (size of the population of material being a subject of inspection). |
| Input | SamplePlanID | Integer | No | Identifier of the default Sample Plan (SAMPLE_PLAN) used for the quality inspection. |
| Input | ScheduledFinish | DateTime | No | Scheduled End Date and Time of the test of the Disposition Line. |
| Input | ScheduledStart | DateTime | No | Scheduled Start Date and Time of the test of the Disposition Line. |
| Input | SequenceNo | Integer | No | Unique sequence number of the Disposition Line. |
| Input | LineCode | Char | No | Line code of the disposition line to be created. |
| Input | SeverityID | Integer | No | Severity of the defect. |
| Input | SpecificationID | Integer | No | Identifier of the specification used to define the set of test to be executed for the given line. |
| Input | Type | Integer | Yes | Type of the QID:(1) Disposition Created by Sample Plan; (2) Disposition Created by Ad-Hoc Defect Detection; (3) Defect; (4) Test Results; (5) Inspection at Good Receipt for Purchase Order; (6) Inspection at Good Receipt from Production; (7) In-process Inspection; (8) Inspection at Good Issue; (9) Audit; (10) Recurring Inspection; (11) Maintenance Inspection; (12) Template; (13) Miscellaneous Inspection. |
| Input | UomCode | Char | Yes | Unit of measure for the size of the Disposition. |
| Output | DispositionCreated | Char | No | Unique identifier of the newly created disposition. |
| Output | LineSequenceNo | Integer | No | Unique identifier of the newly created disposition Line. |

## Validations

- Quantity must be greater than 0. 
- Execution order operation must belong to execution order defined on disposition level 
- [All validations as for Create Disposition and Create Disposition Line v941 BC]

## System Processing

- Invokes Create Disposition BC 
- Invokes Create Disposition Line passing DispositionCreated as Disposition parameter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [All tables populated by CreateDisposition BC method] |  |  |
| [All tables populated by CreateDispositionLine BC method] |  |  |
