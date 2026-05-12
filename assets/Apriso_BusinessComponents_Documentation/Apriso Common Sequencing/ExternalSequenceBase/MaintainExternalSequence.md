# MaintainExternalSequence

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.ExternalSequenceBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component inserts or updates a record in EXTERNAL_SEQUENCE with the specified values and returns the ID of the record updated or created. If the input ExternalSequenceID is populated, the BC will update the record with the specified values, otherwise the BC will insert a new record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ExternalSequenceID | Integer | No | External sequence ID. If a record is found for the input, the record will be updated. If a record is not found, a new record will be created. |
| Input | PartnerID | Integer | No | Partner ID |
| Input | SequenceNo | Char | No | Sequence number |
| Input | ChassisNo | Char | No | Chassis number |
| Input | ProductID | Integer | No | Product ID |
| Input | CallClassID | Integer | No | Call class ID |
| Input | OrderNo | Char | No | Refers to the order. |
| Input | OrderType | Short | No | Refers to the order type. |
| Input | OrderLineNo | Integer | No | Order line number |
| Input | ExternalSequenceStatus | Short | No | External sequence status |
| Input | DueDate | DateTime | No | If UpdateDueDate is false, DueDate is not updated. |
| Input | UpdateDueDate | Boolean | No | If the value is true, then update the DueDate. |
| Input | CustomerReference | Char | No | Customer Reference |
| Input | ShortDescription | Char | No | Short description of the external sequence |
| Input | MediumDescription | Char | No | Medium description of the external sequence |
| Input | LongDescription | Char | No | Long description of the external sequence |

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EXTERNAL_SEQUENCE | All | All inputs |
