# RemoveSample

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to update disposition sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionSampleID | Integer | Yes | Unique identifier of the disposition sample to update |
| Input | Status | Char | Yes | Dispositon sample status |
| Input | Comment | Char | No | Comment |

## Validations

- DispositionSampleID exists in DISPOSITION_SAMPLE table. 
- Status is 'Not Sampled' (1), 'Sample Taken' (2), 'Testing in Progress' (3), 'Testing Complete' (4), 'Sample Returned' (5), 'Sample Destroyed' (6).

## Pre-Conditions

- Updates Disposition Sample record from DISPOSITION_SAMPLE table with the passed Comment and Status parameters 
- If Status is 'Sample Destroyed' or 'Sample Returned' then updates DISPOSITION_SAMPLE.ReturnOrDestroyedDate with the current UTC time and ReturnedOrDestroyedEmployeeID with the EmployeeID stored in the current context. 
- Else if the Status is 'Sample Taken' then updates DISPOSITION_SAMPLE.SampleStartDate with the current UTC time and SampleStartEmployeeID with the EmployeeID stored in the current context. Additionaly it sets DISPOSITION_SAMPLE.ReturnedOrDestroyedDate and DISPOSITION_SAMPLE.ReturnedOrDestroyedEmployeeID to DBNull.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_SAMPLE | Comment | Inputted Comment |
|  | Status | Inputted Status |
|  | ReturnedOrDestroyedDate | Current UTC time if Status is 'Sample Destroyed' or 'Sample Returned';DBNull if Status is 'Sample Taken' |
|  | ReturnedOrDestroyedEmployeeID | Current EmployeeID stored in the context if Status is 'Sample Destroyed' or 'Sample Returned';DBNull if Status is 'Sample Taken' |
|  | SampleStartDate | Current UTC time if Status is 'Sample Taken' |
|  | SampleStartEmployeeID | Current EmployeeID stored in the context if Status is 'Sample Taken' |
