# INSPECTION_DET_CHARACTERISTIC

**Database:** Operational

**Description:** This table contains the information about characteristics being an output of the inspection determination

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicRevisionID | INT(10,0) | False |  | False | CHARACTERISTIC_REVISION | Reference to the revision of the characteristic |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record |
| Inherited | BIT | False |  | False |  | Flag indicating that all parameters of the characteristic including control and attribute limits are inherited from the characteristic |
| InspectionDeterminationID | INT(10,0) | False |  | False | INSPECTION_DETERMINATION | Reference to the inspection determination the given characteristic is linked to |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Lower Coherence limit |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower Control limit |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower Specification limit |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target value of the Characteristic |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the Characteristic |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Upper Coherence limit |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Upper Control limit |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper Specification limit |

## Primary Key

- **PK_INSPECTION_DET_CHARACTERISTIC** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_DET_CHARACTERISTIC_CHARACTERISTIC_REVISION** — INSPECTION_DET_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_INSPECTION_DET_CHARACTERISTIC_INSPECTION_DETERMINATION** — INSPECTION_DET_CHARACTERISTIC -> INSPECTION_DETERMINATION (`InspectionDeterminationID -> ID`)
- **FK_INSPECTION_DET_CHARACTERISTIC_UNITID** — INSPECTION_DET_CHARACTERISTIC -> UNIT (`UnitID -> ID`)
- **FK_INSPECTION_DET_CHARACTERISTIC_UOMCODE** — INSPECTION_DET_CHARACTERISTIC -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_DET_CHAR_ATTR_INSPECTION_DET_CHARACTERISTIC** — INSPECTION_DET_CHAR_ATTR -> INSPECTION_DET_CHARACTERISTIC (`InspectionDetCharacteristicID -> ID`)

## Unique Indexes

- **IX_INSPECTION_DET_CHARACTERISTIC** on `InspectionDeterminationID, CharacteristicRevisionID`

## Non-Unique Indexes

- **IF_INSPECTION_DET_CHARACTERISTIC_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_INSPECTION_DET_CHARACTERISTIC_UNITID** on `UnitID`
