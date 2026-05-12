# TheoreticalTimeToProduceQuantity_v93

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Terms.Resource.TheoreticalTimeToProduceQuantity`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

The purpose of this Business Component is to calculate the time it needed to produce the quantity that has been set for an item.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The resource name. |
| Input | ResourceType | Integer | Yes | The resource type. |
| Input | StartTime | DateTime | Yes | The start time to search for. |
| Input | EndTime | DateTime | Yes | The end time to search for. |
| Output | Time | Decimal | No | The theoretical time. |

## Validations

- System checks that the resource exists in the system. 
- That the start time is less than the end time

## System Processing

- System gets the quantity produced at each operation. 
- System then gets the WORK_LOAD record and calculates the rate of production at the operation and multiples the rate by the quantity produced. 
- The total time is gathered and returned.

## Pre-Conditions

The WORK_LOAD record is populated correctly and is linked to the operation.
