# RemoveEquipment

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.EquipmentCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

The purpose of this Business Component is to delete the specified Equipment

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentID | Integer | Yes | ID of Equipment to be removed |

## Validations

System validate the equipment with the inputted equipment id is exist.

## System Processing

- System find the equipment with the equipment ID and delete it. 
- System find the associated resource, resource serial no then delete the records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | All fields |  |
| RESOURCE_ | All fields |  |
| RESOURCE_SERIAL_NO | All fields |  |
