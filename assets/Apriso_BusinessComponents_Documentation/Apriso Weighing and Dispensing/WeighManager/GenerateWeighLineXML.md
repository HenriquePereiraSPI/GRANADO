# GenerateWeighLineXML

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Line XML Transaction History

## Description

This method writes a Transaction History XML for given Weigh Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighLineID | Integer | Yes | The ID of Weigh Line. |

## Validations

- System validates if Weigh Line exists.

## System Processing

- System creates an XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used. The XML contains most properties of the Weigh Line: 
 
- Weigh Header, 
- Child Weigh Header, 
- Status, 
- Scale Station and the Scale, 
- Check List group, 
- Safety Instructions group, 
- HazMat group, 
- Product number, 
- Lot number, 
- WIP Component, 
- Warehouse Location.

## History Recording in Production

The table TRANSACTION_HISTORY_WEIGH_LN is populated when the XML generation for BC is enabled and a proper XML routing is set.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE | ID | WeighLineID |
| TRANSACTION_HISTORY_WEIGH_LN | (all columns) | Populated when XML generation and routing is configured. |
