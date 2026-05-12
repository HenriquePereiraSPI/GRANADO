# SIGNATURE_HEADER_DEFINITION

**Database:** Operational

**Description:** This table stores information about header definition of the Signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(256) | True |  | False |  | Description of the Signature Header. |
| EnforceSequence | BIT | False |  | False |  | Indicates if the Signature Details need to be signed in a sequence. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| SignatureHeaderCode | NVARCHAR(256) | False |  | False |  | Name of the Signature Header. |

## Primary Key

- **PK_SIGNATURE_HEADER_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_STEP_SEQUENCE_SIGNATURE_HEADER_DEFINITION** — CAPA_STEP_SEQUENCE -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_CAPA_TASK_SIGNATURE_HEADER_DEFINITION** — CAPA_TASK -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_1** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`CountDispSignHeadDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_2** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`CountDispLineSignHeadDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_3** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level1SignHeaderDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_4** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level2SignHeaderDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_5** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level3SignHeaderDefID -> ID`)
- **FK_EMR_RECORD_DEFINITION_SIGNATURE_HEADER_DEFINITION** — EMR_RECORD_DEFINITION -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_SIGNATURE_HEADER_DEFINITION** — PROCESS_OPERATION_SIGNATURE -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_QUALITY_DEFECT_SIGNATURE_HEADER_DEFINITION** — QUALITY_DEFECT -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_HEADER_DEFINITION** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_WIP_SIGNATURE_SIGNATURE_HEADER_DEFINITION** — WIP_SIGNATURE -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)

## Unique Indexes

- **UK_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderCode`
- **UK_SIGNATURE_HEADER_DEFINITION2** on `FUID`

## Non-Unique Indexes

- **** on ``
