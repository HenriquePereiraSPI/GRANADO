# SetExceptionFlag

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** SetExceptionFlag, Set, Exception, Flag

## Description

This Business Component method sets an exception flag of EMR Record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of EMR Record for which Exception flag should be set. |
| Input | IsException | Boolean | No | Exception flag. |
| Input | Annotation | Char | No | Added annotation. |
| Input | EmployeeNo | Char | No | Number of the Employee who added the annotation. |
| Input | Password | Char | No | Employee's password. |

## Validations

- System validates if EMR Record exists in the system.

## System Processing

- System generates status change annotation for the EMR record.  
- System updates Exception flag on EMR Record. 
- System generates the EMR Record report according to the design template.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | Exception | IsException |
|  | FormInstance |  |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
