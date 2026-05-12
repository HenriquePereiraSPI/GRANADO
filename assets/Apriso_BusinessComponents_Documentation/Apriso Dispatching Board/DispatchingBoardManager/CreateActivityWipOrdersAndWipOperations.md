# CreateActivityWipOrdersAndWipOperations

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component is used to create Activities from specified WIP Orders and associated WIP Operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WipOrderNoList | ListofChar | No | The WIP Order number. |
| Input | WipOrderTypeList | ListofInteger | No | The WIP Order type. |
| Output | WipOrderActivityIDList | ListofInteger | No | The WIP Order Activity ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ExcludeWipOrderStatusList | ListofInteger | The WIP Order status list that needs to be excluded. |
| ExcludeWipOperationStatusList | ListofInteger | The WIP Operation status list that needs to be excluded. |
| TaskIDList | ListofInteger | Task ID associated with the WIP Order/Operation. |

## Validations

- The system validates if the Workspace exists. 
- The system validates if the WIP Order exists. 
- The system validates if the WIP Operation exists.

## System Processing

- The system iterates through the WIP Order list . 
-  The system validates the excluded WIP Order/Operation status.  
- The system creates the Activity by copying the value from the WIP Order and the dependent WIP Operation. 
-  All the Dynamic Inputs (except those defined in the Dynamic Inputs section) are mapped to the appropriate columns of the DB_ACTIVITY table.  
- If the WIP Order/Operation status is not new, the system sets AllowChangeDuration and AllowChangeStartDate to False. If the WIP Order/Operation status is new, the system sets both to True.

## Pre-Conditions

TaskIDList is required to be in order, as in the following example: 
 

          

 **WIP Order ** 
   

 **WIP Operation ** 
   

 **Task ID** 
     

 101 
   

 
   

 1001 
     

 101 
   

 101-001 
   

 1002 
     

 101 
   

 101-002 
   

 1003 
     

 101 
   

 101-003 
   

 1004 
     

 201 
   

 
   

 1005 
     

 201 
   

 201-001 
   

 1006 
     

 201 
   

 201-001 
   

 1007 
     

 301 
   

 
   

 1008 
     

 301 
   

 301-001 
   

 1009 
     
 

 TaskIDList should be inputted as {1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009}. 
 

 In order to get the correct order for the WIP Operations, the user should sort the WIP Operations by OprSequenceNo in the ascending order.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | ALL |
