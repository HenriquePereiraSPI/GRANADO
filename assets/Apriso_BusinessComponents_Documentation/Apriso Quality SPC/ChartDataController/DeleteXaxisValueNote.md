# DeleteXaxisValueNote

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

Based on inputted XaxisValue ID this BC will delete the note associated with this XaxisValue

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | XaxisValueID | Integer | Yes | XaxisValue ID |

## Validations

System Validates XaxisValueID

## System Processing

Delete the note which associates with XaxisValue

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | All fields |  |
| SPC_CHART_XAXIS_VALUE | NoteID |  |
| SPC_CHART_DATA | NoteID |  |
