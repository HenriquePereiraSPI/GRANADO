# HoldLot_v2

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component method is used to put a Lot on Hold from the Containment items list. The method is extension of the existing method HoldLot_v94 with additional features:
 
 
- Keep track of the ContainmentID in the Lot Hold record. 
- Put On Hold the parent items in Geneology if required. 
- Put On Hold the child items in Geneology if required. 
 

The unique key for the Lot Hold is LotNo, ProductID, ReasonCode, ContainmentID, GenealogySerialHoldID or GenealogyLotHoldID, where ContainmentID, GenealogySerialHoldID and GenealogyLotHoldID can be null. This is to allow multiple hold for the same reason code in different containments or hold caused by a parent or child and other such combinations.
 

 **Supported Features:** 
 
 
- Placing a Lot on one or more Hold Reason Codes. 
- Lot & Product Validation. 
- Product Revision independence (Lot placed on hold independent of Product Revision). 
- Hold Reason Code validation. 
- Transaction history recorded. 
 

 **Unsupported Features:** 
 
 
- Product Revision

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product id of the lot to be placed on hold. |
| Input | LotNo | Char | Yes | Lot number of the lot to be placed on hold. |
| Input | HoldReasonCode | Char | Yes | Reason code for the hold |
| Input | AllowMultipleHolds | Boolean | Yes | Indicates that if there can be multiple hold on Lot when the unique key is satisfied. If false only one Hold can exist for the Lot. |
| Input | Comment | Char | No | A comment describing why the lot was put on hold. |
| Input | LanguageID | Integer | Yes | The language the comment is in. |
| Input | ContainmentID | Integer | No | ID of the Containment |
| Input | HoldParent | Boolean | No | Indicates if the parent items is to be put on Hold |
| Input | HoldChild | Boolean | No | Indicates if the child items is to be put on Hold |
| Input | ReleaseAfterDate | DateTime | No | Indicates when the lot is to be released |
| Input | ReleaseAfterDateDefined | Boolean | No | Indicates if ReleaseAfterDate was specified |
| Output | LotNoHoldID | Integer | No | ID of the Lot Hold Record |

## Validations

- System verifies that the inputted ProductID and LotNo are valid in the System. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type.

## System Processing

- System checks if more than one Hold is allowed for the Lot: 
 
- If not (i.e if inputted AllowMultipleHolds.= FALSE), system checks to see if the Lot is already on Hold, by searching for a Hold Reason Code for that Lot: 
 
- If not, system places the Lot on Hold with the entered reason code. A new record is generated for in the LOT_NO_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Lot: 
 
- If not, system places the Lot on Hold with the entered reason code. A new record is generated for in the LOT_NO_HOLD table. 
- If yes, system succeeds. 
 
 
- System records the transaction history each time a new record is created in the LOT_NO_HOLD table. 
- If comment is inputted, system will persist this value in the TEXT_TRANSLATION table for the corresponding LOT_NO_HOLD.TextID 
- The Containment ID if input is validated by checking if the Containment exists. If the item is not in containment then it an error. In the Lot Hold record the input ContainmentID is set (only for the input Lot). 
- If the HoldParent is true then the parents of the input item is also put on hold recursively. In the Lot_No_Hold record of the parents, the ChildHold is set to true to indicate that the item was put on hold by child and GenealogySerialHoldID or GenealogyLotHoldID holds the link to hold record of the input Lot which caused the hold. 
- If the HoldChild is true then the children of the input item is also put on hold recursively. In the Lot_No_Hold record of the children, the ParentHold is set to true to indicate that the item was put on hold by parent and GenealogySerialHoldID or GenealogyLotHoldID holds the link to hold record of the input Lot which caused the hold. 
- If the ReleaseAfterDate is specified then this value is stored in ReleaseAfterDate field of the Lot_No_Hold table. The comment is stored in Containment_Lot_No.Comment and the Text_Translation

## Pre-Conditions

- Product, Lot and Reason Code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

Following optional information is added to the history:
 
 
- Comment 
- Parent LotNo 
- Parent SerialNo 
- Child LotNo 
- Child SerialNo 
- Containment Name

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO_HOLD | New Row | LotNo or PartnerLotNo or generated lot into LotNo field, ProductID, PartnerID, PartnerLotNo, RotationDate, ReferenceText, ActualPotencyPercent, AvailabilityDate, LastInspectionDate, NextInspectionDate, BestAfterDate, BestBeforeDate, ExpirationDate |
