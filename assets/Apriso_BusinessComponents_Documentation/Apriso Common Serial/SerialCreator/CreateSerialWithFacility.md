# CreateSerialWithFacility

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a serial that can be used within the DELMIA Apriso application. Serial created using this business component can be used both within production and the warehouse.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ID of the product to be associated to the serial number. |
| Input | SerialNo | Char | Yes | Serial number to be created. |
| Input | LotNo | Char | Conditional | Lot number to be associated to the serial number. * Required if product is Both tracked. |
| Input | Facility | Char | No | Facility used to determine if the product is serial or lot tracked. |

## Validations

- System validates that the product exists for the serial 
- System validates that the product is serial tracked 
 
- System uses the product tracking at the inputted facility. If the facility is not inputted, then the system will use the employee default facility to validate this. 
 
- System validates that, if the product is lot tracked, a lot is also entered and then validated 
 
- The system uses the product tracking at the inputted facility. If the facility is not inputted, then the system will use the employee default facility to validate this. 
 
- System validates that the entered serial number does not already exist 
- System validates that the entered facility is valid.

## System Processing

System uses the inputted information and creates a new serial record in the SERIAL_NO table.

## History Recording in Production

System records transaction history whenever a serial is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | LotNo | Inputted LotNo |
