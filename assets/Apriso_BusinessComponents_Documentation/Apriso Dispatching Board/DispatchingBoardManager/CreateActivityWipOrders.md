# CreateActivityWipOrders

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to create an Activity from a WIP Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WipOrderNoList | ListofChar | No | The WIP Order number. |
| Input | WipOrderTypeList | ListofInteger | No | The WIP Order type. |
| Output | ActivityID | ListofInteger | No | The Activity ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ExcludeWipOrderStatusList | ListofInteger | The WIP Order status list that needs to be excluded. |
| TaskIDList | ListofInteger | The task ID associated with the WIP Order. |

## Validations

- The system validates if the Workspace exists. 
- The system validates if the WIP Order exists.

## System Processing

- The system iterates through the WIP Order list. 
- The system creates an activity by copying the value from the WIP Order. 
-  All the Dynamic Inputs (except those defined in the Dynamic Inputs section) are mapped to the appropriate columns of the DB_ACTIVITY table.  
- If the WIP Order status is not new, the system sets AllowChangeDuration and AllowChangeStartDate to False. If the WIP Order status is new, the system sets both to True.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | ALL |
