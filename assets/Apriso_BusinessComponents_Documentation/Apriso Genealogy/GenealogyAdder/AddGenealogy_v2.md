# AddGenealogy_v2

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyAdder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Genealogy, Add Child, Remove Child

## Description

This Business Component method is used to add and remove the genealogy link (adding is done by using positive quantities and removing is done by using negative quantities). This BC also provides features used within Containment, such as the following: 
 
- Put parent items on hold when the child is put on hold by its child 
- Put child items on hold when the parent is put on hold by its parent 
 

 **Unsupported Features** 
 
 
- Partner and LotInternalOrExternalFlag are no longer supported. Any business rules validation regarding partners must be done using DELMIA Apriso Process Builder.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | The Facility to add the child against. |
| Input | ParentProductID | Integer | Yes | The parent product ID. |
| Input | ParentLotNo | Char | No | The parent Lot Number. Required if the parent product is lot-tracked or both lot-tracked and serial-tracked. |
| Input | ParentSerialNo | Char | No | The parent Serial Number. Required if the parent product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | ChildProductID | Integer | Yes | The child product ID. |
| Input | ChildLotNo | Char | No | The child Lot Number. Required if the child product is lot-tracked or both serial-tracked and lot-tracked. |
| Input | ChildSerialNo | Char | No | The child Serial Number. Required if the child product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | Quantity | Decimal | No | The child's quantity to be added. Required if a product that is not serial-tracked is being added. |
| Input | UomCode | Char | No | The child's unit of measure code. If this is not specified, the child product default UOM is used. |
| Input | Cost | Decimal | No | The cost of the unit being added to the genealogy. |
| Input | ReasonCode | Char | No | The Reason Code for adding the unit to the genealogy. |
| Input | WorkCenter | Char | No | The Work Center of the item that was added to the genealogy. |
| Input | WipOrderNo | Char | No | The WIP Order number that drove the creation of the genealogy. |
| Input | WipOrderyType | Integer | No | The WIP Order type that drove the creation of the genealogy. |
| Input | OprSequenceNo | Char | No | The WIP Order's Operation that drove the creation of the genealogy. |
| Input | StepSequenceNo | Integer | No | The WIP Order's Step Sequence number that drove the creation of the genealogy. |
| Input | PropagateHolds | Boolean | No | Determines if the user wants to propagate the genealogy. |
| Output | GenealogyID | Integer | No | The genealogy ID record for the current execution. |
| Output | GenealogyQuantity | Decimal | No | The quantity in the genealogy record. |
| Output | GenealogyCost | Decimal | No | The cost in the genealogy record. |
| Output | GenealogyDetailID | Integer | No | The genealogy detail ID for the new record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ComponentInstanceID | Integer | The Component Instance ID. It is used to retrive information about the component instance. |

## Validations

- The system checks that the given parent is valid by validating that the parent product is not on hold, that the parent is either lot-tracked or serial-tracked, and that a Serial Number or Lot Number is provided for the parent. 
- The system checks that the given child is valid by validating that the child product is not on hold. The system also validates the child product tracking flag. If the child is both lot-tracked and serial-tracked, then the Serial Number is not required as an Input. 
- The system validates that a Serial Number or Lot Number exist for the child product. 
- The system validates that the child and parent are not the same entity (product, serial, lot). 
- UomCode is optional. When provided, it will be validated against the PRODUCT_UOM table. If it is not provided, the BC will use ChildProduct.DefaultUomCode. 
- If WipOrderNo and OprSequenceNo are provided, the system validates them. 
- If ReasonCode is provided, the system validates it against the REASON_CODE table.  
- If WorkCenter is provided, the system validates it against the WORK_CENTER table. 
- If ComponentInstanceID is provided, the system validates it against the COMPONENT_INSTANCE table.

## System Processing

- If there is no genealogy for the specified inputs (ParentProductID, ParentLotNo, ParentSerialNo, ChildProductID, ChildLotNo, ChildSerialNo), the system creates it.  
- The system creates a GENEALOGY_DETAIL record with the specified quantity, UOM Code, cost, etc.  
- The system updates the GENEALOGY record's cost and quantity with the values specified in the inputs. This is only valid for Lot Numbers and bulk items because the same Lot Number can be added to one parent many times with different quantities. In such a case, many records are stored in the GENEALOGY_DETAIL table (for each instance the method was called), but only one instance is stored in the GENEALOGY table, which is the accumulation of the quantity and cost. The GENEALOGY_DETAIL table stores all the inputted information, such as the WIP Order information, Reason Code, and Work Center. 
- If a negative quantity is inputted, the BC will add a new GENEALOGY_DETAIL record with a negative quantity and either update or create the GENEALOGY table with a negative quantity. Therefore, to remove quantities from the genealogy, you should also use this BC. When a new genealogy link is created, the parent and child nodes need to be checked for any genealogy hold. 
- If PropagateHolds is true, then at the point where it is linked, if the parent item is put on hold by its parent, all of the child items need to be put on genealogy hold. Similarly, if the first child item is put on hold by its child, then all of the parent items need to be put on genealogy hold. 
- If there is a parent and child genealogy hold for the same Reason Code, they are put on hold for the same Reason Code again with the appropriate ParentHold and ChildHold flag. Also, a child can be put on hold for the same or different Reason Code by multiple parent items. Similarly, a parent can be put on hold by multiple children. 
- The uniqueness of the hold includes GenealogySerialHoldID and GenealogyLotHoldID, which allows the parent and child item to have several genealogy holds. When a genealogy link is added, all the genealogy holds need to be propagated to the parent and child items recursively.

## History Recording in Production

The history related to any genealogy hold will be created with following optional information.
 
 
- Parent ProductNo  
- Parent LotNo  
- Parent SerialNo  
- Child ProductNo 
- Child LotNo  
- Child SerialNo  
- Cost  
- Quantity  
- UOM Code  
- Reason Code  
- Work Center  
- WIP Order No  
- WIP Order Type  
- Operation Sequence No

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | ParentProductID | ParentProductID |
|  | ParentLotNo | ParentLotNo |
|  | ParentSerialNo | ParentSerialNo |
|  | ChildProductID | ChildProductID |
|  | ChildLotNo | ChildLotNo |
|  | ChildSerialNo | ChildSerialNo |
|  | UomCode | UomCode |
|  | Quantity | Quantity |
| GENEALOGY_DETAIL | Cost | Cost |
|  | Quantity | Quantity |
|  | UomCode | UomCode |
|  | ReasonCode | ReasonCode |
|  | WorkCenter | WorkCenter |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | StepSequenceNo | StepSequenceNo |
|  | DSInstanceID | Copied from Component Instance |
|  | DSInstanceName | Copied from Component Instance |
