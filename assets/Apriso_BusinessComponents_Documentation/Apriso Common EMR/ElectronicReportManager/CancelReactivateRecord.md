# CancelReactivateRecord

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CancelReactivateRecord, Cancel, Reactivate

## Description

This Business Component method is used to cancel or reactivate the EMR record with the annotation attached.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | The ID of the EMR record to be cancelled or reactivated. |
| Input | Annotation | Char | No | The attached annotation. |
| Input | EmployeeNo | Char | No | The number of the employee who entered the annotation. |
| Input | Password | Char | No | The employee's password. |
| Input | UserReference | Char | No | The user reference. |
| Input | CancellationFlag | Boolean | No | The flag indicating if the record should be canceled. |
| Output | OutputUnitID | Integer | No | The unit ID. |
| Output | UnitAnnotationID | Integer | No | The unit annotation ID. |

## Validations

- The system validates EmrRecordID. 
- The system validates CancellationFlag.

## System Processing

- The system invokes the CreateAnnotationWithSignature BC to create an annotation with the signature for the EMR record. 
- The system updates the Cancelled flag. 
- The system generates the the EMR record report according to the design template. 
- The system returns the unit ID. 
- The system returns the new unit annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | Cancelled | CancellationFlag |
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System-generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System-generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System-generated. |
