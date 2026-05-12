# EvaluateDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

The method is used to complete Disposition Test and perform the final evaluation of this test. Evaluation means calculating the Accept/Reject status of the test calculated automatically based on the Sample Plan or manual decision.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Free-text (no translation) description of the change. |
| Input | Conforming | Integer | Yes | Indicates if disposition test is conforming to the specification (0 - non-conforming, 1 - conforming, different than 0 or 1 then treated as not specified). |
| Input | DispositionTestID | Integer | Yes | Unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of the Disposition Test Sample that is to have its status changed if required. |
| Input | Force | Boolean | Yes | If set to "True", causes the status to be changed for all child entities (Samples) without performing additional validation (Propagate flag for Change Disposition Test Status is set to "True"). |

## Validations

-  

See documentation for EvaluateDispositionTest_v94.

## System Processing

- Invokes EvaluateDispositionTest_v94 passing all the parameters and number of 0 for EmployeeID (that means that EmployeeID is not specified).

## History Recording in Production

See documentation for EvaluateDispositionTest_v94.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the EvaluateDispositionTest_v94 method. |  |  |
