# ManageProperty

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotPropertyManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update fields in the LOT_NO table for the specified lot. An example of this would be to reduce the expiration date of a lot if it were exposed to an undesirable environment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | lotNo | Char | Yes | Lot number of the lot to be updated. |
| Input | productID | Integer | Yes | Product ID of the lot to be updated. |
| Input | microDescription | Char | Yes | Micro description to associate to lot. |
| Input | shortDescription | Char | Yes | Short description to associate to lot. |
| Input | mediumDescription | Char | Yes | Medium description to associate to lot. |
| Input | extendedDescription | Char | Yes | Extended description to associate to lot. |
| Input | availabilityDate | Char | Yes | Available date to associate to lot. |
| Input | lastInspectionDate | DateTime | Yes | Last inspection date to associate to lot. |
| Input | nextInspectionDate | DateTime | Yes | Next inspection date to associate to lot. |
| Input | bestAfterDate | DateTime | Yes | Best after date to associate to lot. |
| Input | bestBeforeDate | DateTime | Yes | Best before date to associate to lot. |
| Input | expirationDate | DateTime | Yes | Expiration date to associate to lot. |

## Validations

Validates that the ProductID, LotNo combination exists in Lot_No.

## System Processing

During processing, system updates the Lot_No table with all data provided as input parameters.

## Pre-Conditions

The ProductID, LotNo combination exists in Lot_No table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO | All fields except PK (ProductID, LotNo) | All input parameters except PK (ProductID, LotNo) |
