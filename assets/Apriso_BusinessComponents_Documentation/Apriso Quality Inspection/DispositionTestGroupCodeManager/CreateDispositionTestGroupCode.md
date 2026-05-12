# CreateDispositionTestGroupCode

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestGroupCodeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Creates disposition test group code record for the parameters specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Reference to Disposition Test to which the reason codes or groups are assigned. |
| Input | Group | Char | No | Group Name of the group of reason codes. |
| Input | GroupType | Integer | No | Group Type of the group of reason codes. |
| Input | GroupClassID | Integer | No | Group Class of the group of reason codes. |
| Input | ReasonCode | Char | No | Reason Code of usage: Quality (REASON_CODE.Usage_ = 6). |
| Input | DispositionTestGroupCodeID | Integer | No | Unique identifier of a newly created Test Group Code. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- Group, GroupType and GroupClassID must exist in GROUP table. 
- ReasonCode must exist in REASON_CODE table.

## System Processing

- Validates that the Disposition Test status is 'New' (DISPOSITION_TEST_STATUS) 
- Validates that ReasonCode or Group, GroupType and GroupClassID are specified. 
- If Group, GroupType and GroupClassID are specified then: 
 
- Validates that the GroupType is 'ReasonCode' (GROUP_TYPE value of 19). 
- Validates that the Disposition Test Group Code doesn't exist for the specified DispositionTestID, Group, GroupType and GroupClassID 
 
- Else if ReasonCode is specified then: 
 
- Validates that reason code usage is 'Quality' (REASON_CODE_USAGE - value of 6). 
- Validates that Disposition Test Group Code doesn't exist for the inputted DispositionTestID and ReasonCode. 
 
- Creates a Disposition Test Group Code record in DISPOSTION_TEST_GROUP_CODE table and populates it with the parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_GROUP_CODE | DispositionTestID | Inputted DispositionTestID |
|  | Group_ | Inputted Group or Null if Group, GroupTyp or GroupClassID are not specified |
|  | GroupType | Inputted GroupType or Null if Group, GroupTyp or GroupClassID are not specified |
|  | GroupClassID | Inputted GroupClassID or Null if Group, GroupTyp or GroupClassID are not specified |
|  | ReasonCode | Inputted ReasonCode or NULL if not specified. |
