# PackConfirm

**Category:** Apriso/Order/Status/EventType
**Class:** `FlexNet.BusinessRules.Delivery.PackingConfirmationOutbounder_v2`
**Assembly:** `FlexNet.BusinessRules.Delivery.dll`
**Status:** Hidden

## Description

Note: This Business Component is created to support and/or customize the ProgressStatus_v2 Business Component through the Progress Transition Rules.
 

The purpose of this Business Component is to generate FlexNet.BusinessRules.Delivery.PackingConfirmation section within FlexNet.BusinessFacade.Common.OrderProgressStatus XML. This section contains packing information related to Order, Order detail and relevant containers used.
 

This version of the BC builds the Containers segment unlike PackConfirm from PackingConfirmationOutbounder. The Container structure was designed to match SAP DELVRY03 structure that handles auxiliary packing materials in automotive industries.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | data | ListOfChar | Yes | IPackConfirmData interface structure contains WipOrderNo, WipOrderType, OrderNo, OrderType, OrderLineNo, ProgressStatus and Facility |

## Validations

- If WipOrderNo and WipOrderType inputs exist, 
 
- System retrieves a record from WIP_ORDER with WipOrderNo and WipOrderType inputs. 
- System validates OrderNo, OrderType and OrderLineNo specified in Wip_Order must exist. 
- System retrieves a record from Order_Header with OrderNo and OrderType from Wip_Order record. 
- System retrieves a record from Order_Detail with OrderNo, OrderType and orderLineNo from Wip_Order record. 
- System retrieves one or more records from WIP_Order_Content with WipOrderNo and WipOrderType inputs. 
 
- Or if OrderNo, OrderType and OrderLineNoinputs exist, 
 
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

- System builds the FlexNet.BusinessRules.Delivery.PackingConfirmationXML, 
 
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
-  

FromSAPWarehouse with FromSAPWarehouse in Order_Detail
  
-  

FromFacility with FromSAPWarehouse in Order_Detail.
  
 
 
 
 
 
 
 

 
 
- For each group of Wip_Order_Content records with WipOrderNo and WipOrderType and same warehouse where QuantityToPick is greater than 0, system builds PackingContainersegment with the following: 
 
- For each Wip_Order_Container record in Wip_Order_Content record(s), 
 
- If stock product (where ProductInventoryType != PackagingNonReturnable, PackagingNotManagedInInventory, PackagingReturnable and NonstockMaterial), 
 
- System validates the Packing Product specified in Wip_Order_Content is the same as Product in Order_Detail. 
- Set Container with Container in Wip_Order_Container. 
- Set InContainer with InContainer for Container. 
- Set Quantity with sum of all QuantityToPick in Wip_Order_Content. 
- If LotNo in Wip_Order_Content exists, build LotQuantityPairsegment with one or more LotNo and Quantity pairs. 
 
- If Packing Product (ProductInventoryType = PackagingNonReturnable or PackagingNotManagedInInventory or PackagingReturnable), 
 
- Set Container with Container in Wip_Order_Container 
- Set Container with Container in Wip_Order_Container. 
- Set Quantity with sum of all QuantityToPick in Wip_Order_Content. 
- Build PackingMaterial segment with one or more PackingProductNo(Wip_Order_Content.ProductID) and PackingQuantity (corresponding QuantityToPick in Wip_Order_Container) 
 
 
 
 
 
 
 

 
 
- System builds Containers segment based on the same data as with OrderDetail segment and structure them based on Master/Child container relationship: 
 
 

 
 
 
- For each Container that does not have any parents, system builds Containerssegment with the following: 
 
- Set Container with Master Container 
- For each Order_Detail, 
 
- Set OrderLineNo 
- For each Product in the Container, system build Productssegment with the following: 
 
- Set ProductNo, OrderedUOMCode, FromWarehouse, FromSAPWarehouse, FromFacility, Quantity with values in Order_Detail 
- If LotNo in Wip_Order_Content exists, build LotQuantityPairsegment with one or more LotNo and Quantity pairs. 
 
 
- For each Packing Material, system builds PackingMaterialsegment with the following: 
 
 
- Set PackingProductNo 
- Set PackingLotNo 
- Set PackingQuantity 
 
 
- For each Child Containers, system builds ChildContainerssegment with the following: 
 
- Set Container with child Container For each Order_Detail, 
 
- Set OrderLineNo 
- For each Product in the Container, system build Productssegment with the following: 
 
- Set ProductNo, OrderedUOMCode, FromWarehouse, FromSAPWarehouse, FromFacility, Quantity with values in Order_Detail 
- If LotNo in Wip_Order_Content exists, build LotQuantityPairsegment with one or more LotNo and Quantity pairs. 
- For each Packing Material, system builds PackingMaterialsegment with the following: 
 
- Set PackingProductNo 
- Set PackingLotNo 
- Set PackingQuantity

## Pre-Conditions

Order must exist.

## History Recording in Production

PackingContainer segments are mapped to Transaction_History_Material. 
LotQuantityPair segments are mapped to Transaction_History_MatDet. 
Please refer to DELMIA Apriso Schema Repository documentation for field level mapping details.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| ORDER_DETAIL | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_ORDER | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| The following tables are used by the component to retrieve data, but are not updated by the BC: |  |  |
| PROGRESS_TRANSITION_RULES | Facility | Inputted Facility (Required) |
|  | OrderType | Inputted OrderType |
|  | SourceProgressStatus | Retrieved ProgressStatus (e.g. current value in WIP_ORDER.ProgressStatus if Wip Order inputted) |
|  | DestinationProgressStatus | Inputted ProgressStatus (Required) |
|  | EventType | Data Retrieved for syst. processing |
|  | AsynchronousCall | Data Retrieved for syst. processing |
|  | HostTransactionCode | Data Retrieved for syst. processing |
|  | HostMessageType | Data Retrieved for syst. processing |
|  | HostIndicator1 | Data Retrieved for syst. processing |
|  | HostIndicator2 | Data Retrieved for syst. Processing |
| EVENT_TYPE | EventType | PROGRESS_TRANSITION_RULES.EventType |
|  | BCMethodFUID | Data Retrieved for syst. Processing |
