# GetMachineRate

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Terms.Resource.MachineRate`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Terms.Resource.dll`
**Status:** Active

## Description

The purpose of this Business Component is to return the rate, in parts per hour, from the Work Load ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkLoadID | Integer | Yes | The work load to retrieve the machine rate from. |

## Validations

The workload ID is validated against the WORK_LOAD table.

## System Processing

System retrieves the workload record and returns the rate per hour.

## Pre-Conditions

That the workload record exists.
