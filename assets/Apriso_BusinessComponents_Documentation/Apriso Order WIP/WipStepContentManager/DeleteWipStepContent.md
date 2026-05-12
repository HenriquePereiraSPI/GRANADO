# DeleteWipStepContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Delete, Wip, Step, Content

## Description

Deletes specified record in WIP_STEP_CONTENT.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepContentID | Integer | Yes | ID of the WIP step content. |

## Validations

- WipStepContentID is valid. Validation fails if it is 0.

## System Processing

- Performs validations as stated above. 
- System deletes record in WIP_STEP_CONTENT with specified ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_CONTENT | All |  |
