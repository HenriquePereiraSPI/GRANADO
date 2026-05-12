# RemoveDispositionSample

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** Disposition Sample

## Description

The purpose of this Business Component is to remove Disposition Sample record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionSampleID | Integer | Yes | Unique identifier of a Disposition Sample to be removed. |

## Validations

System verifies that a Disposition Sample record is found for the inputted DispositionSampleID. If record is not found, an error message is displayed.

## System Processing

- System removes Disposition Sample record (identified by inputted 

DispositionSampleID) from DISPOSITION_SAMPLE table.

## Pre-Conditions

The Disposition Sample record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_SAMPLE | ID | Inputted DispositionSampleID |
