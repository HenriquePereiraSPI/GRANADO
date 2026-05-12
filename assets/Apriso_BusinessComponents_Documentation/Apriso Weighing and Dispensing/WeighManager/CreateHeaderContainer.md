# CreateHeaderContainer

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Container Create Weigh Header

## Description

This method assigns a Container to the Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Header record. |
| Input | Container | Char | Yes | Container number. |

## Validations

- System validates if Weigh Header exists.  
- System validates if Container exists. 
- System validates if Container is not assigned to the Weigh Header.

## System Processing

- System assigns the Container to the Weigh Header. 
- System creates XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER_CONTAINER | WeighHeaderID | WeighHeaderID. A new record is created. |
|  | Container | Container |
