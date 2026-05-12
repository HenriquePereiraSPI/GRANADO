# StartCountDocument

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the status of a Count from "New" to "Started" for tracking purposes.
 

It also creates counting locks against the location, so that inventory cannot be moved out or adjusted in that location (if configured).
 

The initial inventory snapshot is done by this component. This is to keep track of any locations not counted or where the inventory was moved entirely out before counting. This information is kept in Inventory_Count.QuantityInitial and reflects only bulk quantity (if entire inventory is in a container then QuantityInitial for this inventory will be set to 0). The snapshot of the location is done again by the "COUNT" Business Component; this is because you want to wait to the very last possible moment before you get the snapshot, i.e. you wait until the first count is reported for that product in that location.
 

The start document provides ability to recount the entire document by creating new count flow, count locks and inventory snapshot when the status of the document is Recount.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDocumentNumber | Char | Yes | DocumentNumber of the counting document to start. |

## Validations

- System validates that the CountDocumentNumber exists for the inputted Facility and that the status of the Document is 1 (=New) or 10 (Recount). 
- System validates that no other count documents are active for the same criteria, analyzing the COUNT_LOCK Table. 
- System validates that no current lock exists for this new count document. The purpose of this validation is to make sure that a counting is not in progress in the facility for a subset of the facility. This validation means that system must identify all {Products + Warehouse Locations} and validate that the new lock does not create Product Location Locks that are already locked by the system.

## System Processing

- System updates the COUNT_DOCUMENT_FLOW table (Creates the record and populates the StartDate and StartEmployee). 
- System updates the Status of the Document to 2 (=Started). 
- System updates the CountNumber adding 1 to the counter. 
- Depending on the inventory level at which the Count Document has been created (Cf. BC document "CreateCountDocument"), system generates records in the COUNT_LOCK table with the following info: 
 
- Case A and A1: the record created in the COUNT_LOCK table contains both ProductID (+ LotNo + GradeID + InventoryStatus + PartnerID) and Location if the counting document contains both, 
- Case B: the record created in the COUNT_LOCK table contains only ProductID (+ LotNo + GradeID + InventoryStatus + PartnerID) if the count document is restricted to only a Lot or Grade or a Partner or a Status, 
- Case C: the record created in the COUNT_LOCK table contains only a location if the product was not entered.

## History Recording in Production

History is created with information containing the document number and document status. The history conforms to the template defined in the XSD, FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController.CountDocument.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_LOCK | CountDocumentFlowID | Inputted CountDocumentNumber |
|  | Facility | See System Processing (Case A, A1, B or C) |
|  | Warehouse | See System Processing (Case A, A1, B or C) |
|  | Zone | See System Processing (Case A, A1, B or C) |
|  | WarehouseLocationID | See System Processing (Case A, A1, B or C) |
|  | ProductID | See System Processing (Case A, A1, B or C) |
|  | LotNo | See System Processing (Case A, A1, B or C) |
|  | Grade | See System Processing (Case A, A1, B or C) |
|  | InventoryStatus | See System Processing (Case A, A1, B or C) |
|  | PartnerID | See System Processing (Case A, A1, B or C) |
|  | AllowIncrease | From the COUNT_DEFINITION table |
|  | AllowDecrease | From the COUNT_DEFINITION table |
| COUNT_DOCUMENT_FLOW | ID | System generated |
|  | DocumentNumber | Inputted CountDocumentNumber |
|  | CountStartDate | NOW |
|  | StartEmployeeID | Counter's EmployeeID |
| COUNT_DOCUMENT | CountStatus | 2 (=Started) |
|  | CountNumber | n+1 |
