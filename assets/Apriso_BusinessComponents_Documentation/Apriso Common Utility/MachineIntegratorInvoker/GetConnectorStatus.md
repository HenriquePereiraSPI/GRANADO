# GetConnectorStatus

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

purpose of this method is to obtain the status of the Machine Integrator connector.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ConnectorName | Char | Yes | Name of MI connector. |
| Output | Status | Char | No | Returned connector status. |

## Validations

If an exception occurs the "Fail" error message is displayed.

## System Processing

System retrieves connector status.
