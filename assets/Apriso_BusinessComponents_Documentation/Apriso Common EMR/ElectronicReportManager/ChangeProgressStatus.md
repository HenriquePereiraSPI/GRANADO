# ChangeProgressStatus

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** ChangeProgressStatus, Progress, Status

## Description

This Business Component method is used to change the progress status of the specified EMR Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | The ID of the EMR Header for which the progress status should be changed. |
| Input | NewProgressStatus | Integer | No | The new progress status. |

## Validations

- The system validates that EmrHeaderID exists in the system.  
- The system validates that the EMR status of the EMR Header is not "Closed."  
- The system validates that the new progress status belongs to the "EMR" progress status class.

## System Processing

- The system validates the EMR status. If it is "Closed," the system returns an error.  
- The system updates the progress status.  
- If the NewProgressStatus value is zero, the progress status of the EMR Header is set to Null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ProgressStatus | The newProgressStatus. |
