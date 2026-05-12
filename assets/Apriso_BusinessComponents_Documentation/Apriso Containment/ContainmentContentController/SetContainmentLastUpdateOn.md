# SetContainmentLastUpdateOn

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

The purpose of this business method is to set current date and time in the LastUpdateOn field Containments.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentIDList | ListofInteger | Yes | List of Containments to be updated. |
| Output | ErrorContainmentIDList | ListofInteger | No | List of Containments that have not been updated. |

## Validations

Validates if Containments exist in the system.

## System Processing

- System sets current date and time in LastUpdateOn field for Containments.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT | LastUpdateOn | DateTime.UtcNow |
