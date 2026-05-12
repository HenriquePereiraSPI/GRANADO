# DeletePartnerProduct

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PartnerProductRelationController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Partner Product Number ProductNo External Delete

## Description

This Business Component method removes a link between external Product Number (used by a Partner) and the DELMIA Apriso Product. This method deleted a record from the PARTNER_PRODUCT table using its ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PartnerProductID | Integer | Yes | ID of a record from the PARTNER_PRODUCT table to be removed. |

## Validations

-  

System validates if a record to be removed exists in the PARTNER_PRODUCT table.

## System Processing

- System removes a record from the PARTNER_PRODUCT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | PartnerProductID; ID of a record to be deleted. |
