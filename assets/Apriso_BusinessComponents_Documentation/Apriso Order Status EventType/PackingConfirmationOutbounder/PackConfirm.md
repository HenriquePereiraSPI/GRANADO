# PackConfirm

**Category:** Apriso/Order/Status/EventType
**Class:** `FlexNet.BusinessRules.Delivery.PackingConfirmationOutbounder`
**Assembly:** `FlexNet.BusinessRules.Delivery.dll`
**Status:** Hidden

## Description

Note: This Business Component is created to support and/or customize the ProgressStatus_v2 Business Component through the Progress Transition Rules.
 

The purpose of this Business Component is to generate FlexNet.BusinessRules.Delivery.PackingConfirmation segment within FlexNet.BusinessFacade.Common.OrderProgressStatus XML. This section contains packing information related to an Order, Order detail and relevant containers used. This version of the BC does not build containers segment. Use PackConfirm in PackingConfirmationOutbounder_v2 if Containers segment is required.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | data | ListOfChar | Yes | IPackConfirmData interface structure contains WipOrderNo, WipOrderType, OrderNo, OrderType, OrderLineNo , ProgressStatus and Facility |

## Validations

- If WipOrderNo and WipOrderType inputs exist, 
 
- System retrieves a record from WIP_ORDER with WipOrderNo and WipOrderType inputs. 
- System validates OrderNo, OrderType and OrderLineNo specified in Wip_Order must exist. 
- System retrieves a record from Order_Header with OrderNo and OrderType from Wip_Order record. 
- System retrieves a record from Order_Detail with OrderNo, OrderType and orderLineNo from Wip_Order record. 
- System retrieves a record from Order_Partner with OrderNo, OrderType from Wip_Order record. 
- System retrieves one or more records from WIP_Order_Content with WipOrderNo and WipOrderType inputs. 
 
- Or if OrderNo, OrderType and OrderLineNo inputs exist, 
 
- System retrieves a record in the Order_Header with OrderNo and OrderType. 
- System retrieves a record from Order_Detail with OrderNo, OrderType and orderLineNo inputs. 
- System retrieves records from Order_Partner with OrderNo, OrderType. 
- System retrieves records from Wip_Order with OrderNo and OrderType and orderLineNo from Order_Detail. 
- System retrieves one or more records from WIP_Order_Content with WipOrderNo and WipOrderType inputs. 
 
- Or if Orderno and OrderType inputs exist, 
 
- System retrieves a record in the Order_Header with OrderNo and OrderType. 
- System retrieves records from Order_Partner with OrderNo, OrderType. 
- System retrieves a record from Order_Detail with OrderNo and OrderType inputs.

## System Processing

- System builds the FlexNet.BusinessRules.Delivery.PackingConfirmation XML, 
 
- System sets ProgressStatus with ProgressStatus input. 
- System sets OrderNo with OrderNo in Order_Header. 
- System sets OrderType with OrderType in Order_Header. 
- System builds OrderDetail segment based on the following: 
 
- If WipOrderNo and WipOrderType inputs exist, system builds one OrderDetail segment with one Order_Detail record related to WipOrderNo and WipOrderType with the following: 
- Or if OrderNo, OrderType and OrderLineNo inputs exist, system builds one OrderDetail segment with one Order_Detail record related to OrderNo, OrderType and OrderLineNo with the following: 
- Or if Orderno and OrderType inputs exist, system builds one or more OrderDetail segments with Order_Detail records related to OrderNo and OrderType with the following: 
 
- OrderLineNo with OrderLineNo in Order_Detail 
- ProductNo with ProductNo with ProductID in Order_Detail 
- OrderedUOMCode with UomCode in Wip_Order 
- FromWarehouse with FromWarehouse in Order_Detail 
- FromSAPWarehouse with FromSAPWarehouse in Order_Detail 
- FromFacility with FromSAPWarehouse in Order_Detail. 
 
 
 
 
 
 
 
 
- For each Wip_Order_Content records with WipOrderNo and WipOrderType where QuantityToPick is greater than 0, system builds PackingContainer segment with the following: 
 
- For each Wip_Order_Container record in Wip_Order_Content record(s), 
 
- If stock product (where ProductInventoryType != PackagingNonReturnable, PackagingNotManagedInInventory, PackagingReturnable and NonstockMaterial), 
 
- System validates the Packing Product specified in Wip_Order_Content is the same as Product in Order_Detail. 
- Set Container with Container in Wip_Order_Container. 
- Set InContainer with InContainer for Container. 
- Set Quantity with sum of all QuantityToPick in Wip_Order_Content. 
- If LotNo in Wip_Order_Content exists, build LotQuantityPair segment with one or more LotNo and Quantity pairs. 
 
- If Packing Product (ProductInventoryType = PackagingNonReturnable or PackagingNotManagedInInventory or PackagingReturnable), 
 
- Set Container with Container in Wip_Order_Container 
- Set Container with Container in Wip_Order_Container. 
- Set Quantity with sum of all QuantityToPick in Wip_Order_Content. 
- Build PackingMaterial segment with one or more PackingProductNo (Wip_Order_Content.ProductID) and PackingQuantity (corresponding QuantityToPick in Wip_Order_Container)

## Pre-Conditions

- Order must exist.

## History Recording in Production

PackingContainer segments are mapped to Transaction_History_Material. 
LotQuantityPair segments are mapped to Transaction_History_MatDet. 
 
 

Please refer to DELMIA Apriso Schema Repository documentation for field level mapping details.
