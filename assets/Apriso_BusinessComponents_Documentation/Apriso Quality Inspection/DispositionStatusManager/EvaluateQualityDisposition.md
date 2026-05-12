# EvaluateQualityDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

Method is used to determine the quality status of the disposition. It allows either the manual update of this status or automatic calculation based on the quality status of all tests.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Free-text (no translation) description of the Disposition. |
| Input | DispositionNumber | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |
| Input | Force | Boolean | Yes | Flag indicating if the status should be populated also for the entity's child entities. |
| Input | QualityStatusCode | Char | Yes | Final status of the QID: Accept (if conforming)/Reject (if non-conforming). Reference to the Reason Code of type: Quality Status Code (REASON_CODE table). |

## Validations

- See documentation for EvaluateQualityDisposition_v94

## System Processing

-  

Invokes EvaluateQualityDisposition_v94 passing all the parameters and number of 0 for EmployeeID (that means that EmployeeID is not specified).

## History Recording in Production

See documentation for EvaluateQualityDisposition_v94

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the EvaluateQualityDisposition_v94 method. |  |  |
