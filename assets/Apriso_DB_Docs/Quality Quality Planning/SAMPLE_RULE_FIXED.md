# SAMPLE_RULE_FIXED

**Database:** Operational

**Description:** The SAMPLE_RULE_FIXED table is used to store the fixed sample rule setting.l To sample 1 unit out of every 10, Sample-Quantity = 1, Constant-Sample-Flag = FALSE and Sample-Per-Quantity = 10. To sample 5 units no matter how large or small the lot or work order quantity is, Sample-Quantity = 5 and Constant-Sample-Flag = TRUE.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConstantSampleFlag | BIT | True |  | False |  | For future use. |
| PerQuantityUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| QuantityUomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the quantity |
| SamplePerQuantity | DECIMAL(28,10) | True |  | False |  | Number of sample per quantity of product |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SamplingRuleCode | NVARCHAR(40) | False |  | True | SAMPLE_RULE | For future use. |

## Primary Key

- **PK_SAMPLE_RULE_FIXED** on `SamplingRuleCode`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_RULE_FIXED_SAMPLE_RULE** — SAMPLE_RULE_FIXED -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_RULE_FIXED_UOM** — SAMPLE_RULE_FIXED -> UOM (`QuantityUomCode -> UomCode`)
- **FK_SAMPLE_RULE_FIXED_UOM1** — SAMPLE_RULE_FIXED -> UOM (`PerQuantityUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
