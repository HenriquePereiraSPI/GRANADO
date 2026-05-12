# SAMPLING_SCHEME_PARAMS

**Database:** Operational

**Description:** This table is required to support possibility of defining details for Sampling Scheme such as Inspection Severity and Acceptable Quality Level value.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AQLValue | DECIMAL(28,10) | True |  | False |  | Default AQL (Acceptable Quality Level) value. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Sampling Scheme Table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Sampling Scheme Detail. |
| InspectionSeverity | SMALLINT(5,0) | False |  | False | INSPECTION_SEVERITY | Default Inspection Severity: 1 - Reduced, 2 - Normal, 3 - Tightened. |
| SamplingSchemeID | INT(10,0) | False |  | False | SAMPLING_SCHEME | Link to Sampling Scheme. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SAMPLING_SCHEME_PARAMS** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLING_SCHEME_PARAMS_SAMPLING_SCHEME_INSPECTION_SEVERITY** — SAMPLING_SCHEME_PARAMS -> INSPECTION_SEVERITY (`InspectionSeverity -> Severity`)
- **FK_SAMPLING_SCHEME_PARAMS_SAMPLING_SCHEME_SAMPLING_SCHEME** — SAMPLING_SCHEME_PARAMS -> SAMPLING_SCHEME (`SamplingSchemeID -> ID`)

## Referenced By (other tables -> this)

- **FK_SAMPLING_PROCEDURE_SAMPLING_SCHEME_PARAMS1** — SAMPLING_PROCEDURE -> SAMPLING_SCHEME_PARAMS (`SamplingSchemeParamsID -> ID`)
- **FK_SAMPLING_SCHEME_TABLE_SAMPLING_SAMPLING_SCHEME_PARAMS** — SAMPLING_SCHEME_TABLE -> SAMPLING_SCHEME_PARAMS (`SamplingSchemeParamsID -> ID`)

## Unique Indexes

- **UK_SAMPLING_SCHEME_PARAMS** on `SamplingSchemeID, InspectionSeverity, AQLValue`
- **UK_SAMPLING_SCHEME_PARAMS_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SAMPLING_SCHEME_PARAMS_SAMPLING_SCHEME_INSPECTION_SEVERITY** on `InspectionSeverity`
