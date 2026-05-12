# ProcessOlapCube

**Category:** Apriso/MPI
**Class:** `FlexNet.BusinessFacade.MPI.OlapManager`
**Assembly:** `FlexNet.BusinessFacade.MPI.dll`
**Status:** Active

## Description

The purpose of this Business Component is to process the SSAS Cube specified in the OLAP Alias.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OlapAlias | Char | No | The alias of the OLAP connection in the configuration. |

## Validations

- The system validates the OLAP Alias (if entered) 
 
- If the OLAP Alias is not provided, it uses the default OLAP connection

## System Processing

- The system connects to and process the OLAP cube on the SSAS server configured in the alias.
