# INSPECTION_CHARACTERISTIC

**Database:** Operational

**Description:** This table is required to support Inspection Characteristics configuration.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Additive | BIT | False |  | False |  | Additive flag. |
| CalculateConformity | BIT | False |  | False |  | Indicates that the conformity of the Characteristic is calculated by an DFC specified as ConformityDFCRevisionFUID. |
| Certificate | BIT | False |  | False |  | Certificate of analysis flag. |
| CharacteristicDecimals | INT(10,0) | True |  | False |  | Characteristic Decimals. |
| CharacteristicRevisionID | INT(10,0) | False |  | False | CHARACTERISTIC_REVISION | Link to Characteristic Revision. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Long text comment. |
| ConformityDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | A reference to the FUID column in the DFC_REVISION table. The DFC is executed to calculate if the test is conforming. |
| DefectCode | NVARCHAR(20) | True |  | False |  | Default defect code. |
| Destructive | BIT | False |  | False |  | Destructive flag. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Characteristic. |
| ID | INT(10,0) | False |  | True |  | Unique ID of Inspection Characteristic. |
| Inherited | BIT | False |  | False |  | Inherit from Master Characteristic flag. |
| InspectionLineID | INT(10,0) | False |  | False | INSPECTION_LINE | Link to parent Inspection Line. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Lower Coherence Limit. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower Control Limit. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower Specification Limit. |
| LSLDefectCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is below the LSL. |
| NoOfReadings | INT(10,0) | True |  | False |  | Number of readings to recorded against disposition test (test sample). |
| ReadingValidation | SMALLINT(5,0) | False |  | False |  | Flag indicating whether the number of readings for the characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must Equal to NoOfReadings, 3 - Can be smaller than NoOfReadings, 4 - Can be larger than NoOfReadings |
| RecordDefect | BIT | False |  | False |  | Flag indicating if defects are created automatically depending on the test result. |
| RecordingType | SMALLINT(5,0) | False |  | False | RECORDING_TYPE | Recording Type. |
| Required | BIT | False |  | False |  | Flag indication if the test to generate from inspection characteristic is required. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Link to resource class. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_TYPE | Resource type. |
| ResultsOnSamples | BIT | False |  | False |  | Flag indication if the test to generate from inspection characteristic is required. |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleSize | INT(10,0) | True |  | False |  | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| SampleUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure for sampling unit quantity. |
| SamplingProcedureID | INT(10,0) | True |  | False | SAMPLING_PROCEDURE | Link to sampling procedure to be used to calculate Sample Size. |
| SequenceNo | INT(10,0) | False |  | False |  | Inspection Characteristic sequence number. |
| Severity | INT(10,0) | True |  | False | DISPOSITION_SEVERITY | Link to Disposition Severity. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target Value. |
| TestMethod | NVARCHAR(40) | True |  | False |  | Free text attribute for inspection method name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure for Target Value. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Upper Coherence Limit. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Upper Control Limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper Specification Limit. |
| USLDefectCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is above the USL. |

## Primary Key

- **PK_INSPECTION_CHARACTERISTIC** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_CHARACTERISTIC_CHARACTERISTIC_REVISION** — INSPECTION_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_DISPOSITION_SEVERITY** — INSPECTION_CHARACTERISTIC -> DISPOSITION_SEVERITY (`Severity -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_INSPECTION_LINE** — INSPECTION_CHARACTERISTIC -> INSPECTION_LINE (`InspectionLineID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_REASON_CODE_LSL** — INSPECTION_CHARACTERISTIC -> REASON_CODE (`LSLDefectCode -> ReasonCode`)
- **FK_INSPECTION_CHARACTERISTIC_REASON_CODE_USL** — INSPECTION_CHARACTERISTIC -> REASON_CODE (`USLDefectCode -> ReasonCode`)
- **FK_INSPECTION_CHARACTERISTIC_RECORDING_TYPE** — INSPECTION_CHARACTERISTIC -> RECORDING_TYPE (`RecordingType -> RecordingType`)
- **FK_INSPECTION_CHARACTERISTIC_RESOURCE_CLASS** — INSPECTION_CHARACTERISTIC -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_RESOURCE_TYPE** — INSPECTION_CHARACTERISTIC -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_INSPECTION_CHARACTERISTIC_SAMPLING_PROCEDURE** — INSPECTION_CHARACTERISTIC -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_UNIT** — INSPECTION_CHARACTERISTIC -> UNIT (`UnitID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_UOM** — INSPECTION_CHARACTERISTIC -> UOM (`UomCode -> UomCode`)
- **FK_INSPECTION_CHARACTERISTIC_UOM_SAMPLE** — INSPECTION_CHARACTERISTIC -> UOM (`SampleUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_CHARACTERISTIC_ATTR_INSPECTION_CHARACTERISTIC** — INSPECTION_CHARACTERISTIC_ATTR -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_RSN_INSPECTION_CHARACTERISTIC** — INSPECTION_CHARACTERISTIC_RSN -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristic -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_CHARACTERISTIC** — INSPECTION_PLAN_RESOURCE -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_INSPECTION_PLAN_SCHEDULE_ADV_INSPECTION_CHARACTERISTIC** — INSPECTION_PLAN_SCHEDULE_ADV -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_UNIT_USAGE_INSPECTION_CHARACTERISTIC** — UNIT_USAGE -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)

## Business Keys (this table -> other)

- INSPECTION_CHARACTERISTIC -> DFC_REVISION (`ConformityDFCRevisionFUID -> FUID`)

## Unique Indexes

- **UK_INSPECTION_CHARACTERISTIC** on `InspectionLineID, SequenceNo`
- **UK_INSPECTION_CHARACTERISTIC_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_INSPECTION_CHARACTERISTIC_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_CHARACTERISTIC_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_INSPECTION_CHARACTERISTIC_DFC_REVISION** on `ConformityDFCRevisionFUID`
- **IF_INSPECTION_CHARACTERISTIC_DISPOSITION_SEVERITY** on `Severity`
- **IF_INSPECTION_CHARACTERISTIC_RESOURCE_CLASS** on `ResourceClassID`
- **IF_INSPECTION_CHARACTERISTIC_SAMPLING_PROCEDURE** on `SamplingProcedureID`
- **IF_INSPECTION_CHARACTERISTIC_UNIT** on `UnitID`
