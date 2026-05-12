# SAMPLING_PROCEDURE

**Database:** Operational

**Description:** This table is required to support possibility of defining different kind of sampling procedures that calculates Sample Size.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AcceptanceNo | INT(10,0) | True |  | False |  | The highest number of nonconforming units that would still allow accepting the test (for attributive characteristics). |
| AcceptanceNoPercentage | DECIMAL(28,10) | True |  | False |  | Acceptance Number as a percentage of the Sample Size. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Sampling Procedure. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the sampling procedure. |
| SampleSize | INT(10,0) | True |  | False |  | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| SampleSizePercentage | DECIMAL(28,10) | True |  | False |  | Percentage of the population (in units) to be inspected. |
| SamplingProcedure | NVARCHAR(40) | False |  | False |  | Sampling Procedure name (unique identifier). |
| SamplingSchemeID | INT(10,0) | True |  | False | SAMPLING_SCHEME | Sampling Scheme identifier. |
| SamplingSchemeParamsID | INT(10,0) | True |  | False | SAMPLING_SCHEME_PARAMS | Link to the Sampling scheme parameters. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | False |  | 1-Fixed Size, 2-Percentage, 3-Use Scheme. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_SAMPLING_PROCEDURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLING_PROCEDURE_SAMPLING_SAMPLING_SCHEME** — SAMPLING_PROCEDURE -> SAMPLING_SCHEME (`SamplingSchemeID -> ID`)
- **FK_SAMPLING_PROCEDURE_SAMPLING_SCHEME_PARAMS1** — SAMPLING_PROCEDURE -> SAMPLING_SCHEME_PARAMS (`SamplingSchemeParamsID -> ID`)
- **FK_SAMPLING_PROCEDURE_UNIT** — SAMPLING_PROCEDURE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_LINE_SAMPLING_PROCEDURE** — DISPOSITION_LINE -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_DISPOSITION_SAMPLING_PROCEDURE** — DISPOSITION -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLING_PROCEDURE** — DISPOSITION_TEST -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_SAMPLING_PROCEDURE** — INSPECTION_CHARACTERISTIC -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)

## Unique Indexes

- **UK_SAMPLING_PROCEDURE** on `SamplingProcedure`
- **UK_SAMPLING_PROCEDURE_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SAMPLING_PROCEDURE_SAMPLING_SAMPLING_SCHEME** on `SamplingSchemeID`
- **IF_SAMPLING_PROCEDURE_SAMPLING_SCHEME_PARAMS1** on `SamplingSchemeParamsID`
- **IF_SAMPLING_PROCEDURE_UNIT** on `UnitID`
