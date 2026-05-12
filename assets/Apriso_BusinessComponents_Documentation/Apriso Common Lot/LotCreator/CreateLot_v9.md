# CreateLot_v9

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to create a new in the LOT_NO table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility to check the product against. |
| Input | PartnerLotNo | Char | No | Partner lot number to be createed. See parameter for details. |
| Input | PartnerID | Integer | No | Partner ID to be associated with the created lot. Must be provided if is true. |
| Input | LotNo | Char | No | Lot number of the lot to be created. See parameter for details. |
| Input | UsePartnerLot | Boolean | No | Indicates if is to be used as a lot number to be created. If this flag is set then PartnerID and PartnerLotNo have to be specified. |
| Input | GenerateLot | Boolean | No | Indicates if new lot number is to be generated using with LOT_NO as a sequence name. |
| Input | RotationDate | DateTime | No | Rotation date to be associated with the created lot. |
| Input | ReferenceText | Char | No | Reference text to be associated with the created lot. |
| Input | ActualPotencyPercentage | Decimal | No | Actual potency percentage to be associated with the created lot. |
| Input | AvailabilityDate | DateTime | No | Availability date to be associated with the created lot. |
| Input | LastInspectionDate | DateTime | No | Last inspection date to be associated with the created lot. |
| Input | NextInspectionDate | DateTime | No | Next inspeciton date to be associated with the created lot. |
| Input | BestAfterDate | DateTime | No | Best after date to be associated with the created lot. |
| Input | BestBeforeDate | DateTime | No | Best before date to be associated with the created lot. |
| Input | ExpirationDate | DateTime | No | Expiration date to be associated with the created lot. |

## Validations

- System checks the product is lot tracked for receipt from PRODUCT_FACILITY or from PRODUCT if facility is null. 
- System checks the product is not on hold. 
- System checks that a valid UsePartnerLot, GenerateLot, LotNo, ParterLotNo, ParterID parameter combination is supplied 
- System validates that the lot to be created does not already exist.

## System Processing

- System generates the lot if required or uses PartnerLotNo if UsePartnerLot. 
- System inserts a record into the LOT_NO table with the supplied parameters.

## Pre-Conditions

The lot to be created does not yet exist.

## History Recording in Production

FlexNet.BusinessFacade.Common.LotCreator.CreateLot

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO | New Row | LotNo or PartnerLotNo or generated lot into LotNo field, ProductID, PartnerID, PartnerLotNo, RotationDate, ReferenceText, ActualPotencyPercent, AvailabilityDate, LastInspectionDate, NextInspectionDate, BestAfterDate, BestBeforeDate, ExpirationDate |
