# WIP_OPERATION_STEP_CHAR

**Database:** Operational

**Description:** This table stores the quality Characteristics to use during production in a quality Disposition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | The reference to the Characteristic linked to that Step. |
| CharacteristicRevision | NVARCHAR(40) | True |  | False | CHARACTERISTIC_REVISION | The revision of the Characteristic. |
| CharacteristicType | SMALLINT(5,0) | True |  | False | CHARACTERISTIC_TYPE | The type of the Characteristic (Attribute or Variable) linked to the CHARACTERISTIC_TYPE table. Depending on the type, use limits (e.g., when the type is 2, use the UpperSpecificationLimit; when the type is 1, do not use any limits). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Operation Step Characteristic. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit of the Characteristic for the Step (Explosion 3 only). |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit of the Characteristic for the Step (Explosion 3 only). |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The lower specification limit of the Characteristic for the Step (Explosion 3 only). |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a note. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation number. |
| RefLowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The refenced lower coherence limit of the Characteristic for the WIP Operation Step. |
| RefLowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit value from the original Process. |
| RefLowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The lower specification limit value from the original Process. |
| RefTargetValue | DECIMAL(28,10) | True |  | False |  | The target value from the original Process. |
| RefUOM | NVARCHAR(10) | True |  | False | UOM | The UOM of the limits from the original Process. |
| RefUpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The referenced upper coherence limit of the Characteristic for the WIP Operation Step. |
| RefUpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit value from the original Process. |
| RefUpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit value from the original Process. |
| SequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | The reference to the Step. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | The target value of the specification. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOM | NVARCHAR(10) | True |  | False | UOM | The UOM of the Characteristic. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The upper coherence limit of the Characteristic for the WIP Operation Step. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type. |

## Primary Key

- **PK_WIP_OPERATION_STEP_CHAR** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC_REVISION** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC_TYPE** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_WIP_OPERATION_STEP_CHAR_NOTE** — WIP_OPERATION_STEP_CHAR -> NOTE (`NoteID -> ID`)
- **FK_WIP_OPERATION_STEP_CHAR_UNIT** — WIP_OPERATION_STEP_CHAR -> UNIT (`UnitID -> ID`)
- **FK_WIP_OPERATION_STEP_CHAR_UOM** — WIP_OPERATION_STEP_CHAR -> UOM (`UOM -> UomCode`)
- **FK_WIP_OPERATION_STEP_CHAR_UOM1** — WIP_OPERATION_STEP_CHAR -> UOM (`RefUOM -> UomCode`)
- **FK_WIP_OPERATION_STEP_CHAR_WIP_OPERATION** — WIP_OPERATION_STEP_CHAR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_STEP_CHAR_WIP_OPERATION_STEP** — WIP_OPERATION_STEP_CHAR -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **FK_WIP_OPERATION_STEP_CHAR_ATTR_WIP_OPERATION_STEP_CHAR** — WIP_OPERATION_STEP_CHAR_ATTR -> WIP_OPERATION_STEP_CHAR (`WipOperationStepCharID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC_REVISION** on `Characteristic, CharacteristicRevision`
- **IF_WIP_OPERATION_STEP_CHAR_DSInstanceID** on `DSInstanceID`
- **IF_WIP_OPERATION_STEP_CHAR_NOTE** on `NoteID`
- **IF_WIP_OPERATION_STEP_CHAR_UNIT** on `UnitID`
- **IF_WIP_OPERATION_STEP_CHAR_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`
