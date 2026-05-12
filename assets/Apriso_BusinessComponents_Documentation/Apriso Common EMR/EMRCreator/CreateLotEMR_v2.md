# CreateLotEMR_v2

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateLotEMR, Create, EMR, Lot

## Description

This Business Component method creates an EMR Header record with specified Lot No and Product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LotNo | Char | No | Lot No used as the first key that identifies the EMR Header. |
| Input | ProductID | Integer | No | Product ID used as the second key that identifies the EMR Header. |
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionNAme | Char | No | Name of the EMR Header Definition to be used. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of an EMR report. |
| Input | ReportFUID | Char | No | Report FUID which is used for an EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days when EMR Header will be valid. |
| Output | EmrHeaderID | Integer | No | Created EMR Header ID. |

## System Processing

- Creates a new EMR Header record by invoking CreateEMR method with the following inputs:  
- Key1 as LotNo, 
- Key1Description as "Lot No", 
- Key2 as ProductID, 
- Key2Description as "Product ID", 
- The rest of the inputs which are passed. 
 
- System returns a new ERM Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
