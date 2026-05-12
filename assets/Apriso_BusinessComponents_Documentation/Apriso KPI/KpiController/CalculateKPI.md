# CalculateKPI

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.KpiController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Active

## Description

This business component method is used to calculate a KPI. The validations and calculations are the same as in KpiCalculateAndPersist_v94. The calculation is persisted based on the PersistKPIValue input. This BC returns the calculated values, associated key values, and tolerances.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KpiName | Char | Yes | The KPI to be calculated. |
| Input | CalculationEntitySelectQuery | Char | Yes | The context query that is used to calculate the KPI. |
| Input | PersistKPIValue | Boolean | Yes | Indicates if the KPI value needs to be persisted. |
| Input | AddKPIHistory | Boolean | Yes | Indicates if the KPI history needs to be persisted. |
| Input | AddTermHistory | Boolean | Yes | Indicates if the term history needs to be persisted. |
| Input | StartTimeSpecified | Boolean | Yes | Indicates if StartTime is specified. |
| Input | StartTime | DateTime | No | Specifies the KPI calculation start time. |
| Input | EndTimeSpecified | Boolean | Yes | Indicates if the end time is specified. |
| Input | EndTime | Boolean | No | Specifies the KPI calculation end time. |
| Output | Key1 | ListOfChar | No | From the context query. |
| Output | Key2 | ListOfChar | No | From the context query. |
| Output | Key3 | ListOfChar | No | From the context query. |
| Output | Key4 | ListOfChar | No | From the context query. |
| Output | Key5 | ListOfChar | No | From the context query. |
| Output | Key6 | ListOfChar | No | From the context query. |
| Output | Key7 | ListOfChar | No | From the context query. |
| Output | Key8 | ListOfChar | No | From the context query. |
| Output | Key9 | ListOfChar | No | From the context query. |
| Output | Key10 | ListOfChar | No | From the context query. |
| Output | Value | ListofDecimal | No | The calculated value. |
| Output | Indicator | ListofDecimal | No | Indicates if the value is within tolerance. |
| Output | Trend | ListofDecimal | No | Indicates if the values is trending up or down. |
| Output | TrendPercentage | ListofDecimal | No | The value change in percentage. |
| Output | PreviousValue | ListofDecimal | No | The value of the previous calculation. |
| Output | LowerSpecLimit | ListofDecimal | No | The configured lower specification limit. |
| Output | LowerControlLimit | ListofDecimal | No | The configured lower control limit. |
| Output | TargetValue | ListofDateTime | No | The configured target value. |
| Input | UpperControlLimit | ListofDecimal | No | The configured upper control limit. |
| Input | UpperSpecLimit | ListofDecimal | No | The configured upper specification limit. |
| Input | ClientName | ListOfChar | No | From the KPI configuration. |

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
 
- The term is calculated by substituting values from the KPI Context Query with the inputs to the stored procedure/business component. 
 
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
