# MaintainSequenceQueue

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

Inserts or updates SEQUENCE_QUEUE records. If the SequenceQueueDefinitionID is updated, the queue is automatically resequenced.
 

Name and revision must not be empty strings.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueId | Integer | No | Sequence queue's ID if a queue is updated. It is 0 if a new queue is created. |
| Input | Name | Char | Yes | This is the user-specified name queue. Process designers can use the name to identify the appropriate queues to use for a particular process or operation. |
| Input | Revision | Char | Yes | This is the user-specified revision number for the queue definition. |
| Input | SequenceQueueDefinitionID | Integer | Yes | The definition of the queue specifies all the configuration parameters for the queue. |
| Input | ResourceID | Integer | No | If the queue is sequencing items for a particular resource, this is the resource ID. |
| Input | WorkCenter | Char | No | If the queue is sequencing items for a work center, this is the work center. |
| Input | ProductionLineNo | Char | No | If the queue is sequencing items for a production line, this is the production line number. |
| Input | WarehouseLocationID | Integer | No | If the queue is sequencing items for a specific warehouse location, this is the location being sequenced. |
| Input | Warehouse | Char | No | If the queue is sequencing items specifically for a Warehouse, this is the warehouse identifier. |
| Input | Facility | Char | No | If the queue is sequencing items specifically in one Facility, this is the facility identifier. |
| Input | PartnerID | Integer | No | If the queue is sequencing items specifically for one partner (supplier, customer, carrier), this is the partner ID. |
| Input | Group | Char | No | If the queue is sequencing items of a certain group, this is the reference to the group. |
| Input | GroupType | Char | No | The group type of the reference group. |
| Input | GroupClassID | Integer | No | The group class ID of the reference group. |
| Input | EffectiveDate | DateTime | No | The date and time from which this sequence queue is to be used. Allows multiple queues for the same entity to exist with different settings depending on the date. This field is not enforced yet. |
| Input | UseEffectiveDate | Boolean | No | True if effective date is used. |
| Input | DiscontinueDate | DateTime | No | The date and time after which this queue is not to be used for sequencing the entity. This field is not enforced yet. |
| Input | UseDiscontinueDate | Boolean | No | True if discontinue date is used. |
| Input | ViewSourceSequenceID | Integer | No | An optional source queue to be viewed in the Sequencing Cockpit. |
| Input | ResequenceSourceSquenceID | Integer | No | An optional reference to another queue used to provide items for this Queue. BCs will not use this field, but process authors may use it to easily identify subsequent queues for items. |
| Input | AllowResequencing | Boolean | No | If 0 (false), this queue cannot be resequenced in the Sequencing Cockpit. |
| Input | IsDefault | Boolean | No | If 0 (false), this is not a default queue. This optional field is not used by any BCs or screens. It is for the process author to optionally mark a a queue as default. |
| Input | LanguageID | Integer | No | Language of the descriptions. |
| Input | ShortDescription | Char | No | Short description for the queue. |
| Input | MediumDescription | Char | No | Medium description for the queue. |
| Input | LongDescription | Char | No | Long description for the queue. |
| Output | SequenceQueueId | Integer | No | Updated or created sequence queue's ID. |

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | Name | Inputted Name |
|  | Revision | Inputted Revision |
|  | SequenceQueueDefinitionID | Inputted SequenceQueueDefinitionID |
|  | ResourceID | Inputted ResourceID |
|  | WorkCenter | Inputted WorkCenter |
|  | ProductionLineNo | Inputted ProductionLineNo |
|  | WarehouseLocationID | Inputted WarehouseLocationID |
|  | Warehouse | Inputted Warehouse |
|  | Facility | Inputted Facility |
|  | PartnerID | Inputted PartnerID |
|  | Group | Inputted Group |
|  | GroupType | Inputted GroupType |
|  | GroupClassID | Inputted GroupClassID |
|  | EffectiveDate | Inputted EffectiveDate |
|  | DiscontinueDate | Inputted DiscontinueDate |
|  | ViewSourceSequenceID | Inputted ViewSourceSequenceID |
|  | ResequenceSourceSquenceID | Inputted ResequenceSourceSquenceID |
|  | AllowResequencing | Inputted AllowResequencing |
|  | IsDefault | Inputted IsDefault |
|  | TextID | System generated |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | Short | Inputted ShortDescription |
| TEXT_TRANSLATION | Medium | Inputted MediumDescription |
| TEXT_TRANSLATION | Extended | Inputted LongDescription |
