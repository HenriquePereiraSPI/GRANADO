# ReleaseWipSerial

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialReleaser`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to release a Serial from a Hold Reason Code that is in production.
 

When there are more than one Hold Reason codes placed on the Serial, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **Supported Features:** 
 
 
- Releasing a Serial from a Hold Reason Code that is in production 
- Product and Serial Validation 
- Release Reason Code validation 
- Transaction history recorded 
 

 

 **Not Supported Features:** 
Releasing a Serial from more than one Hold Reason Code at a time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | Product id of the wip serial to be released. Must exist in the system. |
| Input | SerialNo | Char | No | Serial number of the wip serial to be released. Must exist in the system. |
| Input | HoldReasonCode | Char | No | Reason code of the wip serial hold. Required if the wip serial is put on hold multiple - in such case it must exit in the system. |
| Input | ReleaseReasonCode | Char | No | Release Reason Code. If ReleaseReasonRequired is true then it must exist in the system. |
| Input | ReleaseReasonRequired | Boolean | No | Indicates if ReleaseReasonCode is required. |

## Validations

- System verifies that there is at least one Hold against the inputted ProductID and SerialNo. 
- System validates that the serial is in production 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- System retrieves the Hold Reason Codes that match the inputs. 
- If no record found or if more than one record is retrieved, then system returns an error message. 
- Else, system deletes the retrieved record from the SERIAL_NO_HOLD table. 
- System records the transaction history whenever a record in the SERIAL_NO_HOLD table is deleted.

## Pre-Conditions

- Product, Serial and reason codes must exist. 
- Hold Reason code must be of type 'Hold'. 
- Release Reason code must be of type 'Release'.

## History Recording in Production

System records the transaction history each time a record is deleted in the SERIAL_NO_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD (if all inputs match, then record is deleted) | ProductID | Inputted ProductID |
|  | SerialNo | Inputted WipSerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
