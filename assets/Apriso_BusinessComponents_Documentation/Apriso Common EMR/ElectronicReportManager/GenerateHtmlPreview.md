# GenerateHtmlPreview

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GenerateHtmlPreview, Generate, html, preview

## Description

This Business Component method generates HTML file of the EMR report and saves the file at "ReportExportDir" path.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | EMR Header ID for which the preview should be generated. |
| Input | Where | Char | No | WHERE statement to filter out the EMR records. |
| Input | Sort | Char | No | Sorting statement to sort the EMR records. |
| Output | HtmlFileLocation | Char | No | Local path of the HTML file. |
| Output | HtmlFileUrl | Char | No | URL of the HTML file. |

## Validations

- System validates EmrHeaderID.

## System Processing

- System retrieves the EMR Header. 
- System generates the EMR Header by the form template which is stored in the EMR Header. 
- System retrieves and filters EMR Records and EMR Fields associated with the EMR Header by the WHERE statement and SORT statement. 
- System generates the EMR Records and EMR Fields by the form templates which are stored in the EMR Records. 
- System builds the EMR report and saves the HTML file in the "ReportExportDir" path which is configured in the Centralconfiguration.xml

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | FormInstance | System generated. |
| EMR_RECORD | FormInstance | System generated. |
