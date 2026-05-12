# GetInteger_withQuality

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get the value of a specific Machine Integrator Point with the timestamp from the machine and read quality.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ItemAlias | Char | Yes | The full machine Point Alias in the following format: [Cconnector]\[Data_Source]\[Point_Group]\[Point] |
| Output | Value | Integer | No | The value retrieved from the machine Point. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator (an empty string means no error). |
| Output | UTCTimestamp | DateTime | No | The UTC timestamp of the machine Point value read. |
| Output | Quality | Char | No | The quality of the machine Point value read (Good, Bad, Uncertain, ErrorQualityValue). |

## Validations

- The Point Alias is verified and if not found, the "Unknown Alias" error message is displayed  
- If no providers are found for the requested items or an exception occurs, the "Fail" error message is displayed

## System Processing

The system retrieves the Point value.
