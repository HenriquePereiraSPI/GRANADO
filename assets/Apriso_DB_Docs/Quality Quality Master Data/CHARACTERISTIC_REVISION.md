# CHARACTERISTIC_REVISION

**Database:** Operational

**Description:** Stores the list of revision of characteristics in Apriso for quality tracking or for custom attributes defined for entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Additive | BIT | False | (0) | False |  | For For future use.. Flag applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that total size of partial sample calculated based on the sample plan is increased by SampleSize of test |
| Calculated | BIT | False | (0) | False |  | Flag indicating that the value of the characteristic is calculated by DFC specified as DFCRevisionFUID |
| Certificate | BIT | False | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used in the Certificate of Analysis |
| Characteristic | NVARCHAR(40) | False |  | False | CHARACTERISTIC | Reference to the characteristic |
| CharacteristicDecimals | INT(10,0) | True |  | False |  | Characteristic Decimals |
| CharacteristicStatusID | INT(10,0) | True |  | False | CHARACTERISTIC_REV_STATUS | Reference to the status of the characteristic revision |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is outside of specification limits (applicable only for characteristics of type: Variable) |
| Destructive | BIT | False | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used to calculate, display the control or run chartsFlag indicating that the sample quantity used for the test will be destroyed |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. The DFC is executed to calculate the test value. |
| DiscontinueDate | DATETIME | True |  | False |  | The date of discontinuation of the revision of the characteristic |
| DSID | NVARCHAR(100) | True |  | False |  | DELIMA 3D EXPERIENCE Universal Unique ID aka Physical ID. |
| DSName | NVARCHAR(100) | True |  | False |  | DELIMA 3D EXPERIENCE Name. |
| EffectiveDate | DATETIME | True |  | False |  | The date the revision of the characteristic is effective on |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Characteristic Revision record |
| LHLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the charasteristic is Lower Coherence Limit (applicable only for characteristics of type: Variable). |
| LowerCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Lower Coherence Limit of the Characteristic. |
| LowerControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower Control Limit |
| LowerSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower Specification Limit |
| LSLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is above the Lower Specification Limit (applicable only for characteristics of type: Variable) |
| NoOfReadings | INT(10,0) | True |  | False |  | Number of readings of the value for the characteristic. Applies only for test that are executed by reading multiple values (DISPOSITION_READING) |
| OverrideSumResults | BIT | False | (0) | False |  | Flag indicating that the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING) |
| OwnerEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the owner employee. |
| ReadingValidation | SMALLINT(5,0) | False | (1) | False |  | Flag indicating whether the number of readings for the characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must Equal to NoOfReadings, 3 - Can be smaller then NoOfReadings, 4 - Can be large |
| RecordDefect | BIT | False | (0) | False |  | Flag indicating if quality defects are created automatically depending on the test result |
| RecordingType | SMALLINT(5,0) | True |  | False | RECORDING_TYPE | Type of result recording. Depending on this type the test results are recorded in the different form. Detailed, Classed, Detailed, Summarized, Custom |
| Required | BIT | False | (0) | False |  | Flag indicating if the test of the given characteristic is required or optional |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Link to resource class. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_TYPE | Resource type. |
| Revision | NVARCHAR(40) | False |  | False |  | Revision of the characteristic |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure for quantity per sample |
| SPCCharacteristic | BIT | False | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used to calculate, display the control or run charts |
| TargetValue | DECIMAL(28,10) | True | ((0.0)) | False |  | Target Value. |
| UHLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the charasteristic is Upper Coherence Limit (applicable only for characteristics of type: Variable). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable |
| UpperCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Upper Coherence Limit of the Characteristic. |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Control Limit |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Specification limit |
| USLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the characteristic is above the Upper Specification Limit (applicable only for characteristics of type: Variable) |

## Primary Key

- **PK_CHARACTERISTIC_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_REVISION_CHARACTERISTIC** — CHARACTERISTIC_REVISION -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_REVISION_CHARACTERISTIC_REV_STATUS** — CHARACTERISTIC_REVISION -> CHARACTERISTIC_REV_STATUS (`CharacteristicStatusID -> ID`)
- **FK_CHARACTERISTIC_REVISION_EMPLOYEE** — CHARACTERISTIC_REVISION -> EMPLOYEE (`OwnerEmployeeID -> ID`)
- **FK_CHARACTERISTIC_REVISION_REASON_CODE** — CHARACTERISTIC_REVISION -> REASON_CODE (`DefectReasonCode -> ReasonCode`)
- **FK_CHARACTERISTIC_REVISION_REASON_CODE1** — CHARACTERISTIC_REVISION -> REASON_CODE (`LSLDefectReasonCode -> ReasonCode`)
- **FK_CHARACTERISTIC_REVISION_REASON_CODE2** — CHARACTERISTIC_REVISION -> REASON_CODE (`USLDefectReasonCode -> ReasonCode`)
- **FK_CHARACTERISTIC_REVISION_REASON_CODE3** — CHARACTERISTIC_REVISION -> REASON_CODE (`UHLDefectReasonCode -> ReasonCode`)
- **FK_CHARACTERISTIC_REVISION_REASON_CODE4** — CHARACTERISTIC_REVISION -> REASON_CODE (`LHLDefectReasonCode -> ReasonCode`)
- **FK_CHARACTERISTIC_REVISION_RECORDING_TYPE** — CHARACTERISTIC_REVISION -> RECORDING_TYPE (`RecordingType -> RecordingType`)
- **FK_CHARACTERISTIC_REVISION_RESOURCE_CLASS** — CHARACTERISTIC_REVISION -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_CHARACTERISTIC_REVISION_RESOURCE_TYPE** — CHARACTERISTIC_REVISION -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_CHARACTERISTIC_REVISION_UNIT** — CHARACTERISTIC_REVISION -> UNIT (`UnitID -> ID`)
- **FK_CHARACTERISTIC_REVISION_UOM** — CHARACTERISTIC_REVISION -> UOM (`UomCode -> UomCode`)
- **FK_CHARACTERISTIC_REVISION_UOM1** — CHARACTERISTIC_REVISION -> UOM (`SampleUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_REV_ATTRIBUTE_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_ATTRIBUTE -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_CHARACTERISTIC_REV_CODE_GROUP_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_CODE_GROUP -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_CHARACTERISTIC_REV_GROUP_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_GROUP -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_CHARACTERISTIC_REV_RESOURCE_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_RESOURCE -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_DISPOSITION_TEST_CHARACTERISTIC_REVISION** — DISPOSITION_TEST -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV** — ECM_ORDER_CHARACTERISTIC_REV -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV_DEST** — ECM_ORDER_CHARACTERISTIC_REV -> CHARACTERISTIC_REVISION (`CharacteristicRevisionDestID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_CHARACTERISTIC_REVISION** — INSPECTION_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_INSPECTION_DET_CHARACTERISTIC_CHARACTERISTIC_REVISION** — INSPECTION_DET_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_PRODUCT_CHARACTERISTIC_CHARACTERISTIC_REVISION** — PRODUCT_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_QUALITY_DEFECT_CHARACTERISTIC_REVISION** — QUALITY_DEFECT -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC_REVISION** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_SPC_CHART_CHARACTERISTIC_REVISION** — SPC_CHART -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_SPECIFICATION_CHARACTERISTIC_CHARACTERISTIC_REVISION** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_STEP_CHARACTERISTIC_CHARACTERISTIC_REVISION** — STEP_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC_REVISION** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)

## Business Keys (this table -> other)

- CHARACTERISTIC_REVISION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)

## Unique Indexes

- **UK_CHARACTERISTIC_REVISION** on `Characteristic, Revision`

## Non-Unique Indexes

- **IF_CHARACTERISTIC_REVISION_CHARACTERISTIC_REV_STATUS** on `CharacteristicStatusID`
- **IF_CHARACTERISTIC_REVISION_DFC** on `DFCRevisionFUID`
- **IF_CHARACTERISTIC_REVISION_DSID** on `DSID`
- **IF_CHARACTERISTIC_REVISION_RESOURCE_CLASS** on `ResourceClassID`
- **IF_CHARACTERISTIC_REVISION_UNIT** on `UnitID`
