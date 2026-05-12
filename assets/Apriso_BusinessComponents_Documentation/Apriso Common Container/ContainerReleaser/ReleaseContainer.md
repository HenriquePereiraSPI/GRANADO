# ReleaseContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this business component is to allow the user to release a hold that has been placed on a container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | Yes | The id of container to be released. Must exist in the system. |
| Input | HoldReasonCode | Char | Yes | The code of reason to release the container from. Must exist in the system. |
| Input | ReleaseReasonCode | Char | No | The code of reason to release the container with. |
| Input | ReleaseReasonRequired | Boolean | Yes | The flag determining if the release reason is required. |

## Validations

The system validates that the inputted ReleaseReasoncode is of type "Release".

## System Processing

- System validates that there exists a hold for the specified container and HoldReasonCode. 
- If the "ReleaseReasonRequired" input is true, then system validates that the "ReleaseReasonCode" input is entered and is of type "Release". 
- System deletes the existing hold record for the given container and reason code.

## History Recording in Production

The system records transaction history whenever a container hold is released.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER_HOLD | Container | Inputted Container |
|  | ReasonCode | Inputted ReasonCode |
