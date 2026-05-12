# StopWipSerial

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to stop a production serial.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to stop the wip serial is on. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number to stop the wip serial on. |
| Input | SerialNo | Char | Yes | Serial number of the wip serial to be stopped. |

## Validations

- System validates the inputted wip order exists. 
- System validates the inputted operation exists. 
- System validates the serial exists and is associated to the correct operation.

## System Processing

- System validates the inputs 
- The system update the serial status to "New" - WIP_SERIAL_NO

## History Recording in Production

System records the transaction history each time the serial is started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO | WipSerialStatus | Updates the serial status to "New", for each serial in the range |
