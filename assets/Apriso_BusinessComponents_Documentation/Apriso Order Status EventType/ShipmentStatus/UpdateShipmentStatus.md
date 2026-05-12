# UpdateShipmentStatus

**Category:** Apriso/Order/Status/EventType
**Class:** `FlexNet.BusinessRules.Shipments.ShipmentStatus`
**Assembly:** `FlexNet.BusinessRules.Shipment.dll`
**Status:** Hidden

## Description

Note: This Business Component is created to support and/or customize the ProgressStatus_v2 Business Component through the Progress Transition Rules.
 

The purpose of this Business Component method is to generate FlexNet.BusinessRules.Shipments.ShipmentStatus segment within FlexNet.BusinessFacade.Common.OrderProgressStatus XML. This section contains Shipment information related to an Order and Order detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | data | Char | No | IShipmentStatusData interface structure contains WipOrderNo, WipOrderType, OrderNo, OrderType, OrderLineNo , ProgressStatus and Facility |

## Validations

- if OrderNo and OrderType inputs exist, 
 
- System retrieves a record in the Order_Header with OrderNo and OrderType inputs.

## System Processing

- System builds the FlexNet.BusinessRules.Shipments.ShipmentStatus segment, 
 
- System sets ProgressStatus with ProgressStatus input, 
- System sets OrderNo with OrderNo in Order_Header, 
- System sets OrderType with OrderType in Order_Header, 
- System sets Comment with Extended in Order_Header, 
- System sets one or more SealNo with SealNumber from Order_Seal with OrderNo and OrderType inputs and 3 as the Seal status, 
- System builds DateDetail segment with the following: 
 
- System determines which DateType to populate based on the ProgressStatus input: 
 
- If ProgressStatus equals 10 or 11, populate Loading Time, 
- If ProgressStatus equals 12, 14, populate ShipmentCompletion, 
- If ProgressStatus equals 13, populate Shipment. 
 
- System retrieves Order_Date from OrderNo, OrderType inputs and DataType, 
- System sets DataType, Actual, NotBefore, NotAfter and Target from Order_Date.
