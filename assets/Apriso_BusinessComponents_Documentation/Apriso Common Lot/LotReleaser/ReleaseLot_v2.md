# ReleaseLot_v2

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to Release a Lot from Hold. When there is more than one Hold Reason code placed on the Lot, then each must be released individually. An option is provided to make the release reason code a required input or not. The method is extension of the method ReleaseLot with additional feature and validations, This Business Component method is used to Release a Lot from Hold. The method is extension of the existing method ReleaseLot with additional feature and validations:
 
 
- Add user comment 
- Validate if put On Hold by parent. 
- Validate if put On Hold by child. 
- Release Genealogy Hold if the GenealogyHoldID is specified. 
 

 **Supported Features** 
 
 
- Releasing a Lot from a Hold Reason Code. 
- Product and Lot Validation. 
- Release Reason Code validation. 
- Transaction history recorded. 
 

 **Unsupported Features** 
 
 
- Releasing a Lot from more than one Hold Reason Code at a time 
 

 
 --------------------------------------------------------------------------------

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product id of the lot to be released. Must exists in system. |
| Input | LotNo | Char | Yes | Lot number of the lot to be released. Must exist in system. |
| Input | HoldReasonCode | Char | No | Reason code of the hold to be removed. Can be null if there is only one hold against the specified. |
| Input | ReleaseReasonCode | Char | No | Reason code of the operation. Can be null. |
| Input | ReleaseReasonRequired | Boolean | No | Indicates if is required. |
| Input | Comment | Char | No | To specify user comments. |
| Input | ContainmentID | Integer | No | ID of the containment for which the item was put on Hold. |
| Input | GenealogyLotNoID | Integer | No | ID of the Lot No Hold record which caused the hold. |
| Input | GenealogySerialNoID | Integer | No | ID of the Serial No Hold record which caused the hold. |

## Validations

- System verifies that there is at least one Hold against the inputted ProductID and LotNo. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- The hold record that needs to be released is determined based on input keys LotNo, ProductID, ReasonCode, ContainmentID, GenealogySerialHoldID or GenealogyLotHoldID. 
- If the Lot_No_Hold.ChildHold is set to true it indicates that the item was put on hold by child and it can be released only when the child is released or the genealogy unlinked, similarly if the LotNo_Hold.ParentHold is set to true it indicates that the item was put on hold by parent and it can be released only when the parent is released or the genealogy unlinked. 
- If GenealogySerialHoldID or GenealogyLotHoldID is input this indicates that the Hold caused by that genealogyhold can be released. 
- Before the item is released all the parents or children put hold using the ParentHold/ChildHold setting and genealogy needs to be released. This link in the hold is stored in GenealogySerialHoldID or GenealogyLotHoldID, using this link the items that were put on hold by the Serial specified in the input are all released. 
- If ReleaseReasonCode and Comment are specified they are stored in Containment_Lot_No 
- If the input Lot caused a genealogy hold then the Lot is released and all items put On Hold by that Lot (linked by the GenealogyHoldID) is released. 
- If the Lot has genealogy hold and if valid GenealogyHoldID is input then recursively all GenealogyHold is released starting from the input Lot. 
 

 **Scenarios** 
 
 
- Release Lot not in containment or genealogy hold. 
 
- Existing implementation. 
 
- Release Lot with containment but no genealogy hold. 
 
- Same as existing implementation also the release reason code and comment is stored in Containment_Lot_No. 
 
- Release Lot with genealogy hold 
 
- If the Genealogy hold is caused by the input Lot then release the Lot and all items on Hold caused by the input item linked by the GenealogyHoldID. 
- If the Genealogy hold is not caused by the input Lot but the GenealogyHoldID that caused the Hold is input then recursively release all GenealogyHold starting from the input Lot. 
- The release reason code and comment is stored in Containment_Serial_No/Containment_Lot_No if in containment.

## Pre-Conditions

- Product, lot and reason codes must exist. 
- Hold Reason code must be of type 'Hold'. 
- Release Reason code must be of type 'Release'.

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
| LOT_NO_HOLD |  |  |
| SERIAL_NO_HOLD |  |  |
| CONTAINMENT_LOT_NO |  |  |
