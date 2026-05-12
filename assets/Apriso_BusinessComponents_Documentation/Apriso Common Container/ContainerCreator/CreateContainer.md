# CreateContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number of the container to be created. |
| Input | ContainerClassID | Integer | No | Container class of the container to be created. |

## Validations

- System validates that the Container does not exist. 
- System validates that the input Container Class exists.

## System Processing

- System creates a Container record.

## Pre-Conditions

Container with same name should not exist in the system.

## History Recording in Production

The system records transaction history whenever a container is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | ContainerNo | Input |
| CONTAINER | ContainerClassID | Input |
