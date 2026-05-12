# DeleteNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Removes a Notice.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice to be deleted. |

## Validations

- Validation fails if the Notice is in the 2-Active status. 
- Validation fails if the Notice is in the 3-Closed status and has any Acknowledgements.

## System Processing

If the Notice is in the 1-New status: 
 
 
- System removes all entries in the NOTICE_ASSIGNMENT table linked to the Notice. 
- System removes all entries in the TEXT and TEXT_TRANSLATION tables linked to the Notice. 
- System removes the Notice from the NOTICE table. 
 

If the Notice is in the 3-Closed status, it is deactivated but it is not removed from the database (the Active column is set to 0 instead).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE | [All columns] | If Notice status is 1-New, the Notice's row is removed. |
|  | Active | If Notice status is 3-Closed, the Active column is set to 0. |
| NOTICE_ASSIGNMENT | [All columns] | If Notice status is 1-New, removes all rows linked to the Notice. |
| TEXT | [All columns] | If Notice status is 1-New, removes all rows linked to the Notice. |
| TEXT_TRANSLATION | [All columns] | If Notice status is 1-New, removes all rows linked to the Notice. |
