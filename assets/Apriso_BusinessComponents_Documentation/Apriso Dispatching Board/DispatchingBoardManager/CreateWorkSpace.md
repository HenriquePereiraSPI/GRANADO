# CreateWorkSpace

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates a Workspace record which can be a container holding activities, resources, and assignment relationships between activities and resources.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Name | Char | Yes | The name of a new Workspace. |
| Input | WorkSpaceClass | Integer | Yes | The ID of the Workspace Class. |
| Input | EmployeeID | Integer | Yes | The Employee ID. |
| Input | Description | Char | No | The description. |
| Input | StartDate | DateTime | No | The start date of the Workspace. |
| Input | EndDate | DateTime | No | The end date of the Workspace. |
| Input | WorkCenter | Char | No | The Work Center. |
| Input | UserString1 | Char | No | A user string field. |
| Input | UserString2 | Char | No | A user string field. |
| Input | UserString3 | Char | No | A user string field. |
| Input | UserString4 | Char | No | A user string field. |
| Input | UserInt1 | Integer | No | A user integer field. |
| Input | UserInt2 | Integer | No | A user integer field. |
| Input | UserInt3 | Integer | No | A user integer field. |
| Input | UserInt4 | Integer | No | A user integer field. |
| Input | UserDecimal1 | Decimal | No | A user decimal field. |
| Input | UserDecimal2 | Decimal | No | A user decimal field. |
| Input | UserDecimal3 | Decimal | No | A user decimal field. |
| Input | UserDecimal4 | Decimal | No | A user decimal field. |
| Input | UserDate1 | DateTime | No | A user date field. |
| Input | UserDate2 | DateTime | No | A user date field. |
| Input | UserDate3 | DateTime | No | A user date field. |
| Input | UserDate4 | DateTime | No | A user date field. |
| Input | UserBoolean1 | Boolean | No | A user Boolean field. |
| Input | UserBoolean2 | Boolean | No | A user Boolean field. |
| Input | UserBoolean3 | Boolean | No | A user Boolean field. |
| Input | UserBoolean4 | Boolean | No | A user Boolean field. |
| Output | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

-  The system validates that the Workspace Class exists.  
-  The system validates that the Employee exists.  
-  The system validates that the Workspace Name does not already exist for the Employee.  
- The system validates that the Work Center exists.

## System Processing

- The system creates the Workspace record with the Inputs.  
- The system returns the Workspace ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_WORKSPACE | ALL | ALL |
