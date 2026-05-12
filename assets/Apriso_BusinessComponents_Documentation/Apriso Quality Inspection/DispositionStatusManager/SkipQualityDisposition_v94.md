# SkipQualityDisposition_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to validate and change the status of the Disposition or Disposition Line to Skipped.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionLineNumber | Integer | No | Unique identifier of the Quality Inspection Disposition Line (QIDL). |
| Input | DispositionNumber | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |
| Input | EmployeeID | Integer | No | Identifier of the Employee skipping the Disposition/Disposition Line |

## Validations

- Facility exists in FACILITY table,  
- DispositionNumber and Facility exist in DISPOSITION table,  
- DispositionNumber, Facility and DispositionLineNumber exist in DISPOSITION_LINE table,  
- EmployeeID must exist in EMPLOYEE table.

## System Processing

- If DispositionLineNumber is NOT specified (less or equal to 0) the ChangeDispositionStatus method is invoked with the following parameters: Disposition Number; Facility; EmployeeID; Status = 'Skipped'; Propagate = true, Comment not specified,  
- If DispositionLineNumber is specified (greater than 0) the ChangeDispositionLineStatus method is invoked with the following parameters: Disposition Number; Facility; DispositionLineNumber; EmployeeID; Status = 'Skipped'; Propagate = true.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
| All tables populated by |  |  |
