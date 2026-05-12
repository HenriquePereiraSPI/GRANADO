# ReleaseOperation

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.OperationManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update Revision Status of Operation

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationId | Integer | Yes | Operation ID |

## Validations

- System validates that Operation exists 
- System validates that change of Operation Revision Status to Active is allowed

## System Processing

System updates Operation Revision Status to Active

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | RevisionStatusID | 1 |
