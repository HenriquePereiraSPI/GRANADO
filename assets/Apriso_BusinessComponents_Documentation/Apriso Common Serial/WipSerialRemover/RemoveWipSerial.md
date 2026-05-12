# RemoveWipSerial

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialRemover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to remove a serial from production. This is done by removing the association between the serial and an operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to remove the wip serial is from. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number to remove the wip serial from. |
| Input | SerialNo | Char | Yes | Serial number of the wip serial to be removed. |
| Input | ProductID | Integer | Yes | Product ID of the wip serial to be removed. |

## Validations

- System validates the given wip order and operation are valid 
- System validates the serial exists 
- System validates that the serial exists in production for the specified operation.

## System Processing

- System validates the inputs 
- System then deletes records found in both WIP_SERIAL_NO_CONTENT and WIP_SERIAL_NO for the inputted serial.

## Pre-Conditions

- The serial exists 
- The operation exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO_CONTENT |  | Record for Serial is deleted |
| WIP_SERIAL_NO |  | Record for Serial is deleted |
