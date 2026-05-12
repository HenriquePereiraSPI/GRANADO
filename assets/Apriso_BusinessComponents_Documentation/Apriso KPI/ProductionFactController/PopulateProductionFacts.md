# PopulateProductionFacts

**Category:** Apriso/KPI
**Class:** `FlexNet.BusinessFacade.Performance.ProductionFactController`
**Assembly:** `FlexNet.BusinessFacade.Performance.dll`
**Status:** Active

## Description

This method is used to Populate ProductionFact table based on data retrieved by executing the stored procedures specified in the config file with key "CalculateProductionFactSPName".
 

It is periodically executed to calculate metrics like GoodQuantity, ScrapQuantity, FailedQuantity etc for the WIP orders. This is built specifically for Essilor and is not supported with standard functionality.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input |  | Integer | No |  |

## System Processing

- The method identifies the list of WIP Orders, from the RESOURCE_LABOR table, that needs to be calculated since the last time the method was executed . For each of the WIP Order the specified stored procedure is executed. 
- The stored procedure calculates the values that needs to be inserted in the PRODUCTION_FACT table.  
- The result of the stored procedure is used to insert or update PRODUCTION_FACT table.

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCTION_FACT | ResourceName |  |
|  | ResourceType |  |
|  | ProductionDay |  |
|  | Shift |  |
|  | ClockTime |  |
|  | GoodQuantity |  |
|  | IdleTime |  |
|  | PlannedDownTime |  |
|  | RunTime |  |
|  | ScrapQuantity |  |
|  | SetupQuantity |  |
|  | SetupTime |  |
|  | StdCycleTime |  |
|  | StdParts |  |
|  | TearDownQuantity |  |
|  | TearDownTime |  |
|  | TotalOtherQuantity |  |
|  | TotalOtherTime |  |
|  | UnplannedDownTime |  |
