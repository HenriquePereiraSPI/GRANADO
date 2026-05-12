# CreateResourceRequest

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipRequiredResourceManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this business component method is to create a request for a specific
 resource in wip_req_resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Order for which the request will be created. |
| Input | WipOrderType | Short | Yes | Order for which the request will be created. |
| Input | OprSequenceNo | Char | No | Operation for which the request will be created |
| Input | StepSequenceNo | Integer | No | Operation Step for which the request will be created. |
| Input | ResourceName | Char | Yes | Resource being requested |
| Input | ResourceType | Short | Yes | Resource being requested |
| Input | EffectiveDate | DateTime | No | Effective Date |
| Input | EffectiveDateSpecified | Boolean | No | True if effective date has been provided |
| Input | DiscontinueDate | DateTime | No | Discontinue Date |
| Input | DiscontinueDateSpecified | Boolean | No | True if discontinue date has been provided |
| Output | WipReqResourceID | Integer | No | ID for the new request |

## Validations

- System validates Order. 
- System validates Resource based on ResourceName and ResourceType. 
- System validates dates.

## System Processing

- System creates new record WipReqResourceId. 
- System invokes Standard Operation "APR_WRR_AFTER_INSERT".
