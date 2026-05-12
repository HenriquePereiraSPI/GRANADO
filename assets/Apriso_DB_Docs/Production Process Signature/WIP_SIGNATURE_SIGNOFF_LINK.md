# WIP_SIGNATURE_SIGNOFF_LINK

**Database:** Operational

**Description:** This table stores any related information to a WIP Signature Signoff record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CapaID | INT(10,0) | True |  | False | CAPA | The referenced CAPA record. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| QualityDefectID | INT(10,0) | True |  | False | QUALITY_DEFECT | The referenced Quality Defect record. |
| WipOrderSignatureID | INT(10,0) | True |  | False | WIP_ORDER_SIGNATURE | The referenced WIP Order Signature record. |
| WipSignatureSignoffID | INT(10,0) | False |  | False |  | The referenced WIP Signature Signoff record. |

## Primary Key

- **PK_WIP_SIGNATURE_SIGNOFF_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SIGNATURE_SIGNOFF_LINK_CAPA** — WIP_SIGNATURE_SIGNOFF_LINK -> CAPA (`CapaID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LINK_QUALITY_DEFECT** — WIP_SIGNATURE_SIGNOFF_LINK -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LINK_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_SIGNOFF_LINK -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SIGNATURE_SIGNOFF_LINK_CAPA** on `CapaID`
- **IF_WIP_SIGNATURE_SIGNOFF_LINK_QUALITY_DEFECT** on `QualityDefectID`
- **IF_WIP_SIGNATURE_SIGNOFF_LINK_WIP_ORDER_SIGNATURE** on `WipOrderSignatureID`
