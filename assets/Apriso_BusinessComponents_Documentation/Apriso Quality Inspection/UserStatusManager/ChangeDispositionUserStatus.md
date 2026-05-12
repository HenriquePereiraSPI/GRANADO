# ChangeDispositionUserStatus

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.UserStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to modify the custom user status of the Disposition hierarchy (Disposition, Disposition Line, Disposition Test, and Disposition Sample). It validates that the status change is allowed. If so, the BC changes the status of the record and optionally invokes the DFC that performs some additional logic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | No | The Sequence Number of the Quality Inspection Disposition (QID). |
| Input | DispositionTestID | Char | No | The unique identifier of the Disposition Test. |
| Input | DispositionTestSampleID | Char | No | The unique identifier of the Disposition Test Sample. |
| Input | Facility | Char | No | The Facility where the Inspection takes place. |
| Input | LineSequenceNo | Integer | No | The unique Sequence Number of the Disposition Line. |
| Input | UserStatusID | Integer | No | The system status of the Disposition. The valid values are: 1 - Not Started; 2 - Sampling in Progress; 3 - Sampling Complete; 4 - Testing in Progress; 5 - Testing Complete; 6 - MRB in Progress; 7 - Pass; and 8 - Fail. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in the DISPOSITION table. 
- The Facility, Disposition, and LineSequenceNo must exist in the DISPOSITION_LINE table. 
- The DispositionTestID must exist in the DISPOSITION_TEST table. 
- The DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table. 
- The UserStatusID must exist in the DISPOSITION_USER_STATUS table.

## System Processing

- At least one entity must be identified based on the Inputs provided: 
 
- Disposition (Disposition and Facility must be entered) 
- Disposition Line (Disposition, Facility and DispositionLine must be entered) 
- Disposition Test (DispositionTestID must be entered) 
- Disposition Test Sample (DispositionTestSampleID must be entered) 
 
- For the given entity, the user status can be changed based on the Disposition user status transition (DISPOSITION_USER_STATUS_TRAN table). The transition is possible if there is a record in that table with the following fields: 
 
- Type – the entity being changed (1 - Disposition, 2 - Disposition Line, 3 - Disposition Test, and 4 - Disposition Test Sample) 
- SrcDispositionUserStatusID – corresponds to the user status ID of the current entity (can be Null to enable changing the user status from not set). 
- DstDispositionUserStatusID – corresponds to UserStatusID (can be Null to enable changing the user status to not set, in which case the value of UserStatusID should be less than or equal 0) 
 
- If OnChangeDFCRevisionFUID is configured in the Disposition user status transition, it must implement the proper interface (refer to the Disposition user status transition): 
 
- The system updates the status of the entity to UserStatusID. 
- The system invokes the DFC configured as OnChangeDFCRevisionFUID in the Disposition user status transition that performs the custom logic associated with the change of the status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | DispositionUserStatusID | DispositionUserStatusID |
| DISPOSITION_LINE | DispositionUserStatusID | DispositionUserStatusID |
| DISPOSITION_TEST | DispositionUserStatusID | The inputted UserStatusID. |
| DISPOSITION_TEST_SAMPLE | DispositionUserStatusID | The inputted UserStatusID. |
