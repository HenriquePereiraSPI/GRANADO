# SetEquipmentsInactive

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.EquipmentCreator`
**Assembly:** `FlexNet.BusinessFacade.Resource.dll`
**Status:** Active

## Description

The purpose of this Business Component is to set selected equipment to Inactive status

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipments | ListofInteger | Yes | List of Equipment ID |

## Validations

System validates if Equipments array is not null.

## System Processing

System sets selected equipment to inactive.

## Extension Points

SetEquipmentsInactive EquipmentCreator IEquipmentCreator

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | Active | false |
