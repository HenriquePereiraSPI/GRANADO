# CheckConnectionStatus

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.DatabaseConnector`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active
**Keywords:** CheckConnectionStatus, check, connection, status

## Description

This Business Component method is used to check the database connection status to the database.
 

 **Note**: when using this method to check the connection to an Oracle database, make sure you have the Oracle client components installed on the application server, as specified in the DELMIA Apriso Installation Guide.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DatabaseAlias | Char | Yes | The alias of the database which is specified in the Central Configuration. |
| Output | IsActive | Boolean | No | The status of the connection to the database. |

## Validations

- DatabaseAlias cannot be an empty string.

## System Processing

- The system runs a simple query against the database to check if the connection to the inputted database is active.
