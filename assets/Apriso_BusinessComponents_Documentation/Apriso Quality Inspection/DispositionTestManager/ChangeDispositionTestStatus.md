# ChangeDispositionTestStatus

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

This Business Component method is used to change status of the Disposition Test and/or Disposition Test Sample record to the one passed as a parameter. The BC validates that the user changing the status has the Role and/or Skill that enables modifying the status.
 

 

 **Note**: Dedicated BCs exist to change the Disposition Test and/or Disposition Test Sample status, such as CancelDispositionTest_v94, CompleteDispositionTest_v96, EvaluateDispositionTest_v96, ReleaseDispositionTest_v94, SkipDispositionTest_v94, and StartDispositionTest_v94. Using these BCs instead of ChangeDispositionTestStatus is recommended, as they have extended functionality such as transaction history logging and additional Inputs.

*Status chart for Disposition, Disposition, Test, and Disposition Test Sample*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | No | The identifier of the Disposition Test that is the subject of the status change. |
| Input | DispositionTestSampleID | Integer | No | The identifier of the Disposition Test Sample linked with the Disposition Test. |
| Input | DispositionTestStatus | Short | Yes | The identifier of the status to which the Disposition Test is to be changed. |
| Input | Propagate | Boolean | Yes | If enabled (value = True), the action performed by the BC will also affect the entity's child entities. The status will also be changed for all the dependent Disposition Samples. |
| Input | EmployeeID | Integer | No | The identifier of the employee performing the status change (for the validation of the appropriate rights). |
| Input | Comment | Char | No | The free-text (no translation) description of the change. |

## Validations

- The DispositionTestID must exist in the DISPOSITION_TEST table. 
- The DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table. 
- The DispositionTestStatus must exist in the DISPOSITION_TEST_STATUS table. 
- The EmployeeID must exist in the EMPLOYEE table.

## System Processing

- The system validates that DispositonTestID or DispositonTestSampleID is specified. 
- If DispositonTestSampleID is specified, then the system does the following: 
 
- The system validates that the Disposition Line to which the Disposition Test Sample is linked is not in the Closed status (DISPOSITION_LINE_STATUS.Open has to be True). 
- The system validates that the proper status transition can be performed according to the Status chart for the Disposition Test (see the figure above). 
- The system changes the Disposition Test Sample status to the provided DispositonTestStatus according to the following rules: 
 
- The system updates the Comment field with the inputted comment. 
- If the inputted DispositonTestStatus is Started, then it populates ActualStartDate with the current UTC time. This field is not changed if it is different than Null. Additionally, the system resets ActualFinishDate to Null. 
- If the inputted DispositionTestStatus is Completed, the system populates ActualFinishDate with the current UTC time. 
- The system updates DISPOSITION_TEST_SAMPLE.DispositionTestSatus with the inputted DispositionTestStatus. 
- If the user status is defined for the inputted DispositonTestStatus (that is, DISPOSITON_TEST_STATUS.DispositionUserStatusID is not NULL), the system invokes the ChangeDispositionUserStatus BC by passing: 
 
- Facility – not specified 
- Disposition – not specified 
- LineSequenceNo – not specified 
- DispositionTestID – not specified 
- DispositionTestSampleID – the inputted DispositionTestSampleID 
- UserStatusID – DISPOSITON_TEST_TATUS.DispositionUserStatusID 
 
 
 
- If DispositionTestSampleID is specified and the Disposition Test Sample status (DISPOSITION_TEST_SAMPLE.DispositonTestStatus) is the same as the inputted DispositonTestStatus, the system ends the execution. Otherwise, if the Disposition Test status (DISPOSITON_TEST.Status) is the same as the inputted DispositionTestStatus, the system ends the execution. 
- If DispositionTestID is specified, then the system does the following: 
 
- The system validates that the Disposition Line to which the Disposition Test is linked is not in the Closed status (DISPOSITION_LINE_STATUS.Open has to be True). 
- The system validates that the proper status transition can be performed according to the Status chart for the Disposition Test (see figure 4). 
- The system changes the Disposition Test status to the provided DispositonTestStatus according to the following rules: 
 
- The system updates the Comment field with the inputted comment. 
- If the inputted DispositonTestStatus is Started, the system populates TestingStartDate with the current UTC time. Additionally, it resets TestEvaluationDate, EvaluationInspectorID, TestingFinishDate, and InspectorID to Null. 
- If the inputted DispositionTestStatus is Completed, the system populates TestingFinishDate with the current UTC time and InspectorID with the inputted EmployeeID. The system updates DISPOSITION_TEST.Status with the inputted DispositionTestStatus. 
- If the user status is defined for the inputted DispositonTestStatus (DISPOSITON_TEST_TATUS.DispositionUserStatusID is not Null), the system invokes the ChangeDispositionUserStatus BC by passing the following parameters: 
 
- Facility – not specified 
- Disposition – not specified 
- LineSequenceNo – not specified 
- DispositionTestID – inputted DispositionTestID 
- DispositionTestSampleID – not specified 
- UserStatusID – DISPOSITON_TEST_TATUS.DispositionUserStatusID 
 
 
 
- If the EmployeeID is specified and the Disposition status configuration exists (that is, at least one record exists for the inputted DispositionTestStatus) in the DISPOSITION_STATUS_CONFIG table, the system validates that there is at least one record in that configuration with the SkillID nad RoleID defined for the employee (employee Skills are defined in the EMPLOYEE_SKILL table and employee Roles are defined in the EMPLOYEE_ROLE table). 
- If the Propagate parameter is set to True and DispositionTestSampleID is not provided (not greater than 0), then for every Disposition Test Sample in the Open status (Disposition Test Status.Open = True), the system invokes the logic of the ChangeDispositionTestStatus BC by passing the following Inputs: 
 
- DispositionTestID – the inputted DispositionTestID 
- DispositionTestSampleID – the ID of the Disposition Test Sample 
- DispositionTestStatus – the inputted DispositionTestStatus 
- EmployeeID = the inputted EmployeeID 
- Propagate – false 
- Comment – the inputted comment 
 
- If DispositionTestStatus is Started, then the system does the following: 
 
- If DispositionTestSampleID is specified and the status of the Disposition Test (referenced by the Disposition Test Sample) is not Started (DISPOSITON_TEST_STATUS), the system invokes the ChangeDispositionTestStatus BC by passing the following Inputs: 
 
- DispositionTestID – the ID of the Disposition Test that is referenced by the Disposition Test Sample 
- DispositionTestSampleID – not specified 
- DispositionTestStatus – Started 
- Propagate – false 
- Comment – the inputted comment 
- EmployeeID – the inputted EmployeeID 
 
- Otherwise, if DispositonTestID is specified and the status of the Disposition Line (referenced by the Disposition Test) is not Started (DISPOSITION_LINE_STATUS), the system invokes the ChangeDispositionLineStatus BC by passing the following Inputs: 
 
- Disposition – DISPOSITION_LINE.Disposition 
- Facility – DISPOSITION_LINE.Facility 
- LineSequenceNo – DISPOSITION_LINE.LineSequenceNo 
- Status – Started 
- Propagate – false 
- EmployeeID – the inputted EmployeeID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_SAPMLE | Comment_ | The inputted comment. |
|  | DispositionTestStatus | The inputted DispositionTestStatus. |
|  | ActualStartDate | The current UTC time. This is populated only if the DispositionTestStatus is Started and the value is not set yet. |
|  | ActualFinishDate | The current UTC time. This is populated when DispositionTestStatus is Completed. It is set to Null when DispositionTestStatus is Started. |
| DISPOSITION_TEST | Comment_ | The inputted comment. |
|  | Status | The inputted DispositionTestStatus. |
|  | TestingStartDate | The current UTC time. This is populated only if the DispositionTestStatus is Started. |
|  | TestingFinishDate | The current UTC time. This is populated when DispositionTestStatus is Completed. It is set to Null in the case when DispositionTestStatus is Started. |
|  | InspectorID | The employee ID. It is populated when DispositionTestStatus is Completed. It is set to Null when DispositionTestStatus is Started. |
|  | TestEvaluationDate | The current UTC time. It is populated when DispositionTestStatus is Evaluated. It is set to Null when DispositionTestStatus is Started. |
|  | EvaluatingInspectorID | The employee ID. It is populated when DispositionTestStatus is Evaluated. It is set to Null when DispositionTestStatus is Started. |
