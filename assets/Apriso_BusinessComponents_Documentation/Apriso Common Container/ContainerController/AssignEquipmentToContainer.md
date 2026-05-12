# AssignEquipmentToContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to assign Equipment to or unassign Equipment from a Container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The Container number. |
| Input | EquipmentID | Integer | No | The Equipment ID (or zero). |

## Validations

- The system validates the Container.  
- The system validates the Equipment.

## System Processing

- The system validates the Container.  
- If EquipmentID > 0, then the system validates the Equipment. 
- If Equipment > 0, Container.EquipmentID = Equipment (otherwise, Container.Equipment is set to null).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | EquipmentID | EquipmentID |
