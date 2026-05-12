# StopAllLabor

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active
**Keywords:** Stop, Labor

## Description

The invocation of this method will close all open LABOR records for the ATTENDANCE row open at StopLabor Time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The Employee Number for the labor to be stopped |
| Input | StopLaborTime | DateTime | Yes | The time in local that all open labor should be stopped at. |

## Validations

- The system validates the EmployeeNo. A valid EmployeeNo must be passed to this method. 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting.

## System Processing

- System finds the open labor records corresponding to the information passed to the Stop All Labor business component. 
- System updates all End Times and Statues for the LABOR records retrieved. 
- System computes the hours and updates all the LABOR records with hours distributions and rounding. 
 

Example:
 
 
- 07:00 - The Employee Clocks In 
- 07:03 - The Employee performs many Start Labors against Wip Orders and Operations. 
- 07:30 - The Employee performs many Stop All Labor 
- System retrieves all the open LABOR 
- System closes all open labor by updating end times and status to 2 
- System recomputes and applies rounding rules to all the labor records 
- System saves the LABOR records 
- This flow ends

## Pre-Conditions

The Employee must be in a state of Clocked In.

## Published Events

See business components that stop labor to include
 
 
- Stop Work Center 
- Stop Indirect 
- Stop Order 
- Stop Product

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StopAllLabor 
- TRANSACTION_HISTORY_LABOR

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LABOR | EndTimeLocal | StopLaborTime |
|  | EndTime | StopLaborTime (converted to UTC) |
|  | AdjustedStopTimeLocal |  |
|  | AdjustedStopTime |  |
|  | RegularHours |  |
|  | OverTimeHours |  |
|  | DoubleTimeHours |  |
|  | NonRegularHours |  |
