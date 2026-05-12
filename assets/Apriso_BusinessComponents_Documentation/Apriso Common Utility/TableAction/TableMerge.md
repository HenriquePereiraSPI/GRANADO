# TableMerge

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Deprecated

## Description

This Business Component is used to merge records in an DELMIA Apriso database table (standard or custom). If an updated record does not exist in the table, it adds a new record and returns the Identity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Table | Char | Yes | The table name. |
| Input | EmployeeNo | Char | Yes | The employee number. |
| Input | UTC | DateTime | Yes | The UTC time. |
| Input | PopulateWhoCols | Boolean | Yes | Automatically updates the value in WHO columns. |
| Input | Execute | Boolean | Yes | If set to false, the query will not be executed. |
| Input | [ColumnName] | Char | No | Adds a physical table column to be updated and sets the correct data type. |
| Input | [ColumnName]Key | Char | No | Adds a physical table column that ends with 'Key' to be added to the WHERE clause. |
| Input | [ColumnName]KeyNull | Char | No | Add this Input if you want to filter by NULL. If [ColumnName]Key and [ColumnName]KeyNull are equal, the WHERE statement will use a NULL value. |
| Input | [ColumnName]Identity | Char | No | Adds a physical table column that ends with 'Identity' to be added to the WHERE clause. Input will not be used when inserting values. |
| Output | Count | Integer | Yes | The number of records that have been updated. |
| Output | Identity | Integer | Yes | The new record identity. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Database Alias | Char | The database alias. |

## Validations

- At least one column to update

## System Processing

-  The system updates the row in the table from the Table Input based on [ColumnName]Key and [ColumnName]Identity columns in the database specified in Database Alias. If Database Alias is omitted, default database will be used.  
-  If the row does not exist, it is inserted into the table with all values from [ColumnName] and [ColumnName]Key inputs.

## Pre-Conditions

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [AnyTable] | [AnyColumn] | Columns named "Table", "EmployeeNo", "UTC", "PopulateWhoCols", "Execute" can not be updated. |
