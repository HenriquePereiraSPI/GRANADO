# GenerateWeighHeaderXML

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Header Group XML Transaction History

## Description

This method writes a Transaction History XML for given Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Group header record. |

## Validations

- System validates if Weigh Header exists.

## System Processing

- System creates an XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used. The XML contains most properties of the Weigh Group: 
 
- Weigh mechanism, 
- Employee number, 
- Status, 
- Skill, 
- Scale Station, 
- Check List group, 
- Safety Instructions group, 
- Product number.

## History Recording in Production

The table TRANSACTION_HISTORY_WEIGH_H is populated when the XML generation for BC is enabled and a proper XML routing is set.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
| TRANSACTION_HISTORY_WEIGH_H | (all columns) | Populated when XML generation and routing is configured. |
