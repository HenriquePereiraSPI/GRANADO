# UpdateDispositionTestConformity

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** Disposition Test, Disposition Test Conformity

## Description

This method is used to update Conforming flag of the Disposition Test given by DispositionTestID parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | ID of an existing Disposition test record. |
| Input | Conforming | Integer | Yes | Value indicating if disposition test is conforming (0 - nonconforming, 1 - conforming) |

## Validations

- Disposition Test record exists in DISPOSITION_TEST table for the inputted DispositionTestID

## System Processing

- System retrieves a record from DISPOSITION_TEST table. 
- System updates the retrieved record in DISPOSITION_ TEST table with the inputted Conforming flag (DISPOSITION_TEST.ConformingToSpecification).

## Pre-Conditions

Disposition test must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | Inputted Conforming |
