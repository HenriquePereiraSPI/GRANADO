# AddDefectLocation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to create a location of the defect along with values for all the dimensions used to identify the defect position. All the lists passed as the BC's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The Quality Defect that will hold the new location. |
| Input | LocationCode | Char | No | The code of the new location. |
| Input | Comment | Char | No | The free text description of the location. |
| Input | DimensionCode | ListofChar | No | The code of the new dimension. |
| Input | Value | ListofDecimal | No | The exact value of the specified dimension. |
| Input | MinValue | ListofDecimal | No | The minimum value of the specified dimension. |
| Input | MaxValue | ListofDecimal | No | The maximum value of the specified dimension. |
| Input | UomCode | ListofChar | No | The unit of measure of the specified dimension. |
| Output | QualityDefectLocationID | Integer | No | The unique identifier of the newly created location. |

## Validations

- QualityDefectID must exist on the database and must not be in the cancelled or clsoed status. 
- LocationCode cannot be empty if the dimension list is empty. 
- DimensionCode must exist in the database, and it must have the same length as the other lists. 
- UomCode must exist in the database, and it must have the same length as the other lists. 
- Value must be the same length as the other lists. 
- MinValue must have the same length as the other lists. 
- MaxValue must have the same length as the other lists.

## System Processing

- The system creates the Quality Defect location by passing the QualityDefectID and LocationCode parameters. 
- For each element of the list passed as a parameter, the system creates a Quality Defect location dimension record by passing the following parameters (the dimension of the defect is linked with the Quality Defect location): 
 
- DimensionCode 
- Value 
- MinValue 
- MaxValue 
- UomCode

## Pre-Conditions

Pre-condition:****the valid Quality Defects must exist in the system. 
 

Post-condition:****the new location is added that is linked to the Quality Defect.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOCATION | LocationCode | The inputted location code. |
|  | Comment_ | The inputted comment. |
| QUALITY_DEFECT_LOC_DIMENSION | DimensionCode | The inputted dimension code. |
|  | Value_ | The inputted value. |
|  | MinValue_ | The inputted minimum value. |
|  | MaxValue_ | The inputted maximum value. |
|  | UomCode | The inputted UOM code. |
