# HoldProduct

**Category:** Apriso/Common/Product
**Class:** `FlexNet.BusinessFacade.Common.ProductHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to place a Product on Hold.
 

 **Supported Features** 
 
 
- Placing a Product on one or more Hold Reason Codes; 
- Product Validation; 
- Product Revision independence (Product placed on hold independent of Product Revision); 
- Hold Reason Code validation; 
- Transaction history recorded.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ID of product to be put on hold. |
| Input | ReasonCode | Char | Yes | The reason code to hold the product with. |
| Input | ReasonCode | Boolean | Yes | The flag determining if the multiple holds are allowed. |

## Validations

- System verifies that the inputted ProductID is valid in the System; 
- System verifies that the inputted ReasonCCode is of a Hold Reason Type.

## System Processing

- System checks if more than one Hold is allowed for the Product: 
 
- If not (i.e. if inputted AllowMultipleHolds = FALSE), system checks to see if the Product is already on Hold, by searching for a Hold Reason Code for that Product: 
 
- If not, system places the Product on Hold with the entered reason code. A new record is generated for in the PRODUCT_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Product: 
 
- If not, system places the Product on Hold with the entered reason code. A new record is generated for in the PRODUCT_HOLD table. 
- If yes, system returns an error message. 
 
 
- System records the transaction history each time a new record is created in the PRODUCT_HOLD table.

## Pre-Conditions

- Product and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

The System records the transaction history each time a new record is created in the PRODUCT_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_HOLD | ProductID | ProductID |
| PRODUCT_HOLD | ReasonCode | ReasonCode |
