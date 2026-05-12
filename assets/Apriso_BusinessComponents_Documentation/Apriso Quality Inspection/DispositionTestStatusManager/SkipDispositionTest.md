# SkipDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to validate and change the status of the Disposition Test or Disposition Test Sample to Skipped.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of the Disposition Test Sample that is to have its status changed if required. |

## Validations

- See documentation for SkipDispositionTest_v94.

## System Processing

- Invokes SkipDispositionTest_v94 passing all the parameters and number of 0 for EmployeeID (that means that EmployeeID is not specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the SkipDispositionTest_v94 method. |  |  |
