# CreateLotWithoutValidationList

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create Lot Without Validation List Warehouse

## Description

This Business Component method creates LOT_NO records for the given Lots and Products from the lists.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LotNoList | ListofChar | Yes | A list of Lot numbers to generate. |
| Input | ProductIDList | ListofInteger | Yes | A list of Product IDs to create the Lot records for. |

## Validations

- System checks if lists of LotNoList and ProductIDList are of equal length and all values are provided.

## System Processing

- System creates new records in the LOT_NO table using pairs of parameters from the inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO | LotNo | Iterated through LotNoList. |
|  | ProductID | Iterated through ProductIDList. |
