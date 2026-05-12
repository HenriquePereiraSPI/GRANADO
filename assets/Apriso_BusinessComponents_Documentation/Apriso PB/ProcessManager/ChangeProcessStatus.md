# ChangeProcessStatus

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.ProcessManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

This Business Component method is used to update the revision status of a Process.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProcessId | Integer | Yes | The Process ID. |
| Input | RevisionStatus | Integer | Yes | The revision status (0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Build in Process [for internal use only]). |

## Validations

- The system validates that RevisionStatus is supported.  
- The system validates that the Operation exists.  
- The system validates that Process revision status can be changed. 
 

 **Note**: for details on possible paths, refer to the "Getting Started" section of the Process Builder Online Help.

## System Processing

- The system updates the Process revision status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | RevisionStatusID | 1 |
