# HoldContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerHolder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this business component is to allow the user to place a container on hold.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | Yes | Container to be put on hold |
| Input | ReasonCode | Char | Yes | The reason code to hold the container with. |
| Input | AllowMultipleHolds | Char | Yes | The flag determining if the multiple holds are allowed |

## Validations

The system validates that the inputted reasoncode is of type "Hold".

## System Processing

- System validates that the container is not on hold for the same reasoncode already. 
- If the "AllowMultipleHolds" input is set to false system validates that there are no other holds on the container. 
- System adds a record into the "CONTAINER_HOLD" table for the given container and reasoncode.

## History Recording in Production

The system records transaction history whenever a container is placed on hold.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER_HOLD | Container | Inputted Container |
|  | ReasonCode | Inputted ReasonCode |
