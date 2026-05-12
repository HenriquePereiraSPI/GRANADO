# GetItemAliasByEquipment

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get the full Alias of the Machine Integrator Point assigned to a specific Equipment's Feature.
 

 

The time needed to reflect changes in configuration (linking another Machine Integrator Point to equipment) depends on time set in CacheValidationDelay key (Central Configuration.xml).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipment | Char | Yes | The name of the Equipment. |
| Input | Facility | Char | No | The Facility of the Equipment. |
| Input | Feature | Char | Yes | The name of the Feature. |
| Output | ItemAlias | Char | No | The full machine Point Alias assigned to the Equipment Feature. |
| Output | ErrorCode | Char | No | The error code returned while retrieving the assignment (an empty string means no error). |

## Validations

- The Equipment and Feature assignment to the Machine Integrator Point is validated and if not found, the "ErrorUnknownAlias" ErrorCode is set 
- If an exception occurs, the error message is displayed

## System Processing

The system retrieves the full Alias of the Machine Integrator Point assigned to a specified Equipment's Feature.
