# DeleteWorkCenterRelationClass

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.WorkCenterManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Delete, Work Center, Relation Class

## Description

Deletes a record from the WORK_CENTER_RELATION_CLASS table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterRelationClassID | Integer | Yes | Work Center Relation Class ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| RelationClass | Char | Work Center Relation Class name. |

## Validations

- System validates if the WorkCenterRelationClassID exists. 
- System validates if the RelationClass dynamic input exists if the WorkCenterRelationClassID is not provided.

## System Processing

- System deletes the Work Center Relation Class.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_RELATION_CLASS | All |  |
