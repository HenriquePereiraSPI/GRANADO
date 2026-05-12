# CreateEquipmentRequest

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipRequiredResourceManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this business component method is to create a request for
 a specific equipment in wip_req_resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | Order for which the request will be created. |
| Input | WipOrderType | Short | No | Order for which the request will be created. |
| Input | OprSequenceNo | Char | No | Operation for which the request will be created |
| Input | StepSequenceNo | Integer | No | Operation Step for which the request will be created. |
| Input | Equipment | Char | No | Equipment being requested |
| Input | Facility | Char | No | Facility for the equipment |
| Input | EffectiveDate | DateTime | No | Effective Date |
| Input | EffectiveDateSpecified | Boolean | No | True if effective date has been provided |
| Input | DiscontinueDate | DateTime | No | Discontinue Date |
| Input | DiscontinueDateSpecified | Boolean | No | True if discontinue date has been provided |
| Output | WipReqResourceID | Integer | No | ID for the new request |

## Validations

- System validates Order. 
- System validates role based on Equipment and Facility 
- System retrieves ResourceId based on Equipment.ResourceId 
- System validates dates.

## System Processing

- System creates new record WipReqResourceId 
- System invokes Standard Operation "APR_WRR_AFTER_INSERT".
