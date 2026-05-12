# SetBoolWithAck

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Deprecated

## Description

Purpose of this method is to set value of specific Machine Integrator point.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ItemAlias | Char | Yes | The machine full point alias in the following format: [connector]\[data_source]\[point_group]\[point] |
| Input | Value | Boolean | Yes | Value to be set on the machine point. |
| Input | WaitForAck | Boolean | Yes | Determines whether caller should wait for acknowledgement from the machine |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator, empty string means no error. |
