# AcknowledgeNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Allows to acknowledge a Notice for the current Employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice to be acknowledged. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| EmployeeID | Integer | ID of an Employee for whom the Notice is to be acknowledged. If not specified, the current Employee will be used. |
| TaskID | Integer | ID of a Task for the acknowledged Notice. |

## Validations

- Validation fails if the Notice is not in the 2 - Active state.

## System Processing

- A new row in the NOTICE_ACKNOWLEDGEMENT table is created, indicating that the Employee acknowledged the Notice.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE_ACKNOWLEDGEMENT | [All columns] |  |
