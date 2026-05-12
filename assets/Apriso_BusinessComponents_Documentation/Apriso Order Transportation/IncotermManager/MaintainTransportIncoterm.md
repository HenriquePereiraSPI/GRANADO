# MaintainTransportIncoterm

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.IncotermManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This business component overwrites the Incoterm Code of an existing Order_Shipment_Stage. The component validates that the Location is populated if required in the Incoterm table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderShipmentStageID | Integer | No | Order shipment stage id to maintain. |
| Input | IncotermCode | Char | No | Incoterm code to be assigned. |
| Input | Location | Char | No | Location to be assigned. Required if incoterm rules say so. |
| Input | LanguageID | Integer | No | Language ID of the Location - required when Location is specified. |

## Validations

- If Location has been provided, System validates that LanguageID extsis in LANGUAGE. 
- System validates OrderShipmentStageID exists in ORDER_SHIPMENT_STAGE. 
- System validates IncotermCode exists in INCOTERM. 
- If INCOTERM.LocationMandatory is true, system validates if Location has been provided.

## System Processing

Adds a new record to SHIPMENT_ORDER_STAGE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_ORDER_STAGE | IncotermCode | IncotermCode |
|  | LanguageID | LanguageID |
| TEXT_TRANSLATION | Medium | Medium |
