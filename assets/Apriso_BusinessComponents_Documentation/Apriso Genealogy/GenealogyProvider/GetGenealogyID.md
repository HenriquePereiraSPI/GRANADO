# GetGenealogyID

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to facilitate the validation of the existence of a parent-child relationship between products managed by serial numbers or by lots in the GENEALOGY table. The method returns to the calling function the record ID for the correct row in the GENEALOGY table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentSerialNo | Char | No | Parent serial number. |
| Input | ParentLotNo | Char | No | Parent lot number. |
| Input | ParentProductID | Integer | Yes | Parent product id. |
| Input | ChildSerialNo | Char | No | Child serial number. |
| Input | ChildLotNo | Char | No | Child lot number. |
| Input | ChildProductID | Integer | Yes | Child product id. |
| Output | GenealogyExists | Boolean | No | Indicates if record exists. |
| Output | GenealogyID | Integer | No | Id of the genealogy record. |

## Validations

- System proceeds to validate the inputted Parent Serial Number, Parent Lot Number or Parent Product ID: 
 
- Parent Serial Number must exist in the GENEALOGY table, or 
- Parent Lot Number must exist in the GENEALOGY table, and 
- Parent Product ID must exist in the GENEALOGY table. 
 
- System proceeds to validate the inputted Child Serial Number, Child Lot Number or Child Product ID: 
 
- Child Serial Number must exist in the GENEALOGY table, or 
- Child Lot Number must exist in the GENEALOGY table, and 
- Child Product ID must exist in the GENEALOGY table.

## System Processing

- If validation is successful (i.e. a match is found in the GENEALOGY table for the inputs), system proceeds to populate return parameters: 
 
- GenealogyExists = TRUE 
- GenealogyID = ID of existing row. 
 
- Else (i.e. if system fails to validate the existence of the parent-child relationship), the System proceeds to populate return parameters: 
 
- GenealogyExists = FALSE 
- GenealogyID = 0.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | All |  |
