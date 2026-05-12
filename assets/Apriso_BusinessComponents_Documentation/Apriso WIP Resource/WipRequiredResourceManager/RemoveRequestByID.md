# RemoveRequestByID

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipRequiredResourceManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this business component method is to delete a record from wip_req_resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipReqResourceID | Integer | Yes | Record to be deleted |

## Validations

System validates WipReqResource on WipReqResourceId input parameter

## System Processing

- System invokes Standard Operation "APR_WRR_BEFORE_DELETE". 
- System deletes WipReqResource.
