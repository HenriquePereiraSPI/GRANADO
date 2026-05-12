# SetWeighHeaderScaleStation

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Header Scale Station Assign Set

## Description

This method assigns a Scale Station to the Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Group header record. |
| Input | ScaleStationID | Integer | Yes | The Resource ID of the Scale Station. |

## Validations

- System validates if the Weigh Header exists. 
- System validates if the Scale Station exists.

## System Processing

- System assigns the Scale Station to the Weigh Header. If Scale Station ID is 0, current assignment is removed (it is set to a null value).  
- System creates XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
|  | ScaleStationID | ScaleStationID |
