# CreateDispositionGroupCode

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionGroupCodeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

Creates Disposition Group Code record for the specified arguments

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility of the referenced Disposition. |
| Input | Disposition | Char | Yes | Disposition Number for which the Reason Code or Group of Reason Codes is to be created. |
| Input | LineSequenceNo | Integer | No | Disposition Line Number for which the Reason Code or Group of Reason Codes is to be created. NULL if less or equal 0. |
| Input | Group | Char | No | Group Name of the group of Reason Codes. |
| Input | GroupType | Integer | No | Group Type of the group of Reason Codes. NULL if less or equal 0. |
| Input | GroupClassID | Integer | No | Group Class of the group of Reason Codes. NULL if less or equal 0. |
| Input | ReasonCode | Char | No | Reason Code of usage: Quality (REASON_CODE.Usage_ = 6). |
| Output | DispositionGroupCodeID | Integer | No | Unique identifier of a newly created Disposition Group Code. |

## Validations

- Disposition and Facility must exist in DISPOSITION table. 
- Disposition, Facility and LineSequenceNo must exist in DISPOSITION_LINE table. 
- Group, GroupType and GroupClassID must exist in GROUP table. 
- ReasonCode must exist in REASON_CODE table.

## System Processing

- If LineSequenceNo is specified then the method validates that Disposition Line Status is 'New' (DISPOSITION_LINE_STATUS). 
- Else validates that the Disposition Status is 'New' (DISPOSITION_STATUS). 
- Validates that ReasonCode or Group, GroupType and GroupClassID are specified. 
- If Group, GroupType and GroupClassID are specified then: 
 
- Validates that the GroupType (in GROUP_TYPE table) is 'ReasonCode' (value of 18) 
- Validates that Disposition Group Code doesn't exist for the specified Group, GroupType, GroupClassID, Dispositon, Facility (and LineSequenceNo if specified). 
 
- Else if ReasonCode is specified then: 
 
- Validates that the Reason Code Usage is 'Quality' (REASON_CODE_USAGE - value of 6). 
- Validates that the Disposition Group Code doesn't exist for the inputted ReasonCode, Disposition, Facility (and LineSequenceNo if specified). 
 
- Creates disposition group code record in DISPOSTION_GROUP_CODE table and populates it with the parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_GROUP_CODE | Disposition | Inputted DispositionTestID |
|  | Facility | Inputted Facility |
|  | LineSequenceNo | Inputed LineSequenceNo or NULL if not specified. |
|  | Group | Inputted Group or Null if Group, GroupType or GroupClassID are not specified |
|  | GroupType | Inputted GroupType or Null if Group, GroupType or GroupClassID are not specified |
|  | GroupClassID | Inputted GroupClassID or Null if Group, GroupType or GroupClassID are not specified |
|  | ReasonCode | Inputted ReasonCode or NULL if not specified |
