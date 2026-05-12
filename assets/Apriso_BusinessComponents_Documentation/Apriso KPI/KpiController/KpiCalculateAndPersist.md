# KpiCalculateAndPersist

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.KpiController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

The purpose of this Business Component is to calculate and persist KPIs. This is done by using the KPI setup in the PD Administrator and the KPI Context query entered into the business component.
 

This is the only way to calculate a KPI.
 

NOTE - IF THE KPI REQUIRES CALCULATIONS USING THE PRODUCTION_FACT TABLE - PLEASE ENSURE THAT THE PRODUCTION FACTS COMPONENTS ARE RUN FIRST!!!

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KpiName | Char | Yes | This is the KPI to be calculated. |
| Input | KpiWhereClauseForLoopControl | Char | Yes | This is the context query that is used to calculate the KPI. |

## Validations

- System checks that the KPI entered is valid and exists. 
- System checks that the KPI Context Query was entered. 
- System validates the KPI Context Query and checks that it returns more than one row.

## System Processing

- System opens the KPI Context Query. 
- For every record in the KPI Context Query - the following in done: 
 
- The Time From Term is calculated. 
 
- This returns a date. 
 
- The Time To Term is calculated. 
 
- This returns a date. 
 
- System retrieves all the terms from the KPI Expression. 
- For each Term the following is done. 
 
- The term is calculated - substituting values from the KPI Context Query with the inputs to the stored procedure/business component. 
 
- All the Terms in the KPI Calculations are substituted with the term value. 
- The Expression is then Calculated 
- If the Default Strategy on the KPI is 2 (Re-Calculate) then, 
 
- Checks if an existing KPI_VALUE record exists. 
- If is does then, 
 
 
- Update the KPI Times and Value 
 
 
- Else, 
 
 
- Add new Record 
 
- Else, creates a new KPI_VALUE record and assigns the value to it. 
- If the KPI's Context SourceTable is "PRODUCTION_FACT" 
 
- Link the production fact to the table. 
 
 
- End Loop

## Pre-Conditions

The KPI is setup and configured correctly.

## History Recording in Production

KPI_VALUE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| KPI_VALUE | ID |  |
|  | KpiName (Required) | KPIName |
|  | RoleID |  |
|  | ProductionFactID |  |
|  | Value_ |  |
|  | TimeFrom |  |
|  | TimeTo |  |
|  | KpiLevelID |  |
|  | OrderFactID |  |
