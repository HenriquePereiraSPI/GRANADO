# CompleteQualityDisposition_v96

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to validate the completeness of the Disposition and to mark the test as Completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionLineNumber | Integer | No | The unique identifier of the Quality Inspection Disposition Line (QIDL). |
| Input | DispositionNumber | Char | Yes | The Sequence Number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility where the inspection takes place. |
| Input | Force | Boolean | Yes | The flag indicating if the status should be populated also for the entity's child entities. |
| Input | Comment | Char | No | The Disposition completion comment. |
| Input | EmployeeID | Integer | No | The identifier of the employee completing the Disposition/Disposition Line. |

## Validations

- The Facility must exist in the FACILITY table.  
- The Facility and DispositionNumber must exist in the DISPOSITION table.  
- The Facility, DispositionNumber, and DispositionLineNumber must exist in the DISPOSITION_LINE table. 
- The EmployeeID must exist in the EMPLOYEE table. 
- If DispositionLineNumber is NOT specified (less than or equal to 0) and the Force flag is set to False, all the Disposition Lines linked to the Disposition must NOT be in the status that is marked as opened (based on the flag DISPOSITION_LINE_STATUS.Open). 
- If DispositionLineNumber is specified and the Force flag is set to False, all the Disposition Tests linked to the Disposition Line must NOT be in the status that is marked as opened (Open flag in DISPOSITION_TEST_STATUS table).

## System Processing

- If the DispositionLineNumber is NOT specified (less than or equal to 0), the system does the following:  
 
- If the Force flag is set to True, the system invokes the logic of the ChangeDispositionStatus BC with the following parameters: DispositionNumber, Facility, EmployeeID, Status = Completed, Propagate = True, and Comment. 
- If the Force flag is set to False, the system invokes the logic of the ChangeDispositionStatus BC with the following parameters: DispositionNumber, Facility, EmployeeID, Status = Completed, and Propagate = False. 
- The system updates TestingFinishDate for the Disposition to the current date and time. 
 
- If DispositionLineNumber is specified (greater than 0), the system does the following: 
 
- If the Force flag is set to True, the system invokes the logic of the ChangeDispositionLineStatus BC with the following parameters: DispositionNumber, Facility, DispositionLineNumber, EmployeeID, Status = Completed, Propagate = True, and Comment. 
- If the Force flag is set to False, the system invokes the logic of the ChangeDispositionLineStatus BC with the following parameters: DispositionNumber, Facility, DispositionLineNumber, EmployeeID, Status = Completed, Propagate = false, and Comment. 
- The system updates TestingFinishDate for the Disposition Line to the current date and time.  
 
- The system writes the transaction history for the following entities (see FlexNet.BusinessFacade.Quality.DispositionStatusManager.CompleteQualityDisposition.xsd to learn what fields are logged):  
 
- DISPOSITION 
- DISPOSITION_LINE records linked to the Disposition 
- DISPOSITION_TEST records linked to the Disposition 
- DISPOSITION_TEST_SAMPLE records linked to the Disposition 
- DISPOSITION_READING records linked to the Disposition

## History Recording in Production

FlexNet.BusinessFacade.Quality.DispositionStatusManager.CompleteQualityDisposition.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by |  |  |
| All tables populated by |  |  |
| Transaction history tables. |  |  |
