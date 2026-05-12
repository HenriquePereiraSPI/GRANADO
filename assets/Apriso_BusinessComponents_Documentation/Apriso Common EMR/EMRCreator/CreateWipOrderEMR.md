# CreateWipOrderEMR

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Deprecated
**Keywords:** CreateWipOrderEMR, Create, EMR, WipOrder

## Description

This Business Component method creates an EMR Header record with a specified Wip Order No and Wip Order Type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | Wip Order No used as the first key that identifies the EMR Header. |
| Input | WipOrderType | Integer | No | Wip Order Type used as the second key that identifies the EMR Header. |
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionNAme | Char | No | Name of the EMR Header Definition to be used. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of an EMR report to be used during the creation of the EMR. |
| Input | ReportID | Integer | No | Report ID which is used for an EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days during which EMR Header will be valid. |
| Output | EmrHeaderID | Integer | No | Created EMR Header ID. |

## System Processing

- System creates a new EMR Header record by invoking CreateEMR method with the following inputs: 
 
- Key1 as WipOrderNo, 
- Key1Description as "Wip Order No", 
- Key2 as WipOrderType, 
- Key2Description as "Wip Order Type", 
- The rest of the inputs which are passed.  
 
- System returns a new EMR Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
