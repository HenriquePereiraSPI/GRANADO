# CreateAssociationHex

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.Codes.CodeManager`
**Assembly:** `FlexNet.BusinessFacade.Codes.dll`
**Status:** Active

## Description

The purpose of this method is to associatehexadecimal code to a business entity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | hexCode | Char | Yes | Hex code to associate with business entity. |
| Input | entityType | Integer | Yes | Type of entity. |
| Input | entityPK1 | Char | Yes | First primary key of entity. |
| Input | entityPK2 | Char | No | Second primary key of entity, optional. (not required, ignored if entity does not have two parts primary key) |

## Validations

- Entered code must belong to supported codes. 
- Entered code must be a correcthexadecimal number.

## System Processing

- System converts input hexadecimal code to its bit representation. 
- System parses converted code. 
- System creates association to a business entity depending on entity type.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CODE_SERIAL_NUMBER | CodeSystemType | Always EPC |
|  | FormatType | Parsed from Code Input |
|  | ObjectType | Parsed from Code Input |
|  | DomainManager | Parsed from Code Input |
|  | ObjectClass | Parsed from Code Input |
|  | SerialNumber | Parsed from Code Input |
|  | ResourceName | PK1 (If EntityType = 1 (Resource)) |
|  | ResourceType | PK2 (If EntityType = 1 (Resource)) |
|  | LotNo | PK1 (If EntityType = 2 (Lot)) |
|  | SerialNo | PK1 (If EntityType = 3 (Serial)) |
|  | ProductID | PK2 (If EntityType = 2 (Lot) OR EntityType = 3 (Serial)) |
|  | Container | PK1 (If EntityType = 4 (Container)) |
|  | WorkCenter | PK1 (If EntityType = 5 (WorkCenter)) |
|  | WarehouseLocationID | PK1 (If EntityType = 6 (WarehouseLocation)) |
|  | Land | PK1 (If EntityType = 7 (Land)) |
|  | Facility | PK1 (If EntityType = 8 (Warehouse)) |
|  | Warehouse | PK2 (If EntityType = 8 (Warehouse)) |
|  | Building | PK1 (If EntityType = 9 (Building)) |
|  | AddressID | PK1 (If EntityType = 10 (Address)) |
|  | Department | PK1 (If EntityType = 11 (Department)) |
|  | ProductionLineNo | PK1 (If EntityType = 12 (ProductionLine)) |
