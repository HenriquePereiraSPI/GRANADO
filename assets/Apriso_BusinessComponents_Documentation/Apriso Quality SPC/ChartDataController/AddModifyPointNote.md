# AddModifyPointNote

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

This Business Component method is used to populate a point note. If there is a point note already associated with SpcChartDataID, then the point note is modified (otherwise, it is added).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SpcChartDataID | Integer | Yes | The chart point to have the note. |
| Input | Message | Char | Yes | The message to attach to the point. |
| Output | NoteID | Integer | No | The created/updated note of the point. |

## Validations

- The system checks that the chart data ID is specified. 
- The system checks that the chart data ID is valid. 
- The system check that a message was entered.

## System Processing

- The system validates the SPC chart value. If it is not found, then an error occurs. 
- The system checks if a NoteID exists for the point. If it does not, then the system creates a new note record. 
- The system updates the note record with the inputted message. 
- The system returns the found/created note ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | Description, NoteType, Keywords, LanguageID | SpcChartDataID, Message |
| SPC_CHART_DATA | NoteID |  |
