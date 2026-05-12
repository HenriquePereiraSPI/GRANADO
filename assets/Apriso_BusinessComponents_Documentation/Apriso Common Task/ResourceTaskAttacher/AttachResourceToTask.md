# AttachResourceToTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.ResourceTaskAttacher`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method performs no business logic. It can be extended for business logic per the standard component extension points. It has no functionality other than creating history.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to attach the Resource to. |
| Input | WorkCenter | Char | Yes | The Work Center that the Resource is in. |
| Input | ResourceName | Char | Yes | The name of the Resource you are attaching to the task. |
| Input | ResourceType | Integer | Yes | The type of Resource you are attaching to the task. |

## Validations

- The system validates that the task exists. 
- The system validates that the Work Center exists in the WORK_CENTER table. 
- The system validates that ResourceName and ResourceType exist in the RESOURCE_ table.

## System Processing

- The system writes the transaction history.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TRANSACTION_HISTORY | All |  |
| TRANSACTION_HISTORY_RESOURCE | ResourceName | The attached Resource name. |
|  | ResourceType | The attached Resource type. |
|  | WorkCenter | The Work Center that the resource is in. |
|  | Facility | The Facility that the resource is in. |
|  | Department | The Department that the resource is in. |
|  | StartedEmployeeID | The EmployeeID from the task. |
|  | EndEmployeeID | The EmployeeID from the task. |
|  | LaborType | Always set to 0. |
