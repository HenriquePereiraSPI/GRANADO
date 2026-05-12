# GetListOfIntByEquipment

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get the value (List of Integer type) of the Machine Integrator Point assigned to a specific Equipment's Feature.
 

 

The time needed to reflect changes in configuration (linking another Machine Integrator Point to equipment) depends on time set in CacheValidationDelay key (Central Configuration.xml).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Equipment | Char | Yes | The name of the Equipment. |
| Input | Facility | Char | No | Facility of the Equipment. |
| Input | Feature | Char | Yes | The name of the Feature. |
| Output | Value | ListofInteger | No | Value retrieved from the machine Point. |
| Output | ItemAlias | Char | No | The full machine Point Alias assigned to the Equipment Feature. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator (empty string means no error). |

## Validations

- Equipment and Feature assignment to Machine Integrtor Point is validated and if not found, the "ErrorUnknownAlias" ErrorCode is set. 
- In case of communication error or no connection to Machine Integrator Connector, "NoConnection" ErrorCode is set. 
- If assigned Point has different type than expected, the "ErrorBadType" ErrorCode is set. 
- If no providers are found for requested items or an exception occurs, the error message is displayed.

## System Processing

System retrieves value of Machine Integrator Point assigned to specified Equipment's Feature.
