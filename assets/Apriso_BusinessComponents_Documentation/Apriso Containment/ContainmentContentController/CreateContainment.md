# CreateContainment

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to create a new Containment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentClassID | Integer | No | Class of the Containment. |
| Input | ContainmentStatus | Integer | Yes | Status of the Containment. |
| Input | Description | Char | No | Description of the Containment. |
| Input | ExtendedDescription | Char | No | Extended description of the Containment. |
| Input | Facility | Char | No | Facility of the Containment. |
| Input | Name | Char | Yes | Name of the Containment. |
| Input | ReasonCode | Char | Yes | Reason Code for the Containment. |
| Output | ContainmentID | Char | Yes | ID of the Containment created. |

## Validations

- The system validates if the inputted ContainmentStatus exists. 
- The system validates if the name of Containment is unique. 
- The system validates if the ReasonCode exists and has a correct type: Hold (7). 
- The system validates if Facility exists (if provided). 
- The system validates if ContainmentClassID exists (if provided).

## System Processing

- The Business Component creates a new record in the CONTAINMENT table.

## Pre-Conditions

Containment is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT | Name | Name |
|  | Facility | Facility |
|  | ContainmentStatus | ContainmentStatus |
|  | ContainmentClassID | ContainmentClassID |
|  | ReasonCode | ReasonCode |
| TEXT_TRANSLATION | Medium | Description |
|  | Extended | ExtendedDescription |
