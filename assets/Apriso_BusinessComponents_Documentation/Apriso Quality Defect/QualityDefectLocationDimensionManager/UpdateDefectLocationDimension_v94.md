# UpdateDefectLocationDimension_v94

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to update the dimension of the Defect location used to identify the Defect position.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectLocationDimensionID | Integer | Yes | Quality Defect Location Dimension to be updated. |
| Input | DimensionCode | Char | No | The code of the dimension. |
| Input | Value | Decimal | No | Value of the specified dimension. |
| Input | MinValue | Decimal | No | Minimum value of the specified dimension. |
| Input | MaxValue | Decimal | No | Maximum value of the specified dimension. |
| Input | UomCode | Char | No | Unit of measure of the specified dimension. |
| Input | Description | Char | No | Description of the specified dimension. |

## Validations

- QualityDefectLocationDimensionID must exist in the database. 
- DimensionCode must exist in the database. 
- UomCode must exist in the database.

## System Processing

Update Quality Defect Location Dimension record by passing the following parameters:
 
 
- DimensionCode 
- Value 
- MinValue 
- MaxValue 
- UomCode 
- Description

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOC_DIMENSION | DimensionCode | Inputted DimensionCode |
|  | Value_ | Inputted Value |
|  | MinValue_ | Inputted MinValue |
|  | MaxValue_ | Inputted MaxValue |
|  | UomCode | Inputted UomCode |
|  | Description | Inputted Description |
