# ReleaseDispositionTest_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to validate and change the status of the Disposition Test or Disposition Test Sample to Released.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of the Disposition Test Sample that is to have its status changed if required. |
| Input | EmployeeID | Integer | No | Identifier of the Employee releasing the Disposition Test/Disposition Test Sample. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table,  
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table,  
- EmployeeID must exist in EMPLOYEE table.

## System Processing

- Validates that status of the disposition is not 'New' (DISPOSITON_STATUS),  
- Validates that status of the disposition line is not 'New' (DISPOSITION_LINE_STATUS),  
- Invokes an internal method: ChangeDispositionTestStatus with the following parameters: 
 
- DispositionTestID,  
- DispositionTestSampleID,  
- Status = 'Released' (DISPOSITION_TEST_STATUS),  
- Propagate = 'True',  
- EmployeeID,  
- Comment not specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
