# GenerateWeighLineDetailXML

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Line Detail XML Transaction History

## Description

This method writes a Transaction History XML for a given Weigh Line Detail record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighLineDetailID | Integer | Yes | The ID of Weigh Line Detail record. |

## Validations

- System validates if Weigh Line Detail record exists.

## System Processing

- System creates an XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used. The XML contains most properties of the Weigh Line Detail record: 
 
- Weigh Header, 
- Weigh Line, 
- Scale Station and the Scale, 
- Product number, 
- Warehouse Location, 
- Employee number, 
- Employee number who signed the record, 
- Employee number who approved the record.

## History Recording in Production

The table TRANSACTION_HISTORY_WEIGH_LNDT is populated when the XML generation for BC is enabled and a proper XML routing is set.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE_DETAIL | ID | WeighLineDetailID |
| TRANSACTION_HISTORY_WEIGH_LNDT | (all columns) | Populated when XML generation and routing is configured. |
