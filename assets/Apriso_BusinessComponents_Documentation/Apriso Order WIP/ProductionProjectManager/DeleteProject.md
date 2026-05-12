# DeleteProject

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductionProjectManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** delete remove project

## Description

The purpose of this Business Component method is to delete a Project record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProjectID | Integer | Yes | The ID of record to be deleted. |

## Validations

- The system validates that record with provided ID exists in the PROJECT table.

## System Processing

- The system deletes the record from the PROJECT table. The TEXT and TEXT_TRANSLATION records are also deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROJECT | ID | ProjectID |
| TEXT |  |  |
| TEXT_TRANSLATION |  |  |
