# StartQualityDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to validate and change the status of the Disposition or Disposition Line to Started. This component updates ActualStart date of the Disposition or Disposition Line respectively.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionLineNumber | Integer | No | Unique identifier of the Quality Inspection Disposition Line (QIDL). |
| Input | DispositionNumber | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |

## Validations

- See documentation for StartQualityDisposition_v94.

## System Processing

- Invokes StartQualityDisposition_v94 passing all the parameters and number of 0 for EmployeeID (that means that EmployeeID is not specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
