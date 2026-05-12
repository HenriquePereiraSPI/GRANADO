# AddWorkCenterRelation

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.WorkCenterManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Add, Work Center, Relation

## Description

Creates a relationship between two Work Centers. Creates a record in the WORK_CENTER_RELATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Main Work Center for which the relation is created. |
| Input | RelatedWorkCenter | Char | Yes | Work Center that is related to the main Work Center. |
| Input | WorkCenterRelationType | Integer | Yes | Type of the relation between the two Work Centers. |
| Input | EffectiveDate | DateTime | Yes | Effective date of the relation. |
| Output | WorkCenterRelationID | Integer | No | The ID of the created WORK_CENTER_RELATION record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WorkCenterRelationClassID | Integer | ID of the Work Center Relation Class. Required if the relation type is 3-Other. |
| DiscontinueDate | DateTime | Discontinue date of the relation. |
| Enable | Boolean | Determines if relation is enabled. |

## Validations

- System validates if Work Center and related Work Center exist. 
- System validates if the provided Work Center and related Work Center are not the same. 
- System validates if the specified relation between the Work Centers exists. 
- System validates if the main Work Center is already a child in the related Work Center's hierarchy and if relation type is 1-Parent, to prevent circular relation. 
- System validates if relation type exists. 
- System validates if relation class ID is provided and exists if relation type is 3-Other. 
- System validates if the DiscontinueDate, if provided, is later than EffectiveDate.

## System Processing

System creates a record in WORK_CENTER_RELATION table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_RELATION | ID | Unique identifier of a record (key) in a table. |
|  | WorkCenter | The primary Work Center. |
|  | RelatedWorkCenter | The related Work Center. |
|  | WorkCenterRelationType | The Work Center relation type. |
|  | WorkCenterRelationClassID | The Work Center relation class ID. |
|  | EffectiveDate | Effective date of this relation. |
|  | DiscontinueDate | Discontinue date of this relation. |
|  | Enable | Indicates if this relation is enabled. It serves the purpose for temporary disabled and does not keep history records. |
