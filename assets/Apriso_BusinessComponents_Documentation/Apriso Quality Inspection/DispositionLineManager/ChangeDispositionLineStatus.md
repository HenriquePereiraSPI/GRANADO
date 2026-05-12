# ChangeDispositionLineStatus

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of the Disposition Line record to the one passed as a parameter. The BC validates that the user changing the status has the Role and/or Skill that enables modifying the status. Optionally, the BC updates the status of the Disposition Test and sample records. 

 Dedicated BCs exist to change the Disposition Line status, such as: CancelQualityDisposition_v94, CompleteQualityDisposition_v96, ReleaseQualityDisposition_v94, SkipQualityDisposition_v94, and StartQualityDisposition_v94 Using these BCs instead of ChangeDispositionLineStatus is recommended, as they have extended functionality such as transaction history logging and additional Inputs.

*Status chart for Disposition Line*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | The Disposition that is the subject of the status change. |
| Input | Facility | Char | Yes | The Facility that owns the Quality Inspection (Disposition). |
| Input | LineSequenceNo | Integer | Yes | The Sequence Number of the Disposition Line that is the subject of the status change. |
| Input | Status | Short | Yes | The identifier of the status to which the Disposition is to be changed. |
| Input | Propagate | Boolean | Yes | If enabled (value = True), the action performed by the BC will also affect the entity's child entities. The status will also be changed for all the dependent Disposition Lines, Disposition Tests, and Disposition Test Samples. |
| Input | EmployeeID | Integer | No | The identifier of the employee performing the status change (for validation of the appropriate rights). |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Comment | Char | The comment. |

## Validations

- The Disposition Input must be provided. 
- The Facility Input must be provided. 
- The LineSequenceNo Input must be provided. 
- The Disposition and Facility must exist in the DISPOSITION table. 
- The Disposition, Facility, and LineSequenceNo must exist in the DISPOSITION_LINE table. 
- The EmployeeID must exist in the EMPLOYEE table. 
- The Status must exist in the DISPOSITON_LINE_STATUS table.

## System Processing

- If the Disposition Line status (DISPOSITION_LINE.Status) is the same as the inputted status, the execution is terminated. 
- If EmployeeID is specified and the Disposition status configuration exists (that is, at least one record exists for the inputted line status) in the DISPOSITION_STATUS_CONFIG table, then it validates that there is at least one record in that configuration with the SkillID and RoleID defined for the employee (employee Skills are defined in the EMPLOYEE_SKILL table and employee Roles are defined in the EMPLOYEE_ROLE table). 
- The system validates that the proper status transition can be performed according to the Status chart for Disposition Line (see the figure above). 
- The system validates that the Disposition (referenced by the Disposition Line) is in the status marked as Open (DISPOSITION_STATUS.Open is True) when the Disposition Line status is being changed from Closed to Open (DISPOSITION_LINE_STATUS.Open). 
- The system validates that the Disposition is not new when the inputted status is Released. 
- The system changes the Disposition Line status according to the following rules: 
 
- The system updates the Comment field with the inputted comment. 
- If the inputted Status is Started, the system populates TestingStartDate with the current UTC time. Additionally, it resets TestingFinishDate and TestingFinishEmployeeID to Null. 
- If the inputted status is Completed, the system populates TestingFinishDate with the current UTC time and TestingFinishEmployeeID with the provided EmployeeID. 
- The system updates DISPOSITION_LINE.Status with the inputted status. If the user status is defined for the inputted Status (DISPOSITON_LINE_STATUS.DispositionUserStatusID is not Null), the system invokes the ChangeDispositionUserStatus BC by passing the following parameters 
 
- Facility – the inputted Facility 
- Disposition – the inputted Disposition 
- LineSequenceNo – the inputted LineSequenceNo 
- DispositionTestID – not specified 
- DispositionTestSampleID – not specified 
- UserStatusID – DISPOSITION_LINE_STATUS.DispositionUserStatusID  
 
- If the Propagate parameter is set to True, then for every Disposition Test in the status marked as Open (Disposition Test Status.Open = True), the system invokes the logic of the ChangeDispositionTestStatus BC by passing the following Inputs: 
 
- DispositionTestID – the ID of the Disposition Test 
- DispositionTestSampleID – not specified 
- DispositionTestStatus – the status taken from the DISPOSTION_TEST_STATUS table that is equivalent to the inputted status (DISPOSITON_LINE_STATUS) 
- EmployeeID – the inputted EmployeeID 
- Propagate – true 
- Comment – not specified 
 
- If the inputted status is Started and the status of the Disposition (referenced by the Disposition Line) is not Started (DISPOSTION_STATUS), the system invokes the ChangeDispositionStatus BC by passing the following Inputs: 
 
- Disposition – the inputted Disposition 
- Facility – the inputted Facility 
- Status – Started (DISPOSITION_STATUS). 
- Propagate – false 
- EmployeeID – the inputted EmployeeID 
- Comment – not specified

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_LINE | Status | The inputted status. |
|  | Comment_ | The inputted comment. |
|  | TestingStartDate | The current UTC time. This is populated only if the status is Started. |
|  | TestingFinishDate | The current UTC time. This is populated when the status is Completed. It is set to Null when the status is Started. |
|  | TestingFinishEmployeeID | The employee ID. This is populated when the status is Completed. It is set to Null when the status is Started. |
