# DeleteContainmentSessionData

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to delete Containment Session Data from the temporary table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SessionFUID | Char | Yes | Unique Session identifier. |

## Validations

- System checks if SessionFUID is provided.

## System Processing

The System deletes Session data from the **CONTAINMENT_ITEM_TEMP **table using the inputted SessionFUID.

## Pre-Conditions

Containment is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP (records are deleted) | SessionFUID | Inputted SessionFUID |
