# TableUpdate

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Deprecated

## Description

This Business Component is used to update a record in an DELMIA Apriso database table (standard or custom).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Table | Char | Yes | The table name. |
| Input | EmployeeNo | Char | Yes | The employee number. |
| Input | UTC | DateTime | Yes | The UTC time. |
| Input | PopulateWhoCols | Boolean | Yes | Automatically updates a value in the WHO columns. |
| Input | NoMatchError | Boolean | Yes | Shows an error when the update query does not return values. |
| Input | Execute | Boolean | Yes | If set to false, the query will not be executed. |
| Input | [ColumnName] | Char | No | Adds a physical table column to be updated and sets the correct data type. |
| Input | [ColumnName]Null | Char | No | Add this Input if you wish to pass a NULL value. If [ColumnName] and [ColumnName]Null are equal, the inserted value will be NULL. |
| Input | [ColumnName]Key | Char | No | Adds a physical table column that ends with 'Key' to be added to the WHERE clause. |
| Output | Count | Integer | Yes | The number of records that have been updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Database Alias | Char | The database alias. |

## Validations

- At least one column to update

## System Processing

- The system updates the values in the table from the Table Input in the database specified in Database Alias. If Database Alias is omitted, default database will be used.  
- If PopulateWhoCols is set, the system also inserts the proper values in the WHO columns

## Pre-Conditions

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [AnyTable] | [AnyColumn] |  |
