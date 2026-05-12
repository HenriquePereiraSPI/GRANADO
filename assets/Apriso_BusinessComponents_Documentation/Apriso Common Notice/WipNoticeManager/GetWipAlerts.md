# GetWipAlerts

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.WipNoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** WipNotice, Wip Notice

## Description

Returns alerts and corresponding acknowledgements linked to WIP Order/Operation/Step if the criteria are met.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number for which data is to be returned. |
| Input | WipOrderType | Integer | Yes | WIP Order Type for which data is to be returned. |
| Input | EmployeeID | Integer | Yes | The Employee for whom the data is to be returned. |
| Output | NoticeID | List of Integer |  | Unique identifiers of the returned notices (WIP Alert type). |
| Output | Acknowledgement | List of Boolean |  | Informs whether the returned notices were acknowledged or not. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WipOperationSequenceNo | Char | WIP Operation for which data is to be returned. |
| WipOperationStepSequenceNo | Integer | WIP Step number for which data is to be returned. |
| WithChildren | Boolean | Defines if alerts from children entities of WIP Order or Operations should also be reported. |

## Validations

- Validation passes if WIP Order exists. 
- Validation passes if WIP Operation exists and when WipOrderNo, WipOrderType, and WipOperationSequenceNo are present. 
- Validation passes if WIP Operation Step exists and when WipOrderNo, WipOrderType, WipOperationSequenceNo, and WipOperationStepSequenceNo are present. 
- Validation fails if the Employee does not exist in the data base.

## System Processing

- System checks if there is a linked Notice. 
- System checks if a Notice is in Active status. 
- System checks if current date is between Notice’s valid dates. 
- System checks the Acknowledgement Type of a Notice. If it is set to "Once", the system checks if the Notice was already acknowledged by the given Employee. 
- System returns Notices and corresponding acknowledgements.
