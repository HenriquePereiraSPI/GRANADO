# AddWorkCenterRelationClass

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.WorkCenterManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Create Work Center Relation Class

## Description

Creates a new record in the WORK_CENTER_RELATION_CLASS table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | RelationClass | Char | Yes | Work Center Relation Class name. |
| Output | WorkCenterRelationClassID | Integer | No | The ID of the created WORK_CENTER_RELATION_CLASS record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ShortDescription | Char | The short description for the Relation Class. Max. 80 characters. |
| MediumDescription | Char | The medium description for the Relation Class. Max. 255 characters. |
| ExtendedDescription | Char | The extended description for the Relation Class. Max. 2000 characters. |

## Validations

- The system validates if the provided Work Center Relation Class already exists. 
- The system validates that Descriptions, if provided, fit within the length limit.

## System Processing

- The system creates a new record in the WORK_CENTER table. It also creates related UNIT record and descriptions in the TEXT_TRANSLATION table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_RELATION_CLASS | ID | Unique identifier of the record (key) in a table. |
|  | RelationClass | The relation class name. |
|  | TextID | Unique identifier of the Text. |
| TEXT | ID | (system generated) |
| TEXT_TRANSLATION | TextID | Unique identifier of the Text. |
|  | Short | ShortDescription dynamic input. |
|  | Medium | MediumDescription dynamic input. |
|  | Extended | ExtendedDescription dynamic input. |
