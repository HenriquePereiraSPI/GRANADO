# AddDelivery

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This Business Component method is used to insert a row into the ORDER_SHIPMENT_STAGE table in order to persist the fact that an order was linked to a stage of the shipment. The shipment and the stage must exist. The BC validates the existence of the Inputs (shipment, stage). It also validates that a location is entered if the Incoterm requires a location. For example, the FOB (Free On Board) Incoterm requires a location (usually the name of the port): FOB Port of LongBeach, CA.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DeliveryOrderNo | Char | No | The delivery order number to be added to a shipment. |
| Input | DeliveryOrderType | Integer | No | The delivery order type. |
| Input | ShipmentStageID | Integer | No | The shipment stage ID to add the deivery to. |
| Input | IncotermCode | Char | No | The Incoterm code. |
| Input | Location | Char | No | Required if specified by the rules for the Incoterm. |
| Input | LanguageID | Integer | No | Required if Location is specified. |

## Validations

- The system validates that DeliveryOrderNo has been provided. 
- The system validates that DeliveryOrderType is greather than zero. 
- The system validates that ORDER_HEADER exists for the DeliveryOrderNo and DeliveryOrderType provided. 
- The system validates that ShipmentStageID is greather than zero. 
- The system validates that a SHIPMENT_STAGE exists for the ShipmentStageID provided. 
- The system validates that the Incoterm has been provided. 
- The system validates that the INCOTERM table exists for the Incoterm provided. 
- If INCOTERM.LocationMandatory is true, the system validates that the location has been provided. 
- If INCOTERM.LocationMandatory is true, the system validates that LanguageID has been provided and exists in LANGUAGE.

## System Processing

The system adds a new record to ORDER_SHIPMENT_STAGE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SHIPMENT_STAGE | IncotermCode | IncotermCode |
|  | OrderNo | ShipmentOrderNo |
|  | OrderType | ShipmentOrderType |
|  | ShipmentStageID | ShipmentStageID |
| TEXT_TRANSLATION | Medium | Location |
