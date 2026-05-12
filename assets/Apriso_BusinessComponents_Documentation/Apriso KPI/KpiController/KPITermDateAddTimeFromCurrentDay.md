# KPITermDateAddTimeFromCurrentDay

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.KpiController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

The purpose of this Business Component is to return a Date based on the current date and allowing the user to enter Days, Hours, Minutes and Seconds.
 

Therefore, if the current date is May 10th and an input of -5 was entered (Days), then May 5th will be returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Days | Integer | No | Number of days |
| Input | Hours | Integer | No | Number of hours |
| Input | Minutes | Integer | No | Number of minutes |
| Input | Seconds | Integer | No | Number of seconds |
| Output | NewDateTime | DateTime | No | Ouput of the date |

## System Processing

System adds the number of days, hours, minutes and seconds inputted and returns the days.
