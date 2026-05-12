# AddReplaceSequenceItem

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component method is similar to the enqueue BCs, but it also allows the process author to specify the EnqueueSequence number. This BC will insert the new item into the queue and assert that the EnqueueSequence is the one specified by the user. This BC is used when items are received out of Sequence but must then be resequenced (for example, if an external system is creating orders that have to be shipped in a predefined Sequence, but the external system is not guaranteed to create the orders in the right sequence).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | Yes | The sequence queue to which this item belongs. |
| Input | EnqueueSequence | Integer | No | The enqueue sequence number for the item. |
| Input | CreateEmptyItemToFill | Boolean | No | This should be set to true. In this case, the BC will create all the missing items in the queue that are expected to arrive "before" the new item being added. |
| Input | WipOrderNo | Char | No | The WIP order to which this item refers. When populated, this implies that the queue is a queue of WIP orders. |
| Input | WipOrderType | Short | No | The WIP order type of the WIP order to which this item refers. |
| Input | OrderNo | Char | No | The order to which the item refers. This field is populated when the item in the queue is an order. |
| Input | OrderType | Short | No | The order type of the reference order. |
| Input | OrderLineNo | Integer | No | The order line to which the item refers. This field is populated when the item in the queue is an order line. |
| Input | ProductID | Integer | No | The product to which this item refers. When populated, this is considered a queue of products. This field is also required to queue serial numbers. |
| Input | SerialNo | Char | No | The serial number to which this item refers. This implies that this is a queue of serial numbers. |
| Input | Container | Char | No | The container number to which this item refers. This implies that this is a queue of containers. |
| Input | ExternalSequence | Integer | No | The sequence number specified by an external system. Used only as a reference. |
| Output | SequenceQueueItemID | Integer | No | The added or replaced sequence queue item's ID. |

## System Processing

- The sequence queue record is read. If a record is not found, it returns with no error message. 
- The sequence queue definition ID is obtained from the queue record, and the queue definition record is read from the database. If a queue definition record is not found, it returns with no error message. 
- If an item in the queue already has the EnqueueSequence number specified, the BC will simply update the item (the item being replaced may or may not be empty). If the item does not exist, the BC will create a new item. 
- If the sequence to process must be guaranteed, then CreateEmptyItemsToFill should be set to true. In this case, the BC will create all the missing items in the queue that are expected to arrive "before" the new item being added. These placeholder empty items are then properly interpreted by all the other BCs so that the new added item cannot be processed until all the empty items ahead of it are processed. 
 
-  Here is an example queue: 

            

 **Item** 
   

 A 
   

 B 
   

 C 
   

 D 
     

 **EnqueueSequence** 
   

 1 
   

 2 
   

 3 
   

 4 
     
  
 
 
 
 
-  Now AddSequenceItem is invoked with Item G, EnqueueSequence 7. If CreateEmptyItemsToFill is false, then the queue looks like this: 

             

 **Item** 
   

 A 
   

 B 
   

 C 
   

 D 
   

 G 
     

 **EnqueueSequence** 
   

 1 
   

 2 
   

 3 
   

 4 
   

 7 
     
  
 
 
 
 
-  If A,B,C,D are dequeued, then G is next. However, if CreateEmptyItemsToFill is true, then the queue looks like this: 

               

 **Item** 
   

 A 
   

 B 
   

 C 
   

 D 
   

 
   

 
   

 G 
     

 **EnqueueSequence** 
   

 1 
   

 2 
   

 3 
   

 4 
   

 5 
   

 6 
   

 7 
     
  
 
 
 
- If A,B,C,D are dequeued, then the queue becomes empty until EnqueueSequence 5 is added. This is especially important if the queue is grouped and reversed, since the empty items will affect the grouping significantly. 
- If a new item must be created and CreateEmptyItemsToFill is true, then the BC will also create enough empty items to cover all the missing EnqueueSequence numbers between the new item and the last or first items in the queue, as follows: 
 
- If EnqueueSequence > LastEnqueueSequence and LastSequenceQueueItemID is not null, the system creates empty items numbered from LastEnqueueSequence to EnqueueSequence (not inclusive). The system then creates the new item with the specified EnqueueSequence. 
- If EnqueueSequence < NextSequence and NextSequenceQueueItemID is not null, the system creates empty items numbered from EnqueueSequence to NextSequence (not inclusive). The system creates the new item with the specified EnqueueSequence. 
 
- The BC correctly calculates the sequence, group, and other necessary parameters for all new items.

## History Recording in Production

This BC generates an XML document that then populates the transaction history.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | All |  |
