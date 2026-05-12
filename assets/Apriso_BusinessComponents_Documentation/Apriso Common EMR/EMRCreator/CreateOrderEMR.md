# CreateOrderEMR

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Deprecated
**Keywords:** CreateOrderEMR, Create, EMR, Order

## Description

This Business Component method creates an EMR Header record with a specified Order No and Order Type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | Order No used as the first key that identifies the EMR Header. |
| Input | OrderType | Integer | No | Order Type used as the second key that identifies the EMR Header. |
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionNAme | Char | No | Name of the EMR Header Definition to be used. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of an EMR report to be used during the creation of the EMR. |
| Input | ReportID | Integer | No | Report ID which is used for EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days during which EMR Header will be valid. |
| Output | EmrHeaderID | Integer | Yes | Created EMR Header ID. |

## Validations

>

## System Processing

- System creates a new EMR Header record by invoking CreateEMR method with the following inputs: 
 
- Key1 as OrderNo, 
- Key1Description as "Order No", 
- Key2 as OrderType, 
- Key2Description as "Order Type", 
- The rest of the inputs which are passed.  
 
- System returns a new EMR Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
