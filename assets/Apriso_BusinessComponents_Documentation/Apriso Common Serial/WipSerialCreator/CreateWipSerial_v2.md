# CreateWipSerial_v2

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** WIP, Serial, WIP Serial, Start Serial, Start, Create

## Description

The purpose of this Business Component is to create or update a serial so that it can be used within the DELMIA Apriso application for production. If the serial is created, then the serial will be assigned to the facility equal to the users default facility. The BC also gives the ability to start it so that it can be used directly in product without having to call the start WIP serial BC first.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID |
| Input | SerialNo | ListofChar | Yes | Serial number to create the WIP serial for. |
| Input | WipOrderNo | Char | Yes | Serial number to create the WIP serial for. |
| Input | WipOrderType | Integer | Yes | The type of the WIP order. |
| Input | OprSequenceNo | Char | Yes | The type of the WIP order. |
| Input | StartWipSerial | Boolean | Yes | If true, starts the serial. |

## Validations

- System validates that the entered WIP order and operation is valid 
 
- WIP order is in status "New" or started 
- WIP order is not on hold 
- Operation is in status "New" or started 
- Operation is not on hold 
 
- System validates that the product 
 
- Validates the product is serial tracked 
- Validates the product is not on hold

## System Processing

- If the product entered is lot tracked, the system gets the lot from the WIP_ORDER_LOT table. If it does not exist, the system will error. 
- If the "StartWipSerial" input is true, the system will start the WIP order and operation if they were not previously started. 
- For all serials inputted, the system will perform the following 
 
- If the inputted serial does not exist, the system will create it. 
- System updates the serial so that it can be used in production. This is done by: 
 
- Inserting a record in WIP_SERIAL_NO, with status "New". 
- Inserting a record in WIP_SERIAL_NO_CONTENT that links WIP_SERIAL_NO to WIP_CONTENT. The WIP_CONTENT that the serial is linked to is the WIP_CONTENT for the inputted order and operation for good quantity. The new WIP serial is created in allocated bucket. 
 
- If the "StartWipSerial" input is true, the system will start the WIP serial.

## History Recording in Production

The system records transaction history whenever a serial is created.
 

If the "StartWipSerial" input is true, the system will also record that fact that the WIP order, WIP operation and WIP serial were started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | LotNo | WIP orders LotNo |
|  | Facility | Users default facility |
| WIP_SERIAL_NO | ProductID | Inputted ProductID (Required) |
|  | SerialNo | Inputted SerialNo (Required) |
|  | WipSerialStatus | "New" |
| WIP_SERIAL_NO_CONTENT | ProductID | Inputted ProductID (Required) |
|  | SerialNo | Inputted SerialNo (Required) |
|  | WipContentID | Good/Finished Goods WIP content record |
|  | AllocatedBucket | "True" |
