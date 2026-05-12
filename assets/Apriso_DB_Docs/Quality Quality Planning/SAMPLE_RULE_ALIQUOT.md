# SAMPLE_RULE_ALIQUOT

**Database:** Operational

**Description:** An aliquot is one part of a total amount of a gas, liquid, or solid that can be completely divided into equal parts. For example, 5 millilitres is an aliquot of 25 millilitres of a liquid that could be or has been divided into 5 equal Lot-Parts.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LotParts | INT(10,0) | True |  | False |  | The number of equal parts (aliquots) into which a lot is divided |
| SamplingRuleCode | NVARCHAR(40) | False |  | True | SAMPLE_RULE | The sample rule code for fixed, aliquot or probability sampling |

## Primary Key

- **PK_SAMPLE_RULE_ALIQUOT** on `SamplingRuleCode`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_RULE_ALIQUOT_SAMPLE_RULE** — SAMPLE_RULE_ALIQUOT -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
