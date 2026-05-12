# CreateEquipment_v2

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.EquipmentCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to create new Equipment

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipment | Char | Yes | Equipment to create. |
| Input | Facility | Char | Yes | Facility to create the equipment in. |
| Input | EquipmentType | Short | Yes | Type of equipment to create. |
| Input | ResourceClassID | Integer | Yes | Resource Class of equipment to create. |
| Input | WorkCenter | Char | Yes | Work Center to create the equipment in |
| Input | WarehouseLocationID | Integer | No | Warehouse Location to create the equipment in. |
| Input | SerialNo | Char | No | Serial No to link with the Equipment. |
| Input | ProductID | Integer | No | Product ID. |
| Input | Description | Char | No | Equipment description. |
| Output | EquipmentID | Integer | No | Equipment ID. |

## Validations

- System validates that Equipment, Facility, and EquipmentType are specified. 
- System validates that specified Equipment, Facility, EquipmentType, ResourceClass, WorkCenter, WarehouseLocation exist.

## System Processing

System populates the EQUIPMENT, RESOURCE_, RESOURCE_SERIAL_NO, TEXT and TEXT_TRANSLATION tables.

## History Recording in Production

The System records the transaction history each time a new record is created in the EQUIPMENT table.

## Extension Points

CreateEquipment_v2 EquipmentCreator IEquipmentCreator

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | ID | System Generated |
|  | Equipment | Inputted Equipment |
|  | EquipmentTyype | Inputted EquipmentType |
|  | Facility | Inputted Facility |
|  | Description | Inputted Decription |
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
