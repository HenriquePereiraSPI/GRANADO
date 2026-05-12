# UpdateDispositionSample

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** Disposition Sample

## Description

The purpose of this Business Component is to update an existing Disposition Sample record with status and comment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionSampleID | Integer | Yes | Unique identifier of a Disposition Sample to be updated. |
| Input | Status | Short | Yes | Disposition Sample status to update the Disposition Sample with. |
| Input | Comment | Char | No | Comment to update the Disposition Sample with. |

## Validations

- System verifies that a Disposition Sample record exists for the inputted DispositionSampleID.  
- System verifies that a Disposition Sample Status record exists for the inputted Status in DISPOSITION_SAMPLE_STATUS table.

## System Processing

- System updates Disposition Sample record (identified by inputted DispositionSampleID) from DISPOSITION_SAMPLE table: 
 
- Status - inputted Status 
- Comment - inputted Comment 
- If the inputted Status is SampleDestroyed (value of 5) or SampleReturned (value of 6): 
 
- ReturnedOrDestroyedDate - current UTC time 
- ReturnedOrDestroyedEmployeeID - identifier of the Employee (retrieved from data services context)  
 
- if the inputted Status is SampleTaken (value of 2): 
 
- SampleStartDate - current UTC time 
- SampleStartEmployeeID - identifier of the Employee (retrieved from data services context) 
- ReturnedOrDestroyedDate - Null value 
- ReturnedOrDestroyedEmployeeID - Null value

## Pre-Conditions

The Disposition Sample record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_SAMPLE | Status | Inputted Status |
|  | Comment | Inputted Comment |
|  | ReturnedOrDestroyedDate | Current UTC time if Status is SampleDestroyed or Sample Returned or Null if Status is SampleTaken |
|  | ReturnedOrDestroyedEmployeeID | Identifier of the Employee retrieved from data services context if Status is SampleDestroyed or Sample Returned or Null if Status is Sample Taken |
|  | SampleStartDate | Current UTC time if Status is SampleTaken |
|  | SampleStartEmployeeID | Identifier of the Employee retrieved from data services context if Status is SampleTaken |
