# GenerateXmlData

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GenerateXmlData, Generate, Xml

## Description

This Business Component method generates XML of the EMR data according to the EMR data schema and saves the file in "ReportExportDir" path.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header for which XML should be generated. |
| Output | Xml File | Char | No | Path of the XML file. |

## Validations

- System validates if EmrHeaderID exists in the system.

## System Processing

- System retrieves the EMR Header and all the EMR Records and EMR Fields associated with the EMR Header. 
- System generates the XML according to the EMR data schema. 
- System saves the XML to the file in the "ReportExportDir" path which is configured in the Centralconfiguration.xml
