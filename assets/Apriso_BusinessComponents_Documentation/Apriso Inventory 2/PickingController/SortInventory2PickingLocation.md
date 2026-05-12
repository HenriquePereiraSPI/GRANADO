# SortInventory2PickingLocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PickingController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Picking Sorting Location Determine

## Description

This Business Component method retrieves and sorts INVENTORY2 records from the provided picking Locations and for inputted inventory properties (e.g. Product, Lot Number, Inventory Status).
 

The inventory records are sorted by the Picking Location priority and then by the criteria defined in the Picking Strategy. The Picking Strategy name is computed using the APR_WH_PICKING_STRATEGY Determination and using the values of BC inputs.
 

This Business Component method should be used together with the method DeterminePickingLocation. The latter method returns a list of possible picking Locations with priorities, which is an input to the SortInventory2PickingLocation method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility used to determine the Picking Strategy. May be configured in the Determination as a Facility to pick the inventory from. |
| Input | Warehouse | Char | Yes | Warehouse used to determine the Picking Strategy. May be configured in the Determination as a Warehouse to pick the inventory from. |
| Input | InventoryStatus | Integer | No | Inventory Status used to determine the Picking Strategy and to find the inventory to pick; zero means any Inventory Status. |
| Input | ProductID | Integer | Yes | Product ID used to determine the Picking Strategy and to find the inventory to pick. |
| Input | LotNo | Char | No | Lot Number used to find the inventory to pick; an empty value means any Lot Number. |
| Input | SourceWarehouseLocationID | Integer | Conditional | Source (starting) Warehouse Location. This parameter is used to calculate the walk path difference between Warehouse Locations. |
| Input | WarehouseLocationIDList | ListofInteger | Yes | List of Picking Locations to pick the inventory from (returned by the DeterminePickingLocation BC method). |
| Input | PriorityList | ListofInteger | Yes | Priorities related to inputted Picking Locations (returned by the DeterminePickingLocation BC method). |
| Input | Quantity | Decimal | No | Total quantity on hand requested. It limits the number of Inventory records to the requested Quantity. Zero means no limit. |
| Output | Inventory2IDList | ListofInteger | Yes | Sorted list of INVENTORY2 IDs. |
| Output | ProductIDList | ListofInteger | Yes | List of Product IDs corresponding to Inventory2IDList. |
| Output | WarehouseLocationIDOutList | ListofInteger | Yes | List of Warehouse Location IDs corresponding to Inventory2IDList. |
| Output | ContainerList | ListofChar | Yes | List of Containers corresponding to Inventory2IDList. |
| Output | LotNoList | ListofChar | Yes | List of Lot numbers corresponding to Inventory2IDList. |
| Output | InventoryClassIDList | ListofInteger | Yes | List of Inventory Class IDs corresponding to Inventory2IDList. |
| Output | InventoryStatusList | ListofInteger | Yes | List of Inventory Statuses corresponding to Inventory2IDList. |
| Output | PartnerIDList | ListofInteger | Yes | List of Partner IDs corresponding to Inventory2IDList. |
| Output | GradeIDList | ListofInteger | Yes | List of Grade IDs corresponding to Inventory2IDList. |
| Output | ERPMaterialStockIDList | ListofInteger | Yes | List of ERP Material Stock IDs corresponding to Inventory2IDList. |
| Output | QuantityOnHandList | ListofDecimal | Yes | List of quantity on hand corresponding to Inventory2IDList. |

## Validations

-  

System validates if Facility is provided.
  
-  

System validates if Warehouse is provided.
  
-  

System validates if ProductID is provided and exists in the PRODUCT table.
  
-  

System validates if inputs WarehouseLocationIDList and PriorityList are of the same length.
  
 
 
- System validates if the Product is not on hold. 
-  

If LotNo is provided, then the system validates that it is not on hold.
  
-  

If a Walk Path Difference is used (as sorting criteria) in determined Picking Strategy, then the SourceWarehouseLocationID input must be provided and exist in the WAREHOUSE_LOCATION table.

## System Processing

- Based on the Product ID specified, the system determines the following additional attributes required to determine the Picking Strategy: 
 
- Product ABC Class, 
- Product Inventory Type, 
- Product Number. 
 
- System repeatedly invokes **APR_WH.PickingStrategyDetermination **Standard Operation to determine Picking Strategy. The processing is finished when first Picking Strategy is found. This is done in the following way: 
 
- System determines Picking Strategy for: Facility, Warehouse, Inventory Status, Product ABC Class, Product Inventory Type, Product Number. 
- If Picking Strategy is not found, then the system tries to find it for each group that the Product belongs to. It does it using the following parameters: Facility, Warehouse, Inventory Status, Product ABC Class, Product Inventory Type, Product Number, Warehouse Location Type, Zone, **Product Group, Product Group Type, Product Group Class Name**.  
 
- If no Picking Strategy is found, then the system retrieves matching INVENTORY2 records and sorts them in ascending order only by the priorities of inputted Picking Locations. The inventory records must meet inputted filter criteria: Product Number, Lot Number and Inventory Status. 
- If the Picking Strategy is found: 
 
- If a Walk Path Difference sorting criteria is used, the system uses input SourceWarehouseLocationID to calculate the walk path difference between the source Location and all picking Locations. 
- If a Quantity Relevant sorting option is used, then the inventory will be sorted by the total matching quantity on hand in Warehouse Locations. 
 
- If the Picking Strategy is found, the system sorts the INVENTORY2 records in the following sequence: 
 
- By Picking Locations' priorities in ascending order. 
- By Picking Rule (FIFO, FEFO, LIFO): 
 
- FIFO - records sorted by Created On value in ascending order (Product that is Serial tracked and is not Lot tracked uses Created On value from the SERIAL_NO table, Product that is Lot tracked uses Created On value from the LOT_NO table, Product that is Lot and Serial tracked uses Created On value from the LOT_NO table). 
- LIFO - records sorted by Created On value in descending order (Product that is Serial tracked and is not Lot tracked uses Created On value from the SERIAL_NO table, Product that is Lot tracked uses Created On value from the LOT_NO table, Product that is Lot and Serial tracked uses Created On value from the LOT_NO table). 
- FEFO - records sorted using the following criteria: 
 
- By Expiration Date ascending from the SERIAL_NO table for Products that are Serial tracked only (and not Lot tracked). If the Expiration Date is not specified for a Serial Number then the system assumes that such inventory has infinite Expiration Date. 
- By Expiration Date ascending from the LOT_NO table for Products that are Lot tracked (can also be additionally Serial tracked). If the Expiration Date is not specified for the Lot Number then the system assumes that such inventory has infinite Expiration Date.  
 
- Product that is neither Serial nor Lot tracked ignores the picking rule. 
 
- By other sorting criteria defined in the Picking Strategy.  
 
- Using the Container as sorting criteria in Picking Strategy allows the user to sort the inventory by Container number. The ascending order means that inventory with no Container is last on the list, and the descending order means that it is first on the list. 
- System returns a list of sorted inventory properties: the ID, Product ID, Warehouse Location ID, Container, Lot Number, Inventory Class ID, Inventory Status, Partner ID, Grade ID, ERP Material Stock ID, and the quantity on hand. In case the inputted Quantity is greater than 0, the sorted list is limited to the first few items which satisfy the requested Quantity. Otherwise all Inventory records are returned.

## Pre-Conditions

The user should avoid a situation when the Picking Strategy Determination returns multiple values for given input criteria. 
 

In such case the Strategy cannot be uniquely determined and predictably used. E.g. when different Strategies for different Product Groups are defined, the BC will use one of them but with no certainty which one.
