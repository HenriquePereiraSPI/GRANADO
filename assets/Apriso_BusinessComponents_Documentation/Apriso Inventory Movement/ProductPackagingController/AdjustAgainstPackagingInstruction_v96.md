# AdjustAgainstPackagingInstruction_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to generate Inventory 2 and Containers with reference to a packaging instruction (PI).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | The transaction code to be used. |
| Input | WipOrderNo | Char | No | The WIP Order number against which Inventory 2 will be increased. |
| Input | WipOrderType | Integer | No | The type of WIP Order. |
| Input | OrderNo | Char | No | The order number against which Inventory 2 will be increased. |
| Input | OrderType | Integer | No | The type of order. |
| Input | LotNoList | ListofChar | No | The Lot Number against which the quantities will be adjusted. Required if the product is lot-tracked. |
| Input | ProductIDList | ListofInteger | Yes | The list of product IDs against which the quantities will be adjusted. |
| Input | InventoryClassID | Integer | No | The inventory class ID of the products to be adjusted. |
| Input | InventoryStatus | Integer | Yes | The status of the Inventory 2 to be adjusted. |
| Input | PartnerID | Integer | No | The partner ID of the Inventory 2 to be adjusted. |
| Input | GradeID | Integer | No | The grade ID of the Inventory 2 to be adjusted. |
| Input | ERPMaterialStockID | Integer | No | The ERP material stock ID of the products to be adjusted. |
| Input | QuantityList | ListofDecimal | Yes | The list of decimal quantities of the products to be generated. |
| Input | UomCodeList | ListofChar | Yes | The unit of measure of the quantities. |
| Input | NumberOfProductPerBox | Decimal | No | The number of products per box to use when the packaging instruction does not define the target quantity. |
| Input | NumberOfBoxPerPallet | Decimal | No | The number of boxes per pallet to use when the packaging instruction does not define this. |
| Input | WarehouseLocationID | Integer | Yes | The Warehouse location ID in which the quantity is adjusted. |
| Input | ReasonCode | Char | No | The Reason Code against which the Inventory 2 adjustment is performed. |
| Input | Comment | Char | No | The comment. |
| Input | PackagingInstructionID | Integer | No | The packaging instruction ID against which the Inventory 2 adjustment is performed. |
| Input | PackagingAllocationID | Integer | No | The ID of the Inventory 2 allocation (for packaging materials). |
| Input | PackagingPartnerID | Integer | No | The ID of the packaging partner (for returnable packaging materials). |
| Input | PackagingFromWarehouseLocationID | Integer | No | The ID of the Warehouse location for returnable packaging materials. |
| Input | ContainerClassID | Integer | No | The Container class ID to be used when creating new Containers. |
| Output | Counter | Integer | No | The number of created Containers. |
| Output | Containers | ListofChar | No | The list of created Containers. |
| Output | InContainers | ListofChar | No | The list of the parents of created Containers. |

## Validations

- The system validates if PackagingInstructionID is specified and the packaging instruction exists. 
- The system validates if TransactionCode is specified and exists. 
- If WipOrderNo and WipOrderType are specified, the system validates that the WIP Order exists. 
- If OrderNo and OrderType are specified, the system validates that the order exists (Order_Header). 
- The system validates if WarehouseLocationID is specified and exists. 
- If PackagingFromWarehouseLocationID and PackagingPartnerID are provided, the system validates if the WarehouseLocation and partner exist. 
- If ReasonCode is specified, the system validates it exists. 
- If ContainerClassID is specified, the system validates it exists. 
- The system checks if the provided list of product IDs is unique. 
- The system checks if the provided lists of ProductIDList, QuantityList, and UOMCodeList have the same size. 
- For each provided product ID from ProductIDList, the system validates the following: 
 
- The product ID exists. 
- The product is lot-tracked (if it is, then the system checks if LotNo is provided and exists). 
- The product default UOM code is specified.  
 
- For each product, the system checks if the default UOM code is different than the provided UomCode (if it is, the system converts the quantity to the default product UOM). 
- If GradeID is specified, the system checks if the product grade exists for each product ID. 
- If PartnerID is specified, the system validates that it exists; otherwise, the system retrieves it from the partner relationship. 
- If InventoryStatus is specified, the system validates it exists. 
- If InventoryClassID is specified, the system validates it exists. 
- If PackagingPartnerID is specified, the system validates it exists. 
- If GradeID is specified, the system validates it exists. 
- If ERPMaterialStockID is specified, the system validates it exists. 
- If PackagingAllocationID is specified, the system validates it exists.

## System Processing

The system processes the PI using the Inputs and the packaging instruction configuration in the following way:
 
 
- The system creates a Container in the Warehouse location (inputted in this BC) using the PI SequenceID of the provided Container class (if SequenceID is NULL, then a default CONTAINER_NO Sequence is used). 
- The system iterates through the PI children in the order based on the children SequenceNo (if child SequenceNo is NULL, then it is considered 0) and performs the actions described below. 
- The system checks if the last PI children processing consumed any of the provided quantities. If it did not, then the system returns a failure, which means that the BC was not used in the proper way. If the quantity values have been decreased and not all of the quantities are 0, the system continues the execution starting from step 1 described above. Otherwise, the execution is finished. 
 

The processing of packaging instruction children is based on the child type and is performed in the following way:
 
 
- If child is a packaging instruction, the system performs the actions described in the three steps above considering the child to be the packaging instruction header. The only difference is in the execution stop condition. Steps 1 and 2 are performed the number of child TargetQuantity times (that is, the number of times as determined by TargetQuantity, or if NumberOfBoxPerPallet is provided, then NumberOfBoxPerPallet times), unless the quantities are no longer decreasing, in which case the processing stops. 
 
-  If the UOM of the child packaging instruction is different than EA (the default UOM), then this UOM is always converted to EA.  
 
- If the child is a product (or Any Product): 
 
- The system checks if the product is one of inputted products. If it is not, then the child is ignored. If the child is Any Product, then the first product from the inputted list is used. If the child target quantity is not set, then the provided NumberOfProductPerBox is used as the target quantity (if NumberOfProductPerBox is also not set, then the system returns a failure). 
- The target quantity is converted to the product default UOM code. 
- If the product is serial-tracked, then the following actions occur: 
 
- The system creates Serial Numbers (in the amount specified as the target quantity) using the child SequenceID (if SequenceID is NULL, then a default SERIAL_NO Sequence is used). 
- The system performs an Inventory 2 increase for each Serial Number (if WIP is provided, then the increase is executed against the WIP) for the following entities: 
 
- Product 
- Container (currently processed) 
- Lot (inputted to the BC) 
- Warehouse Location (inputted to the BC) 
- Inventory Class (inputted to the BC) 
- Inventory Status (inputted to the BC) 
- Partner (inputted to the BC) 
- Grade (inputted to the BC) 
- ERP Material Stock (inputted to the BC) 
- Serial Number 
- Quantity set to 1.0 
 
 
- If the product is lot-tracked, then the system performs an Inventory 2 increase (if WIP is provided then the increase is executed against the WIP) for the following entities: 
 
- Product 
- Container (currently processed) 
- Lot (inputted to the BC) 
- Warehouse Location (inputted to the BC) 
- Inventory Class (inputted to the BC) 
- Inventory Status (inputted to the BC) 
- Partner (inputted to the BC) 
- Grade (inputted to the BC) 
- ERP Material Stock (inputted to the BC) 
- Quantity set to target quantity 
 
 
- If the child is packaging material, then the system checks the product inventory type of the packaging material product: 
 
- If the type is Packaging Not Managed In Inventory, then the following actions occur: 
 
- The child target quantity is converted to the packaging material product default UOM code. 
- If the product is serial-tracked, then: 
 
- The system creates Serial Numbers (in the amount specified as the target quantity) using the child SequenceID (if SequenceID is NULL, then a default SERIAL_NO Sequence is used). 
- The system performs an Inventory 2 increase for each Serial Number (if WIP is provided, then the increase is executed against the WIP) for the following entities: 
 
- Packaging material product 
- Container (currently processed) 
- Warehouse location (inputted to the BC) 
- Inventory status set to Not Active 
- Serial Number 
- Quantity set to 1.0 
 
 
- If the product is lot-tracked, then the system performs an Inventory 2 increase (if WIP is provided, then the increase is executed against the WIP) for the following entities: 
 
- Packaging material product 
- Container (currently processed) 
- Warehouse location (inputted to the BC) 
- Inventory status set to Not Active 
- Quantity set to target quantity 
 
 
- If the type is Packaging Returnable or Non Returnable, then the following actions occur: 
 
- If the type is Packaging Returnable, the system checks if the partner Warehouse location and the packaging partner are provided (if they are not, the system returns a failure error). 
- The child target quantity is converted to the packaging material product default UOM code. 
- The system searches for the packaging material Inventory 2 (if PackagingAllocationID is provided, then the search also includes the allocated Inventory 2) either in a Warehouse location or in a packaging warehouse location (if the type is Packaging Returnable) with the inventory status set to UnrestrictedUse. 
- If quantity (or the number of Serials Numbers when the packaging material product is serial-tracked) of the found Inventory 2 (or if PackagingAllocationID is set, then the aggregated quantity of the allocated and not allocated Inventory 2) is less than the required target quantity, then the system returns a failure error. 
- The system moves the found Inventory 2 to the currently processed Container.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 |  | This table is handled the same way as it is in the IncreaseNotAllocatedInventory2 and MoveNotAllocatedInventory2 BC methods. |
| WIP_ORDER_CONTENT |  | This table is handled the same way as it is in the IncreaseNotAllocatedInventory2 BC method. |
| WIP_ORDER_CONTAINER |  | This table is handled the same way as it is in the IncreaseNotAllocatedInventory2 BC method. |
| WIP_ORDER_CONTENT_SERIAL |  | This table is handled the same way as it is in the IncreaseNotAllocatedInventory2 BC method. |
| CONTAINER | ContainerNo | The generated number of the Container. |
|  | InContainerNo | The generated number of the parent Container. |
|  | WarehouseLoationID | The inputted WarehouseLocationID. |
|  | ContainerClassID | The inputted ContainerClassID. |
| q | PackagingInstrHeaderID | The ID of the currently processed packaging instruction header. |
