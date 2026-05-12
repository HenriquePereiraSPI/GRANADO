# CancelQualityDisposition_v94

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
| Input | EmployeeID | Integer | No | The identifier of the employee cancelling the Disposition/Disposition Line. |

## Validations

- The Facility must exist in the FACILITY table.  
- The DispositionNumber and Facility must exist in the DISPOSITION table.  
- The DispositionNumber, Facility, and DispositionLineNumber must exist in the DISPOSITION_LINE table.  
- The EmployeeID must exist in the EMPLOYEE table.

## System Processing

- If DispositionLineNumber is NOT specified (less than or equal to 0), the ChangeDispositionStatus method is invoked with the following parameters:  
 
- Disposition Number 
- Facility 
- EmployeeID 
- Status = 'Cancelled' 
- Propagate = true 
- Comment not specified 
 
- If DispositionLineNumber is specified (greater than 0), the ChangeDispositionLineStatus method is invoked with the following parameters:  
 
- Disposition Number 
- Facility 
- EmployeeID 
- DispositionLineNumber 
- Status = 'Cancelled' 
- Propagate = true

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
| All tables populated by |  |  |
