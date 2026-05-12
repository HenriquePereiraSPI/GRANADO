# RemoveChild3

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyRemover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to facilitate the removing of a child component from a parent within GENEALOGY.
 

The functionality includes the removal of either Serial, Lot or Both tracked components from a Serial, Lot or Both tracked product (parent) being produced.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | GenealogyID | Integer | Yes | Genealogy ID of the genealogy record to be updated. |

## Validations

The System validates the Genealogy ID.

## System Processing

- System proceeds to delete the corresponding GENEALOGY record. 
- Transaction history is recorded.

## Pre-Conditions

See validations.

## History Recording in Production

Transaction history is recorded each time a record is updated in or deleted from the GENEALOGY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | all |  |
