# CloseNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Changes status of a Notice to 3-Closed, which causes the Notice to no longer be displayed upon login.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice to be closed. |

## Validations

- Validation fails if the Notice is not in the 2-Active status.

## System Processing

- Notice status is changed to 3-Closed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE | Status | New status. |
|  | ClosedDate | Current date. |
|  | ClosedEmployeeID | ID of the current Employee. |
