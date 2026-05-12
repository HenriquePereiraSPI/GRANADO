# ReleaseSerial

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component method is used to Release a Serial from Hold. The method is extension of the existing method ReleaseSerial_v94 with additional feature and validations:
 
 
- Add user comment 
- Validate if put On Hold by parent. 
- Validate if put On Hold by child. 
- Release Genealogy Hold if the GenealogyHoldID is specified. 
 

 **Supported Features:** 
 
 
- Releasing a Serial from a Hold Reason Code 
- Product and Serial Validation 
- Release Reason Code validation 
- Transaction history recorded 
 

 **Not Supported Features:** 
 

Releasing a Serial from more than one Hold Reason Code at a time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | Product id of the serial to be released. Must exist in the system. |
| Input | SerialNo | Char | No | Serial number of the serial to be released. Must exist in the system. |
| Input | HoldReasonCode | Char | No | Reason code of the serial hold. Required if the serial is put on hold multiple - in such case it must exit in the system. |
| Input | ReleaseReasonCode | Char | No | Release Reason Code. If ReleaseReasonRequired is true then it must exist in the system. |
| Input | ReleaseReasonRequired | Boolean | No | Indicates if ReleaseReasonCode is required. |
| Input | ContainmentID | Char | No | ID of the containment for which the item was put on Hold. |
| Input | Comment | Integer | No | To specify user comments. |
| Input | GenealogyLotNoID | Integer | No | ID of the Lot No Hold record which caused the hold. |
| Input | GenealogySerialNoID | Integer | No | ID of the Serial No Hold record which caused the hold. |

## Validations

- System verifies that there is at least one Hold against the inputted ProductID and SerialNo. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- System retrieves the Hold Reason Codes that match the inputs. 
- If no record found or if more than one record is retrieved, then system returns an error message. 
- Else, system deletes the retrieved record from the SERIAL_NO_HOLD table. 
- System records the transaction history whenever a record in the SERIAL_NO_HOLD table is deleted.

## History Recording in Production

System records the transaction history each time a record is deleted in the SERIAL_NO_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD (if all inputs match, then record is deleted) | ProductID | Inputted ProductID |
|  | SerialNo | Inputted WipSerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
