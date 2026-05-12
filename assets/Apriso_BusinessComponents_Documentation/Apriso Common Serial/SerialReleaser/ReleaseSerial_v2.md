# ReleaseSerial_v2

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

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

- The System verifies that there is at least one Hold against the inputted ProductID and SerialNo.  
- If the ReleaseReasonRequired is set, the system verifies that a ReleaseReasonCode has been inputted.  
- The System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of ‘Release’ Reason Type.  
- The System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of ‘Hold’ Reason Type.

## System Processing

- The hold record that needs to be released is determined based on input keys SerialNo, ProductID, ReasonCode, ContainmentID, GenealogySerialHoldID or GenealogyLotHoldID. 
- If the Serial_No_Hold.ChildHold is set to true it indicates that the item was put on hold by child and it can be released only when the child is released or the genealogy unlinked, similarly if the Serial_No_Hold.ParentHold is set to true it indicates that the item was put on hold by parent and it can be released only when the parent is released or the genealogy unlinked. 
- If GenealogySerialHoldID or GenealogyLotHoldID is input this indicates that the Hold caused by that genealogyhold can be released. 
- Before the item is released all the parents or children put hold using the ParentHold/ChildHold setting and genealogy needs to be released. This link in the hold is stored in GenealogySerialHoldID or GenealogyLotHoldID, using this link the items that were put on hold by the Serial specified in the input are all released. 
- The ReleaseReasonCode if specified is stored in Containment_Lot_No. ReleaseReasonCode/ Containment_Serial_No. ReleaseReasonCode and the Comment if specified are stored in Containment_Lot_No. Comment/ Containment_Serial_No. Comment for all the items that were released and are in Containment. 
 

 **Scenarios** 
 
 
- Release Serial not in containment or genealogy hold. 
 
- Existing implementation. 
 
- Release Serial with containment but no genealogy hold. 
 
- Same as existing implementation also the release reason code and comment is stored in Containment_Serial_No. 
 
- Release Serial with genealogy hold 
 
- If the Genealogy hold is caused by the input Serial then release the Serial and all items on Hold caused by the input Serial linked by the GenealogyHoldID. 
- If the Genealogy hold is not caused by the input Serial but the GenealogyHoldID that caused the Hold is input then recursively release all GenealogyHold starting from the input Serial. 
- The release reason code and comment is stored in Containment_Serial_No/Containment_Lot_No if in containment.

## Pre-Conditions

- Product, Serial and reason codes must exist. 
- Hold Reason code must be of type ‘Hold’. 
- Release Reason code must be of type ‘Release’.

## History Recording in Production

Following optional information is added to the history.
 
 
- Comment 
- Parent LotNo 
- Parent SerialNo 
- Child LotNo 
- Child SerialNo 
- Containment Name

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD (if all inputs match, then record is deleted) | ProductID | Inputted ProductID |
|  | SerialNo | Inputted WipSerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
