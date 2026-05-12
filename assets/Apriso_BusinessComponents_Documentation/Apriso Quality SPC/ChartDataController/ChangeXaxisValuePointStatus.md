# ChangeXaxisValuePointStatus

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active
**Keywords:** SPC, XAxis

## Description

This Business Component is used to change the status of the Xaxis record b ased on the inputted XaxisValueID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | XaxisValueID | Integer | Yes | The ID of the Xaxis value. |
| Input | SpcPointStatus | Short | Yes | The SPC point status. |

## Validations

- The system validates XaxisValueID.  
- The system validates SpcPointStatus.

## System Processing

- The system changes the Xaxis status based on the inputted value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SPC_CHART_XAXIS_VALUE | ChartDataStatus | SpcPointStatus |
