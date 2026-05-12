# ChangeWeighHeaderStatus

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Change Weigh Header Group Status

## Description

This Business Component method is used to change the status of a given weigh group header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | The transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of the weigh group header record. |
| Input | WeighStatus | Integer | Yes | The status to set (1 - New, 2 - Started, 3 - Completed, 4 - Closed, 5 - Blocked, 6 - Weighed). |

## Validations

- The system validates if the weigh header exists. 
- The system validates if the weigh status is correct.

## System Processing

- The system changes the weigh header status. 
- The system creates an XML for the transaction history. When the transaction name is not specified, the default class and method name of the BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
|  | WeighStatus | WeighStatus |
