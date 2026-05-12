# CopyOperationIntoProcess

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.ProcessManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active
**Keywords:** Process, ProcessOperation, Process Operation, Copy Operation, Copy

## Description

Creates Process Operation from Standard Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProcessId | Integer | Yes | Target Process ID |
| Input | StandardOperationId | Integer | Yes | Source Standard Operation |
| Input | ProcessOperationSequenceNo | Char | No | Proposed Operation Sequence Number |
| Input | ProcessOperationName | Char | No | Name of the created Process Operation |
| Input | ProcessOperationDescription | Char | No | Description of the created Process Operation |
| Input | LanguageId | Integer | Conditional | Language for specified Name and Description |
| Input | EmployeeId | Integer | Yes | Employee for Process Authoring |
| Input | Note | Char | Conditional | Note added to Process on save when 'ShowNoteOnSave' is set |
| Output | ProcessOperationId | Integer | No | ID of created Process Operation |

## Validations

- System validates if Process exists, 
- System validates if Operation exists, 
- System validates if Process is not checked out by someone else, 
-  

System validates if Process Status allows change (RevisionStatus, AllowPrototypeEdit, DesignModeDisabled), 
  
-  

 

System validates if Standard Operation does not have DesignModeDisable set,
 
  
-  

If ProcessOperationDescription or ProcessOperationName are specified, system checks if LanguageId is specified,
  
-  

System validates if Employee exists and has correct role to be able to author Processes,
  
- When OperationSequenceNumber is provided, system validates format correctness and uniqueness, 
-  

System validates if Note is provided when system is configured to write Design Notes on save.

## System Processing

- Standard functionality for creating Process Operation from Standard Operation is called, 
- When System requires writing Design Notes, it is added to the Process, 
- ProcessOperationName and ProcessOperationDescription is updated for the specified LanguageId.

## Extension Points

ValidateEmployeeToEditProcess FlexNet.BusinessFacade.Process.Validator.EmployeeValidator FlexNet.BusinessFacade.Process.Validator.IEmployeeValidator Use to add additional validation for employee    ValidateTemplateOperationToLink FlexNet.BusinessFacade.Process.Validator.OperationValidator FlexNet.BusinessFacade.Process.Validator.IOperationValidator Use to add additional validation for linked Operation

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROCESS_OPERATION |  |  |
| All tables related to Process Definition |  |  |
| DESIGN_NOTE |  |  |
| NOTE |  | Note |
