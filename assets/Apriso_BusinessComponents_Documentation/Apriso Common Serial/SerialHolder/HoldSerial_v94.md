# HoldSerial_v94

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to place a serial on hold. Depending on
 the input, multiple hold may be placed on a serial at any one time.
 

 **Supported Features** 
 
 
- Placing a Serial on one or more Hold Reason Codes 
- Serial & Product Validation 
- Hold Reason Code validation 
- Transaction history recorded

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the serial number to be placed on hold. |
| Input | SerialNo | Char | Yes | Serial number to be placed on hold. |
| Input | HoldReasonCode | Char | Yes | Reason code for the hold operation. |
| Input | AllowMultipleHolds | Boolean | Yes | Indicates if it's allowed to hold serial multiple. If the flag is false and serialis already on hold an error is returned. |
| Input | Comment | Char | No | A comment describing why the lot was put on hold. |
| Input | LanguageID | Integer | No | The language the comment is in. Optional (Required if Comment in inputted) |

## Validations

- System validates that the inputted ProductID and SerialNo are valid in the System. 
- System validates that the inputted ReasonCode is of a Hold Reason Type. 
- System validates that the serial may be placed on hold. 
- If comment of them is passed, then LanguageID also needs to be inputted, but not the other way around. But both are allowed to be not provided (i.e. Comment = String.Empty and LanguageID = 0)

## System Processing

- System checks if more than one Hold is allowed for the Serial: 
 
- If not (i.e if inputted AllowMultipleHolds.= FALSE), system checks to see if the
 Serial is already on Hold, by searching for a Hold Reason Code for that Serial: 
 
- If not, system places the Serial on Hold with the entered reason code. A new ecord is generated for in the SERIAL_NO_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Serial: 
 
- If not, system places the Serial on Hold with the entered reason code. A new record is generated for in the SERIAL_NO_HOLD table. 
- If yes, system succeeds. 
 
 
- System records the transaction history each time a new record is created in the SERIAL_NO_HOLD table. 
- If comment is inputted, the system will persist this value in the TEXT_TRANSLATION table for the corresponding SERIAL_NO_HOLD.TextID

## Pre-Conditions

- Product, Serial and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

The System records the transaction history each time a new record is created in the SERIAL_NO_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
