# SAMPLE_RULE

**Database:** Operational

**Description:** The SAMPLE_RULE table is used by quality to store all the data for a sample plan where A Sample Plan Rule allows the application of fixed, aliquot and probability sampling techniques

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| RuleType | SMALLINT(5,0) | True |  | False |  | The rule type, available rule types include: Fixed, Probability and Aliquot (Probability and Aliquot are for future use). |
| SamplingRuleCode | NVARCHAR(40) | False |  | True |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SAMPLE_RULE** on `SamplingRuleCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SAMPLE_PLAN_DISPOSITION_SAMPLE_RULE** — SAMPLE_PLAN_DISPOSITION -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_PLAN_SAMPLE_RULE** — SAMPLE_PLAN -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_RULE_ALIQUOT_SAMPLE_RULE** — SAMPLE_RULE_ALIQUOT -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_RULE_FIXED_SAMPLE_RULE** — SAMPLE_RULE_FIXED -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_RULE_PROBABILITY_SAMPLE_RULE** — SAMPLE_RULE_PROBABILITY -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
