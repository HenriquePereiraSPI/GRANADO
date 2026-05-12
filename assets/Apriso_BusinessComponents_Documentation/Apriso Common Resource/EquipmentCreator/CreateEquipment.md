# CreateEquipment

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.EquipmentCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Deprecated

## Description

This purpose of this Business Component is to create new Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipment | Char | Yes | Equipment to create. |
| Input | EquipmentType | Integer | Yes | Type of equipment to create. |
| Input | Description | Char | No | Equipment description. |
| Input | Facility | Char | Yes | Facility to create the equipment in. |

## Validations

- System validates that Equipment, EquipmentType and Facility are specified. 
- System validates that equipment type and facility exist. 
- System validates that there is no record in the EQUIPMENT for the specified Equipment.

## System Processing

System populates the EQUIPMENT, TEXT and TEXT_TRANSLATION tables.

## History Recording in Production

The System records the transaction history each time a new record is created in the EQUIPMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | Equipment | Inputted Equipment |
|  | Facility | Inputted Facility (Required) |
|  | EquipmentType | Inputted EquipmentType (Required) |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | TextMedium | Inputted Description |
