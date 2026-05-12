# DeleteWeighLineDetail

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Delete Weigh Line Detail

## Description

This method deletes the Weigh Line Detail record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighLineDetailID | Integer | Yes | The ID of a Weigh Line Detail record. |

## Validations

- System validates if Weigh Line Detail record exists.

## System Processing

- System removes specified Weigh Line Detail record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE_DETAIL | ID | WeighLineDetailID; the record is deleted by the BC. |
