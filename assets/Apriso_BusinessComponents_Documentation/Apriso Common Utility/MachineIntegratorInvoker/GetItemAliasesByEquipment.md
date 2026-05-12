# GetItemAliasesByEquipment

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get a list of the full Aliases of the Machine Integrator Points assigned to a specific Equipment's Features.
 

 

The time needed to reflect changes in configuration (linking another Machine Integrator Point to equipment) depends on time set in CacheValidationDelay key (Central Configuration.xml).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipments | ListofChar | Yes | The names of the Equipments. |
| Input | Facilities | ListofChar | No | The Facilities of the Equipments. |
| Input | Features | ListofChar | Yes | The names of the Features. |
| Output | ItemAliases | ListofChar | No | The full machine Point Aliases assigned to the Equipment Features. |
| Output | ErrorCode | Char | No | The error code returned while retrieving the assignments (an empty string means no error). |

## Validations

- The Equipment and Feature assignment to the Machine Integrator Point is validated and if not found, the "ErrorUnknownAlias" ErrorCode is set 
- If an exception occurs, the error message is displayed

## System Processing

The system retrieves the full Alias of the Machine Integrator Points assigned to specified Equipments and Features.
