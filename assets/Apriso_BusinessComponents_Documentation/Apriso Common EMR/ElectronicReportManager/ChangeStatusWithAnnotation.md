# ChangeStatusWithAnnotation

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** ChangeStatus, Change, Status

## Description

This Business Component method is used to change the EMR status with an annotation for the specified EMR Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | The ID of the EMR Header for which the status should be changed. |
| Input | NewEmrStatus | Integer | No | The new EMR status. |
| Input | Annotation | Char | No | The added annotation. |
| Input | EmployeeNo | Char | No | The number of the employee who added the annotation. |
| Input | Password | Char | No | The employee's password. |

## Validations

- The system validates EmrHeaderID. 
- The system validates the signatures associated with the EMR Header if the NewEmrStatus equals Closed.

## System Processing

- If the EMR status is Closed, the system validates that all the signatures associated with the EMR Header have been signed. Otherwise, it returns an error.  
- The system invokes the CreateAnnotationWithSignature BC to create an annotation with a signature for the EMR Header. 
- The system updates EmrStatus.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | EmrStatus | NewEmrStatus |
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System-generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System-generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System-generated. |
