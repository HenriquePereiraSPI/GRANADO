# AddRemoveCurrentWorkCenter

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Resources.EmployeeChanger`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This Business Component method is used to change an employee's current Work Centers. An employee has a list of Work Centers in which they are authorized to work. These are managed at the Supervisor-level through Process Builder. Based on this list, the employee can then choose which Work Centers are to be used when displaying their dispatch task list through the Production Manager.
 

When the Work Center changes, then the dispatch list for that employee will change such that only tasks for the new Work Center will be available. When indirect is to be captured, then this BC will allow the employee to change the Work Center (and hence the cost center) against which the indirect is captured.
 

 **Supported Features** 
 
 
-  

The ability to add or remove Work Centers from the current employee Work Center list.
  
-  

The Work Center validation (the Work Center must be in the employee's authorized list).
  
-  

The employee assumed valid (no employee validation except that it exists).
  
-  

The option to change the employee's default Work Center.
  
-  

The transaction history.
  
 

 **Unsupported Features** 
 

The ability for an employee to add or remove Work Centers from the authorized Work Center list.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNumber | Char | Yes | The employee number the Work Center is to be added to/removed from on the list of current Work Centers. |
| Input | WorkCenterNo | Char | Yes | The number of the Work Center to be added to/removed from the list of the employee's current Work Centers. |
| Input | AddFlag | Boolean | Yes | Indicates if the Work Center is to be added or removed. |
| Input | SetDefault | Boolean | Yes | Indicates if the Work Center is to be set as the default Work Center for the employee. Required if AddFlag is set to True. |

## Validations

- The system validates that EmployeeNumber exists in the EmployeeNo column of the EMPLOYEE table. 
- If the "Add Work Center" option is set (that is, the AddFlag parameter is set to True), the system checks that the Work Center is valid and that the Work Center is authorized for that employee. 
- If the "Remove Work Center" option is set (that is, if the AddFlag parameter is set to False), the system checks that the Work Center is the current Work Center for the employee (as in, the EMPLOYEE_WORK_CENTER record exists for WORK_CENTER.ID and EMPLOYEE.ID and EMPLOYEE_WORK_CENTER.CurrentWorkCenterFlag is set to True). 
- If the "Set as Default" option is set (that is, if the SetDefault parameter is set to True), the system checks that only one record exists in the EMPLOYEE_FACILITY table for EMPLOYEE.ID.

## System Processing

- If the "Add Work Center" option is set (that is, if the AddFlag parameter is set to True), the system adds the entered Work Center to the list of current Work Centers for the employee (that is, it sets EMPLOYEE_WORK_CENTER.CurrentWorkCenterFlag to True). 
 
- If the "Set as Default" option is set (that is, the SetDefault parameter is set to True), the system sets the employee's default Work Center to the provided Work Center (that is, it sets the Work Center as the default Work Center for the employee by updating a record in the EMPLOYEE_FACILITY table). 
 
- Otherwise, if the "Remove Work Center" option is set (that is, the AddFlag parameter is set to False), the system removes the provided Work Center from the list of current Work Centers for the employee (that is, it sets EMPLOYEE_WORK_CENTER.CurrentWorkCenterFlag to False).

## Pre-Conditions

The employee and Work Center must exist.

## History Recording in Production

Whenever an employee changes the current Work Center list, a history record is written to the TRANSACTION_HISTORY_RESOURCE table. The following fields of this table are updated:
 
 
- StartedEmployeeNo 
- WorkCenter 
- Department 
- Facility

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | ID | Retrieved. |
| EMPLOYEE | EmployeeNo | The inputted EmployeeNumber. |
| EMPLOYEE_WORK_CENTER | EmployeeID | EMPLOYEE.ID |
| EMPLOYEE_WORK_CENTER | WorkCenter | The inputted WorkCenterNo. |
| EMPLOYEE_WORK_CENTER | CurrentWorkCenterFlag | The inputted SetDefault. |
| EMPLOYEE_LEGACY | EmployeeID | The inputted EmployeeNumber. |
| EMPLOYEE_LEGACY | WRKCTR | The inputted WorkCenterNo.. |
