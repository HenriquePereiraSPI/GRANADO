# SAMPLING_SCHEME

**Database:** Operational

**Description:** This table is required to support possibility of defining Sampling Schemes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Sampling Scheme. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Sampling Scheme. |
| SamplingScheme | NVARCHAR(40) | False |  | False |  | Unique sampling scheme name. |
| SamplingSchemeType | SMALLINT(5,0) | False |  | False |  | 1 - Inspection Severity, 2 - Inspection Severity/AQL. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SAMPLING_SCHEME** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SAMPLING_PROCEDURE_SAMPLING_SAMPLING_SCHEME** — SAMPLING_PROCEDURE -> SAMPLING_SCHEME (`SamplingSchemeID -> ID`)
- **FK_SAMPLING_SCHEME_PARAMS_SAMPLING_SCHEME_SAMPLING_SCHEME** — SAMPLING_SCHEME_PARAMS -> SAMPLING_SCHEME (`SamplingSchemeID -> ID`)

## Unique Indexes

- **UK_SAMPLING_SCHEME** on `SamplingScheme`
- **UK_SAMPLING_SCHEME_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
