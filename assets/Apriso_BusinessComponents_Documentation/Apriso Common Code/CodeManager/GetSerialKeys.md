# GetSerialKeys

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.Codes.CodeManager`
**Assembly:** `FlexNet.BusinessFacade.Codes.dll`
**Status:** Active

## Description

The purpose of this method is to get information about a business entity assigned to specific bit code.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | bitCode | Char | Yes | Bit code to retrieve info about. |
| Output | entityType | Integer | Yes | Returns type of entity that the bit code is assigned to. |
| Output | entityPK1 | Char | Yes | Returns first primary key of entity assigned to bit code. |
| Output | entityPK2 | Char | No | Returns second primary key (if there is any) of entity assigned to bit code. |

## Validations

- Entered code must belong to supported codes. 
- Entered code must be a correct bit number.

## System Processing

- System parses bit code. 
- System gets information only if "SerialNumber" is specified in the input code.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CODE_SERIAL_NUMBER | ResourceName | If EntityType = 1 (Resource) |
|  | ResourceType | If EntityType = 1 (Resource) |
|  | LotNo | If EntityType = 2 (Lot) |
|  | SerialNo | If EntityType = 3 (Serial) |
|  | ProductID | If EntityType = 2 (Lot) OR EntityType = 3 (Serial) |
|  | Container | If EntityType = 4 (Container) |
|  | WorkCenter | If EntityType = 5 (WorkCenter) |
|  | WarehouseLocationID | If EntityType = 6 (WarehouseLocation) |
|  | Land | If EntityType = 7 (Land) |
|  | Facility | If EntityType = 8 (Warehouse) |
|  | Warehouse | If EntityType = 8 (Warehouse) |
|  | Building | If EntityType = 9 (Building) |
|  | AddressID | If EntityType = 10 (Address) |
|  | Department | If EntityType = 11 (Department) |
|  | ProductionLineNo | If EntityType = 12 (ProductionLine) |
