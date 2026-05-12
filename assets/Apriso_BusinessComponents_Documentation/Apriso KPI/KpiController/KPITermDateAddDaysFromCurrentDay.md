# KPITermDateAddDaysFromCurrentDay

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.KpiController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

The purpose of this Business Component is to return a Date based on the current date.
 

Therefore, if the current date is May 10th and an input of -5 was entered (Days), then May 5th will be returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Days | Integer | Yes | Number of days to add to the current date (can be negative) |
| Input | NewDateTime | DateTime | No | Output of the date. |

## System Processing

System adds the number of days inputted and returns the days.
