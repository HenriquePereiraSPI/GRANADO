# HoldLot_v94

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to place a Lot on Hold.
 

When this occurs, no transactions can occur against that Lot anywhere within DELMIA Apriso: all Production, Inventory, Shipping transactions will be blocked until the Hold has been released. When the Lot is placed on Hold, a valid Hold reason code must also be entered. Functionality also includes the ability to place the Lot on Hold for more than one reason.
 

 **Supported Features** 
 
 
- Placing a Lot on one or more Hold Reason Codes. 
- Lot & Product Validation. 
- Product Revision independence (Lot placed on hold independent of Product Revision). 
- Hold Reason Code validation. 
- Transaction history recorded.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product id of the lot to be placed on hold. |
| Input | LotNo | Char | Yes | Lot number of the lot to be placed on hold. |
| Input | ReasonCode | Char | Yes | The reason of lot holding. |
| Input | AllowMultipleHolds | Boolean | Yes | Indicates if lot can be placed on hold multiple times. |
| Input | Comment | Char | No | A comment describing why the lot was put on hold. |
| Input | LanguageID | Integer | Conditional | The language the comment is in. Required if Comment in inputted. |

## Validations

- System verifies that the inputted ProductID and LotNo are valid in the System. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type. 
- If comment of them is passed, then LanguageID also needs to be inputted, but not the other way around. But both are allowed to be not provided (i.e. Comment = String.Empty and LanguageID = 0)

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

## Pre-Conditions

- Product, Lot and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

The System records the transaction history each time a new record is created in the LOT_NO_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO_HOLD | New Row | LotNo or PartnerLotNo or generated lot into LotNo field, ProductID, PartnerID, PartnerLotNo, RotationDate, ReferenceText, ActualPotencyPercent, AvailabilityDate, LastInspectionDate, NextInspectionDate, BestAfterDate, BestBeforeDate, ExpirationDate |
