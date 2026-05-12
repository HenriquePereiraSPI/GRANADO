# ManageCountDisposition

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Manage Count Disposition

## Description

This Business Component method creates (or updates) Count Disposition with the inputted parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionNo | Char | Yes | Disposition Count Number of the existing entity or Disposition Count Number to be created. |
| Input | Description | Char | No | Description of the Disposition Count. |
| Input | CountProcedureID | Integer | Conditional | ID of the existing Count Procedure. Required if a new Count Disposition is created. |
| Input | CountType | Integer | Conditional | Type of the Disposition Count. Required if a new Count Disposition is created. |
| Input | Facility | Char | Conditional | Warehouse facility that the Count Disposition is defined for. Required if a new Count Disposition is created. |
| Input | Warehouse | Char | Conditional | Warehouse that the Count Disposition is defined for. Required if a new Count Disposition is created. |
| Input | SignatureHeaderID | Integer | No | ID of the Signature required for Count Disposition. |
| Input | ScheduledStartDate | DateTime | No | Scheduled start date. |
| Input | DueDate | DateTime | No | Due date. |
| Input | ReleaseDate | DateTime | No | Release date. |
| Input | ActualStartDate | DateTime | No | Actual start date. |
| Input | ActualCompletionDate | DateTime | No | Actual completion date. |
| Output | CountDispositionID | Integer | No | ID of Disposition Count record. |

## Validations

- System validates that the Count Disposition Number is provided. 
- If Count Disposition Number does not exist in the System then: 
 
- System validates that Count Procedure ID is specified. 
- System validates that Count Type is specified. 
- System validates that Facility, Warehouse are specified. 
- System defaults Number of Counts to '1'. 
 
- System validates that Number of Counts is greater than zero.

## System Processing

- If Count Disposition Number does not exist in the database then System creates a new entity in COUNT_DISPOSITION table populated with all inputted parameters. 
- Else, System updates existing Count Disposition with the inputted: 
 
- Number of Counts,  
- Description,  
- Scheduled start date,  
- Due date,  
- Release date,  
- Actual start date,  
- Actual completion date.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION | CountDispositionNo | CountDispositionNo (on insert only) |
|  | Description | Description |
|  | CountProcedureID | CountProcedureID (on insert only) |
|  | CountType | CountType (on insert only) |
|  | Facility | Facility (on insert only) |
|  | Warehouse | Warehouse (on insert only) |
|  | SignatureHeaderID | SignatureHeaderID (on insert only) |
|  | ScheduledStartDate | ScheduledStartDate or Null if DateTime.MinValue |
|  | DueDate | DueDate or Null if DateTime.MinValue |
|  | ReleaseDate | ReleaseDate or Null if DateTime.MinValue |
|  | ActualStartDate | ActualStartDate or Null if DateTime.MinValue |
|  | ActualCompletitionDate | ActualCompletitionDate od Null DateTime.MinValue |
|  | CountStatus | 1 - New (on insert only) |
