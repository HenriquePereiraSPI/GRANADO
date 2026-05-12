# ChangeDFCRevisionStatus

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.DFCRevisionManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

This Business Component method is used to update the Status of a DFC Revision.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DFCRevisionID | Integer | Yes | The DFC Revision ID. |
| Input | RevisionStatus | Integer | Yes | The revision status (0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Build in Process [for internal use only]). |

## Validations

- The system validates that RevisionStatus is supported.  
- The system validates that the DFC Revision exists. 
- The system validates that the changing the DFC Revision Status is allowed. 
 

 **Note**: for details on possible paths, refer to the "Getting Started" section of the DELMIA Apriso Process Builder Online Help.

## System Processing

- The system updates the DFC Revision Status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | RevisionStatusID | RevisionStatus |
