# ChangeOperationStatus

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.OperationManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

This Business Component method is used to update the revision status of an Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationId | Integer | Yes | The Operation ID. |
| Input | RevisionStatus | Integer | Yes | The revision status (0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Build in Process [for internal use only], 6 - Development in Progress). |

## Validations

- The system validates that RevisionStatus is supported.  
- The system validates that the Operation exists. 
- The system validates that changing the Operation revision status is allowed. 
 

 **Note**: for details on available entity statuses, refer to Process Builder Help.

## System Processing

- The system updates the Operation revision status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| OPERATION | RevisionStatusID | RevisionStatus |
