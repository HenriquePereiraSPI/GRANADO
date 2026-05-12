# CompleteDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

This Business Component method is used to validate the completeness of the Disposition Test and to mark the test as Completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | The free-text (no translation) description of the change. |
| Input | Conforming | Integer | Yes | Indicates if the Disposition Test confirms to the specification (0 - non-conforming, 1 - conforming; numbers other than 0 and 1 treated as not specified). |
| Input | DispositionTestID | Integer | Yes | The unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | The unique identifier of the Disposition Test Sample that is to have its status changed if required. |
| Input | Force | Boolean | Yes | If set to True, causes the status to be changed for all child entities (Samples) without performing additional validation (the Propagate flag for Change Disposition Test Status is set to True). |

## Validations

- See the documentation for CompleteDispositionTest_v94.

## System Processing

-  

Invokes CompleteDispositionTest_v94 and passes all the parameters and the number of 0 for EmployeeID (which means that EmployeeID is not specified).

## History Recording in Production

See the documentation for CompleteDispositionTest_v94.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [All tables populated by |  |  |
