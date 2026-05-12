# RemoveNoticeAssignments

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Removes Notice Assignments.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | Notice ID. |
| Input | AssignmentIDList | ListofInteger | Yes | IDs of Assignments to be removed. |

## Validations

- Validation fails if the Notice is in the 3-Closed status.

## System Processing

- System removes entries in the NOTICE_ASSIGNMENT table as indicated by their Assignment IDs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE_ASSIGNMENT | [All columns] |  |
