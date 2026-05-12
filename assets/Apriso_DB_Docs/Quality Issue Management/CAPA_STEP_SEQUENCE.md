# CAPA_STEP_SEQUENCE

**Database:** Operational

**Description:** This table defines the sequence of CAPA Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAStepID | INT(10,0) | False |  | False | CAPA_STEP | The ID of the step defined in the CAPA_STEP table. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| NextCAPAStepID | INT(10,0) | True |  | False | CAPA_STEP | The ID of the destination step from the CAPA_STEP table. |
| SignatureHeaderDefinitionID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | The ID of the Signature Header Definition required for signing the transition between the steps. |
| VisualProperties | NVARCHAR(2000) | True |  | False |  | The visual properties of the step links on the diagram. |

## Primary Key

- **PK_CAPA_STEP_SEQUENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_STEP_SEQUENCE_CAPA_STEP_1** — CAPA_STEP_SEQUENCE -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_STEP_SEQUENCE_CAPA_STEP_2** — CAPA_STEP_SEQUENCE -> CAPA_STEP (`NextCAPAStepID -> ID`)
- **FK_CAPA_STEP_SEQUENCE_SIGNATURE_HEADER_DEFINITION** — CAPA_STEP_SEQUENCE -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_STEP_SEQUENCE_PROP_REQ_CAPA_STEP_SEQUENCE** — CAPA_STEP_SEQUENCE_PROP_REQ -> CAPA_STEP_SEQUENCE (`CAPAStepSequenceID -> ID`)

## Unique Indexes

- **UK_CAPA_STEP_SEQUENCE_FUID** on `FUID`

## Non-Unique Indexes

- **IF_CAPA_STEP_SEQUENCE_CAPA_STEP_1** on `CAPAStepID`
- **IF_CAPA_STEP_SEQUENCE_CAPA_STEP_2** on `NextCAPAStepID`
- **IF_CAPA_STEP_SEQUENCE_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderDefinitionID`
