# ChangeContainerStatus

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to set or change the Container status. The status of the inventory or the current status of the Container is not validated when changing the status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The Container number. This is validated against the CONTAINER table. |
| Input | ContainerStatus | Integer | Yes | The Container status. This is validated against the CONTAINER_STATUS table. |

## Validations

- The system validates that the Container exists. 
- The system validates that the ContainerStatus Input exists.

## System Processing

- The system updates the Container Status to the inputted status.

## History Recording in Production

Transaction history with the information of the containers original and new status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | ContainerStatus | The Input status. |
