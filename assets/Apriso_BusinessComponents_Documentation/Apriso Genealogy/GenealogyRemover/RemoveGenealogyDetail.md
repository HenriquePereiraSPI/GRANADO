# RemoveGenealogyDetail

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyRemover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This method deletes a genealogy detail record and updates quantity and cost for its genealogy record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | GenealogyDetailID | Integer | Yes | ID of the Genealogy Detail record to be deleted. |

## Validations

- Validates if Genealogy Detail record exists.

## System Processing

- System validates if Genealogy Detail record exists, 
- System reads Genealogy record where ID = GenealogyDetail.GenealogyID, 
- System updates Genealogy record with: 
 
- Genealogy.Quantity = Genealogy.Quantity - GenealogyDetail.Quantity, 
- Genealogy.Cost = Genealogy.Cost - GenealogyDetail.Cost. 
 
- System deletes GenealogyDetail record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GenealogyDetail |  | Record is deleted |
| Genealogy | Quantity | GenealogyDetail.Quantity |
|  | Cost | GenealogyDetail.Cost |
