# GenerateHeaderFormInstance

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GenerateHeaderFormInstance, Generate,Header, FormInstance

## Description

This Business Component method generates EMR Header report form instance in HTML format by replacing the values from the EMR Header with the parameters in the form template.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header to be generated. |

## Validations

- System validates if EMR Header exists in the system.

## System Processing

- System retrieves the form template from EMR Header. 
- System retrieves all the linked annotations. 
- System generates annotation scripts and appends them to the form instance. 
- System generates form instance and updates it to EMR Header FormInstance. 
- System replaces parameters in the template with EMR header values and appends them to the form instance. 
- System generates the form instance in HTML format.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | FormInstance |  |
