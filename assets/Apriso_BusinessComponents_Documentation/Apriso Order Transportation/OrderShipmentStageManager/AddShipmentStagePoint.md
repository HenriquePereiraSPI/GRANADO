# AddShipmentStagePoint

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Deprecated

## Description

This Business Component method is used to add a shipment stage point to a shipment. The stage point is defined as a partner relationship entity. A partner relationship entity can be one of the following types:
 
 
- A partner having a given role (supplier, sub-contractor, customer) 
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
| Output | StagePointID | Integer | No | The ID of the created stage point. |
