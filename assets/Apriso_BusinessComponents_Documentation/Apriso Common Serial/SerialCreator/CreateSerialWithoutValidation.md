# CreateSerialWithoutValidation

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create Serial Without Validation Warehouse

## Description

This Business Component method creates a SERIAL_NO record for the given Product, Serial and Lot number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID to create the Serial number for. |
| Input | SerialNo | Char | Yes | Serial number to create. |
| Input | LotNo | Char | No | Optional Lot number of the Serial number. |

## Validations

- System checks if ProductID and SerialNo are provided.

## System Processing

- System creates a new record in SERIAL_NO table using input parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO | ProductID | ProductID |
|  | SerialNo | SerialNo |
|  | LotNo | LotNo |
