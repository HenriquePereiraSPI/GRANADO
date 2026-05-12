# ResequenceQueue

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component is used to resequence a queue after changes have been made to the queue configuration. The BC will update all SequenceQueueItems and SequenceQueueItemGroups to make sure that all of the data is consistent with the current configuration. Invoking this BC is equivalent to deleting every item from the queue then enqueueing them all again in the same order as before (same order as EnqueueSequence). The only difference is that this BC does not change the size of existing groups. This BC executes faster than actually dequeueing and enqueuing everything.
 

If StartAtSequenceQueueItemID is specified, then the BC will assume that every item before the specified one is correct and it will only resequence items that follow the specified item. This is useful when the process author knows that the sequence has only been modified or compromised after a certain point.
 

The BC also allows a new sequence number to be specified. When the new sequence number is used, the BC will resequence the whole queue and will assign the specified number as the EnqueueSequence and Sequence number for the first item. This is useful when the sequence number becomes too large. (Note that EnqueueSequence and Sequence may refer to different items if the queue is reversed.)

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | Yes | The sequence queue that this item belongs to. |
| Input | StartAtSequenceQueueItemId | Integer | No | If specified, the sequence queue will only resequence all items after this specified item. |
| Input | NewNextSequenceNumber | Short | No | If specified, the queue item is resequenced starting with the new sequence number. |

## System Processing

- All the queue items are read. If there are no queue items found, it returns without error. 
- If StartAtSequenceQueueItemID is specified, then the BC will assume that every item before the specified one is correct and it will only resequence items that follow the specified item. This is useful when the process author knows that the sequence has only been modified or compromised after a certain point. 
- The BC also allows a new sequence number to be specified. When the new sequence number is used, the BC will resequence the whole queue and will assign the specified number as the EnqueueSequence and Sequence number for the first item. This is useful when the sequence number becomes too large. (Note that EnqueueSequence and Sequence may refer to different items if the queue is reversed). 
- In detail, this BC will first identify what items need to be resequenced: 
- If NewNextSequenceNumber has been specified, the BC will update every EnqueueSequence = EnqueueSequence - NextSequence + NewNextSequenceNumber. The BC will also update NextSequence to NewNextSequenceNumber and make sure that the first Sequence number calculated later matches the new value. 
 

            

 **Parameters** 
   

 **Scenarios** 
     

NewNextSequenceNumber
   

> 0
   

Not
   

Not
   

Not
     

StartAtSequenceQueueItemID
   

Doesn't matter
  Not  

Specified
   

Specified
     

Default GroupSize
   

Doesn't matter
   

Doesn't matter
   

 

> 0
 
   

 

> 0
 
     

Re-sequence
   

Whole queue
   

Whole queue
   

Start at first enqueued item in the group of the specified item
   

Start at specified item
     
 
 
- If NewNextSequenceNumber has been specified, the BC will update every EnqueueSequence = EnqueueSequence - NextSequence + NewNextSequenceNumber. The BC will also update NextSequence to NewNextSequenceNumber and make sure that the first Sequence number calculated later matches the new value. 
 

The BC will then traverse the queue starting at the first item identified above in ascending order of EnqueueSequence and recalculate the values of:
 
 
- Sequence 
- SequenceQueueItemGroupID 
- SequenceInGroup 
- EnqueueSequenceInGroup

## History Recording in Production

This business component will generate an XML document that will then populate transaction history.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence |  |
|  | NextSequenceQueueItemID |  |
|  | LastSequenceQueueItemID |  |
| SEQUENCE_QUEUE_ITEM | Sequence |  |
