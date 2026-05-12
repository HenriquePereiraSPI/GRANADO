# RemoveGenealogy

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

## Validations

Validates that the genealogy exists.

## System Processing

- Delete Genealogy record and genealogy detail records. If the Genealogy items that are put on Genealogy hold the Hold needs to be released based on how the genealogy hold was created. 
- At the point where it is unlinked all Hold caused by the items in child link needs to be released from the items in the parent link and similarly all the Hold caused by the items in the parent link needs to be released from the Child link.

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
