# GenerateHeaderContainerXML

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Header Group Container XML Transaction History

## Description

This method writes a Transaction History XML for a given Container assigned to a Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Group header record. |
| Input | Container | Char | Yes | The Container number. |

## Validations

- System validates if Container exists and is assigned to the Weigh Header.

## System Processing

- System creates an XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## History Recording in Production

The table TRANSACTION_HISTORY_WEIGH_HCNT is populated when the XML generation for BC is enabled and a proper XML routing is set.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER_CONTAINER | WeighHeaderID | WeighHeaderID |
|  | Container | Container |
| TRANSACTION_HISTORY_WEIGH_HCNT | (all columns) | Populated when XML generation and routing is configured. |
