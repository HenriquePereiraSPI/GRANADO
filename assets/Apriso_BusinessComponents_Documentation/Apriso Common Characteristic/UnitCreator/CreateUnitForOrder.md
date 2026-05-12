# CreateUnitForOrder

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Order (ORDER_HEADER) or Order Line ( ORDER_DETAIL) or WIP Order ( WIP_ORDER). This UnitID can then be used to link characteristics to the given Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | Order number of the order to create the unit for. |
| Input | OrderNo | Char | Yes | Order number of the order to create the unit for. |
| Input | OrderLineNo | Integer | No | Order line number of the order to create the unit for. |
| Input | OrderType | Integer | Yes | Order Type. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

- If OrderNo is specified, System verifies that order record is found. If record is not found, an error message is displayed. 
- If OrderNo and OrderLineNo are specified, System verifies that order detail record is found. If record is not found, an error is displayed. 
- If WipOrderNo is specified, System verified that wip order record is found. If record is not found, an error message is displayed.

## System Processing

- System retrieves the WIP_ORDER or ORDER_HEADER or ORDER_DETAIL based on the inputs: 
 
- If only WipOrderNo is inputted, then System retrieves the WIP_ORDER 
- If only OrderNo is inputted, then System retrieves the ORDER_HEADER 
- If both OrderNo and OrderLineNo are inputted, then System retrieves the ORDER_DETAIL 
- If all parameters are inputted, then System retrieves ORDER_DETAIL and makes sure the entered WipOrderNo is linked with the OrderLineNo. 
- Else, System displays an error message. 
 
- System checks if a UnitID is linked to this Order/Wip Order/Order Detail: 
 
- if a UnitId is already linked, then this UnitID is outputted. 
- Else System creates a record in UNIT table and updates the WIP_ORDER.UnitID, or the ORDER_HEADER.UnitID or the ORDER_DETAIL.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Order/Order detail/Wip order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT | ID | Outputted UnitID |
| WIP_ORDER | WipOrderNo | Inputted WipOrderNo |
|  | UnitID | Unit.ID |
| ORDER_HEADER | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | UnitID | Unit.ID |
| ORDER_DETAIL | OrderLineNo | Inputted OrderLineNo |
|  | UnitID | Unit.ID |
