# TableInsert

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Deprecated

## Description

This Business Component is used to add a record to an DELMIA Apriso database table (standard or custom).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Table | Char | Yes | The table name. |
| Input | EmployeeNo | Char | Yes | The employee number. |
| Input | UTC | DateTime | Yes | The UTC time. |
| Input | PopulateWhoCols | Boolean | Yes | Automatically updates the value in WHO columns. |
| Input | Execute | Boolean | Yes | If set to false, the query will not be executed. |
| Input | [ColumnName] | Char | No | Adds a physical table column to be updated and sets the correct data type. |
| Input | [ColumnName]Null | Char | No | Add this Input if you wish to pass a NULL value. If [ColumnName] and [ColumnName]Null are equal, the inserted value will be NULL. |
| Output | Identity | Integer | Yes | The new record identity. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Database Alias | Char | The database alias. |

## Validations

- At least one column to insert a value into

## System Processing

- The system inserts value(s) into table from the Table Input into the database specified in Database Alias. If Database Alias is omitted, default database will be used. 
- If PopulateWhoCols is set to true, WHO columns are also updated

## Pre-Conditions

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [AnyTable] | [AnyColumn] |  |
