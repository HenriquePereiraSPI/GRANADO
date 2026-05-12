# CancelDispositionTest_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to validate and change the status of the Disposition Test or Disposition Test sample to Cancelled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | The unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | The unique identifier of the Disposition Test sample that is to have its status changed if required. |
| Input | EmployeeID | Integer | No | The identifier of the employee canceling the Disposition Test/Disposition Test sample. |

## Validations

- The DispositionTestID must exist in the DISPOSITION_TEST table.  
- The DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table.  
- The EmployeeID must exist in the EMPLOYEE table.

## System Processing

- Invokes ChangeDispositionTestStatus BC with the following parameters: 
 
- DispositionTestID  
- DispositionTestSampleID  
- Status = 'Cancelled' (DISPOSITION_TEST_STATUS)  
- Propagate = 'True'  
- EmployeeID  
- Comment (not specified)

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [All tables populated by |  |  |
