# CreateEMR_v2

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRCreator`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateEMR, Create, EMR

## Description

This Business Component method creates an EMR Header record with the inputted keys.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderNo | Char | Yes | EMR Header No to be created. |
| Input | HeaderDefinitionName | Char | No | Name of the EMR Header Definition to be used. |
| Input | Key1 | Char | No | First key that identifies the EMR Header. |
| Input | Key1Description | Char | No | Key1 Description. |
| Input | Key2 | Char | No | Second key that identifies the EMR Header. |
| Input | Key2Description | Char | No | Key2 Description. |
| Input | Key3 | Char | No | Third key that identifies the EMR Header. |
| Input | Key3Description | Char | No | Key3 Description. |
| Input | Key4 | Char | No | Fourth key that identifies the EMR Header. |
| Input | Key4Description | Char | No | Key4 Description |
| Input | Key5 | Char | No | Fifth key that identifies the EMR Header. |
| Input | Key5Description | Char | No | Key5 Description. |
| Input | Key6 | Char | No | Sixth key that identifies the EMR Header. |
| Input | Key6Description | Char | No | Key6 Description. |
| Input | Key7 | Char | No | Seventh key that identifies the EMR Header. |
| Input | Key7Description | Integer | No | Key7 Description. |
| Input | Key8 | Char | No | Eighth key that identifies the EMR Header. |
| Input | Key8Description | Char | No | Key8 Description. |
| Input | TransformationFile | Char | No | Transformation File. |
| Input | FormTemplate | Char | No | Template of EMR report to be used during creation of the EMR. |
| Input | ReportFUID | Char | No | Report FUID which is used for the EMR report. |
| Input | UserReference | Char | No | User Reference. |
| Input | RetentionDays | Integer | No | Number of days during which EMR Header will be valid. |
| Output | EmrHeaderID | Integer | No | Created EMR Header ID. |

## Validations

- System validates if the EmrHeaderNo is empty or exists. 
- System validates if there is an EMR Header with duplicated keys. 
- If EMR Header Definition is passed, system validates it. 
- System validates Report with ReportFUID.

## System Processing

- System validates the inputs.  
- System creates a new EMR Header record with inputted EmrHeaderNo and keys.  
- System copies FormTemplate from the EMR Header Definition if it is passed. 
- System generates an EMR report script according to the FormTemplate. 
- System returns a new EMR Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | ALL but FUID | From inputs. |
|  | FUID | System generated. |
