# GenerateRecordFormInstance

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GenerateRecordFormInstance, Generate,Record, FormInstance

## Description

This Business Component method generates an EMR Record report form instance in HTML format by replacing the values from the Record with the parameters in the form template.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record to be generated. |

## Validations

- System validates if an EMR Record exists in the system. 
- System validates if an EMR Header exists in the system.

## System Processing

- System retrieves form template from EMR Record. 
- System retrieves EMR Fields of the EMR Record. 
- System replaces EMR Fields parameters in the form template with EMR Fields value and appends the form template to the form instance. 
- System retrieves all the linked annotations. 
- System retrieves all the linked signatures. 
- System generates annotation scripts and appends them to the form instance. 
- System generates signature scripts and appends them to the form instance. 
- System replaces parameters in the template with EMR Record values and appends them to the form instance. 
- System generates form instance and updates it to EMR Record FormInstance. 
- System replaces parameters in the template with EMR Header values and appends them to the form instance. 
- System generates form instance and updates it to EMR Header FormInstance. 
- System replaces parameters of the EMR Record breakdown structure code. 
- System generates break down structure code and updates it to EMR Record BreakdownStructureCode. 
- System generates the form instance in HTML format.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | FormInstance |  |
