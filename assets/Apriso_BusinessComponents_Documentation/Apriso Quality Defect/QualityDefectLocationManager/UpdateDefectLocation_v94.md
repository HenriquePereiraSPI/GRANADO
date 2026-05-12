# UpdateDefectLocation_v94

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** Quality Defect Location, Quality Defect Location Dimension

## Description

The method is used to update or create the location of the Defect along with values for all dimensions used to identify the Defect position. All lists passed as method's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectLocationID | Integer | Yes | The Quality Defect Location to be updated. |
| Input | LocationCode | Char | No | The code of the location. |
| Input | Comment | Char | No | Free text description of the Location. |
| Input | DimensionCode | ListofChar | No | The code of the dimension. |
| Input | Value | ListofDecimal | No | Exact value of the specified dimension. |
| Input | MinValue | ListofDecimal | No | Minimum value of the specified dimension. |
| Input | MaxValue | ListofDecimal | No | Maximum value of the specified dimension. |
| Input | UomCode | ListofChar | No | Unit of measure of the specified dimension. |
| Input | Description | ListofChar | No | Description of the specified dimension |

## Validations

- QualityDefectID must exist on the database. 
- LocationCode cannot be empty if dimension list is empty. 
- DimensionCode must exist in the database, must be of the same length as the other lists. 
- UomCode must exist in the database, must be of the same length as the other lists (or null). 
- Value must be of the same length as the other lists. 
- MinValue must be of the same length as the other lists (or null). 
- MaxValue must be of the same length as the other lists (or null).  
- Description must be of the same length as the other lists (or null).

## System Processing

- Update Quality Defect Location by passing the following parameters: 
 
- QualityDefectLocationID 
- LocationCode 
- Description 
 
- For each element of the list passed as the parameter update Quality Defect Location Dimension record by passing the parameters (dimension of the Defect is linked with the Quality Defect Location). When the Location is not detected create Quality Defect Location Dimension record by passing the parameters. The parameters to be used in this process: 
 
- DimensionCode 
- Value 
- MinValue 
- MaxValue 
- UomCode  
- Description

## Pre-Conditions

**Pre-Conditions:** 
 

Valid Quality Defects and location exists in the system.
 

 **Post-Conditions:** 
 

The location passed as the parameter is updated with all passed parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOCATION | LocationCode | Inputted LocationCode |
|  | Comment_ | Inputted Comment |
| QUALITY_DEFECT_LOC_DIMENSION | DimensionCode | Inputted DimensionCode |
|  | Value_ | Inputted Value |
|  | MinValue_ | Inputted MinValue |
|  | MaxValue_ | Inputted MaxValue |
|  | UomCode | Inputted UomCode |
|  | Description | Inputted Description |
