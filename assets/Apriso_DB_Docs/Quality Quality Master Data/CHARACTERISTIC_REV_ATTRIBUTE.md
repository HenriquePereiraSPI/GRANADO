# CHARACTERISTIC_REV_ATTRIBUTE

**Database:** Operational

**Description:** Contains all attributes of the revision of characteristic in case characteristic is of type: Attribute

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | False |  | Collected attribute. |
| Characteristic | NVARCHAR(40) | False |  | False | CHARACTERISTIC_REVISION | Reference to characteristic |
| CharacteristicRevision | NVARCHAR(40) | False |  | False | CHARACTERISTIC_REVISION | Reference to the revision of characteristic |
| Conforming | BIT | False | (0) | False |  | Flag indicating if the value of the attribute is conforming to the specification |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Defect Code of the defect to be created when the characteristic is inspected (Reason Code of the type Defect Code) |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Unique identifier of group of attributes the current one is assigned to |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Unique identifier of group class of attributes the current one is assigned to |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Unique identifier of group type of attributes the current one is assigned to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHARACTERISTIC_REV_ATTRIBUTE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_REV_ATTRIBUTE_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_ATTRIBUTE -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_CHARACTERISTIC_REV_ATTRIBUTE_GROUP_** — CHARACTERISTIC_REV_ATTRIBUTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_REV_ATTRIBUTE_REASON_CODE** — CHARACTERISTIC_REV_ATTRIBUTE -> REASON_CODE (`DefectReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_CHARACTERISTIC_REV_ATTRIBUTE** on `Characteristic, CharacteristicRevision, Attribute`

## Non-Unique Indexes

- **IF_CHARACTERISTIC_REV_ATTRIBUTE_GROUP_** on `Group_, GroupType, GroupClassID`
