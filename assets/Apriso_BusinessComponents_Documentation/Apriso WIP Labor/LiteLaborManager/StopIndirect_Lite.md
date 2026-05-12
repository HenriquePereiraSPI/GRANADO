# StopIndirect_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** StopIndirectLite, Stop, Indirect, Lite, StopIndirect, IndirectLite, LiteLabor, Labor

## Description

Closes a LITE_LABOR record with indirect LaborType.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LiteLaborID | Integer | Yes | ID of an existing LITE_LABOR record. |
| Input | ActivityTime | DateTime | Yes | Time that indicates the end of the activity. The value must be specified as local (it is automatically converted and stored as UTC). |

## Validations

Validation fails if:
 
 
- The LITE_LABOR record referenced by LITE_LABOR.ID does not exist. 
- ActivityTime is not later than the LITE_LABOR record's StartTime. ActivityTime is converted to UTC and then compared to StartTime. 
- The LITE_LABOR record's LaborStatus is not open. 
- the LITE_LABOR record's LaborType is not indirect.

## System Processing

- Inputs are run through all validations. 
- ActivityTime is stored as LITE_LABOR.EndTimeLocal. 
- The ActivityTime input is converted to UTC using the LITE_LABOR record's TimeZoneID, and stored as EndTime. 
- LITE_LABOR.DurationInSeconds is calculated as EndTime minus StartTime. 
- LITE_LABOR.LaborStatus is set to Closed.

## Pre-Conditions

Pre-Condition: A LITE_LABOR record exists with LaborStatus set to open and LaborType set to indirect.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.LiteLabor.LiteLaborManager.StopIndirectLite 
- TRANSACTION_HISTORY_LABOR 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_PROP_BAG

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | EndTimeLocal | End Time based on the record's TimeZoneID |
|  | EndTime | UTC End Time |
|  | DurationInSeconds | Duration from StartTime to EndTime in seconds |
|  | LaborStatus | Labor Status |
