# CreateEquipment_v3

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.EquipmentCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create new Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipment | Char | Yes | Equipment that will be created. |
| Input | Facility | Char | Yes | Facility in which the Equipment will be created. |
| Input | Department | Char |  | Department for which the Equipment will be created. |
| Input | ProductionLine | Char |  | Production line for which the Equipment will be created. |
| Input | EquipmentType | Short | Yes | Type of the Equipment that will be created. |
| Input | ResourceClassID | Integer | Yes | Resource Class of the Equipment that will be created. |
| Input | WorkCenter | Char | Yes | Work Center in which the Equipment will be created. |
| Input | WarehouseLocationID | Integer | No | Warehouse Location in which the Equipment will be created. |
| Input | SerialNo | Char | No | Serial No. to link with the Equipment. |
| Input | ProductID | Integer | No | The ID of the product that the Equipment will create. |
| Input | Short | Char | No | Short Equipment description. |
| Input | Medium | Char |  | Medium Equipment description. |
| Input | Extended | Char |  | Long Equipment description. |
| Output | EquipmentID | Integer | No | Equipment ID. |

## Validations

- The system validates that the Equipment, Facility, and EquipmentType are specified. 
- The system validates that the specified Equipment, Facility, EquipmentType, ResourceClass, WorkCenter, WarehouseLocation exist. 
- The system validates if the Equipment with provided Facility exists.

## System Processing

The system populates the EQUIPMENT, RESOURCE_, RESOURCE_SERIAL_NO,TEXT and TEXT_TRANSLATION tables.

## History Recording in Production

The system records the transaction history each time a new record is created in the EQUIPMENT table.

## Extension Points

CreateEquipment_v3 EquipmentCreator IEquipmentCreator

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | ID | System Generated |
|  | Equipment | Inputted Equipment |
|  | EquipmentTyype | Inputted EquipmentType |
|  | Facility | Inputted Facility |
|  | Description | Inputted Description |
|  | ResourceID | System Generated |
| RESOURCE_ | ID | System Generated |
|  | Name | Equipment ID |
|  | ResourceName | Equipment ID |
|  | ResourceType | Equipment(=6) |
|  | ResourceClassID | Inputted ResourceClassID |
|  | WorkCenter | Inputted WorkCenter |
|  | WarehouseLocationID | Inputted WarehouseLocationID |
| RESOURCE_SERIAL_NO | ID | System Generated |
|  | SerialNo | Inputted SerialNo |
|  | ProductID | Inputted ProductID |
|  | ResourceName | Inputted ResourceName |
|  | ReosurceType | Inputted ResourceType (=6, Equipment) |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | TextMedium | Inputted Description |
