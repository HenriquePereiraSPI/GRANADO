# CalculateInboundOrderFacts

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.FactController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

This Business Component method is used to create and/or update outbound order facts.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
|  |  |  | No |  |

## Validations

The system is not required to do any validations, as this BC has no Inputs.

## System Processing

- The system extracts data from various operational database tables and creates or updates the ORDER_FACT records. 
- Additional details of this BC may be found in this Stored Procedure: flx_spOrderFactCalculateSelectByInboundOrderKPI.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  |  | The only table impacted is the ORDER_FACT table. The records are either inserted (if no record exists for ORDER and ORDER LINE) or updated (if a record exists for ORDER and ORDER LINE). |
| ORDER_FACT | ID | The incremental field for the KPI_VALUE table. |
|  | GoodQuantity | The amount of good quantity that was processed. |
|  | ScrapQuantity | The amount of scrap quantity that was processed. |
|  | TotalOtherQuantity | The amount of other quantity that was processed. |
|  | QuantityUomCode | The quantity UOM code. |
|  | QuantityOrdered | The quantity ordered. |
|  | OrderNo | The order number. |
|  | OrderType | The order type. |
|  | OrderLineNo | The order line. |
|  | ProductNo | The product number. |
|  | Facility | The Facility. |
|  | TransactionDate | The date the transaction was finished. |
|  | Warehouse | The location where the order was shipped out/received. |
|  | DueDate | The date the order was due. |
|  | Account | The partner associated with the order. |
|  | CountryCode | The country code of the order. |
|  | PostalCode | The postal code. |
|  | State | The state. |
|  | City | The city. |
|  | County | The country. |
|  | Region | The region. |
|  | District | The district. |
