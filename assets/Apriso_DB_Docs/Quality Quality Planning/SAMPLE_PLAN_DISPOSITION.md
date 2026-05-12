# SAMPLE_PLAN_DISPOSITION

**Database:** Operational

**Description:** Sample plan disposition sequence details

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustmentFactor | INT(10,0) | True |  | False |  | Is the adjustment factor for the adjustment type. This does not apply to truncation. For rounding, this is the number of decimal places to round to. For the ceiling, as an example, a factor of 10 would cause any number from .000000001 to 10 to become 10. |
| AdjustmentType | INT(10,0) | True |  | False |  | Specifies what type of an adjustment is made to the target value, specification limits, control limits, when calculations affect these fields. Valid types are: No adjustment, Truncate, Ceiling, Floor, or Round. |
| AliquotsToSample | INT(10,0) | True |  | False |  | The number of lot parts to sample |
| DestructiveFlag | BIT | True |  | False |  | Destructive (true); non-destructive (false) |
| DispositionSequenceNo | INT(10,0) | False |  | True |  | The disposition line sequence number |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Identifier for the Facility |
| FailurePercentage | DECIMAL(28,10) | True |  | False |  | The estimated failure rate (as a percentage) or zero; if zero, 50% is assumed. |
| HistoryTypeFlag | BIT | True |  | False |  | Indicates whether to use the total failure history or a moving average, when using the failure history |
| LabelContainerFlag | BIT | True |  | False |  | Indicates whether or not sample containers have labels |
| LabelXMLSchemaName | NVARCHAR(255) | True |  | False |  | The XML schema definition containing the data elements within the label |
| MovingAverageDays | INT(10,0) | True |  | False |  | The number of days for determining the historical rate on a moving average basis. |
| SamplePlanID | INT(10,0) | False |  | True | SAMPLE_PLAN | Sample Plan and its Attributes unique identifier |
| SampleQuantityPerContainer | DECIMAL(28,10) | True |  | False |  | The quantity per conatiner for this sample plan |
| SampleRevision | NVARCHAR(20) | True |  | False |  | The sample plan revision identifier or number |
| SamplingPercentage | DECIMAL(28,10) | True |  | False |  | The percentage of gross lot size to be sampled |
| SamplingRuleCode | NVARCHAR(40) | True |  | False | SAMPLE_RULE | The sample rule code for fixed, aliquot or probability sampling |
| SerialContainerFlag | BIT | True |  | False |  | Indicates whether or not a unique serial number is required for each container |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure for sample container quantity |
| UseFailurePercentageHistory | BIT | True |  | False |  | Indicates whether to calculate the failure percentage from the quality history, or use a specific failure percentage |

## Primary Key

- **PK_SAMPLE_PLAN_DISPOSITION** on `SamplePlanID, Facility, DispositionSequenceNo`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_PLAN_DISPOSITION_FACILITY** — SAMPLE_PLAN_DISPOSITION -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_PLAN_DISPOSITION_SAMPLE_PLAN** — SAMPLE_PLAN_DISPOSITION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_SAMPLE_PLAN_DISPOSITION_SAMPLE_RULE** — SAMPLE_PLAN_DISPOSITION -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_PLAN_DISPOSITION_UOM** — SAMPLE_PLAN_DISPOSITION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SAMPLE_PLAN_DISPOSITION_SAMPLE_RULE** on `SamplingRuleCode`
