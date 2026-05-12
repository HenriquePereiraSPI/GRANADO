# CreateResourceEMR

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Deprecated
**Keywords:** CreateResourceEMR, Create, EMR, Resource

## Description

This Business Component method creates an EMR Header record with a specified Resource ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | No | Resource ID used as the first key that identifies the EMR Header. |
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionNAme | Char | No | Name of the EMR Header Definition to be used. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of an EMR report to be used during the creation of the EMR. |
| Input | ReportID | Integer | No | Report ID which is used for EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days during which the EMR Header will be valid. |
| Output | EmrHeaderID | Integer | No | Created EMR Header ID. |

## System Processing

- System creates a new EMR Header record by invoking CreateEMR method with the following inputs: 
 
- Key1 as ResourceID, 
- Key1Description as "Resource ID", 
- The remaining inputs which are passed.  
 
- System returns a new EMR Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
