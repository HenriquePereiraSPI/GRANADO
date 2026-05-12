# CreateSerialEMR_v2

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateSerialEMR, Create, EMR, Serial

## Description

This Business Component method creates an EMR Header record with a specified Serial No and Product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SerialNo | Char | No | Serial No used as the first key that identifies the EMR Header. |
| Input | ProductID | Integer | No | Product ID used as the second key that identifies the EMR Header. |
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionNAme | Char | No | Name of the EMR Header Definition to be used. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of EMR report to be used during creation of the EMR. |
| Input | ReportFUID | Char | No | Report FUID which is used for EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days during which EMR Header will be valid. |
| Output | EmrHeaderID | Integer | No | Created EMR Header ID. |

## System Processing

- System creates a new EMR header record by invoking CreateEMR method with the following inputs:  
- Key1 as SerialNo 
- Key1Description as "Serial No" 
- Key2 as ProductID 
- Key2Description as "Product ID" 
- The rest of the inputs which are passed.
 
- System returns a new EMR header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
