# ChangeDispositionStatus

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of the Disposition record to the one passed as a parameter. The BC validates that the user changing the status has the Role and/or Skill that enables modifying the status. Optionally, the BC updates the status of the Disposition Line records.
 

 

 **Note**: Dedicated BCs exist to change the Disposition status, such as CancelQualityDisposition_v94, CompleteQualityDisposition_v96, EvaluateQualityDisposition_v96, ReleaseQualityDisposition_v94, SkipQualityDisposition_v94, and StartQualityDisposition_v94. Using these BCs instead of ChangeDispositionStatus is recommended, as they have extended functionality such as transaction history logging and additional Inputs.

*Status chart for Disposition, Disposition Test, and Disposition Test Sample*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | The Disposition that is the subject the status change. |
| Input | Facility | Char | Yes | The Facility that owns the Quality Inspection (Disposition). |
| Input | Status | Short | Yes | The identifier of the status to which the Disposition is to be changed. |
| Input | Propagate | Boolean | Yes | If enabled (value = True), the action performed by the BC will also affect the entity's child entities. The status will also be changed for all dependent Disposition Lines, Disposition Tests, and Disposition Test Samples. |
| Input | EmployeeID | Integer | No | The identifier of an employee performing the status change (for the validation of appropriate rights). |
| Input | Comment | Char | No | The free-text (no translation) description of the change. |

## Validations

- The Disposition and Facility must exist in the DISPOSITION table. 
- The Status must exist in the DISPOSITION_STATUS table. 
- The EmployeeID must exist in the EMPLOYEE table.

## System Processing

- If Disposition status (DISPOSITION.Status) is the same as inputted Status then ends the execution. 
- If EmployeeID is specified and the Disposition status configuration exists (that is, at least one record exists for the inputted Status) in the DISPOSITION_STATUS_CONFIG table, the system validates if there is at least one record in that configuration with the SkillID and RoleID defined for the employee (employee Skills are defined in the EMPLOYEE_SKILL table and employee Roles are defined in the EMPLOYEE_ROLE table). 
- The system validates that the proper status transition can be performed according to the Status chart for the Disposition (see the figure above). 
- The system changes the Disposition status according to the following rules: 
 
- The system updates the Comment field with the inputted comment. 
- If the inputted Status is Started, the system populates TestingStartDate with the current UTC time. Additionally, it resets TestEvaluationDate, EvaluationInspectorID, TestingFinishDate, TestingFinishEmployeeID, and QualityStatusCode to Null. 
- If the inputted status is Completed, the system populates TestingFinishDate with the current UTC time and TestingFinishEmployeeID with the provided EmployeeID. 
- If the inputted status is Evaluated, the system populates TestEvaluationDate with the current UTC time and EvaluationInspectorID with the inputted EmployeeID. 
- The system updates DISPOSITION.Status with the inputted status. 
- If the user status is defined for the inputted status (DISPOSITON_STATUS.DispositionUserStatusID is not Null), the system invokes the ChangeDispositionUserStatus BC by passing the following parameters: 
 
- Facility – the inputted Facility 
- Disposition – the inputted Disposition 
- LineSequenceNo – not specified 
- DispositionTestID – not specified 
- DispositionTestSampleID – not specified 
- UserStatusID – DISPOSITION_STATUS.DispositionUserStatusID.  
 
 
- If the Propagate parameter is set to True and the Status is set to Evaluated, then for every Completed Disposition Test belonging to the Disposition being evaluated, the system invokes the ChangeDispositionTestStatus BC by passing the following parameters: 
 
- DispositionTestID – ID of the Disposition Test 
- DispositionTestSampleID – not specified 
- DispositionTestStatus – Evaluated 
- Propagate – false 
- EmployeeID – the inputted EmployeeID 
- Comment – the inputted comment 
 
- If the Propagate parameter is set to True, then for every Disposition Line that is in the Open status (DISPOSITION_LINE_STATUS.Open = True), the system invokes the logic of the following BC methods: 
 
- Released – ChangeDispositionLineStatus passing Disposition, Facility, LineSequenceNo, Status = Released, Propagate = True, andEmployeeID 
- Started – StartQualityDisposition_v94 passing Facility, Disposition, LineSequenceNo and EmployeeID 
- Skipped – ChangeDispositionLineStatus passing Disposition, Facility, LineSequenceNo, Status = Skipped, Propagate = True, and EmployeeID 
- Cancelled – ChangeDispositionLineStatus passing Disposition, Facility, LineSequenceNo, Status = Cancelled, Propagate = True, and EmployeeID 
- Completed – CompleteQualityDisposition_v96 passing Disposition, Facility, LineSequenceNo, Force = True, Comment, and EmployeeID 
- Evaluated – none

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Status | The inputted status. |
|  | TestingStartDate | The current UTC time. This is populated when the status is Started. |
|  | Comment_ | The inputted comment. |
|  | TestEvaluationDate | The current UTC time. This is populated when the status is Evaluated. it is set to Null when the status is Started. |
|  | EvaluationInspectorID | The employee ID. This is populated when the status is Evaluated. It is set to Null when the status is Started. |
|  | TestingFinishDate | The current UTC time. This is populated when the status is Completed. It is set to Null when the status is Started. |
|  | TestingFinishEmployeeID | The employee ID. This  is populated when the status is Completed. It is set to Null case when the status is Started. |
|  | QualityStatusCode | This is set to Null when the status is Started. |
