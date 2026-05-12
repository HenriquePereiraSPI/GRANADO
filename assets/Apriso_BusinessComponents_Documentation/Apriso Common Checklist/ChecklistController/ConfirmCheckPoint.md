# ConfirmCheckPoint

**Category:** Apriso/Common/Checklist
**Class:** `FlexNet.BusinessFacade.Common.ChecklistController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to update a checkpoint and the CHECK_POINT_HISTORY table. If the record does not exist in the CHECK_POINT_HISTORY table, the method creates one.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Checked | Boolean | No | Indicates if the point has been checked. |
| Input | CheckPointID | Integer | Yes | The ID of the checkpoint being updated. |
| Input | CheckPointValueID | Integer | No | The value ID of the checkpoint being updated. |
| Input | MaintenanceOrderNo | Char | Yes | The Maintenance Order number. |
| Input | MaintenanceOrderType | Short | Yes | The type of the Maintenance Order. |
| Input | Value | Char | No | The value of the point. |
| Output | CheckPointHistoryID | Integer | No | The checkpoint history ID. |

## Validations

- The Maintenance Order must exist in the WIP_ORDER table. 
- CheckPointID must exist in the CHECK_POINT table. 
- CheckPointValueID must exist in the CHECK_POINT_VALUE table (if specified) and be linked to the inputted CheckPointID.

## System Processing

- The system checks that the checklist history record exists and creates one if it does not. 
- The system populates StartedOn field in CHECK_LIST_HISTORY with the current date and time (if it does not yet exist). 
- The system checks if the checkpoint history record exists and creates one if it does not. 
- The system updates the checkpoint history record with the inputted values. 
- The system assigns the ID of the checkpoint history record to output the CheckPointHistoryID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CheckListHistory | All fields |  |
| CheckPointHistory | All fields |  |
