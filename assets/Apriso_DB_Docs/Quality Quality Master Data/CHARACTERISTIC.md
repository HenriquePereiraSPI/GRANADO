# CHARACTERISTIC

**Database:** Operational

**Description:** This table stores the list of available Characteristics in DELMIA Apriso for Quality tracking or for custom attributes defined for entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustmentFactor | INT(10,0) | True |  | False |  | For future use. |
| AdjustmentType | SMALLINT(5,0) | True |  | False |  | For future use. |
| Characteristic | NVARCHAR(40) | False |  | True |  | The unique identifier of the Characteristic. |
| CharacteristicClassID | INT(10,0) | True |  | False | CHARACTERISTIC_CLASS | The class of the Characteristic. |
| CharacteristicDecimals | INT(10,0) | True |  | False |  | The specific Characteristics decimals allowed when the Characteristic is defined of the Variable type. |
| CharacteristicType | SMALLINT(5,0) | True |  | False | CHARACTERISTIC_TYPE | The type of the Characterisitic (Attribute or Variable) linked to the CHARACTERISTIC_TYPE table. |
| ClassificationFlag | TINYINT(3,0) | True |  | False |  | For future use. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility of the Characteristic. |
| FUID | NVARCHAR(36) | True |  | False |  | The unique identifier for the entity across multiple DELMIA Apriso instances. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | NULL |
| LowerControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | The lower control limit of the Characteristic. |
| LowerSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | The lower specification limit of the Characteristic. |
| NumberOfDispositions | INT(10,0) | True |  | False |  | For future use. |
| Severity | INT(10,0) | True |  | False | DISPOSITION_SEVERITY | NULL |
| TargetValue | DECIMAL(28,10) | True | (0.0) | False |  | The target value of the specification. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM of the Characteristic. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | NULL |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | The upper control limit of the Characteristic. |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | The upper specification limit of the Characteristic. |
| Usage_ | SMALLINT(5,0) | False | (1) | False | CHARACTERISTIC_USAGE | The usage of the Characteristic: 1 - Custom Parameter, 2 - Inspection (for Usage=2 CHARACTERISTIC_REVISION record is required ) |

## Primary Key

- **PK_CHARACTERISTICS** on `Characteristic`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_CHARACTERISTIC_CLASS** — CHARACTERISTIC -> CHARACTERISTIC_CLASS (`CharacteristicClassID -> ID`)
- **FK_CHARACTERISTIC_CHARACTERISTIC_TYPE** — CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_CHARACTERISTIC_CHARACTERISTIC_USAGE** — CHARACTERISTIC -> CHARACTERISTIC_USAGE (`Usage_ -> CharacteristicUsage`)
- **FK_CHARACTERISTIC_DISPOSITION_SEVERITY** — CHARACTERISTIC -> DISPOSITION_SEVERITY (`Severity -> ID`)
- **FK_CHARACTERISTIC_FACILITY** — CHARACTERISTIC -> FACILITY (`Facility -> Facility`)
- **FK_CHARACTERISTIC_GRADE** — CHARACTERISTIC -> GRADE (`GradeID -> ID`)
- **FK_CHARACTERISTICS_UOM** — CHARACTERISTIC -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_CHARACTERISTIC** — ALERT_DETAIL -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_ATTRIBUTES_CHARACTERISTICS** — ATTRIBUTE -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_GROUP_CHARACTERISTIC** — CHARACTERISTIC_GROUP -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_REASON_CHARACTERISTIC** — CHARACTERISTIC_REASON -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_REVISION_CHARACTERISTIC** — CHARACTERISTIC_REVISION -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_SEVERITY_CHARACTERISTIC** — CHARACTERISTIC_SEVERITY -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_SPC_CHART_CHARACTERISTIC** — COMMON_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_DISPOSITION_LINE_SAMPLE_CONTAINER_TEST_CHARACTERISTIC** — DISPOSITION_TEST -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_DISPOSITION_READING_CHARACTERISTIC** — DISPOSITION_READING -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_SPC_CHART_CHARACTERISTIC** — SPC_CHART -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_SPECIFICATION_CHARACTERISTICS_CHARACTERISTICS** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_STEP_CHARACTERISTIC_CHARACTERISTIC** — STEP_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_UNIT_CHARACTERISTIC_CHARACTERISTIC** — UNIT_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC (`Characteristic -> Characteristic`)

## Unique Indexes

- **UK_CHARACTERISTIC** on `FUID`

## Non-Unique Indexes

- **IDX_CHARACTERISTIC_CLASSIFICATIONID** on `ClassificationID`
- **IF_CHARACTERISTIC_CHARACTERISTIC_CLASS** on `CharacteristicClassID`
- **IF_CHARACTERISTIC_CHARACTERISTIC_USAGE** on `Usage_`
- **IF_CHARACTERISTIC_DISPOSITION_SEVERITY** on `Severity`
- **IF_CHARACTERISTIC_DSID** on `DSID`
- **IF_CHARACTERISTIC_GRADE** on `GradeID`
