# EvaluateQualityDisposition_v96

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Method is used to determine the quality status of the disposition. It allows either the manual update of this status or automatic calculation based on the quality status of all tests.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Free-text (no translation) description of the Disposition. |
| Input | DispositionNumber | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |
| Input | Force | Boolean | Yes | Flag indicating if the status should be populated also for the entity's child entities. |
| Input | QualityStatusCode | Char | Yes | Final status of the QID: Accept (if conforming)/Reject (if non-conforming). Reference to the Reason Code of type: Quality Status Code (REASON_CODE table). |
| Input | EmployeeID | Integer | No | Identifier of the Employee evaluating the Disposition. |

## Validations

- Facility must exist in FACILITY table, 
- Facility and DispositionNumber must exist in DISPOSITION table, 
- QualityStatusCode must exist in REASON_CODE table and be of Quality Status Code type (REASON_CODE.Type = 29), 
- EmployeeID must exist in EMPLOYEE table, 
- If Force is set to False then: 
 
- Disposition status must be Completed, 
- All required (DISPOSITION_TEST.Required) tests linked to the Disposition must be in status 'Evaluated', 
- All disposition lines linked to the disposition must NOT be in the status that is marked as opened (based on the flag DISPOSITION_LINE_STATUS.Open).

## System Processing

- If Force is set to False then invokes the BC method ChangeDispositionStatus(4.12.1) with the following parameters: DispositionNumber, Facility, EmployeeID, Status = 'Evaluated', Propagate = false, Comment, 
- If Force is set to True then invokes the BC method ChangeDispositionStatus(4.12.1) with the following parameters: DispositionNumber, Facility, EmployeeID, Status = 'Evaluated', Propagate = true, Comment, 
- Updates disposition record with the following parameters: 
 
- Quality Status Code = QualityStatusCode, 
- Comment, 
 
- Writes transaction history for the following entities (see FlexNet.BusinessFacade.Quality.DispositionStatusManager.EvaluateQualityDisposition.xsd to learn what fields are logged): 
 
- DISPOSITION, 
- DISPOSITION_LINE records linked to disposition, 
- DISPOSITION_TEST records linked to disposition, 
- DISPOSITION_TEST_SAMPLE records linked to disposition, 
- DISPOSITION_READING records linked to disposition.

## History Recording in Production

FlexNet.BusinessFacade.Quality.DispositionStatusManager.EvaluateQualityDisposition.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the ChangeDispositionStatus method. |  |  |
| Transaction history tables. |  |  |
