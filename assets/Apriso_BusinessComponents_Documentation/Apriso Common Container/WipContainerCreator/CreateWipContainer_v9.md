# CreateWipContainer_v9

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContainerCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a WIP container. The created container is to be used in production. The Container Class supports WIP tracking.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number of the container to be created. |
| Input | ContainerClassID | Integer | Yes | Container class of the container to be created. |

## Validations

- System validates that the Container does not exists. 
- System validates that the input Container Class exists.

## System Processing

- System creates a Container record.

## Pre-Conditions

Container with same name should not exist in the system.
