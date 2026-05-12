# DeleteWeighLine

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Delete Weigh Line

## Description

This method deletes the Weigh Line record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighLineID | Integer | Yes | The ID of a Weigh Line record. |

## Validations

- System validates if Weigh Line record exists.

## System Processing

- System removes specified Weigh Line record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE | ID | WeighLineID; the record is deleted by the BC. |
