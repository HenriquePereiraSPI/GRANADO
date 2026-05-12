# GetMachineRateUnits

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Terms.Resource.MachineRate`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Terms.Resource.dll`
**Status:** Active

## Description

The purpose of this Business Component is to return the rate, in parts per hour, from the Work Load ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkLoadID | Integer | Yes | The work load ID to retrieve the machine rates units from. |
| Output | StdCycleTime | Decimal | No | The standard cycle time for the machine rate. |
| Output | StdParts | Decimal | No | The standard parts for the machine rate. |

## Validations

The workload ID is validated against the WORK_LOAD table.

## System Processing

System retrieves the workload record and returns the rate per hour.

## Pre-Conditions

Workload record exists.
