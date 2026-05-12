# AddDispositionWipContent

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionContentManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to store the whole population for the test. It creates a current snapshot of the subject of the test for future analysis. This can be an item that is in production (WIP).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | No | The Container number that is the subject of the test. |
| Input | Disposition | Char | Yes | The Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility of the content record. |
| Input | GradeID | Integer | No | The inspected product grade identifier. |
| Input | LotNo | Char | No | The Lot Number that is the subject of the test. |
| Input | OprSequenceNo | Char | Yes | The Production Order Operation that is the subject of the test. |
| Input | ProductID | Integer | No | The identifier of a product that is the subject of inspection. |
| Input | Quantity | Decimal | No | The size of the QUI (the size of the population of material that is the subject of inspection). The sum of the quantity in all records of the Disposition content should be equal to the population quantity (DISPOSITION.Quantity). |
| Input | SerialNo | Char | No | The Serial Number that is the subject of the test. |
| Input | UomCode | Char | No | The unit of measure for the size of the Disposition. |
| Input | WipOrderNo | Char | Yes | The number of the WIP Order linked to the Disposition. |
| Input | WipOrderType | Integer | Yes | The Type of WIP Order linked to the Disposition. |
| Output | DispositionContentID | Integer | No | The unique identifier of the newly created Disposition content. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in the DISPOSITION table and the status of the Disposition must be New, Released, or Started (DISPOSIION_STATUS). 
- WipOrderNo and WipOrderType must exist in the WIP_ORDER table. 
- WipOrderNo, WipOrderType, and OprSequenceNo must exist in the WIP_OPERATION table. 
- ProductID must exist in the PRODUCT table. 
- GradeID must exist in the GRADE table. 
- UomCode must exist in the UOM table. 
- ProductID and LotNo must exist in the WIP_ORDER_LOT table (for the specified WIP Order). 
- ProductID and SerialNo must exist in the WIP_SERIAL_NO table. 
- The Container must exist in the CONTAINER table.

## System Processing

The system creates Disposition content records for all the items of the list passed as Inputs and the default type = WIP.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | Disposition | The inputted Disposition. |
|  | DispositionFacility | The inputted Facility. |
|  | WipOrderNo | The inputted WipOrderNo. |
|  | WipOrderType | The inputted WipOrderType. |
|  | OprSequenceNo | The inputted OprSequenceNo. |
|  | ProductID | The inputted ProductID |
|  | GradeID | The inputted GradeID. |
|  | Quantity | The inputted Quantity. |
|  | UomCode | The inputted UomCode. |
|  | LotNo | The inputted LotNo. |
|  | SerialNo | The inputted SerialNo. |
|  | Container | The inputted Container. |
|  | DispositionContentType | WIP (value of 1) |
