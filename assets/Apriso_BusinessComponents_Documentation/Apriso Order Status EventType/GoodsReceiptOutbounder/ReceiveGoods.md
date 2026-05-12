# ReceiveGoods

**Category:** Apriso/Order/Status/EventType
**Class:** `FlexNet.BusinessRules.Delivery.GoodsReceiptOutbounder`
**Assembly:** `FlexNet.BusinessRules.Delivery.dll`
**Status:** Hidden

## Description

Note: This Business Component is created to support and/or customize the ProgressStatus_v2 Business Component through the Progress Transition Rules. 
 

The purpose of this Business Component method is to generate FlexNet.BusinessRules.Delivery.GoodsReceipt section within FlexNet.BusinessFacade.Common.OrderProgressStatus XML. This section contains Goods Receipt information related to an Order and Order detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | data | ListOfChar | No | IReceiveGoodsData interface structure contains WipOrderNo, WipOrderType, OrderNo, OrderType, OrderLineNo , ProgressStatus and Facility. |

## Validations

- If WipOrderNo and WipOrderType inputs exist: 
 
- System retrieves a record from WIP_ORDER with WipOrderNo and WipOrderType inputs. 
- System validates OrderNo, OrderType and OrderLineNo specified in Wip_Order must exist. 
- System retrieves a record from Order_Header with OrderNo and OrderType from Wip_Order record. 
- System retrieves a record from Order_Detail with OrderNo, OrderType and orderLineNo from Wip_Order record. 
- System retrieves a record from Order_Partner with OrderNo, OrderType from Wip_Order record. 
- System retrieves one or more records from WIP_Order_Content with WipOrderNo and WipOrderType inputs. 
 
- Or if OrderNo, OrderType and OrderLineNo inputs exist: 
 
- System retrieves a record in the Order_Header with OrderNo and OrderType inputs. 
- System retrieves a record from Order_Detail with OrderNo, OrderType and orderLineNo inputs. 
- System retrieves records from Order_Partner with OrderNo, OrderType inputs. 
- System retrieves records from Wip_Order with OrderNo and OrderType and orderLineNo from Order_Detail. 
- System retrieves one or more records from WIP_Order_Content with WipOrderNo and WipOrderType from Wip_order. 
 
- Or if Orderno and OrderType inputs exist: 
 
- System retrieves a record in the Order_Header with OrderNo and OrderType inputs. 
- System retrieves records from Order_Detail with OrderNo and OrderType inputs. 
- System retrieves records from Order_Partner with OrderNo and OrderType inputs.

## System Processing

- System builds the FlexNet.BusinessRules.Delivery.GoodsReceipt segment, 
 
- System sets ProgressStatus with ProgressStatus input. 
- System sets OrderNo with OrderNo in Order_Header. 
- System sets OrderType with OrderType in Order_Header. 
- For each group Wip_Order_Content records with the same warehouse, System builds GoodsReceiptDetail segment with the following: 
 
- If WipOrderNo and WipOrderType inputs exist, system builds GoodsReceiptDetail segments with Wip_Order_Content records related to WipOrderNo and WipOrderType with the following: 
- Or if OrderNo, OrderType and OrderLineNo inputs exist, system builds GoodsReceiptDetail segments with Wip_Order_Content records related to OrderNo, OrderType and OrderLineNo inputs with the following: 
- Or if Orderno and OrderType inputs exist, system builds GoodsReceiptDetail segments with Wip_Order_Content records related to Order_Detail records for OrderNo, OrderType with the following: 
 
- System sets OrderLineNo, ProductNo, OrderedUOMCode with values in Order_Detail 
- System sets FromWarehouse, FromFacility from Inventory corresponding to InventoryID in Wip_Order_Content if Inventory exists (this case is available only in old data model). Otherwise, use values from Order_Detail. 
- System sets Quantity with the sum of QuantityProcessed in Wip_order_Content records for the same warehouse. 
- If Product is serial track and if Processed flag Wip_Order_Content is true, system builds SerialDetail segment with the following: 
 
- System set SerialNo and LotNo values in Wip_Order_Content_Serials records corresponding to WipOrderContent id in Wip_Order_Content. 
 
- If Product is lot track, system builds LotQuantityPair segment with one or more LotNo and QuantityProcessed values in Wip_Order_Content.

## History Recording in Production

GoodReceiptDetail segments are mapped to Transaction_History_Material.
 

LotQuantityPair segments are mapped to Transaction_History_MatDet.
 

SerialDetail segments are mapped to Transaction_History_MatDet.
 

Please refer to DELMIA Apriso Schema Repository documentation for field level mapping details.
