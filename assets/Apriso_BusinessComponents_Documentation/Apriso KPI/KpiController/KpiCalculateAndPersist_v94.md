# KpiCalculateAndPersist_v94

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.KpiController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

This business component method is used to calculate and persist KPIs. This is done by using the KPI setup in the PD Administrator and the KPI Context query entered into the business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KpiName | Char | Yes | The KPI to be calculated. |
| Input | CalculationEntitySelectQuery | Char | Yes | The context query that is used to calculate the KPI. |
| Input | AddKPIHistory | Boolean | Yes | Indicates if the KPI history needs to be persisted. |
| Input | AddTermHistory | Boolean | Yes | Indicates if the term history needs to be persisted. |
| Input | StartTimeSpecified | Boolean | Yes | Indicate if StartTime is specified. |
| Input | StartTime | DateTime | Yes | Specifies the KPI calculation start time. |
| Input | EndTimeSpecified | Boolean | Yes | Indicates if the end time is specified. |
| Input | EndTime | DateTime | Yes | Specify the KPI calculation end time. |

## Validations

- The system verifies if the KPI entered is valid and exists. 
- The system verifies if the KPI Context Query was entered.

## System Processing

- The system opens the KPI Context Query. 
- For every record in the KPI Context Query: 
 
- The Time From Term is calculated. 
 
- This returns a date. 
 
- The Time To Term is calculated. 
 
- This returns a date. 
 
- The system retrieves all terms from the KPI Expression. 
- For each term: 
 
- The term is calculated - substituting values from the KPI Context Query with the inputs to the stored procedure/business component. 
 
- All terms in the KPI calculations are substituted with the term value. 
- The expression is calculated. 
 
- The system verifies if the KPI_VALUE record exists. 
- If it does: 
 
- The system updates the KPI Times and Value. 
 
- Otherwise: 
 
- The system adds a new record. 
 
- If AddKPIHistory input is "TRUE", data is persisted to the KPI_VALUE_HISTORY table. 
- If AddTermHistory input is "TRUE", data is persisted to the KPI_TERM_HISTORY table. 
 
 
- End Loop

## Pre-Conditions

The KPI is set up and configured correctly.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| KPI_VALUE | ID |  |
|  | KpiName (Required) | KPIName |
|  | Value | Calculated Value |
|  | TimeFrom |  |
|  | TimeTo |  |
|  | ClientName |  |
|  | PreviousValue |  |
|  | CalculationTime |  |
|  | LastCalculationTime |  |
|  | AverageValue |  |
|  | StdDevValue |  |
|  | Key1 - Key10 | From context query when available |
|  | Trend |  |
|  | TrendPercentage |  |
|  | UomCode |  |
|  | RefKPIValueID |  |
|  | LowerSpecLimit |  |
|  | LowerControlLimit |  |
|  | TargetValue |  |
|  | UpperControlLimit |  |
|  | UpperSpecLimit |  |
|  | Indicator |  |
| KPI_VALUE_HISTORY | ID |  |
|  | KpiValueID |  |
|  | Value_ |  |
|  | PreviousValue |  |
|  | TimeFrom |  |
|  | TimeTo |  |
|  | CalculationTime |  |
|  | AverageValue |  |
|  | StdDevValue |  |
|  | Trend |  |
|  | TrendPercentage |  |
|  | RefKPIValueHistoryID |  |
|  | ClientName |  |
|  | LowerSpecLimit |  |
|  | LowerControlLimit |  |
|  | TargetValue |  |
|  | UpperControlLimit |  |
|  | UpperSpecLimit |  |
|  | Indicator |  |
| KPI_TERM_HISTORY | ID |  |
|  | KPIValueHistoryID |  |
|  | Name |  |
|  | ParentTermHistoryID |  |
|  | Value_ |  |
|  | UomCode |  |
|  | RefKPITermHistoryID |  |
