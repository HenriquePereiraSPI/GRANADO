# DISPOSITION_GROUP_CODE

**Database:** Operational

**Description:** Contains codes (REASON_CODE) or groups of codes (GROUP_) used during the quality inspection specific for the given instance of the disposition or the line of the disposition. These reason co

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Disposition | NVARCHAR(40) | False |  | False | DISPOSITION | Disposition Number the given reason code or group of reason codes is linked to |
| Facility | NVARCHAR(40) | False |  | False | DISPOSITION | Facility of the referenced Disposition |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Group Name of the group of reason codes |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Group Class of the group of reason codes |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Group Type of the group of reason codes |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Group Code |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | Disposition Line Number the given reason code or group of reason codes is linked to |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code of usage: Quality (REASON_CODE.Usage_ = 6) |

## Primary Key

- **PK_DISPOSITION_GROUP_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_GROUP_CODE_DISPOSITION** — DISPOSITION_GROUP_CODE -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_GROUP_CODE_DISPOSITION_LINE** — DISPOSITION_GROUP_CODE -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_GROUP_CODE_GROUP_** — DISPOSITION_GROUP_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_GROUP_CODE_GROUP_CLASS** — DISPOSITION_GROUP_CODE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_GROUP_CODE_GROUP_TYPE** — DISPOSITION_GROUP_CODE -> GROUP_TYPE (`GroupType -> GroupType`)
- **FK_DISPOSITION_GROUP_CODE_REASON_CODE** — DISPOSITION_GROUP_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_GROUP_CODE_DISPOSITION_LINE** on `Disposition, Facility, LineSequenceNo`
- **IF_DISPOSITION_GROUP_CODE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_DISPOSITION_GROUP_CODE_GROUP_CLASS** on `GroupClassID`
