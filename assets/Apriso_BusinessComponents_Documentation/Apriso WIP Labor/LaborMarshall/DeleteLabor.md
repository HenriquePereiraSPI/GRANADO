# DeleteLabor

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor`
**Status:** Active

## Description

This method is invoked to completely remove the specified labor record from the LABOR table. This action is equivalent to removing the labor record via Time Manager and saving.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LaborID | Integer | Yes | The labor record ID |
| Input | AuditComment | Char | Conditional | A description of the reason why the labor record has been removed. |

## Validations

Validation passes if the labor record exists.

## System Processing

- System retrieves all labor data for the attendance associated with the specified labor record.  
- System validates that the attendance and labor can be modified. 
- System marks the specified labor record as deleted. 
- System recomputes labor hours for the remaining labor records. 
- System updates the attendance record with the new sum of labor hours. 
- System deletes the specified labor record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LABOR | All | LaborID (record deleted) |
| LABOR_APPROVAL | All | LaborID (record deleted) |
| LABOR_AUDIT | ChangedBy | Logged in Employee |
|  | ChangedOn | Current UTC date and time |
|  | ChangedOnLocal | Current local date and time |
|  | AuditAction | 1 |
|  | All remaining | Deleted labor record details are duplicated to audit record |
| NOTE | Description | AuditComment |
