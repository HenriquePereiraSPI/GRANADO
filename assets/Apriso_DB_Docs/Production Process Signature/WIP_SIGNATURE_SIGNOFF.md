# WIP_SIGNATURE_SIGNOFF

**Database:** Operational

**Description:** The table stores runtime information about signoffs of WIP Order signatures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The referenced Lot Number record. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The referenced Product record. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The referenced Serial Number record. |
| SignatureStatus | SMALLINT(5,0) | False |  | False | SIGNATURE_STATUS | Signature status. |
| SignedBy | INT(10,0) | False |  | False | EMPLOYEE | ID of the signing employee. |
| SignedByRole | INT(10,0) | True |  | False | ROLE | ID of the Role specified when signing the signature. Optional. |
| SignedComment | NVARCHAR(200) | True |  | False |  | Comments. |
| SignedOn | DATETIME | True |  | False |  | The date and time when the signature was signed off. |
| SignedReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| VoidedBy | INT(10,0) | True |  | False | EMPLOYEE | The ID of the employee that voided the signature. |
| VoidedByRole | INT(10,0) | True |  | False | ROLE | ID of the Role specified when voiding the signature. Optional. |
| VoidedComment | NVARCHAR(200) | True |  | False |  | Comments. |
| VoidedOn | DATETIME | True |  | False |  | The date and time when the signed off signature was voided. |
| VoidedReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The reason code why the signature was voided. |
| WipOrderSignatureID | INT(10,0) | False |  | False | WIP_ORDER_SIGNATURE | ID of the WIP Order signature. |
| WipSignatureRoleID | INT(10,0) | True |  | False |  | The referenced WIP Signature Role record. |

## Primary Key

- **PK_WIP_SIGNATURE_SIGNOFF** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SIGNATURE_SIGNOFF_EMPLOYEE** — WIP_SIGNATURE_SIGNOFF -> EMPLOYEE (`SignedBy -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_EMPLOYEE2** — WIP_SIGNATURE_SIGNOFF -> EMPLOYEE (`VoidedBy -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LOT_NO** — WIP_SIGNATURE_SIGNOFF -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_SIGNATURE_SIGNOFF_PRODUCT** — WIP_SIGNATURE_SIGNOFF -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_REASON_CODE** — WIP_SIGNATURE_SIGNOFF -> REASON_CODE (`SignedReasonCode -> ReasonCode`)
- **FK_WIP_SIGNATURE_SIGNOFF_REASON_CODE2** — WIP_SIGNATURE_SIGNOFF -> REASON_CODE (`VoidedReasonCode -> ReasonCode`)
- **FK_WIP_SIGNATURE_SIGNOFF_ROLE** — WIP_SIGNATURE_SIGNOFF -> ROLE (`SignedByRole -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_ROLE2** — WIP_SIGNATURE_SIGNOFF -> ROLE (`VoidedByRole -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_SERIAL_NO** — WIP_SIGNATURE_SIGNOFF -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SIGNATURE_SIGNOFF_SIGNATURE_STATUS** — WIP_SIGNATURE_SIGNOFF -> SIGNATURE_STATUS (`SignatureStatus -> SignatureStatus`)
- **FK_WIP_SIGNATURE_SIGNOFF_UNIT** — WIP_SIGNATURE_SIGNOFF -> UNIT (`UnitID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_SIGNOFF -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SIGNATURE_SIGNOFF_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_SIGNATURE_SIGNOFF_PRODUCT** on `ProductID`
- **IF_WIP_SIGNATURE_SIGNOFF_ROLE** on `SignedByRole`
- **IF_WIP_SIGNATURE_SIGNOFF_ROLE2** on `VoidedByRole`
- **IF_WIP_SIGNATURE_SIGNOFF_SERIAL_NO** on `SerialNo, ProductID`
- **IF_WIP_SIGNATURE_SIGNOFF_SIGNATURE_STATUS** on `SignatureStatus`
- **IF_WIP_SIGNATURE_SIGNOFF_UNIT** on `UnitID`
- **IF_WIP_SIGNATURE_SIGNOFF_WIP_ORDER_SIGNATURE** on `WipOrderSignatureID`
