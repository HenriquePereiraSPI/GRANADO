# UpdateWorkSpace

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component updates the Workspace record, which can be a container holding activities, resources, and assignment relationships between activities and resources.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | Name | Char | No | The Workspace name. |
| Input | WorkSpaceClass | Integer | Yes | The ID of the Workspace Class. |
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | Description | Char | No | The description. |
| Input | StartDate | DateTime | No | The start date of the Workspace. |
| Input | EndDate | DateTime | No | The end date of the Workspace. |
| Input | WorkCenter | Char | No | The Work Center. |
| Input | UserString1 | Char | No | A user-defined string field. |
| Input | UserString2 | Char | No | A user-defined string field. |
| Input | UserString3 | Char | No | A user-defined string field. |
| Input | UserString4 | Char | No | A user-defined string field. |
| Input | UserInt1 | Integer | No | A user-defined integer field. |
| Input | UserInt2 | Integer | No | A user-defined integer field. |
| Input | UserInt3 | Integer | No | A user-defined integer field. |
| Input | UserInt4 | Integer | No | A user-defined integer field. |
| Input | UserDecimal1 | Decimal | No | A user-defined decimal field. |
| Input | UserDecimal2 | Decimal | No | A user-defined decimal field. |
| Input | UserDecimal3 | Decimal | No | A user-defined decimal field. |
| Input | UserDecimal4 | Decimal | No | A user-defined decimal field. |
| Input | UserDate1 | DateTime | No | A user-defined date field. |
| Input | UserDate2 | DateTime | No | A user-defined date field. |
| Input | UserDate3 | DateTime | No | A user-defined date field. |
| Input | UserDate4 | DateTime | No | A user-defined date field. |
| Input | UserBoolean1 | Boolean | No | A user-defined Boolean field. |
| Input | UserBoolean2 | Boolean | No | A user-defined Boolean field. |
| Input | UserBoolean3 | Boolean | No | A user-defined Boolean field. |
| Input | UserBoolean4 | Boolean | No | A user-defined Boolean field. |

## Validations

- The system validates that the Workspace Class exists.  
- If Name is provided, the system validates that the Workspace Name does not already exist for the Employee. 
- The system validates that the Work Center exists.

## System Processing

- The system updates the Workspace record with Inputs. If Name is not provided, it is not changed in the Workspace record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_WORKSPACE | ALL | ALL |
