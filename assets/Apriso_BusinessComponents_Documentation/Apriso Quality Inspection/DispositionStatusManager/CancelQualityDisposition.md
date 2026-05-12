# CancelQualityDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to validate and change the status of the Disposition or Disposition Line to Cancelled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionLineNumber | Integer | No | The unique identifier of the Quality Inspection Disposition Line (QIDL). |
| Input | DispositionNumber | Char | Yes | The Sequence Number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility where the inspection takes place. |

## Validations

- See the documentation for the CancelQualityDisposition_v94 BC.

## System Processing

- Invokes the CancelQualityDisposition_v94 BC by passing all the parameters and the number of 0 for EmployeeID (which means that EmployeeID is not specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
