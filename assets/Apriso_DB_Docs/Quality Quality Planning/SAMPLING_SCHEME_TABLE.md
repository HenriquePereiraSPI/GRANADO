# SAMPLING_SCHEME_TABLE

**Database:** Operational

**Description:** This table is required to determine for a given Sampling Scheme Detail, what is the Sample Size, Acceptance Number and Rejection Number to be used during quality inspection depending on the Lot Size.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| A1 | INT(10,0) | True |  | False |  | Acceptance Number for the first sample. |
| A2 | INT(10,0) | True |  | False |  | Acceptance Number for the second sample. |
| A3 | INT(10,0) | True |  | False |  | Acceptance Number for the third  sample. |
| A4 | INT(10,0) | True |  | False |  | Acceptance Number for the fourth sample. |
| A5 | INT(10,0) | True |  | False |  | Acceptance Number for the fourth sample. |
| A6 | INT(10,0) | True |  | False |  | Acceptance Number for the sixth sample. |
| A7 | INT(10,0) | True |  | False |  | Acceptance Number for the seventh sample. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Sampling Scheme Table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Sampling Scheme Table. |
| LotSize | INT(10,0) | False |  | False |  | Lot size. |
| R1 | INT(10,0) | True |  | False |  | Rejection Number for the first sample. |
| R2 | INT(10,0) | True |  | False |  | Rejection Number for the second sample. |
| R3 | INT(10,0) | True |  | False |  | Rejection Number for the third  sample. |
| R4 | INT(10,0) | True |  | False |  | Rejection Number for the fourth sample. |
| R5 | INT(10,0) | True |  | False |  | Rejection Number for the fifth  sample. |
| R6 | INT(10,0) | True |  | False |  | Rejection Number for the sixth sample. |
| R7 | INT(10,0) | True |  | False |  | Rejection Number for the seventh sample. |
| SampleSize | INT(10,0) | False |  | False |  | Number of units to be inspected for the given Lot. The value must be smaller than the Lot Size. |
| SamplingSchemeParamsID | INT(10,0) | False |  | False | SAMPLING_SCHEME_PARAMS | Link to Sampling Scheme Params. |

## Primary Key

- **PK_SAMPLING_SCHEME_TABLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLING_SCHEME_TABLE_SAMPLING_SAMPLING_SCHEME_PARAMS** — SAMPLING_SCHEME_TABLE -> SAMPLING_SCHEME_PARAMS (`SamplingSchemeParamsID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SAMPLING_SCHEME_TABLE** on `SamplingSchemeParamsID, LotSize`
- **UK_SAMPLING_SCHEME_TABLE_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
