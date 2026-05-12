# StopWipSerialRange

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to stop a production serial.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | Wip order number the range of serials will be stopped on. Must exist in the system. |
| Input | WipOrderType | Integer | No | Wip order type of the wip order the range of serials will be stopped on. |
| Input | OprSequenceNo | Char | No | Operation sequence number the range of serials will be stopped on. Must exist in the system. |
| Input | StartSerialNo | Char | No | Begining of the range of the serials to be stopped. Must exist in the system. |
| Input | EndSerialNo | Char | No | End of the range of the serial to be stopped. Is optional. If specified then must exist in the system. |

## Validations

- System validates that the inputted wip order exists. 
- System validates that the inputted operation exists. 
- System validates that the inputted start and end serials are numeric or have a common prefix and numeric suffix. The end serial input is not required, and if not entered, the business component assumes the end serial is the same as the start serial. 
- System verifies that the end serial is larger then the start serial. 
- System validates that each serial in the range exists and is associated to the correct operation.

## System Processing

- System validates the inputs 
- System update the serial status to "New" - WIP_SERIAL_NO, for each serial in the range.

## History Recording in Production

The System records the transaction history each time the serial is started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO | WipSerialStatus | Updates the serial status to "New" |
