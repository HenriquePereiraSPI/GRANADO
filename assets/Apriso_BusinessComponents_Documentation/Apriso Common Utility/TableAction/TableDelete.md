# TableDelete

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Deprecated

## Description

This Business Component is used to remove a record from the DELMIA Apriso database table (standard or custom).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Table | Char | Yes | The table name. |
| Input | Execute | Boolean | Yes | If set to false, the query will not be executed. |
| Output | Count | Integer | Yes | The number of records that have been deleted. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Database Alias | Char | The database alias. |

## Validations

- None

## System Processing

- The system deletes the rows from the table specified in the Table Input matching the given keys in the database specified in Database Alias. If Database Alias is omitted, default database will be used.

## Pre-Conditions

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| [AnyTable] | [AnyColumn] |  |
