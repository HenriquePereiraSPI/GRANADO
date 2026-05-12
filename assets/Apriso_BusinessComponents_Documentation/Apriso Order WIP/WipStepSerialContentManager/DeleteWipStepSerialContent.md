# DeleteWipStepSerialContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepSerialContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Delete Wip Step SerialNo Content

## Description

Deletes the specified record in WIP_STEP_SERIAL_CONTENT.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepSerialContentID | Integer | Yes | ID of the WIP step serial content. |

## Validations

- System validates the WipStepSerialContentID is valid.

## System Processing

- System deletes a record with the specified ID from the WIP_STEP_SERIAL_CONTENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_SERIAL_CONTENT | All |  |
