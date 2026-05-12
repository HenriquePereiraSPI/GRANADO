# RemoveDefectLocation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to delete location for a Defect along with values for all dimensions used to identify the Defect position.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectLocationID | Integer | Yes | The Quality Defect Location to be removed. |

## Validations

QualityDefectLocationID must exist in the database.

## System Processing

Remove the Quality Defect location and all linked dimensions.

## Pre-Conditions

Pre: Valid Quality Defects and location exists in the system.
 

Post: The location passed as the parameter is removed from the system.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_LOCATION | [All] |  |
| QUALITY_DEFECT_LOC_DIMENSION | [All] |  |
