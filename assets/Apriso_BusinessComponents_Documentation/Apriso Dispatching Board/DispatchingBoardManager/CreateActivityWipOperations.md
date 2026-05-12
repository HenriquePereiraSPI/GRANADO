# CreateActivityWipOperations

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to create an Activity from a WIP Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WipOrderNoList | ListofChar | No | The WIP Order number. |
| Input | WipOrderTypeList | ListofInteger | No | The WIP Order type. |
| Input | OprSequenceNoList | ListofChar | No | The Operation Sequence number. |
| Output | ActivityIDList | ListofInteger | No | The Activity ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ExcludeWipOrderStatusList | ListofInteger | The WIP Order status list that needs to be excluded. |
| ExcludeWipOperationStatusList | ListofInteger | The WIP Operation status list that needs to be excluded. |
| TaskIDList | ListofInteger | Task ID associated with the WIP Operation. |

## Validations

- The system validates if the Workspace exists.  
- The system validates if the WIP Order exists. 
- The system validates if the WIP Operation exists.

## System Processing

- The system iterates through the WIP Order/Operation list. 
- The system validates the excluded WIP Order/Operation status. 
- The system creates an Activity by copying the value from the WIP Operation. 
- All the Dynamic Inputs (except those defined in the Dynamic Inputs section) are mapped to the appropriate columns of the DB_ACTIVITY table. 
- If the WIP Operation status is not new, the system sets AllowChangeDuration and AllowChangeStartDate to False. If the WIP Operation status is new, the system sets both to True.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | ALL |
