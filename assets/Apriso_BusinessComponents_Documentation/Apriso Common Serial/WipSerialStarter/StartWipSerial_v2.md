# StartWipSerial_v2

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to start a serial in production.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SerialNo | ListofChar | Yes | List of serial number of the serial to be started. |
| Input | ProductID | Integer | Yes | Product id of the serial to be started. |
| Input | WipOrderNo | Char | Yes | Wip order number of the wip operation the serial is started on. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Integer | Yes | Operation sequence number of the wip operation the serial is started on. |

## Validations

- System validates the inputed wip order is either in a "New" or "Started" status and not on hold. 
- System validates the inputed operation is either in a "New" or "Started" status and not on hold. 
- System validates the list of serial are valid, by checking the following: 
 
- If serial is lot tracked, then system validates the lot if not on hold 
- The serial cannot be on hold 
- The serial has to exist in production. I.e. Record exist in WIP_SERIAL_NO 
- The serial is validated to exist in production for the specified operation.

## System Processing

- System validates the inputs 
- System then iterates through the list of serial numbers and updates the following entities to Started if they were in a New status: 
 
- WIP_ORDER 
- WIP_OPERATION 
- WIP_SERIAL_NO

## Pre-Conditions

- The serial exists 
- The operation exists.

## History Recording in Production

The System records the transaction history each time the serial is started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WorkOrderStatus | Updates it to "Started" if it was in a "new" status |
| WIP_OPERATION | OperationStatus | Updates it to "Started" if it was in a "new" status |
| WIP_SERIAL_NO | WipSerialStatus | Updates it to "Started" if it was in a "new" status |
