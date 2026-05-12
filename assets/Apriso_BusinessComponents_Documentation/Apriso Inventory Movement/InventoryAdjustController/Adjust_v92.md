# Adjust_v92

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to generate non-balanced inventory movements. It is used to receive inventory against a production order, to ship products, to issue components against a production order or maintenance order, and to process adjustments of inventory. The transaction code holds will be validated before the adjust is performed per the GetHoldDetail BC method found in the FlexNet.BusinessFacade.Common.HoldDetailProvider class. If this method returns that any object defined to be checked by that transaction code is on hold, an error will be returned to the caller.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | The transaction code defined in TRANSACTION_ and used to determine the inventory change. Must be specified. |
| Input | TaskID | Integer | No | The ID of the task for which the adjust is performed. Must be specified. |
| Input | WipOrderNo | Char | No | The WIP Order number for which the adjust is performed. |
| Input | WipOrderType | Integer | No | The WIP Order number for which the adjust is performed. |
| Input | OprSequenceNo | Char | No | The WIP Operation number for which the adjust is performed. |
| Input | OrderNo | Char | No | The order number for which the adjust is performed. |
| Input | OrderType | Integer | No | The order type of the order for which the adjust is performed. |
| Input | OrderLineNo | Integer | No | The order line number of the order for which the adjust is performed. |
| Input | LP | Char | No | This is not supported. |
| Input | EPC | Char | No | This is not supported. |
| Input | SerialNo | Char | Conditional | The Serial Number of the inventory to be adjusted. |
| Input | ContainerNo | Char | No | The Container which is to be adjusted. |
| Input | LotNo | Char | Conditional | The Lot Number to use to determine the unique inventory in a Container or location. Must be specified if the product is lot-tracked. |
| Input | ProductID | Integer | Conditional | The product ID to use to determine the unique inventory in a Container or location. Must be specified unless the Decrement Entire Container scenario is executed. |
| Input | InventoryStatus | Integer | Conditional | The inventory status to use to determine the unique inventory in a Container or location. Must be specified unless the Decrement Entire Container or Decrement Inventory Serial scenario is executed. |
| Input | PartnerID | Integer | No | The partner ID to use to determine the unique inventory in a Container or location. |
| Input | GradeID | Integer | No | The grade ID to use to determine the unique inventory in a Container or location. |
| Input | Quantity | Decimal | Conditional | The quantity to adjust in case of partial or bulk inventory adjustment. Not used when SerialNo is specified or for the Decrement Entire Container scenario. |
| Input | UomCode | Char | Conditional | The UOM code to use to determine the unique inventory in a Container or location. Must be specified unless the Decrement Entire Container or Decrement Inventory Serial scenario is executed. |
| Input | WarehouseLocationID | Integer | Conditional | The Warehouse location ID to use to determine the unique inventory in a Container or location. Must be specified unless the Decrement Entire Container or Decrement Inventory Serial scenario is executed. |
| Input | ReasonCode | Char | No | The Reason Code for the transaction. |
| Input | Comment | Char | No | The comment for the transaction. |
| Input | ProjectID | Integer | No | The project ID for the transaction. |
| Input | GLAccountID | Integer | No | The GL account ID for the transaction. |
| Input | Department | Char | No | The department for the transaction. |
| Output | InventoryDocument | Char | No | The Output to identify the transaction. |

## Validations

- The Input entities (e.g., ProductID, LotNo) must exist in DELMIA Apriso. 
- The Inputs must uniquely identify the inventory records to be adjusted. 
- When an entire Container is decremented, inventory parameters such as location or product can be omitted. They are validated if entered. 
- When a serial is adjusted, the various inventory parameters except ProductID can be omitted. They are validated if entered. 
- The product tracking such as lot-tracked or serial-tracked is validated, and only the Inputs valid for that product tracking are allowed (e.g., the Lot Number cannot be an Input if the product is not lot-tracked). 
- The transaction code holds will be validated before an adjust is performed per the GetHoldDetail BC method found in the FlexNet.BusinessFacade.Common.HoldDetailProvider class. If this BC returns that any object defined to be checked by that transaction code is on hold, an error will be returned to the caller. 
- If the inventory being adjusted is locked via a count document defined via the count definition, an error will be returned to the caller. A lock is created for the inventory based on the count document during the count stage.

## System Processing

- The BC increases or decreases the inventory based on the Transaction Code. Using the Input inventory attributes, the inventory record that needs to be updated is selected. If the record does not exist, it is created. The inventory is adjusted based on the various Inputs, as described below. 
 
- The TransactionCode Input is the transaction code enabling the system to retrieve the configuration options to be used both globally for the transaction and for each product processed (as in, when a Container is moved, more than one product from more than one product inventory type can be contained in the Container). 
- The valid configurations are the following: 
 
- For transactions of the INCREASE type, TransactionProductInventoryType of type INCREASE or NONE 
- For transactions of the DECREASE type, TransactionProductInventoryType of type DECREASE or NONE  

 **Note**: If both are INCREASE, then the product inventory is increased. If both are DECREASE, then the product inventory is decreased. If the TransactionProductInvenotryType is NONE, then the inventory of the product is not changed (this special configuration is used when the Container of a product is consumed – the product is consumed, but the Container remains in inventory as an example).
 
 
 
 
 
 
- If the transaction is DECREASE, the following will occur: 
 
- The system will decrease the inventory for INVENTORY.QuantityAllocated and then INVENTORY.QuantityOnHand. 
- All the decreased inventory associated with a WIP Order will have WIP_ORDER_CONTENT records either updated or created to specify the quantity of the inventory adjusted for the WIP WIP Order. The following fields in WIP_ORDER_CONTENT will be affected: 
 
- QuantityToPick – if the record already existed, then this will be decreased by the quantity specified. 
- QuantityProcessed – this field will be decreased by the quantity specified. The field will go negative for issues against a WIP Order. This field will describe the total quantity issued for this WIP Order.  
 
- Adjustments to a WIP Order can either be performed at the WIP Order-level or at the Operation-level. If an Operation is specified during adjust, then it will populate the WIP_ORDER_CONTENT table down to the Operation level. As allocations cannot be performed at the Operation level, adjustments against an allocation will be performed at the WIP Order-level for QuantityToPick, and a new record will be created for the Operation defining QuantityProcessed for the Operation.  
 
- If the transaction is INCREASE, the following will occur: 
 
- If the quantity is being increased, then allocations are not used. Therefore, the increase will only update or create a WIP_ORDER_CONTENT record for the WIP Order or Operation and populate the QuantityProcessed field with the quantity being adjusted.  
 
 
-  TaskID is passed if the user needs to persist the taskID information in the history. It is usually not required, as the history XML contains all the required information about the context (user, date, etc.).  
-  WipOrderNo, WipOrderType, and OprSequenceNo are used to create a link with allocation (if any) and to update the orders tables.  
 
- For Containers and Serial Numbers, the tables WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL respectively will be updated in the same manner as the WIP_ORDER_CONTENT table defined above. 
 
- To retrieve/create a WIP_ORDER_CONENT record, WIP and inventory parameters are used. The record stores information about the quantities in the product default UOM and also in the WIP Order UOM. 
 
- On decreasing (issuing), the system validates that there is enough inventory to do the decrement (the sum of INVENTORY.QuantityAllocated and INVENTORY.QuantityOnHand). If no available inventory is found, an error will occur. 
 
- If OrderNo, OrderType, and OrderLineNo are passed as parameters, they are passed to the the history XML (and copied in the outbound XML if required by the host system). 
- SerialNo is the Serial Number to be processed (increased or decreased). As a Serial Number identifies a quantity of one, it is possible to keep other Inputs null when SerialNo is populated. 
- ContainerNo is the number of the Container to be increased or decreased. If the full Container is to be decreased, then other information like product, quantity, and location are not required. The system will then assume that the whole Container (as in, all the products in the Container) should be adjusted. A Container can contain multiple products that belong to multiple owners, that exist in multiple statuses or grades, and that have multiple lots assigned, but they all must be stored in the same location. A Container can be assigned to multiple WIP Orders. 
- LotNo is the batch number to be increased or decreased. Inventory cannot be negative for a product and batch, and batches are unique per product. Usually LotNo is an internal number linked to the supplier batch number in the LOT_NO table. 
- ProductId is always required, as it summarizes the product number and the product revision. 
- InventoryStatus is used to track the quality status of the inventory. Usually the status is the one tracked in the ERP system (Quality Inspection, Blocked, Available). 
- PartnerId tracks the ownership of the inventory. Usually this is blank or equal to the partner ID linked to the Facility in the PARTNER_RELATIONSHIP table when the product is owned by the Facility. It can be equal to a partner of the customer or supplier type in case of consignment. 
- GradeID defines the grade of the product to be adjusted. 
- Quantity is the quantity to be adjusted, and UomCode is the UOM of this quantity. Quantity can be passed to the BC in any UOM, and the system will convert it to the order and the product UOM. This conversion is done according to the UOM conversion ratio (e.g., cubic meter to liter) or against the product UOM conversion (e.g., cubic meter to kg for the product density). In the inventory tables, all the information is persisted in the product UOM in the order tables (Wip_Order_Content Wip_Container), and the quantities are persisted in the ProductUOM and OrderUOM. 
 
- These two Inputs are not required when adjusting a Serial Number, as the system assumes that the quantity is one and the UOM is Each/Piece. 
 
- WarehouseLocationID is the location where the product should be adjusted. It is not a required Input when decreasing a Container or a Serial Number; otherwise, it is required. If entered and not required, then it is validated against the existing inventory. 
 
- The BC will validate that the Container is in the entered Warehouse location. 
 
- ReasonCode and Comment are required if the transaction was designed that way (in TransactionCode). 
- ProjectID, GLAccountID, and Department are required if the transaction was designed that way. The Inputs are validated (they must exist) and passed to the history so that they can be used, usually for financial allocation to the adjustment in an ERP system. 
 

 **Preventing Adjust with Checks to the Hold Tables** 
 

When adjust is called, the BC checks the TRANSACTION_REASON_CODE_HOLD table.
 

These are the available holds:
 
 
-  

Product – PRODUCT_HOLD
  
-  

LOT – LOT_NO_HOLD
  
-  

Serial – SERIAL_NO_HOLD
  
-  

Location – WAREHOUSE_LOCATION_HOLD
  
-  

Container – CONTAINER_HOLD
  
 

The BC validation does the following:
 
 
- The system retrieves all the TRANSACTION_REASON_CODE_HOLD records from the table for the transaction entered into the component. 
- The system checks the flags of each of the retrieved transaction reason records: 
 
- If the Restrict Product flag is set, the system checks for holds on the product. 
- If the Restrict Lot flag is set, the system checks for holds on the Lot Number. 
- If the Restrict Serial flag is set, the system checks for holds on the Serial Number. 
- If the Restrict Location flag is set, the system checks for holds on the location. 
- If the Restrict Container flag is set, the system checks for holds on the Container. 

 **Note**: if the Reason Code is NOT populated in the TRANSACTION HOLD REASON CODE table, then any hold record found will prevent the adjust from occurring. If it is populated, then only hold records of that Reason Code will prevent the adjust from occurring.
 
 
 
 
- As soon as a hold record is found, then the BC stops processing, and an error is displayed to the user.

## Pre-Conditions

The expected settings are to have Transaction and Transaction_Product_Inventory_Type both set as Increase or Decrease.

## History Recording in Production

Transaction history with information about the WIP Order and the inventories that are increased or decreased is created.

## Host Integration Support

Interface (message = MBGMCR02).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY | ID | (PK) Auto-generated |
|  | ProductID | From the Input or linked through Inventory in Container. |
|  | UomCode | From the Input. |
|  | InventoryStatus | From the Input. |
|  | WarehouseLocationID | From the Input. |
|  | Facility | From the Input. |
|  | Warehouse | From the Input. |
|  | LotNo | From the Input. |
|  | GradeID | From the Input. |
|  | QuantityOnHand | From the Input. |
|  | QuantityToPick | From the Input. |
|  | QuantityToPut | From the Input. |
|  | QuantityAllocated | From the Input. |
|  | ProductInventoryType | From the Input. |
|  | PartnerID | From the Input. |
| INVENTORY_CONTAINER | Container | From the Input. |
|  | InventoryID | From the inventory attributes. |
|  | QuantityOnHand | From the Input. |
|  | QuantityAllocated | From the Input. |
|  | LastGradeID | From the source inventory. |
|  | LastPartnerID | From the source inventory. |
| CONTAINER | Container | From the Input. |
|  | Facility | From the Input or based on WarehouseLocationID. |
|  | Warehouse | From the Input or based on WarehouseLocationID. |
|  | WarehouseLocationID | From the Input. |
| INVENTORY_SERIAL_NO | ProductID | From the Input. |
|  | SerialNo | From the Input. |
|  | Container | From the Input. |
|  | InventoryID | From the inventory attributes. |
| WIP_ORDER_CONTENT | ID | PK |
|  | InventoryID | From the inventory attributes. |
|  | QuantityToPick | From the Input. |
|  | OrderQuantityToPick | From the Input Quantity converted to OrderUom. |
|  | QuantityProcessed | From the Input. |
|  | OrderQuantityProcessed | From the Input Quantity converted to OrderUom. |
| WIP_ORDER_CONTAINER | ID | PK |
|  | WipOrderContentID | From the inventory attributes and WipOrderNo. |
|  | Container | From the Input. |
|  | QuantityToPick | From the Input. |
|  | QuantityProcessed | From the Input. |
| WIP_ORDER_CONTENT_SERIAL | ProductID | From the Input. |
|  | SerialNo | From the Input. |
|  | WipOrderContentID | From WipOrderContent. |
|  | WipOrderContainerID | From WipOrderContainer. |
