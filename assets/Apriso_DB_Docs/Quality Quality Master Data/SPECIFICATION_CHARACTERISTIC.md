# SPECIFICATION_CHARACTERISTIC

**Database:** Operational

**Description:** The SPECIFICATION_CHARACTERISTIC table is used by quality to link a row in the SPECIFICATION table to one or more CHARACTERISITCS

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | False |  | True | CHARACTERISTIC_REVISION | Unique identifier for the characteristic. |
| CharacteristicRevision | NVARCHAR(40) | True |  | False | CHARACTERISTIC_REVISION | Revision of the Characteristic |
| CharacteristicType | SMALLINT(5,0) | True |  | False | CHARACTERISTIC_TYPE | Characteristic type to be Attribute of Variable. |
| Inherited | BIT | False | (1) | False |  | Flag indicating that all parameters of the characteristic including control and attribute limits are inherited from the characteristic |
| LowerCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Lower Coherence Limit of the Characteristic. |
| LowerControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower Control Limit |
| LowerSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower Specification Limit |
| SpecificationID | INT(10,0) | False |  | True | SPECIFICATION | The Link between the Characteristic and the parent SPECIFICATION. |
| TargetValue | DECIMAL(28,10) | True | ((0.0)) | False |  | The target value of the specification. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure. |
| UpperCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Upper Coherence Limit of the Characteristic. |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Control Limit |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Specification Limit |

## Primary Key

- **PK_SPECIFICATION_CHARACTERISTIC** on `SpecificationID, Characteristic`

## Foreign Keys (this table -> other)

- **FK_SPECIFICATION_CHARACTERISTIC_CHARACTERISTIC_REVISION** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_SPECIFICATION_CHARACTERISTIC_CHARACTERISTIC_TYPE** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_SPECIFICATION_CHARACTERISTIC_SPECIFICATION** — SPECIFICATION_CHARACTERISTIC -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_SPECIFICATION_CHARACTERISTIC_UNIT** — SPECIFICATION_CHARACTERISTIC -> UNIT (`UnitID -> ID`)
- **FK_SPECIFICATION_CHARACTERISTIC_UOM** — SPECIFICATION_CHARACTERISTIC -> UOM (`UomCode -> UomCode`)
- **FK_SPECIFICATION_CHARACTERISTICS_CHARACTERISTICS** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)

## Referenced By (other tables -> this)

- **FK_SPECIFICATION_CHARACTER_ATTR_SPECIFICATION_CHARACTERISTIC** — SPECIFICATION_CHARACTER_ATTR -> SPECIFICATION_CHARACTERISTIC (`SpecificationID, Characteristic -> SpecificationID, Characteristic`)
- **FK_SPECIFICATION_DISPOSITION_SPECIFICATION_CHARACTERISTIC** — SPECIFICATION_DISPOSITION -> SPECIFICATION_CHARACTERISTIC (`SpecificationID, Characteristic -> SpecificationID, Characteristic`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPECIFICATION_CHARACTERISTIC_CHARACTERISTIC_REVISION** on `Characteristic, CharacteristicRevision`
- **IF_SPECIFICATION_CHARACTERISTIC_UNIT** on `UnitID`
