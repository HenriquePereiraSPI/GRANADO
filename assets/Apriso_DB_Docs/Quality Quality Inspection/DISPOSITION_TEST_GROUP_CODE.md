# DISPOSITION_TEST_GROUP_CODE

**Database:** Operational

**Description:** Contains codes (REASON_CODE) or groups of codes (GROUP_) used during the quality inspection specific for the given disposition test. These reason codes are codes related to quality.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispositionTestID | BIGINT(19,0) | False |  | False | DISPOSITION_TEST | Reference to Disposition Test to which reason codes or groups are assigned |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Group Name of the group of reason codes |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Group Class of the group of reason codes |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Group Type of the group of reason codes |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Group Code |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code of usage: Quality (REASON_CODE.Usage_ = 6) |

## Primary Key

- **PK_DISPOSITION_TEST_GROUP_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_TEST_GROUP_CODE_DISPOSITION_TEST** — DISPOSITION_TEST_GROUP_CODE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_GROUP_** — DISPOSITION_TEST_GROUP_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_GROUP_CLASS** — DISPOSITION_TEST_GROUP_CODE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_GROUP_TYPE** — DISPOSITION_TEST_GROUP_CODE -> GROUP_TYPE (`GroupType -> GroupType`)
- **FK_DISPOSITION_TEST_GROUP_CODE_REASON_CODE** — DISPOSITION_TEST_GROUP_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_TEST_GROUP_CODE_DISPOSITION_TEST** on `DispositionTestID`
- **IF_DISPOSITION_TEST_GROUP_CODE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_DISPOSITION_TEST_GROUP_CODE_GROUP_CLASS** on `GroupClassID`
