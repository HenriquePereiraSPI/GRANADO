# RemoveWorkCenterRelation

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.WorkCenterManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Remove, Work Center, Relation

## Description

Deletes a record from the WORK_CENTER_RELATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterRelationID | Integer | Yes | Work Center Relation record ID. |

## Validations

- System validates if the WorkCenterRelationID exists.

## System Processing

- System deletes the Work Center Relation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_RELATION | All |  |
