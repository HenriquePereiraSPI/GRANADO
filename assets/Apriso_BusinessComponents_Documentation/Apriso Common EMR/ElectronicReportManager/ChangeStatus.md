# ChangeStatus

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** ChangeStatus, Change, Status

## Description

This Business Component method is used to change the EMR status for the specified EMR Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | The ID of the EMR Header for which the status should be changed. |
| Input | NewEmrStatus | Integer | No | The new EMR status. |

## Validations

- The system validates if EmrHeaderID exists in the system.  
- The system validates the signatures associated with the EMR Header if the NewEmrStatus equals Closed.

## System Processing

- If the EMR status is Closed, then the system validates if all the signatures associated with the EMR Header have been signed. Otherwise, an error is returned.  
- The system generates a status change annotation for the EMR Header. 
- The system updates EmrStatus.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | EmrStatus | NewEmrStatus |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System-generated. |
