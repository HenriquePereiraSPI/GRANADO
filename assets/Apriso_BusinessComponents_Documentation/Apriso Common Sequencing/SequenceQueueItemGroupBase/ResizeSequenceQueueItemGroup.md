# ResizeSequenceQueueItemGroup

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemGroupBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component is used to resize a particular item group. This type of business logic is necessary when, for example, the customer needs to ship a truck short (a sequence group corresponds to a truck), or close a rack short (a sequence group correspond to a standard rack). This BC also allows increasing the group size, for example, if it is necessary to over-ship. The new group size is persisted in the database so that future updates to the queue or other groups will maintain the specified size for this group.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemGroupID | Integer | No | Sequence queue item group's ID. |
| Input | NewGroupSize | Integer | No | New group size. |

## System Processing

- Sequence queue item group is validated. If the queue item group is not found, it errors out. 
- If the new group size equals to the current group size, it returns with no error message. 
- The BC updates the GroupSize in SEQUENCE_QUEUE_ITEM_GROUP then updates the contents of the group and all subsequent groups in the queue (resequencing) to make sure that all groups have the correct number of items. 

Example:
 

 Before changing group size, all groups are size 3. 
 

 Item A B C D E F G H I 
 

 EnqueueSequence 1 2 3 4 5 6 7 8 9 
 

 Group 1 1 1 2 2 2 3 3 3 
 

 EnqueueSequenceInGroup 1 2 3 1 2 3 1 2 3 
 

 Sequence 1 2 3 4 5 6 7 8 9 
 

 
 

After changing group size of group 2 to 4:
 

 Item A B C D E F G H I 
 

 EnqueueSequence 1 2 3 4 5 6 7 8 9 
 

 Group 1 1 1 2 2 2 2 3 3 
 

 EnqueueSequenceInGroup 1 2 3 1 2 3 4 1 2 
 

 Sequence 1 2 3 4 5 6 7 8 9 
 

 
 

The group size could also have been reduced to 2:
 

 Item A B C D E F G H I 
 

 IsEmpty F F F F F F F F F T T 
 

 EnqueueSequence 1 2 3 4 5 6 7 8 9 10 11 
 

 Group 1 1 1 2 2 3 3 3 4 4 4 
 

 EnqueueSequenceInGroup 1 2 3 1 2 1 2 3 1 2 3 
 

 Sequence 1 2 3 4 5 6 7 8 9 10 11

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | SequenceQueueItemGroupID | System calculated |
|  | SequenceInGroup | System calculated |
|  | EnqueueSequenceInGroup | System calculated |
| SEQUENCE_QUEUE_ITEM_GROUP | GroupSize | Inputted NewGroupSize |
