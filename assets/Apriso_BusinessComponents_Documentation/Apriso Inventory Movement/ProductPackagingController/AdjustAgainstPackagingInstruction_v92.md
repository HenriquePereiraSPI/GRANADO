# AdjustAgainstPackagingInstruction_v92

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is a copy of AdjustAgainstPackagingInstruction, but it has an additional Output that returns the Containers created as a list. This BC also has the Input ContainerClassID that is used when creating the Containers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | The transaction code to use when adjusting or moving. |
| Input | WipOrderNo | Char | No | The WIP Order number against which the inventory is adjusted or moved. |
| Input | WipOrderType | Integer | No | The type of WIP Order. |
| Input | OrderNo | Char | No | The order number against which the inventory is adjusted or moved. |
| Input | OrderType | Integer | No | The type of order. |
| Input | LotNo | Char | No | The Lot Number to adjust the quantities against. Required if the product is lot-tracked. |
| Input | ProductID | Integer | Yes | The product ID against which the quantities are adjusted. |
| Input | InventoryStatus | Integer | Yes | The status of the inventory to be adjusted. |
| Input | PartnerID | Integer | No | The partner ID of the inventory to be adjusted. |
| Input | GradeID | Integer | No | The grade ID of the inventory to be adjusted. |
| Input | Quantity | Decimal | Yes | The decimal quantity of the product to be generated. |
| Input | NumberOfProductPerBox | Decimal | No | The number of products per box to use when the packaging instruction does not define the target quantity. |
| Input | NumberOfBoxPerPallet | Decimal | No | The number of boxes per pallet to use when the packaging instruction does not define this. |
| Input | UomCode | Char | Yes | The unit of measure of the quantity. |
| Input | WarehouseLocationID | Integer | Yes | The Warehouse location ID in which the quantity is adjusted. |
| Input | ReasonCode | Char | No | The Reason Code against which the inventory is performed. |
| Input | Comment | Char | No | The comment. |
| Input | PackagingInstructionID | Integer | No | The packaging instruction ID against which the inventory adjustment is performed. |
| Input | PackagingPartnerID | Integer | No | The ID of the packaging partner (for returnable packaging materials). |
| Input | PackagingFromWarehouseLocationID | Integer | No | The ID of the Warehouse location for returnable packaging materials. |
| Input | ContainerClassID | Integer | No | The Container class ID to be used when creating new containers. |
| Output | Counter | Integer | No | The number of created Containers. |
| Output | Containers | Char | No | The list of created Containers. |

## Validations

-  The system validates that PackaingInstructioID is specified and that the packaging instruction exists (Packaging_Instr_Header).  
-  The system validates that TransactionCode is specified and exists.  
-  If WipOrderNo and WipOrderType are specified, the system validates that the WIP Order exists.  
-  If OrderNo and OrderType are specified, the system validates that the order exists (Order_Header).  
-  The system validates that ProductID is specified and exists.  
-  The system validates that UomCode is specified and exists.  
-  The system validates that WarehouseLocationID is specified and exists.  
-  If the packaging material type if returnable, the system validates that PackagingFromWarehouseLocationID and PackagingPartnerID are provided.  
-  If PackagingFromWarehouseLocationID is specified, the system validates that the location exists.  
-  If the product is lot-tracked, the system validates that LotNo is specified and exists.  
-  The system validates that InventoryStatus is specified and exists.  
-  If PartnerID is specified, the system validates that it exists.  
-  If PackagingPartnerID is specified, the system validates it exists.  
-  If GradeID is specified, the system validates it exists.  
-  If ReasonCode is specified, the system validates it exists.  
-  The system validates that the default UOM code is set for the product.  
-  The system validates that the product inventory type for the packaging material (defined for the packaging instruction) is PackaingReturnable, PackagingNonReturnable, or PackagingNotManagedInInventory.

## System Processing

-  If PartnerID is not specified, the system retrieves it from PARTNER_RELATIONSHIP.  
-  If the default UOM code for the product is different than UomCode, the system converts the quantity to the default UOM.  
-  Based on the Inputs and the PI configuration, the system retrieves how many of each PI should be created according to the following guidelines:  
 
-  The system identifies how each is PI built and whether it contains the following entities:  
 
-  Packaging material  
-  Other PI  
-  Product  
 
-  For each PI of level 2 (if any), the system creates a Container:  
 
-  If the PI contains product, the system adjusts the Container with the right quantity of product.  
-  If the PI contains packaging, the system adjusts the Container with the right quantity of packaging material.  
 
-  For each PI of level 1, the sytem creates a Container:  
 
-  If the PI contains product, the system adjusts the Container with the right quantity of product.  
-  If the PI contains packaging product, the system adjusts the Container with the right quantity of packaging product.  
-  If the PI contains PI, the system moves all the Containers of level 2 that have to be moved in the Container of level 1.  
 
 
-  The Containers and inventory are created/adjusted in the location provided by WarehouseLocationID.  
-  The inventory to create/adjust is retrieved based on the specified ProdutID, InventoryStatus, PartnerID, GradeID, and LotNo.  
-  If WipOrderNo and WipOrderType, the system does the adjustments and movements against this WIP Order.  
 

 ** Special Cases ** 
 
 
-  Special case 1: PI with no product defined (any product)  
 
-  This case is the same as the case with product: the system assumes that the product to be packed is the product passed as the Input.  
 
-  Special case 2: if sub-instructions are found for a product other than the product passed as an Input into this BC (e.g., if a fixed structure of packaging instructions are downloaded from SAP), then the instructions will be ignored by this BC. 
-  Special case 3: packaging material is not managed in inventory:  
 
-  The system creates/adjusts the packaging material in the Warehouse location provided by WarehouseLocationID.  
 
-  Special case 4: packaging material is returnable:  
 
-  The system validates that the packaging material exists in the location provided by PackagingFromWarehouseLocationID for the partner provided by PackagingPartnerID.  
-  The system moves the packaging material to the Container.  
 
-  Special case 5: packaging material is non-returnable:  
 
-  The system validates that the packaging material exists in the location given by WarehouseLocationID and that it fulfills the following criteria:  
 
- The ProductID (the packaging product ID defined for the packaging instruction) exists. 
- The UOM code (the default UOM code of the packaging product ID) exists. 
- Inventory Status is of Unrestricted Use. 
- The Lot Number, Grade, and Partner are not set.  
 
-  The system moves the packaging material to the Container.

## History Recording in Production

Recorded on any adjustment, movement, or Container creation.

## Host Integration Support

Interface (message = MBGMCR02).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY | ProdutID | ProductID (Required) |
|  | LotNo | LotNo |
|  | GradeID | GradeID |
|  | InventoryStatus | InventoryStatus (Required) |
|  | WarehouseLocationID | WarehouseLocationID (Required)and PackagingFromWarehouseLocationID on movement. |
|  | PartnerID | PartnerID or PackagingPartnerID on movement. |
|  | Warehouse | WarehouseLocation.Warehouse |
|  | Facility | WarehouseLocation.Facility |
|  | LotNo | LotNo |
|  | QuantityOnHand | The quantity taken from the PI converted to the default UOM code for the product. |
| INVENTORY_CONTAINER | InventoryID | The ID of the created/adjusted inventory. |
|  | Container | The generated number of the Container. |
| WIP_ORDER_CONTENT | The same as for Adjust business component |  |
| WIP_ORDER_CONTAINER | The same as for Adjust business component |  |
| CONTAINER | ContainerNo | The generated number of the Container. |
|  | InContainerNo | The generated number of the parent Container. |
|  | WarehouseLoationID | WarehouseLocationID (Required) |
