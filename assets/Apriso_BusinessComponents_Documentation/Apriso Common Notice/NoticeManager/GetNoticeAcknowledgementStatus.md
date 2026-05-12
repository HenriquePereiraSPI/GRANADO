# GetNoticeAcknowledgementStatus

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Returns the number of non-voided acknowledgements of a Notice and the number of Employees assigned the Notice (based on the Notice assignment configuration).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice for which statistics are to be computed. |
| Output | AssignedEmployeesCount | Integer | Yes | Number of Employees who are currently assigned the Notice. |
| Output | AcknowledgedEmployeesCount | Integer | Yes | Number of Employees who acknowledged the Notice. |

## System Processing

- If Notice status is not 3-Closed, the system gets Notice assignments from the NOTICE_ASSIGNMENT table and counts distinct affected Employees. 
- If Notice status is not 1-New, the system gets Notice Acknowledgements from the NOTICE_ACKNOWLEDGEMENT table and returns the number of non-voided, unique acknowledgements.
