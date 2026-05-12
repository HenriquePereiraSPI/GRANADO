# AddDefectLocationDimension

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to create a new dimension for the specified location to identify the defect position. All the lists passed as the BC's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectLocationID | Integer | Yes | The Quality Defect location to hold the new location. |
| Input | DimensionCode | ListofChar | Yes | The code of the new dimension. |
| Input | Value | ListofDecimal | Yes | The value of the specified dimension. |
| Input | MinValue | ListofDecimal | No | The minimum value of the specified dimension. |
| Input | MaxValue | ListofDecimal | No | The maximum value of the specified dimension. |
| Input | UomCode | ListofChar | No | The unit of measure of the specified dimension. |
| Output | QualityDefectLocationDimensionID | ListofInteger | No | The list of created Quality Defect location dimensions. |

## Validations

- QualityDefectLocationID must exist in the database and it must be linked to a Quality Defect that is not in the Closed or Cancelled status. 
- DimensionCode must exist in the database and it must be of the same length as the other lists. 
- UomCode must exist in the database and it must be of the same length as the other lists. 
- Value must be of the same length as the other lists. 
- MinValue must be of the same length as the other lists. 
- MaxValue must be of the same length as the other lists.

## System Processing

- For each element of the list passed as the parameter, the system creates the Quality Defect location dimension record by passing the following parameters (the dimension of the defect is linked with the Quality Defect location): 
 
- DimensionCode 
- Value 
- MinValue 
- MaxValue 
- UomCode

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOC_DIMENSION | DimensionCode | The inputted DimensionCode. |
|  | Value_ | The inputted Value. |
|  | MinValue_ | The inputted MinValue. |
|  | MaxValue_ | The inputted MaxValue. |
|  | UomCode | The inputted UomCode. |
