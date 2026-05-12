# OrderInformation

**Category:** Apriso/Order/Status/EventType
**Class:** `FlexNet.BusinessRules.Delivery.OrderInformationOutbounder`
**Assembly:** `FlexNet.BusinessRules.Delivery.dll`
**Status:** Hidden

## Description

This Business Component is created to support and/or customize the ProgressStatus_v2 Business Component through the Progress Transition Rules. 

The purpose of this Business Component is to generate FlexNet.BusinessRules.Delivery.OrderInformation section within FlexNet.BusinessFacade.Common.OrderProgressStatus XML. This section contains Order information related to an Order, Order detail and relevant containers used.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | data | ListOfChar | Yes | IOrderInformationData interface structure contains OrderNo, OrderType and Facility |

## Validations

- If OrderNo and OrderType inputs exist, 
 
- System retrieves a record from Order_Header with OrderNo and OrderType inputs.

## System Processing

- System builds the FlexNet.BusinessRules.Delivery.OrderInformation XML with the following: 
 
- System sets ProgressStatus, OrderNo, OrderType, Facility with corresponding input values. 
- System sets OrderStatus, Company, Priority, OrderedDate, ClosedDate, ProjectID, Division, CostCenter, CreatedBy, CreatedOn with corresponding values in Order_Header. 
- System builds OrderDates segment with the following: 
 
- System sets DateType, Actual, NotBefore, NotAfter, Target with values in Order_Date corresponding to OrderNo and OrderType input. 
 
- System builds OrderPartners segment with the following: 
 
- System sets PartnerID, PartnerRole, PartnerOrderNo, PartnerOrderType with values in Order_Partner corresponding to OrderNo and OrderType input. 
- System builds PartnerRelationships segment(s) with the following: 
 
- System sets Account, ShippingPoint, OutsideProcessorFlag, Company, Division, PartnerRole, Facility, Department, Warehouse, SalesOrganization, DistributionChannel, PurchasingOrganization, PurchasingGroup, InventoryOwner, LoadingPoint with values in Partner_Relationship corresponding to PartnerID in Order_Partner. 
 
 
- System builds OrderSeals segment with the following: 
 
- System sets SealNumber, SealStatus, SealedDate, BrokenDate with values in Order_Seal corresponding to OrderNo and OrderType inputs and SealStatus 0. 
 
- System builds UnitCharacteristics segment with the following: 
 
- System sets Characteristic, UpperSpecificationLimit, 
  
 

UpperControlLimit, TargetValue, LowerControlLimit, LowerSpecificationLimit, UomCode, Value, Attribute, ValueLastModifiedOn, AttributeLastModifiedOn with values in Unit_Characteristic corresponding to UnitID in Order_Header.
 
 
- For each Order_Detail record corresponding to OrderNo and OrderType input, System builds OrderDetail segment(s) with the following: 
 
 
 
- System sets OrderLineNo, OrderStatus, ProductNo, RequestedLotNo, OrderedUomCode, QuantityOrdered, ClosedDate, DaysEarlyAllowed, DaysLateAllowed, DaysException, QuantityToleranceAllowed, QuantityToleranceException, FromFacility, FromWarehouse, FromSAPWarehouse, FromWarehouseLocationID, FromInventoryClassID, FromInventoryStatus, FromPartnerID, ToFacility, ToWarehouse, ToSAPWarehouse, ToWarehouseLocationID, ToInventoryClassID, ToInventoryStatus, ToPartnerID, QuantityRejected, MinimumExpirationDate, ProgressStatus, ProjectID, CreatedBy, CreatedOn with values in Order_Detail 
- System builds OrderDates segment with the following: 
 
- System sets DateType, Actual, NotBefore, NotAfter, Target with values in Order_Detail corresponding to OrderNo and OrderType input and current OrderLineNo. 
 
- For each Order_Partner record corresponding to OrderNo and OrderType input and current OrderLineNo in Order_Detail, System builds OrderPartners segment with the following: 
 
- System sets PartnerID, PartnerRole, PartnerOrderNo, PartnerOrderType with values in Order_Partner. 
- For each Partner_Relationship corresponding to current Partner ID in Order_Partner, System builds PartnerRelationships segment with the following: 
 
- System sets Account, ShippingPoint, OutsideProcessorFlag, Company, Division, PartnerRole, Facility, Department, Warehouse, SalesOrganization, DistributionChannel, PurchasingOrganization, PurchasingGroup,InventoryOwner, LoadingPoint with values in Order_Partner. 
 
 
- System builds UnitCharacteristics segment with the following: 
 
- System sets Characteristic, UpperSpecificationLimit, UpperControlLimit, TargetValue, LowerControlLimit, LowerSpecificationLimit, UomCode, Value, Attribute, ValueLastModifiedOn, AttributeLastModifiedOn with values corresponding to Unit ID in Order_Detail. 
 
- For each Wip_Order record corresponding to OrderNo and Ordertype in Order_Detail, System builds WipOrders segment with the following: 
 
- System sets WipOrderNo, WipOrderType, OrderLineNo, ProductNo, OrderQuantity, CompletedQuantity, Priority, ExpectedStartDate, ReleaseDate, ScheduledStartDate, DueDate, ActualStartDate, ActualCompletionDate, Duration, UomCode, WorkOrderStatus, ProjectCode, ResourceName, ResourceType, ReleasedFacility, TargetQuantity, TargetOrderQuantity, ProgressStatus with values in Wip_Order. 
- System builds OrderDates segment with the following: 
 
- System sets DateType, Actual, NotBefore, NotAfter, Target with values in Order_Date corresponding to WipOrder and WipOrderType 
 
- System builds UnitCharacteristics segment with the following: 
 
- System sets Characteristic, UpperSpecificationLimit, UpperControlLimit, TargetValue, LowerControlLimit, LowerSpecificationLimit, UomCode, Value, Attribute, ValueLastModifiedOn, AttributeLastModifiedOn with values corresponding to Unit ID in Wip_Order.

## Pre-Conditions

- Order must exist.

## History Recording in Production

OrderInformation segment is mapped to Transaction_History_Material.
 

Unit_Characteristic segments are mapped to Transaction_History_Quality
 

OrderDetail segments are mapped to separate Transaction_History_Material.
 

 

Please refer to DELMIA Apriso Schema Repository documentation for field level mapping details.
