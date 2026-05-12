# HoldPartner

**Category:** Apriso/Common/Partner
**Class:** `FlexNet.BusinessFacade.Common.PartnerHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to place a partner on Hold.
 

 **Supported features:** 
 
 
- Placing a partner on one or more Hold Reason Codes 
- partner Validation 
- Hold Reason Code validation 
- Transaction history recorded

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PartnerID | Integer | Yes | ID of partner to be put on hold |
| Input | ReasonCode | Char | Yes | The reason code to hold the product with |
| Output | AllowMultipleHolds | Boolean | Yes | The flag determining if the multiple holds are allowed |

## Validations

- System verifies that the inputted PartnerID is valid in the System. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type.

## System Processing

- System checks if more than one Hold is allowed for the Partner: 
 
- If not (i.e. if inputted AllowMultipleHolds = FALSE), system checks to see if the Partner is already on Hold, by searching for a Hold Reason Code for that Partner: 
 
- If not, system places the Partner on Hold with the entered reason code. A new record is generated for in the PARTNER_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Partner: 
 
- If not, system places the Partner on Hold with the entered reason code. A new record is generated for in the PARTNER_HOLD table. 
- If yes, system returns an error message. 
 
 
- System records the transaction history each time a new record is created in the PARTNER_HOLD table.

## Pre-Conditions

- Partner and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

The System records the transaction history each time a new record is created in the PARTNER_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PARTNER_HOLD | PartnerID | PartnerID |
| PARTNER_HOLD | ReasonCode | ReasonCode |
