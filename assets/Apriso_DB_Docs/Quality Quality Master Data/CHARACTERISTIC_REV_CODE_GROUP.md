# CHARACTERISTIC_REV_CODE_GROUP

**Database:** Operational

**Description:** Contains codes (REASON_CODE) or groups of codes (GROUP_) used during the quality inspection specific for the given disposition test. These reason codes are codes related to quality.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicRevisionID | INT(10,0) | False |  | False | CHARACTERISTIC_REVISION | Reference to Characteristic Revision which reason codes or groups are assigned |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Group Name of the group of reason codes |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Group Class of the group of reason codes |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Group Type of the group of reason codes |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Characteristic Group Code |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code of usage: Quality (REASON_CODE.Usage_ = 6) |

## Primary Key

- **PK_CHARACTERISTIC_REV_CODE_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_REV_CODE_GROUP_CHARACTERISTIC_REVISION** — CHARACTERISTIC_REV_CODE_GROUP -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_CHARACTERISTIC_REV_CODE_GROUP_GROUP_** — CHARACTERISTIC_REV_CODE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_REV_CODE_GROUP_REASON_CODE** — CHARACTERISTIC_REV_CODE_GROUP -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CHARACTERISTIC_REV_CODE_GROUP_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_CHARACTERISTIC_REV_CODE_GROUP_GROUP_** on `Group_, GroupType, GroupClassID`
