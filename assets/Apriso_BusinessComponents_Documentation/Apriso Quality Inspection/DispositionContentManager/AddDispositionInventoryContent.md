# AddDispositionInventoryContent

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionContentManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to store the whole population for the test. It creates a current snapshot of the subject of the test for future analysis.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | The Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility of the content record. |
| Input | InventoryID | Integer | Yes | The ID of an inventory object to be assigned to the Disposition as its content. |
| Input | OrderLineNo | Integer | No | The Order Line number. |
| Input | OrderNo | Char | No | The order number to which the Disposition is assigned. |
| Input | OrderType | Integer | No | The order type (e.g., Delivery or Purchase) to which the Disposition is assigned. |
| Input | PartnerID | Integer | No | The customer or vendor identifier. |
| Input | SerialNo | Char | No | The Serial Number that is the subject of the test. |
| Input | Container | Char | No | The Container number that is the subject of the test. |
| Input | InContainer | Char | No | The unit of measure for the size of the Disposition. |
| Input | Quantity | Decimal | No | The size of the QUI (the size of the population of material that is the subject of inspection). |
| Input | UomCode | Char | No | The unit of measure for the size of the Disposition. |
| Output | DispositionContentID | ListofInteger | No | The unique identifier of the newly created Disposition content. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in DISPOSITION_TABLE and the status of the Disposition must be New, Released, or Started (DISPOSIION_STATUS).  
- OrderNo and OrderType must exist in the ORDER_HEADER table. 
- OrderNo, OrderType, and OrderLineNo must exist in the ORDER_DETAIL table. 
- PartnerID must exist in the PARTNER table. 
- ProductID must exist in the PRODUCT table. 
- GradeID must exist in the GRADE table. 
- UomCode must exist in the UOM table. 
- ProductID defined for the inventory (InventoryID) is the same as the product defined for Disposition (INVENTORY.ProductID = DISPOSITION.ProductID).

## System Processing

- The system retrieves all the inventory information (INVENTORY, INVENTORY_CONTAINER, INVENTORY_SERIAL_NO) in the following way: 
 
- If SerialNo is specified, then the system retrieves the inventory information linked to the specified SerialNo and InventoryID and performs the following validations: 
 
- The system validates that the inventory serial exists. 
- If the Container is specified, then the system validates that the inventory serial exists in the Container (INVENTORY_SERIAL_NO.Container = Container). 
- If InContainer is specified, then the system validates that the inventory serial exists in the Container that has such a parent Container (CONTAINER.InContainer = InContainer). 
 
- If The Container is specified, then the system retrieves all the inventory information linked with the specified Container and InventoryID and performs the following validations: 
 
- The system validates that at least one inventory exists in the Container. 
- If InContainer is specified, then the system validates that all the inventories exist in a Container that has such a parent Container (CONTAINER.InContainer = InContainer). 
 
- If InContainer is specified, then the system retrieves all the inventory information linked to the specified parent Container (InContainer) and InventoryID and check if at least one inventory exists in the parent Container. 
- Otherwise, the systme retrieves all the inventory information linked to the specified InventoryID. 
 
- For every retrieved inventory serial, the system creates a Disposition content record passing the following values: 
 
- Disposition 
- Facility 
- DispositionContentType - Inventory (value of 2) 
- OrderNo 
- OrderType 
- OrderLineNo 
- Facility → Inventory.Facility 
- WarehouseLocationID → Inventory.WarehouseLocationID 
- ProductID → Inventory.ProductID 
- PartnerID → specified PartnerID or Inventory.PartnerID if not specified 
- GradeID → Inventory.GradeID 
- Quantity = 1 
- UomCode → Inventory.UomCode 
- LotNo → Inventory.LotNo 
- SerialNo → InventorySerialNo.SerialNo 
- Container → InventorySerialNo.Container 
- ParentContainer → the parent Container of InventorySerialNo.Container 
 
- For every inventory Container record that contains inventory not linked with a serial, the system creates a Disposition content record passing the following values: 
 
- Disposition 
- Facility 
- DispositionContentType - Inventory (value of 2) 
- OrderNo 
- OrderType 
- OrderLineNo 
- Facility → Inventory.Facility 
- WarehouseLocationID → Inventory.WarehouseLocationID 
- ProductID → Inventory.ProductID 
- PartnerID → specified PartnerID or Inventory.PartnerID if not specified 
- GradeID → Inventory.GradeID 
- Quantity: 
 
- InventoryContainer.QuantityOnHand – the number of all the serials linked to InventoryContainer (INVENTORY_SERIAL_NO.Container = InventoryContainer.Container) when more than one inventory Container has been retrieved or inventory exists in bulk and in the Container. 
- The quantity parameter converted from the passed UomCode to Inventory.UomCode. 
 
- UomCode → Inventory.UomCode 
- LotNo → Inventory.LotNo 
- Container → InventoryContainer.Container 
- ParentContainer → the parent Container of InventoryContainer.Container 
 
- For every inventory record that has not been persisted yet, the system creates a Disposition content record passing the following values: 
 
- Disposition 
- Facility 
- DispositionContentType - Inventory (value of 2) 
- OrderNo 
- OrderType 
- OrderLineNo 
- Facility → Inventory.Facility 
- WarehouseLocationID → Inventory.WarehouseLocationID 
- ProductID → Inventory.ProductID 
- PartnerID → specified PartnerID or Inventory.PartnerID if not specified 
- GradeID → Inventory.GradeID 
- Quantity: 
 
- The on hand quantity when the inventory exists in bulk and in a Container or is linked to any serial 
- The Quantity parameter converted from the passed UomCode to Inventory.UomCode 
 
- UomCode → Inventory.UomCode 
- LotNo → Inventory.LotNo

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | Disposition | The inputted Disposition. |
|  | DispositionFacility | The inputted Facility. |
|  | DispositionContentType | Inventory (value of 2) |
|  | ProductID | Inventory.ProductID |
|  | GradeID | Inventory.GradeID |
|  | Quantity | See processing flow for details |
|  | UomCode | Inventory.UomCode |
|  | LotNo | Inventory.LotNo |
|  | SerialNo | InventorySerial.SerialNo |
|  | Container | InventoryContainer.Container |
|  | ParentContainer | Container.InContainer |
|  | OrderNo | The inputted OrderNo. |
|  | OrderType | The inputted OrderType. |
|  | OrderLineNo | The inputted OrderLineNo. |
|  | PartnerID | The inputted PartnerID or Inventory.ParnterID if not specified. |
|  | Facility | Inventory.Facility |
|  | WarehouseLocationID | Inventory.WarehouseLocationID |
