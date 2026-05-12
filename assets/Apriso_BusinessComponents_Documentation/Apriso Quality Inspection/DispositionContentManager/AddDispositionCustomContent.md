# AddDispositionCustomContent

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionContentManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to store the whole population for the test. It creates a current snapshot of the subject of the test for future analysis. This BC is used to populate Disposition content with the custom information not covered by the predefined types (WIP, Inventory, Resource).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | No | The Container number that is the subject of the test. |
| Input | Disposition | Char | Yes | The Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility of the content record. |
| Input | GradeID | Integer | No | The inspected product grade identifier. |
| Input | LotNo | Char | No | The Lot Number that is the subject of the test. |
| Input | OprSequenceNo | Char | No | The Production Order Operation that is the subject of the test. |
| Input | OrderLineNo | Integer | No | The order line number. |
| Input | OrderNo | Char | No | The order number to which the Disposition is assigned. |
| Input | OrderType | Integer | No | The order type (e.g., Delivery or Purchase) to which the Disposition is assigned. |
| Input | PartnerID | Integer | No | The customer or vendor identifier. |
| Input | ProductID | Integer | No | The identifier of the product that is the subject of inspection. |
| Input | Quantity | Decimal | No | The size of the QUI (the size of the population of the material that is the subject of inspection). |
| Input | ResourceID | Integer | No | The resource identifier (used in case of the inspection of the resource, e.g., calibration inspection). |
| Input | ResourceLifeCycleID | Integer | No | The life cycle of the Resource (ResourceID). |
| Input | SerialNo | Char | No | The Serial Number that is the subject of the test. |
| Input | UomCode | Char | No | The unit of measure for the size of the Disposition. |
| Input | WarehouseLocationID | Integer | No | The location of the inventory that is the subject of the inspection. |
| Input | WipOrderNo | Char | No | The number of the WIP Order linked to the Disposition. |
| Input | WipOrderType | Integer | No | The type of WIP Order linked to the Disposition. |
| Output | DispositionContentID | Integer | No | The unique identifier of the newly created Disposition content. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in the DISPOSITION_TABLE and the status of the Disposition must be New, Released, or Started (DISPOSIION_STATUS). 
- OrderNo and OrderType must exist in the ORDER_HEADER table. 
- OrderNo, OrderType, and OrderLineNo must exist in the ORDER_DETAIL table. 
- PartnerID must exist in the PARTNER table. 
- WipOrderType and WipOrderNo must exist in the WIP_ORDER table. 
- WipOrderType, WipOrderNo, and OprSequenceNo must exist in the WIP_OPERATION table. 
- ProductID must exist in the PRODUCT table. 
- GradeID must exist in the GRADE table. 
- UomCode must exist in the UOM table. 
- ProductID defined for the inventory (InventoryID) must be the same as the product defined for the Disposition (INVENTORY.ProductID = DISPOSITION.ProductID). 
- ProductID and LotNo must exist in the LOT_NO table. 
- ProductID and SerialNo must exist in the SERIAL_NO table. 
- Container must exist in the CONTAINER table. 
- WarehouseLocationID must exist in the WAREHOUSE_LOCATION table. 
- ResourceID must exist in the RESOURCE table. 
- ResourceLifeCycleID must exist in the RESOURCE_LIFE_CYCLE table.

## System Processing

The system creates Disposition content records for all the items of the list passed as Inputs and the default type = Custom (value of 4).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | Disposition | The inputted Disposition. |
|  | DispositionFacility | The inputted Facility. |
|  | DispositionContentType | 'Custom' (value of 4). |
|  | ProductID | The inputted ProductID. |
|  | GradeID | The inputted GradeID. |
|  | Quantity | The inputted Quantity. |
|  | UomCode | The inputted UomCode. |
|  | LotNo | The inputted LotNo. |
|  | SerialNo | The inputted SerialNo. |
|  | Container | The inputted Container. |
|  | OrderNo | The inputted OrderNo. |
|  | OrderType | The inputted OrderType. |
|  | OrderLineNo | The inputted OrderLineNo. |
|  | PartnerID | The inputted PartnerID. |
|  | ResourceID | The inputted ResourceID. |
|  | WarehouseLocationID | The inputted WarehouseLocationID. |
|  | WipOrderType | The inputted WipOrderType. |
|  | WipOrderNo | The inputted WipOrderNo. |
|  | OprSequenceNo | The inputted OprSequenceNo (only if WipOrderNo and WipOrderType are specified). |
|  | ResourceLifeCycleID | The inputted ResourceLifeCycleID. |
