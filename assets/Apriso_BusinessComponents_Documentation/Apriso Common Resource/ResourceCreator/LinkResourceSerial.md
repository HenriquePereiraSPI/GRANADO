# LinkResourceSerial

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.ResourceCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create link between resource and serial no.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource Name |
| Input | ResourceType | Short | Yes | Resource Type |
| Input | SerialNo | Char | Yes | Serial No |
| Input | ProductID | Integer | Yes | Product ID |
| Output | ResourceSerialNoID | Integer | Yes | Resource Serial No ID |

## Validations

- System Validate that inputted ResourceName and ResourceType exist. 
- System Validate that SerialNo exist. 
- System Validate that no record between the inputted resource and serial.

## System Processing

System populates the record on RESOURCE_SERIAL_NO table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_SERIAL_NO | ID | System Generated |
|  | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | ResourceName | Inputted ResourceName |
|  | ReosurceType | Inputted ResourceType |
