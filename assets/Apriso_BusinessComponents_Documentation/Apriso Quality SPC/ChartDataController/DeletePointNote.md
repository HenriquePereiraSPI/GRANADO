# DeletePointNote

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

Used to delete a point note. The point note associated with the Spc Chart Data ID gets deleted.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SpcChartDataID | Integer | Yes | The chart point to have the note. |

## Validations

- Check for Chart Data ID Not Specified. 
- Check for Chart Data ID Not Valid. 
- Check for SPC Chart Data Point Did Not Have A Note.

## System Processing

- System finds the chart point 
- System updates the SPC_CHART_DATA record to set the NOTEID to null or 0. 
- System then deletes the related NOTE record from the NOTE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | All fields |  |
| SPC_CHART_DATA | NoteID |  |
