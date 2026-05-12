# ActivateNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Changes the status of a Notice to 2-Active, which causes the Notice to be displayed upon login.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of a Notice to be activated. |

## Validations

- Validation fails if the Notice is not in the 1-New status. 
- Validation fails if there exists another Notice with the same Name and the 2-Active status.

## System Processing

- Notice status is changed to 2-Active.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE | Status | New status. |
|  | ActiveDate | Current date. |
|  | ActiveEmployeeID | ID of the current Employee. |
