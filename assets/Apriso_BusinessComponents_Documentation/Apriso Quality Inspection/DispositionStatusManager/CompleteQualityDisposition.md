# CompleteQualityDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component method is used to validate the completeness of the Disposition and to mark the test as Completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionLineNumber | Integer | No | The unique identifier of the Quality Inspection Disposition Line (QIDL). |
| Input | DispositionNumber | Char | Yes | The Sequence Number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility where the inspection takes place. |
| Input | Force | Boolean | Yes | The flag indicating if the status should be populated also for the entity's child entities. |
| Input | Comment | Char | No | The free-text description of the Disposition. |

## Validations

- See the documentation for the CompleteQualityDisposition_v94 BC.

## System Processing

- Invokes the CompleteQualityDisposition_v94 BC and passes all the parameters and the number 0 for EmployeeID (which means that EmployeeID is not specified).

## History Recording in Production

See the documentation for the CompleteQualityDisposition_v94 BC.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the CompleteQualityDisposition_v94 method. |  |  |
