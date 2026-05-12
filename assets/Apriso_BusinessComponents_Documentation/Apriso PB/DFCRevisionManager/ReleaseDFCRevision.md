# ReleaseDFCRevision

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.DFCRevisionManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update Status of DFC Revision

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DFCRevisionID | Integer | Yes | The DFC Revision ID. |

## Validations

- System validates that DFC Revision exists 
- System validates that change of DFC Revision Status to Active is allowed

## System Processing

System updates DFC Revision Status to Active

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | RevisionStatusID | 1 |
