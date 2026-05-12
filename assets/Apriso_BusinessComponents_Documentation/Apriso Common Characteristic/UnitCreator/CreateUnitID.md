# CreateUnitID

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for any table. This UnitID can then be used to link characteristics to the record in the specified table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TableName | Char | Yes | Name of the table to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| The name of the primary key column for the specified table as they appear in the table definition. | The data type of the primary key. | The value of the primary key used to match for a record in the table specified in the TableName input. Create additional input as necessary if the table requires more than one column as primary key. For example, if the specified TableName is WIP_ORDER, then add two additional input to the business component, one named WipOrderNo with the data type as Char, and another named WipOrderType and data type as integer. |

## Validations

- The TableName Input must be provided. 
- The table specified must contain a UnitID column. 
- Dynamic Input(s) matching the primary key column(s) of the table specified must be provided. 
- Dynamic Input(s) data type also must match the data type of the primary key column(s). 
- The value of the primary key column specified must exist in the specified table.

## System Processing

System retrieves the record from specified table using the dynamic input of primary keys. System checks if a UnitID is linked to this record: If a UnitID is already linked to the record, then this UnitID is outputted. Else System generates a UnitID for this record: System creates a record in UNIT table and updates the record.UnitID with the UnitID just created. System outputs the UnitID

## Pre-Conditions

Record must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TableName input | PKs | Inputted TableName and PK |
|  | UnitID | UNIT.ID |
| UNIT | ID | Outputted UnitID |
