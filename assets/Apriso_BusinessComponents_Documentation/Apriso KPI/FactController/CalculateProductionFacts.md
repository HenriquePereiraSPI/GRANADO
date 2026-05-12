# CalculateProductionFacts

**Category:** Apriso/KPI
**Class:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.FactController`
**Assembly:** `FlexNet.PerformanceDashboard.BusinessFacade.Kpi.dll`
**Status:** Deprecated

## Description

This Business Component method is used to calculate the production facts. This BC also creates PRODUCTION_DAY_SHIFT records. 
 

The underlying data in the operational database must conform to the following rules:
 
 
-  

All RESOURCES must be linked to a Facility.
  
-  

The Facility MUST be linked to a ROTATING_WORK_SCHEDULE.
  
-  

The ROTATING_WORK_SCHEDULE_DETAIL records of the schedule must NOT overlap.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | The Facility to calculate production facts. |

## Validations

- The system checks that the inputted Facility is valid and has a Rotating Schedule associated with it.

## System Processing

- The system validates the Rotating Schedule.  
- The system then checks where the last production day shift exists. If not found, the production day shift records are created from the start of the year. 
- The production day shift records are then created for everyday up until today.  
- All the changed Resource labor records are retrieved from the system. From there, the production facts are calculated and the PRODUCTION_FACT records are created with a link to the PRODUCTION_DAY_SHIFT record.  
- Additional details of this BC can be found in this Stored Procedure: flx_spProductionFactSelectByWipOrder.

## Pre-Conditions

- Create PRODUCTION_FACT and PRODUCTION_DAY_SHIFT records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCTION_FACT | ID | The ID of the field (auto increment). |
|  | ResourceName | The Resource name. |
|  | ResourceType | The Resource type. |
|  | TimeFrom | The time from the start of the shift. This time should not be used, but the time in the PRODUCTION_DAY_SHIFT table should be used. |
|  | TimeTo | The time from the start of the shift. This time should not be used, but the time in the PRODUCTION_DAY_SHIFT table should be used. |
|  | ClockTime | The total time the Resource was available in the shift (in seconds). |
|  | UnplannedDownTime | The total unplanned downtime of the Resource over the shift period (in seconds). |
|  | PlannedDownTime | The total planned downtime of the Resource over the shift period (in seconds). |
|  | RunTime | The total runtime of the Resource over the shift period (in seconds). |
|  | TotalOtherTime | The total other time of the Resource over the shift period (in seconds). |
|  | DurationUomCode | Not used (in seconds). |
|  | GoodQuantity | The amount of good quantity produced during the shift. |
|  | ScrapQuantity | The amount of scrap quantity produced during the shift. |
|  | TotalOtherQuantity | The amount of other quantity produced during the shift. |
|  | QuantityUomCode | The UOM of the quantity being reported. |
|  | StdCycleTime | The rate of production for the machine for the shift. |
|  | StdParts | The standard parts. |
|  | WipOrderNo | Not used. |
|  | WipOrderType | Not used. |
|  | OprSequenceNo | Not used. |
|  | ProductionDay | Not used. |
|  | PayRule | Not used. |
|  | Shift | Not used. |
|  | WorkPeriod | Not used. |
|  | EffectiveDate | Not used. |
|  | Facility (Required) | The Facility at which the reporting was being done (from Input). |
|  | Department | The Department of the Resource. |
|  | WorkCenter | The Work Center associated with the Resource. |
|  | ProcessedOn | The date the production fact was generated/updated. |
|  | NoOfReports | Not used. |
|  | Equipment | Not used. |
|  | EmployeeNo | Not used. |
|  | SetupTime | The total setup time for the shift. |
|  | TearDownTime | The total tear-down time for the shift. |
|  | IdleTime | The total idle time for the shift. |
|  | SetupQuantity | The total setup quantity for the shift. |
|  | TearDownQuantity | The total tear-down quantity for the shift. |
|  | ProductNo | Not used. |
|  | ProductionDayShiftID | The link to the PRODUCTION_DAY_SHIFT record. |
|  | ProductionDayShift | Not used. |
| PRODUCTION_DAY_SHIFT | ID | The ID of the field (auto increment). |
|  | ProductionDayID | The link to the production day. |
|  | ProductionDay | The date of the production day. |
|  | ProductionDayShift | The shift ID. |
|  | ScheduleStartTime | The start time of the shift. |
|  | ScheduleEndTime | The end time of the shift. |
|  | Facility (Required) | The Facility of the schedule (from Input). |
