# CancelDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component method is used to validate and change the status of the Disposition Test or Disposition Test sample to Cancelled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | The unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | The unique identifier of the Disposition Test sample that is to have its status changed if required. |

## Validations

- See the documentation for the CancelDispositionTest_v94 BC.

## System Processing

- Invokes the CancelDispositionTest_v94 BC by passing all the parameters and the number 0 for EmployeeID (which means that EmployeeID is not specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [All tables populated by |  |  |
