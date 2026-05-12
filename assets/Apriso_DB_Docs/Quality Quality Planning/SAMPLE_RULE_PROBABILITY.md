# SAMPLE_RULE_PROBABILITY

**Database:** Operational

**Description:** Distribution-Function-Flag denotes the theoretical cumulative distribution function for sample sizing.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustForFinitePopulationFlag | BIT | True |  | False |  | Adjust sample for finite lot or work order quantity (true); do not adjust sample for finite lot or work order quantity (false). |
| DistributionFunctionFlag | SMALLINT(5,0) | True |  | False |  | Normal, binomial, hypergeometric, Student-t, Chi-square, Fisher-F |
| LevelOfConfidence | DECIMAL(28,10) | True |  | False |  | The confidence level for probability sample sizing |
| SamplingRuleCode | NVARCHAR(40) | False |  | True | SAMPLE_RULE | The sample rule code for fixed, aliquot or probability sampling |

## Primary Key

- **PK_SAMPLE_RULE_PROBABILITY** on `SamplingRuleCode`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_RULE_PROBABILITY_SAMPLE_RULE** — SAMPLE_RULE_PROBABILITY -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
