# GetStartupQuery

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

The purpose of this business method is to retrieve the SQL statement from the Dynamic Grid configuration.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | GridID | Char | Yes | Identifier of the Dynamic Grid configuration which is placed in XML stored in DELMIA Apriso. |
| Input | ExtractTableName | Boolean | Yes | Flag that indicates to extract and remove the main table name from the SQL statement. |
| Output | StartupQuery | Char | No | SQL statement that is used to populate the Dynamic Grid |

## Validations

Verifies if dynamic grid configuration (XML) exists.

## System Processing

- System retrieves SQL statement that is used to populate the dynamic grid 
- Based on the ExtractTableName flag, the main table name can be removed from the SQL statement.
