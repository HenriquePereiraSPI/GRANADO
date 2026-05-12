# CreateWorkingTime

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates the time schedule of a Workspace from a Work Center Calendar.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace Class ID. |

## Validations

- Validates if the Workspace exists  
- Validates if the date range of the Workspace is valid  
- Validates if the Work Center from the Workspace exists

## System Processing

- The system retrieves the schedule from the Work Center Calendar (for information on the calendar creation logic, refer to the GetWorkCenterSchedule BC method) 
- The system builds the Workspace calendar from the schedule 
- The system creates a working time record from the Workspace calendar

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_WORKING_TIME | ALL | The retrieved schedule from the Work Center. |
