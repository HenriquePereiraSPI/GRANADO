# DeleteResourceLabor

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to delete any type of machine event. This method does not delete any child records; therefore those must be deleted before parents can be deleted.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | ID of the resource labor to be deleted. |

## Validations

System checks if the record identified by the ResourceLaborID identifier exists in the system.

## System Processing

System deletes the machine event record assuming that there are no child records existing.
