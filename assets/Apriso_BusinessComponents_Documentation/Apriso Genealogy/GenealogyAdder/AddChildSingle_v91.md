# AddChildSingle_v91

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyAdder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component method is used to facilitate the addtion of a child component to a parent within WIP (as in, a WIP Order, WIP Operation, or Step).
 

 The functionality includes the addition of components (children) that are tracked by Lot Number, Serial Number, or both to a product (parent) being produced that is tracked by Lot Number, Serial Number, or both. 
 

The AddChildSingle_v91 method updates an existing record if one already exists, whereas the AddChildMultiple_v91 BC uses the given Inputs to create a new record in the GENEALOGY table.
 

 **Supported Features** 
 
 
- Component status validation 
- Validation that the component has not already been added 
- WIP Order and Operation status validation 
- WIP Order, Product, Lot Number, and Serial Number hold validation 
- Transaction history 
- Optional component validation against the BOM 
- Product-only component validation 
 

 **Unsupported Features** 
 
 
- Automatic issue of a child component (miscellaneous issue) 
- Automatic issue of components on a pick-list that have not been picked 
- ECN traceability when the component BOM validation enabled and the product is not on the BOM 
- Support for license plates 
- Quantity component validation

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | The WIP Order for which the child will be added to the parent. Must exist in the system. |
| Input | WipOrderType | Integer | No | The WIP Order type for which the child will be added to the parent. |
| Input | OprSequenceNo | Char | No | The WIP Operation for which the child will be added to the parent. Must exist in the system. |
| Input | StepSequenceNo | Integer | No | The Step Sequence number against which the child will be added to the parent. This is needed when the BOM validation is turned on. |
| Input | PartnerID | Integer | No | The child's partner ID. If LotInternalOrExternalFlag is false, then it is. |
| Input | ParentProductID | Integer | Yes | The parent product ID. |
| Input | ParentLotNo | Char | No | The parent Lot Number. Must be specified if the parent product is lot-tracked or both serial-tracked and lot-tracked. |
| Input | ParentSerialNo | Char | No | The parent Serial Number. Must be specified if the parent product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | ChildSerialNo | Char | No | The child Serial Number. Must be specified if the child product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | ChildProductID | Integer | No | The child product ID. Must exist in the system. |
| Input | ChildLotNo | Char | No | The child Lot Number. Must be specified if the child product is lot-tracked or both lot-tracked and serial-tracked. |
| Input | LotInternalOrExternalFlag | Boolean | No | If true, the child Lot Number is treated as an internal Lot Number. Otherwise, it is treated as an external supplier Lot Number. |
| Input | UomCode | Char | No | The child's unit of measure code. |
| Input | Quantity | DateTime | No | The child's quantity to be added. |
| Input | ValidateBOM | Boolean | No | Indicates if BOM validation should be performed. If so, only the product validation is done. |
| Input | BomValidationType | Integer | No | The BOM validation type. When the BOM validation type is 0 , then the validation is against the manufacturing BOM (WIP_COMPONENT table), product only. When the BOM validation type is 1 , then the validation is against the manufacturing BOM (WIP_COMPONENT table), product and quantity. |

## Validations

- The system validates the WIP Order, that the WIP Order status is either new or started, and that the WIP Order is not on hold. 
- The system validates the WIP Operation, that the WIP Operation status is either new or started, and that the WIP Operation is not on hold. 
- The system validates the product number (parent) for the WIP Order and that the product is not on hold. 
-  The system determines if the product number (parent) is lot-tracked or serial-tracked. If the parent product for the WIP Order is neither lot-tracked nor serial-tracked, the system returns an error message. If the parent product for the WIP Order is lot-tracked, the system validates the Lot Number (parent) for the WIP Order (that the lot is not on hold). If the parent product for the WIP Order is serial-tracked, the system validates the entered parent Serial Number:  
 
-  The parent Serial Number entered must be started or new for the current WIP Operation.  
-  The Serial Number must be currently be in the WIP status.  
-  The Serial Number must have the correct WIP Content Class (Good).  
-  The parent Serial Number must be assigned to the specified WIP Operation.  
-  The parent Serial Number must not be in any Container (Wip_Serial_No.ContainerNo has to be null).  
 
- The system validates the child product number that is to be added. The product must be valid in the system, and the product must not be on hold. 
- The system determines if the product number (child) is lot-tracked or serial-tracked. 
 
- If child is lot-tracked, the system validates the child Lot Number: 
 
- The Lot Number must be valid for this product. 
- The Lot Number must not be on hold. 
- If LotInternalOrExternalFlag is false, the supplier number must be valid for this Lot Number 
 
- If the child is serial-tracked, the system proceeds to validate the entered child Serial Number: 
 
- The child Serial Number must not be in the inventory. 
- There must be no holds against the Serial Number. 
 
- If the child is neither lot-tracked nor serial-tracked, the system returns an error message. 
 
- The system validates that UomCode is specified and exists. 
- The system determines if BOM validation is required (based on the BOM Validation Flag Input being set): 
 
- If ValidateBOM ='0', the system proceeds with no further validation. 
- If ValidateBOM ='1', then validation is determined by the following options: 
 
- If BOMValidationType= '0', only ProductID is validated against the manufacturing BOM in the WIP_COMPONENT AND COMPONENT table. 
- If BOMValidationType= '1', ProductID and Quantity are validated against the manufacturing BOM in the WIP_COMPONENT and COMPONENT table.

## System Processing

- The system checks if a record is found in the GENEALOGY table for the Inputs: 
 
- If the system finds a record, it does the following: 
 
- If Genealogy.UomCode (desitnation) is different than UomCode (source), the system converts the quantity to the destination UOM. 
- The system updates the genealogy link between the child component and the parent with the Inputs. 
 
- If the system does not find a record, it proceeds to add the genealogy link between the child component and the parent by creating a new record in the GENEALOGY table. 
 
- The system records the transaction history.

## Pre-Conditions

See **Validations **above. The parent and child products must be serial-tracked, lot-tracked, or both.

## History Recording in Production

The transaction history is recorded each time a record is added to the GENEALOGY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | ParentProductID | ParentProductID. |
|  | ParentLotNo | ParentLotNo |
|  | ParentSerialNo | ParentSerialNo |
|  | ChildProductID | ChildProductID |
|  | ChildLotNo | ChildLotNo |
|  | ChildSerialNo | ChildSerialNo |
|  | UomCode | UomCode |
|  | Quantity | Quantity |
