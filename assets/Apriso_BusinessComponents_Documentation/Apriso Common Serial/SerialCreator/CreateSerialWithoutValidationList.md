# CreateSerialWithoutValidationList

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create Serial Without Validation List Warehouse

## Description

This Business Component method creates SERIAL_NO records for the given Product, Serial and Lot numbers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDList | ListofInteger | Yes | A list of Product IDs to create the Serial numbers for. |
| Input | SerialNoList | ListofChar | Yes | Serial numbers to create. |
| Input | LotNoList | ListofChar | No | Optional Lot numbers of the Serial numbers. |

## Validations

- System checks if ProductIDList and SerialNoList lists are of equal length and all values are provided. 
- If LotNoList is provided, it must be of the same length as Product and Serial lists. Empty values are acceptable.

## System Processing

- System creates new records in SERIAL_NO table using input parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | ProductID | Iterated through ProductIDList. |
|  | SerialNo | Iterated through SerialNoList. |
|  | LotNo | Iterated through LotNoList. |
