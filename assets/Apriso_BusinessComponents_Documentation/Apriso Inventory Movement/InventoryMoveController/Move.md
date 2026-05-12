# Move

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryMoveController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Inventory, Move, Container, Product

## Description

The move component is used to create balanced movements between various buckets of the inventory (and allocation) tables.
 

It is used to move the inventory from buckets to buckets or to change the assignment of a container to a parent container. The inventory properties that can be changed are:
 
 
-  

ProductNo and revision (ProductID)
  
-  

GradeID (ProductGrade)
  
-  

LotNo (Internal batch number)
  
-  

WarehouseLocationID (Facility / warehouse / Warehouse Location)
  
-  

Owner of the inventory (PartnerID)
  
-  

Inventory Status
  
-  

Parent container that contain the container or move product in and out containers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | Transaction Code defined in Transaction_ used to determine the inventory change. Must be specified. |
| Input | TaskID | Integer | No | ID of the task for which the adjust is performed. Must be specified |
| Input | WipOrderNo | Char | No | Wip Order Number for which the adjust is performed. |
| Input | WipOrderType | Integer | No | Wip Order Number for which the adjust is performed. |
| Input | OrderNo | Char | No | Order Number for which the adjust is performed. |
| Input | OrderType | Integer | No | Order Type of the order for which the adjust is performed. |
| Input | OrderLineNo | Integer | No | Order Line No of the order for which the adjust is performed. |
| Input | LP | Char | No | Not Supported |
| Input | EPC | Char | No | Not Supported |
| Input | SerialNo | Char | No | SerialNo of the inventory to be adjusted |
| Input | ContainerNo | Char | No | Container which is to be adjusted. |
| Input | LotNo | Char | No | Lot number to use to determine unique inventory in a container or location. Must be specified if product is Lot tracked |
| Input | ProductID | Integer | No | Product ID to use to determine unique inventory in a container or location. Must be specified unless Decrement Entire Container scenario is executed |
| Input | InventoryStatus | Integer | No | Inventory Status to use to determine unique inventory in a container or location. Must be specified unless Decrement Entire Container or Decrement Inventory Serial scenarios are executed. |
| Input | PartnerID | Integer | No | Partner ID to use to determine unique inventory in a container or location |
| Input | GradeID | Integer | No | Grade ID to use to determine unique inventory in a container or location |
| Input | Quantity | Decimal | No | Quantity to adjust in case of partial or bulk inventory adjustment. Not used when SerialNo is specified or for Decrement Entire Container scenario. |
| Input | UomCode | Char | No | Uom Code to use to determine unique inventory in a container or location. Must be specified unless Decrement Entire Container or Decrement Inventory Serial |
| Input | WarehouseLocationID | Integer | No | Warehouse LocationID to use to determine unique inventory in a container or location.Must be specified unless Decrement Entire Container or Decrement Inventory Serial |
| Input | ReasonCode | Char | No | Reason Code for the transaction |
| Input | Comment | Char | No | Commment for the transaction |
| Output | DestinationContainer | Char | No | Container to which inventory is to be moved |
| Input | DestinationStatus | Integer | No | Status of the inventory after moving. |
| Input | DestinationProductID | Integer | No | ProductID of the inventory after moving. |
| Input | DestinationLotNo | Char | No | LotNo of the inventory after moving. |
| Input | DestinationPartnerID | Integer | No | PartnerID of the inventory after moving. |
| Input | DestinationGradeID | Integer | No | GradeID of the inventory after moving. |
| Input | DestinationFacility | Char | No | Facility to which inventory is moved. Validated to match the destination location facility |
| Input | DestinationWarehouseLocationID | Integer | No | Location to which inventory is to be moved. Optional if destination container is provided |
| Output | InventoryDocument | Char | No | Output to identify the transaction. |

## Validations

- The Inputs are required to identify uniquely the inventory records (source and destination) to be updated. 
- When full containers are moved, the source parameters like location or product can be omitted. They are validated if entered. 
- When serial are moved, the various source parameters can be omitted. They are validated if entered. 
- If destination parameters are omitted, then system assumes that the values remain the same as the source value. 
- Transaction code holds will be validated before the adjust is performed as per the "GetHoldDetail" method found in the "FlexNet.BusinessFacade.Common.HoldDetailProvider" class. If this method returns that any object defined to be check by that transaction code is on hold, and error will be returned to the caller. 
- If the inventory being moved is locked via a count document defined via the count definition, then an error will be returned to the caller. 
 
- A lock is created for the inventory based on the count document during the count stage 
- Move validates against these locks based on the count definitions based on whether or not there is a source or destination lock 
 
- If DestinationPartnerID = 0, then PartnerID is set to empty.

## System Processing

System expect the Transaction Code to be set as a Move but it is possible that some products contained in a container (assuming that a full container) will not be move but just decreased or even not changed, depending of the settings defined in the Transaction_Product_Inventory_Type. The main use of this type of feature is when container contains packaging that are managed in inventory:
 

Example: A Container contains a returnable container and a quantity of products.
 
 The user wants to change the status of the inventory in the container from A to B. he wants probably to change only the status of the content and not the status of the returnable container. Setting up the Transaction_Product_Inventory_Type as none for the returnable packaging product inventory Type, and invoking the Move component for the full container will change the status of the product, from A to B, but will keep the status of the container as it was.
 

The same approach is used when the content of the container is consumed. The container remains in inventory, not the content.
 

The same flow can be created at shipping time. The inventory in the container will be decreased, but the container will be transferred to the customer, in order to track the quantities of containers outside.
 

The Move supports the following settings:
 
 
- Transaction = MOVE 
- Transaction_Product_Inventory_Type = Move or None or Decrease 
 

Unit of measure: Like the other component, the UOM is converted in the product UOM by the component.
 

Quantity: like for the other components, the inventory cannot become negative when a decrease (or the first half of the move) is processed
 

 ** Integration of the Move capability with the Allocation capability: ** 
 

The Move component will update the allocation tables (WIP_Order_Content, Wip_Order_Content_Serial and WIP_Container) as soon as a WipOrder and WipOrderType as passed as parameters.
 

The allocation tables will be updated the following way:
 

System checks if the quantity that should be moved (or the serial, or the container) is allocated or not, to the reference Order or not, using the source parameters (status, owner, location, product, etc.) of the component:
 
 
- If the quantity is allocated to the reference order: 
 
- If a quantity of product in location X was allocated to order1 and this quantity is moved to location Y with reference to order1, then the allocation will be updated and will point on the same product in the location Y. 
- Same for the other parameters of the inventory (owner, status, etc.). 
 
- If the quantity is allocated to another order: system will check if some quantities, with the same inventory properties (owner, product, status & lots;) are allocated to no order. If the required non allocated quantities are found, they will be moved, and will remain non allocated, else system will issue an error as all products are allocated to other orders and so cannot be moved. 
- If the quantity is not allocated or there is not enough allocated quantity and there exists non allocated quantity (QuantityOnHand), the missing part is taken from QuantityOnHand and allocated. 
 

The move component, when used with no reference to a WipOrder, deals with non allocated inventory only. It means that it cannot move quantities (i.e. it generates and error), if all inventories are allocated to various orders.
 

If a container, containing multiple products, allocated to multiple WipOrders, is fully moved (i.e. only the container is passed as input, no product nor quantity as input), then system will consider that all allocated and non allocated quantities will be moved. The allocation tables will be updated. This is a required behavior to manage mixed containers, as it is not possible to do a move referencing multiple WipOrders.
 

 ** Preventing moves with checks to the Hold Tables ** 
 

When move is called the component checks the TRANSACTION_REASON_CODE_HOLD table.
 

The holds available are
 

Product - PRODUCT_HOLD table
 

LOT - LOT_NO_HOLD table
 

Serial - SERIAL_NO_HOLD table
 

Location - WAREHOUSE_LOCATION_HOLD
 

Container - CONTAINER_HOLD
 

The component check is as follows:
 
 
- System retrieves all the TRANSACTION_REASON_CODE_HOLD records from the table for the transaction entered into the component. 
- System then checks the flags of each of the retrieved Transaction Reason Records. 
 
- Restrict Product flag is set - check for holds on the product. 
- Restrict Lot flag is set - check for holds on the Lot 
- Restrict Serial flag is set - check for holds on the Serial 
- Restrict Location flag is set - check for holds on the Location 
- Restrict Container flag is set - check for holds on the Container. 
- PLEASE NOTE (Very important) - if the reason code is NOT populated in the TRANSACTION HOLD REASON CODE table then any hold record found will prevent the move from occurring. If it is populated - then only hold records of that Reason Code will prevent the move from occurring. 
 
- As soon as a hold record is found then the component stops processing and an error is displayed to the user.

## Pre-Conditions

The expected settings are to have Transaction and Transaction_Product_Inventory_Type both set as Move or Decrease.

## History Recording in Production

Transaction history with the information about the WIP Order and Inventories that are moved, and the destination inventory attributes is created

## Host Integration Support

Interface (message = MBGMCR02) can be triggered. It will not be triggered if the XML generated contains NOUPLOAD in HostIndicator1. The NOUPLOAD field is populated in the following case:
 
 
- If the inventory is moved between same SAPWarehouse and none of the inventory attributes such as grade, status or partner is changed. This applies to movement of container, serials, bulk and bulk into and out of container. Example if container C1 in location L1 in warehouse WH1 with SAPWarehouse SAPWH1 is moved to location L2 in warehouse WH1 then the HostIndicator1 is set to NOUPLOAD.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY |  | The Source Inventory is updated and destination is created or updated. |
|  | ID | (PK) Auto generated |
|  | ProductID | From Input or linked through Inventory in Container |
|  | UomCode | From Input |
|  | InventoryStatus | From Input |
|  | WarehouseLocationID | From Input |
|  | Facility | From Input |
|  | Warehouse | From Input |
|  | LotNo | From Input |
|  | GradeID | From Input |
|  | QuantityOnHand | From Input |
|  | QuantityToPick | From Input |
|  | QuantityToPut | From Input |
|  | QuantityAllocated | From Input |
|  | ProductInventoryType | From Input |
|  | PartnerID | From Input |
| INVENTORY_CONTAINER |  | The Source Inventory is updated and destination is created or updated. |
|  | Container | From Input |
|  | InventoryID | From destination inventory attributes |
|  | QuantityOnHand | From Input (incremented) |
|  | QuantityAllocated | From Input (incremented) |
|  | LastProductID | From Source Inventory |
|  | LastInventoryStatus | From Source Inventory |
|  | LastFacility | From Source Inventory |
|  | LastWarehouse | From Source Inventory |
|  | LastWarehouseLocation | From Source Inventory |
|  | LastGradeID | From Source Inventory |
|  | LastPartnerID | From Source Inventory |
| CONTAINER | Container | From Input |
|  | Facility | From Input or based on WarehouseLocationID |
|  | Warehouse | From Input or based on WarehouseLocationID |
|  | WarehouseLocationID | From Input |
|  | InContainer | From Input. Set to null if moved out of master container |
| INVENTORY_SERIAL_NO | ProductID | From Input |
|  | SerialNo | From Input |
|  | Container | From Input |
|  | InventoryID | From destination inventory attributes |
|  | LastProductID | From Source Inventory |
|  | LastInventoryStatus | From Source Inventory |
|  | LastFacility | From Source Inventory |
|  | LastWarehouse | From Source Inventory |
|  | LastWarehouseLocation | From Source Inventory |
|  | LastGradeID | From Source Inventory |
|  | LastPartnerID | From Source Inventory |
| WIP_ORDER_CONTENT |  | The Source WIP_ORDER_CONTENT quantities are decreased and the destination quantities are increased. . The destination records may be created if required. |
|  | InventoryID | From destination inventory attributes |
|  | QuantityToPick | From Input |
|  | OrderQuantityToPick | From Input |
| WIP_ORDER_CONTAINER |  | The Source WIP_ORDER_CONTAINER quantities are increased and the records are deleted if Quantity becomes zero. The destination records may be created if required and the quantities are increased. |
|  | ID | PK |
|  | WipOrderContentID | From destination inventory attributes and WipOrderNo |
|  | Container | From Input |
|  | QuantityToPick | From Input or source |
| WIP_ORDER_CONTENT_SERIAL | ProductID | From Input |
|  | SerialNo | From Input |
|  | WipOrderContentID | From destination WipOrderContent |
|  | WipOrderContainerID | From destination WipOrderContainer |
