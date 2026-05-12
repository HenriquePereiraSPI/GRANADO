# DFC_REVISION

**Database:** Solution Authoring

**Description:** Stores a revision definition of a data flow control (DFC).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowPrototypeEdit | BIT | False | ((1)) | False |  | Indicates if an entity can be edited in the prototype status. |
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| CompilationDate | DATETIME | True |  | False |  | DFC compilation date. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | String identifying computer where compilation (release) was done. Name of the last environment where the entity status was changed to active or prototype. |
| CompilationMask | NVARCHAR(40) | True |  | False |  | Contains string with the asterisk (*) character. |
| CompilationStatus | SMALLINT(5,0) | True |  | False |  | Compilation status of a DFC: 1 - Compiled, 2 - Regeneration Failed, 3 - Requires Synchronization (for future use). |
| CompilationVersion | INT(10,0) | True |  | False |  | Auto-incremented number of an entity version increased whenever the entity status is changed to active or prototype. |
| DesignModeDisabled | BIT | True |  | False |  | Flag applied to a DFC revision on a target environment when deploying the package with the "Do not deploy design data" option. |
| DFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| DFCInterfaceID | INT(10,0) | True |  | False | DFC_INTERFACE | Link to the DFC_INTERFACE table. |
| DiscontinueDate | DATETIME | True |  | False |  | Date when an entity becomes discontinued. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to a DFC documentation. |
| EffectiveDate | DATETIME | True |  | False |  | Date when an entity becomes effective. |
| EntityCreatedOn | DATETIME | False |  | False |  | Date of an entity creation. |
| FirstStepID | INT(10,0) | True |  | False | DFC_STEP | Indicates the first step of a DFC at which runtime should start an interpretation. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a DFC revision. |
| HasChanges | BIT | True | ((0)) | False |  | Indicates if a DFC was changed after last build. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | User who last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date of the entity last update. |
| LastExecutionDay | DATETIME | True |  | False |  | The last day a DFC was executed. |
| Parameters | NVARCHAR | True |  | False |  | DFC revision parameters. |
| PreviewStepID | INT(10,0) | True |  | False | DFC_STEP | Identifier of the step that will be previewed. |
| Properties | NVARCHAR | True |  | False |  | Additional properties. |
| Revision | NVARCHAR(80) | True |  | False |  | DFC revision. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False | REVISION_STATUS | Status of a DFC revision: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| StepsFlow | NVARCHAR | True |  | False |  | Stores a step flow definition for all steps in a DFC. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the text. Can be used for translation purposes. |
| TotalEditTime | INT(10,0) | True |  | False |  | Time the user spent working on a DFC. |
| Type | SMALLINT(5,0) | True |  | False |  | Type of a DFC: 4 - Generic, 5 - View, 6 - Action, 7 - Change, 8 - Validate, 9 - Data, 10 - Initialize, 11 - Extension, 12 - Process, 13 - Interface. |

## Primary Key

- **PK_DFC_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_DFC_REVISION_DFC** — DFC_REVISION -> DFC (`DFCID -> ID`)
- **FK_DFC_REVISION_DFC_INTERFACE** — DFC_REVISION -> DFC_INTERFACE (`DFCInterfaceID -> ID`)
- **FK_DFC_REVISION_DFC_STEP** — DFC_REVISION -> DFC_STEP (`FirstStepID -> ID`)
- **FK_DFC_REVISION_DFC_STEP_2** — DFC_REVISION -> DFC_STEP (`PreviewStepID -> ID`)
- **FK_DFC_REVISION_PROCESS_DOCUMENTATION** — DFC_REVISION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_DFC_REVISION_REVISION_STATUS** — DFC_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_DFC_REVISION** — BUSINESS_OBJECT -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_DET2_DFC_REVISION** — DET2 -> DFC_REVISION (`VerifyDFCRevisionID -> ID`)
- **FK_DET2_FIELD_DFC_REVISION** — DET2_FIELD -> DFC_REVISION (`VerifyDFCRevisionID -> ID`)
- **FK_DFC_CATEGORY_DFC_REVISION** — DFC_CATEGORY -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_DFC_REVISION_LINK_DFC_REVISION** — DFC_REVISION_LINK -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_DFC_STEP_DFC_REVISION** — DFC_STEP -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_DFC_STEP_INVOKE_DFC_REVISION** — DFC_STEP_INVOKE -> DFC_REVISION (`InvokeDFCRevisionID -> ID`)
- **FK_DFC_SYSTEM_PARAMETER_DFC_REVISION** — DFC_SYSTEM_PARAMETER -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_FUNCTION_DFC_REVISION** — FUNCTION_ -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_KPI_TERM_DFC_REVISION** — KPI_TERM -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_SF_SCREEN_PANEL_ACTION_DFC_REVISION** — SF_SCREEN_PANEL_ACTION -> DFC_REVISION (`OnActionDFCRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_REVISION_ONINIT** — SF_SCREEN_REVISION -> DFC_REVISION (`OnInitializeDFCRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_REVISION_ONLOAD** — SF_SCREEN_REVISION -> DFC_REVISION (`OnLoadDFCRevisionID -> ID`)
- **FK_SF_VIEW_ACTION_DFC_REVISION** — SF_VIEW_ACTION -> DFC_REVISION (`OnActionDFCRevisionID -> ID`)
- **FK_SF_VIEW_FORM_CONTROL_DFC_REVISION** — SF_VIEW_FORM_CONTROL -> DFC_REVISION (`OnChangeDFCRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_DFC_REVISION** — SF_VIEW_REVISION -> DFC_REVISION (`ViewDFCRevisionID -> ID`)
- **FK_WEBSERVICE_DFC_REVISION** — WEBSERVICE -> DFC_REVISION (`DFCRevisionID -> ID`)

## Business Keys (other -> this table)

- JOB_ACTION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- CHARACTERISTIC_REVISION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- CHARACTERISTIC_REVISION_D -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- MI_ACTION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- DISPOSITION_USER_STATUS_TRAN -> DFC_REVISION (`OnChangeDFCRevisionFUID -> FUID`)
- DISPOSITION_TEST -> DFC_REVISION (`ConformityDFCRevisionFUID -> FUID`)
- INSPECTION_CHARACTERISTIC -> DFC_REVISION (`ConformityDFCRevisionFUID -> FUID`)
- COUNT_PROCEDURE -> DFC_REVISION (`ApproveDiscrDFCRevisionFUID, CountDFCRevisionFUID, LocationDFCRevisionFUID, PostResultDFCRevisionFUID, ReconcileDFCRevisionFUID -> FUID`)
- ALERT -> DFC_REVISION (`CreateDFCRevisionFUID, ResponseDFCRevisionFUID -> FUID`)
- RESOURCE_MAINT_TASK -> DFC_REVISION (`DFCRevisionFUID, AlertResponseDFCRevisionFUID -> FUID`)
- MAINT_TEMPLATE_TASK -> DFC_REVISION (`DFCRevisionFUID, AlertResponseDFCRevisionFUID -> FUID`)
- EQUIPMENT_MACH_COMM_CONFIG -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- SEQUENCE_QUEUE_DEFINITION -> DFC_REVISION (`EnqueueDFCRevisionFUID, DequeueDFCRevisionFUID -> FUID`)
- UOM_CONVERSION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- PRODUCT_UOM_CONVERSION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- PROGRESS_TRANSITION_RULES -> DFC_REVISION (`DFCRevisionFUID -> FUID`)
- TRANSACTION_HISTORY -> DFC_REVISION (`DFCRevision -> Revision`)
- TRANSACTION_HISTORY_FUNCTION -> DFC_REVISION (`DFCRevision -> Revision`)

## Unique Indexes

- **UK_DFC_REVISION** on `DFCID, Revision`
- **UX_DFC_REVISION_FUID** on `FUID`

## Non-Unique Indexes

- **IF_DFC_REVISION_DFC** on `DFCID`
- **IF_DFC_REVISION_DFC_INTERFACE** on `DFCInterfaceID`
- **IF_DFC_REVISION_DFC_STEP** on `FirstStepID`
- **IF_DFC_REVISION_DFC_STEP_2** on `PreviewStepID`
- **IF_DFC_REVISION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_DFC_REVISION_REVISION_STATUS** on `RevisionStatusID`
