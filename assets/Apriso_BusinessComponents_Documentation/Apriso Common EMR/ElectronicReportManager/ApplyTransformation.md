# ApplyTransformation

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** ApplyTransformation, Apply, Transformation

## Description

This Business Component method is used to generate an XML of the EMR data according to the EMR data schema. It then transforms the XML data by the specified XSLT file and saves the file in the ReportExportDir path.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | The ID of the EMR header from which the XML should be generated. |
| Input | FileExtenstion | Char | No | The result file extension. |
| Output | FileName | Char | No | The path of the result file. |

## Validations

The system validates EmrHeaderID.

## System Processing

- The system retrieves the EMR header and all the EMR records and EMR fields associated with the EMR header. 
- The system generates the XML according to the EMR data schema. 
- The system transform the XML data via the specified XSLT file. 
- The system saves the transformed result to a file in the ReportExportDir path, which can be configured in Central Configuration.
