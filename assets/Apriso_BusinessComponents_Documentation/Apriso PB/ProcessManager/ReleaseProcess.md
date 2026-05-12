# ReleaseProcess

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.ProcessManager`
**Assembly:** `FlexNet.BusinessFacade.Process.dll`
**Status:** Active

## Description

This Business Component method updates the Revision Status of a Process.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProcessId | Integer | Yes | The Process ID. |

## Validations

- The system validates if the Process exists 
- The system validates if a change of Process Revision Status to Active is allowed 
- The Step flow is not validated when a Process is externally managed (PROCESS.ExternallyManaged is set to true)

## System Processing

- The system updates the Process Revision Status to Active

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROCESS | RevisionStatusID | RevisionStatus |
