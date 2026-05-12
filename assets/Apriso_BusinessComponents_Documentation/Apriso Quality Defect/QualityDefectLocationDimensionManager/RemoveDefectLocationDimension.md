# RemoveDefectLocationDimension

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove the dimension of the Defect location used to identify the Defect position.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectLocationDimensionID | Integer | Yes | Quality Defect Location Dimension to be removed. |

## Validations

QualityDefectLocationDimensionID must exist in the database.

## System Processing

System removes Quality Defect Location Dimension identified on basis of provided QualityDefectLocationDimensionID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOC_DIMENSION | [All] |  |
