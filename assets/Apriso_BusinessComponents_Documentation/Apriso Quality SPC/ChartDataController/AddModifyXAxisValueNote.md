# AddModifyXAxisValueNote

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

This Business Component method is used to add or modify the note associated with the x-axis value based on the inputted XaxisValueID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | XaxisValueID | Integer | Yes | The x-axis valude ID. |
| Input | Message | Char | Yes | The note. |
| Output | NoteID | Integer | Yes | The note ID. |

## Validations

- The system checks that XaxisValueID is specified.  
- The system checks that the message is valid.

## System Processing

If spcChartXaxisValue.NoteID = 0, then the system adds the note to this x-axis value. Otherwise, it modifies the note associated with the x-axis value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | All fields |  |
| SPC_CHART_DATA | NoteID |  |
|  | NoteID |  |
