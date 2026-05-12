# UpdateDefectLocation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

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

## Validations

- See documentation for UpdateDefectLocation_v94

## System Processing

-  

Invokes UpdateDefectLocation_v94 passing all the parameters and Null for Description.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All tables populated by the UpdateDefectLocation_v94 method. |  |  |
