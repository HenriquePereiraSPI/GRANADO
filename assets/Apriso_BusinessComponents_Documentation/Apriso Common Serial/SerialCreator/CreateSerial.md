# CreateSerial

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to create a Serial that can be used within the DELMIA Apriso application. Serial created using this BC method can be used both within production and the warehouse. Serial will be assigned to the Facility equal to the user's default Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ID of the Product to be associated with the Serial Number. |
| Input | SerialNo | Char | Yes | Serial Number to be created. |
| Input | LotNo | Char | Conditional | Lot Number to be associated with the Serial Number. * Required if Product is Serial and Lot tracked. |

## Validations

- System validates that the Product for the Serial exists 
- System validates that the Product is Serial tracked 
- System validates that if the Product is Lot tracked, then the Lot is also provided and then validated 
- System validates that the entered Serial Number does not already exist

## System Processing

System uses the inputted information and creates a new record in the SERIAL_NO table.

## History Recording in Production

System records transaction history whenever a serial is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | LotNo | Inputted LotNo |
|  | Facility | Users default facility |
