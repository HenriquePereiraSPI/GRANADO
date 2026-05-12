# CreateWipSerial_v91

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** OprSe

## Description

The purpose of this Business Component is to create or update a serial so that it can be used within the DELMIA Apriso application for production. If the serial is created, then the serial will be assigned to the facility equal to the users default facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID |
| Input | SerialNo | Char | Yes | Serial number to create the wip serial for. |
| Input | WipOrderNo | Char | Yes | Serial number to create the wip serial for. |
| Input | WipOrderType | Integer | Yes | The type of the Wip order. |
| Input | OprSequenceNo | Char | Yes | The type of the Wip order. |

## Validations

- System validates that the product for the serial exists 
- System validates that the product is serial tracked 
- System validates that if the product is lot tracked, that a lot is also entered and then validated.

## System Processing

- System determines if the inputted serial has already been created. 
- System creates the serial if it does not exist. 
- System updates the serial so that it can be used in production. This is done by: 
 
- Inserting a record in WIP_SERIAL_NO, with status "New". 
- Inserting a record in WIP_SERIAL_NO_CONTENT that links WIP_SERIAL_NO to WIP_CONTENT. The WIP_CONTENT that the serial is linked to is the WIP_CONTENT for the inputted order and operation for good quantity. The new wip serial is created in allocated bucket.

## History Recording in Production

The system records transaction history whenever a serial is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | LotNo | Wip Orders LotNo |
|  | Facility | Users default facility |
| WIP_SERIAL_NO | ProductID | Inputted ProductID (Required) |
|  | SerialNo | Inputted SerialNo (Required) |
|  | WipSerialStatus | "New" |
| WIP_SERIAL_NO_CONTENT | ProductID | Inputted ProductID (Required) |
|  | SerialNo | Inputted SerialNo (Required) |
|  | WipContentID | Good/Finished Goods wip content record |
|  | AllocatedBucket | "True" |
