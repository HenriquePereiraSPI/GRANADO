# ReportEmployeeHazMatExposure

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.EmployeeHazMatManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Employee HazMat Exposure Hazardous Material Report

## Description

This method writes the amount of exposure to a given group of hazardous materials for Employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of Employee to create the exposure record for. |
| Input | ProductID | Integer | Conditional | The Product ID of HazMat material. |
| Input | HazMatGroup | Char | Conditional | The Group of HazMat material. |
| Input | HazMatGroupType | Integer | Conditional | The Group Type of HazMat material. |
| Input | HazMatGroupClassID | Integer | Conditional | The Group Class ID of HazMat material. |
| Input | StartTime | DateTime | Yes | Start time of exposure. |
| Input | EndTime | DateTime | Yes | End time of exposure. |
| Output | EmployeeHazMatExposureID | Integer | Yes | ID of created record. |

## Validations

- System validates if Employee exists. 
- A HazMat group or Product must be specified: 
 
- System validates if Product exists if provided. 
- System validates if HazMat group, type and class exist if provided.  
 
- System validates if End Time is after Start Time.

## System Processing

- System inserts new record into EMPLOYEE_HAZMAT_EXPOSURE table. 
- System creates XML for Transaction History.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_HAZMAT_EXPOSURE | EmployeeID | EmployeeID |
|  | ProductID | ProductID |
|  | Group_ | HazMatGroup |
|  | GroupType | HazMatGroupType |
|  | GroupClassID | HazMatGroupClassID |
|  | StartDate | StartTime |
|  | EndDate | EndTime |
|  | DurationSeconds | EndTime-StartTime in seconds |
|  | ID | EmployeeHazMatExposureID |
