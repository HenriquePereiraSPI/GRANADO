# ReleaseWarehouseLocation

**Category:** Apriso/Common/Warehouse
**Class:** `FlexNet.BusinessFacade.Common.WarehouseLocationReleaser`
**Assembly:** `Location FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to release a warehouse location from a Hold Reason Code.
 

When there are more than one Hold Reason codes placed on the warehouse location, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **Supported Features** 
 
 
- Releasing a Warehouse Location from a Hold Reason Code 
- Warehouse Location Validation 
- Release Reason Code validation 
- Transaction history recorded 
 

 **Unsupported Features
 **Releasing a Warehouse Location from more than one Hold Reason Code at a time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | The id of warehouse location to be released. Must exist in the system. |
| Input | HoldReasonCode | Char | Yes | The code of reason to release the warehouse location from. Must exist in the system. |
| Input | ReleaseReasonCode | Char | No | The code of reason to release the warehouse location with. |
| Input | ReleaseReasonRequired | Boolean | Yes | The flag determining if the release reason is required. |

## Validations

- System verifies that there is at least one Hold against the inputted WarehouseLocationID. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type

## System Processing

- System retrieves the Hold that match the inputs. 
- If no record found or if more than one record are retrieved, then system returns an error message. 
- Else, system deletes the retrieved record from the WAREHOUSE_LOCATION_HOLD table. 
- System records the transaction history whenever a record in the WAREHOUSE_LOCATION_HOLD table is deleted.

## Pre-Conditions

-  

Warehouse Location and reason codes must exist.
  
-  

Hold Reason code must be of type 'Hold'.
  
-  

Release Reason code must be of type 'Release'.

## History Recording in Production

System records the transaction history each time a record is deleted in the WAREHOUSE_LOCATION_HOLD table. ReleaseReasonCode is persisted in transaction history (if specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WAREHOUSE_LOCATION_HOLD | WarehouseLocationID | WarehouseLocationID (Required) |
|  | ReasonCode | HoldReasonCode (Required) |
