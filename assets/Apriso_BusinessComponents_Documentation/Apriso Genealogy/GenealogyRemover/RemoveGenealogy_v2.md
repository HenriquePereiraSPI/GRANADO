# RemoveGenealogy_v2

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyRemover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to remove the Genealogy link. The method is extension of the existing method Remove Genealogy methods to provide additional features for containment management:
 
 
- Release On Hold by parents by the child items. 
- Release On Hold by children by the parent items

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | GenealogyID | Integer | Yes | ID of Genealogy |
| Input | PropagateHolds | Boolean | No | Flag determines if the user wants to release all of the genealogy |

## Validations

Validates that the genealogy exists.

## System Processing

- Delete Genealogy record and genealogy detail records. If the Genealogy items that are put on Genealogy hold the Hold needs to be released based on how the genealogy hold was created. 
- If PropagateHolds is true, then at the point where it is unlinked, all of the Holds caused by the items in the child link need to be released from the items in the parent link. Similarly, all of the Holds caused by the items in the parent link need to be released from the child link.

## History Recording in Production

The history related to any Genealogy Release will be created with following optional information.
 
 
- Comment 
- Parent LotNo 
- Parent SerialNo 
- Child LotNo 
- Child SerialNo 
- Containment Name

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY |  |  |
| GENEALOGY_DETAIL |  |  |
