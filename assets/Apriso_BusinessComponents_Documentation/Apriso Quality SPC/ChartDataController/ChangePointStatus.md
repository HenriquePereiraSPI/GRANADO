# ChangePointStatus

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

This Business Component method is used to change the point status associated with the SPC chart data ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SpcChartDataID | Integer | Yes | The chart point to have the note. |
| Input | SpcPointStatus | Char | Yes | The value to which the point status should be changed. |

## Validations

- The system checks that the chart data ID is specified.  
- The system checks that the chart data ID is valid. 
- The system checks that the chart data status is specified. 
- The system checks that the chart data status is valid.

## System Processing

- The system finds the chart point.  
- The system updates the SPC_CHART_DATA record to set the ChartDataStatus with the SpcPointStatus.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SPC_CHART_DATA | ChartDataStatus | SpcPointStatus |
