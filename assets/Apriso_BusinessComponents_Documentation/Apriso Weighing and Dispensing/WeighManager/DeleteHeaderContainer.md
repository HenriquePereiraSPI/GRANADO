# DeleteHeaderContainer

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Container Delete Weigh Header Group

## Description

This method deletes the assignment between the Weigh Header and Container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Header record. |
| Input | Container | Char | Yes | The Container number. |

## Validations

- System validates if Weigh Header exists.  
- System validates if Container exists and is assigned to the Weigh Header.

## System Processing

- System removes specified Weigh Header Container record. 
- System creates XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER_CONTAINER | WeighHeaderID | WeighHeaderID. The record is deleted by BC. |
|  | Container | Container |
