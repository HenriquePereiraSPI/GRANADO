# CloseSequenceQueueItemGroup

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemGroupBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component method is used to change the group size so that all the empty elements are removed from the group but all the non-empty elements remain in the group. This BC is useful when, for example, shipping a truck short where the user simply wants to "ship what's ready." The BC makes it easy for the process designer to limit the group to elements that are already in the group without having to calculate the new appropriate size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemGroupID | Integer | No | The sequence queue item group's ID. |

## Validations

This BC is equivalent to ResizeSequenceQueueItemGroup where the NewGroupSize is the number of non-empty elements currently in the group plus DequeuedCount, and it should be implemented by invoking that BC.
 This is an example queue:
 WipOrderNo K P Group ID 3 4 
 

 IsEmpty F T T T T F GroupSize 5 5 
 

 EnqueueSequence 11 20 19 18 17 16 DequeuedCount 4 0 
 

 Group ID 3 4 4 4 4 4 
 

 EnqueueSequenceInGroup 1 5 4 3 2 1 
 

 Sequence 15 16 17 18 19 20 
 

Invoking this BC on Group ID 4 would result in a group of size 1 and the queue would look like this:
 

 WipOrderNo K P Group ID 3 4 
 

 IsEmpty F F GroupSize 5 1 
 

 EnqueueSequence 11 16 DequeuedCount 4 0 
 

 Group ID 3 4 
 

 EnqueueSequenceInGroup 1 1 
 

 Sequence 15 16 
 

Group ID 3 has only one element, because the other 4 elements were dequeued (GroupSize is 5 with DequeuedCount 4). Group ID 4 has only one element, because the group has been resized (GroupSize 1 with DequeuedCount 0).
 

The next to enqueue will go into Group ID 5. For example, enqueue WipOrderNo:
 

 WipOrderNo K P Q Group ID 3 4 5 
 

 IsEmpty F F T T T T F GroupSize 5 1 5 
 

 EnqueueSequence 11 16 21 20 19 18 17 DequeuedCount 4 0 0 
 

 Group ID 3 4 5 5 5 5 5 
 

 EnqueueSequenceInGroup 1 1 5 4 3 2 1 
 

 Sequence 15 16 17 18 19 20 21

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM_GROUP | GroupSize | Determined by provided SequenceQueueItemGroupID |
