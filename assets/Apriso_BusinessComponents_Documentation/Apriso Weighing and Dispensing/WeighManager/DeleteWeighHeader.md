# DeleteWeighHeader

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Delete Weigh Header

## Description

This method deletes the Weigh Header record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighHeaderID | Integer | Yes | The ID of a Weigh Header record. |

## Validations

- System validates if Weigh Header record exists.

## System Processing

- System removes specified Weigh Header record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID; the record is deleted by the BC. |
