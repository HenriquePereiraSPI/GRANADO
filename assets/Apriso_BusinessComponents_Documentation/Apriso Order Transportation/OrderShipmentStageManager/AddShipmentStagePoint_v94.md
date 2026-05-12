# AddShipmentStagePoint_v94

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This Business Component method is used to add a shipment stage point to a shipment. The stage point is defined as a partner relationship entity. A partner relationship entity can be one of the following types:
 
 
- A partner having a given role (supplier, sub contractor, customer) 
- A partner relationship of the Facility, company, shipping point, Warehouse, or loading point type 
 

The point type is required, and it can be loading or unloading.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StagePointCode | Char | Yes | The stage point code. |
| Input | OrderNo | Char | Yes | The order number. |
| Input | OrderType | Integer | Yes | The order type. |
| Input | PartnerRelationshipID | Integer | No | The partner relationship. |
| Input | PointType | Integer | Yes | The shipment stage point type. |
| Input | SequenceNo | Integer | No | The Sequence number for the shipment stage point type. |
| Output | StagePointID | Integer | No | The ID of the created stage point. |

## Validations

- The system validates that StagePointCode has been provided. 
- The system validates that OrderNo and OrderType have been provided and exist in ORDER_HEADER. 
- The system validates that PointType exists in SHIPMENT_STAGE_POINT_TYPE. 
- The system validates that PartnerRelationshipID exists in PARTNER_RELATIONSHIP. 
- The system validates that OrderNo, OrderType, ShipmentPointCode, and PartnerRelationshipID exist in the SHIPMENT_STAGE_POINT. The combination must be unique.

## System Processing

The system adds a new record to SHIPMENT_STAGE_POINT.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_STAGE_POINT | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | PartnerRelationshipID | PartnerRelationshipID |
|  | PointType | PointType |
|  | SequenceNo | SequenceNo |
