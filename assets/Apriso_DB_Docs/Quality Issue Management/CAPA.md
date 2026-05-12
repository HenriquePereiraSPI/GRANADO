# CAPA

**Database:** Operational

**Description:** This table contains CAPA records (CAPA issues).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssignedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the Employee to whom the record is assigned. |
| AssignedGroup | NVARCHAR(40) | True |  | False | GROUP_ | The Group of the assignee. |
| AssignedGroupClassID | INT(10,0) | True |  | False | GROUP_ | The Group Class ID of the assignee. |
| AssignedGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The Group Type of the assignee. |
| CAPAClassID | INT(10,0) | True |  | False | CAPA_CLASS | The Class ID of the CAPA record. |
| CAPAFlowID | INT(10,0) | True |  | False | CAPA_FLOW | The link to the CAPA_FLOW table. |
| CAPAStatus | SMALLINT(5,0) | False |  | False | CAPA_STATUS | The Status of the record. |
| Category | INT(10,0) | True |  | False |  | The category of the CAPA issue. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The link to the CONTAINMENT table. |
| CorrectiveActionReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code of the corrective action of the CAPA record. |
| CorrectiveActionTextID | INT(10,0) | True |  | False |  | The link to the description of the corrective action of the CAPA record. |
| CurrentCAPAStepID | INT(10,0) | True |  | False | CAPA_STEP | The ID of the currently executed step. |
| DueDate | DATETIME | True |  | False |  | The due date of the record. |
| Frequency | INT(10,0) | True |  | False |  | The frequency of the CAPA issue. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| LocationTextID | INT(10,0) | True |  | False |  | The link to the description of the issue location. |
| OwnerEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the Employee who is the Owner of the record. |
| OwnerGroup | NVARCHAR(40) | True |  | False | GROUP_ | The Group of the Owner. |
| OwnerGroupClassID | INT(10,0) | True |  | False | GROUP_ | The Group Class ID of the Owner. |
| OwnerGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The Group Type of the Owner. |
| PreventiveActionReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code of the preventive action of the CAPA record. |
| PreventiveActionTextID | INT(10,0) | True |  | False |  | The link to the description of the preventive action of the CAPA record. |
| Priority | INT(10,0) | False |  | False |  | The Priority of the record. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | The Progress Status of the record. |
| RecordNo | NVARCHAR(80) | False |  | False |  | The number of the CAPA record (issue). |
| Reference | INT(10,0) | True |  | False |  | The reference of the CAPA issue. |
| RootCauseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code of the root cause of the CAPA record. |
| RootCauseTextID | INT(10,0) | True |  | False |  | The link to the description of the root cause of the CAPA record. |
| Scope | INT(10,0) | True |  | False |  | The scope of the CAPA issue. |
| Severity | INT(10,0) | False |  | False | CAPA_SEVERITY | The Severity of the record. |
| Source | INT(10,0) | True |  | False |  | The source of the CAPA issue. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarningDate | DATETIME | True |  | False |  | The warning date of the record. |

## Primary Key

- **PK_CAPA** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_CAPA_CLASS** — CAPA -> CAPA_CLASS (`CAPAClassID -> ID`)
- **FK_CAPA_CAPA_FLOW** — CAPA -> CAPA_FLOW (`CAPAFlowID -> ID`)
- **FK_CAPA_CAPA_SEVERITY** — CAPA -> CAPA_SEVERITY (`Severity -> Severity`)
- **FK_CAPA_CAPA_STATUS** — CAPA -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)
- **FK_CAPA_CAPA_STEP** — CAPA -> CAPA_STEP (`CurrentCAPAStepID -> ID`)
- **FK_CAPA_CONTAINMENT** — CAPA -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CAPA_EMPLOYEE_1** — CAPA -> EMPLOYEE (`OwnerEmployeeID -> ID`)
- **FK_CAPA_EMPLOYEE_2** — CAPA -> EMPLOYEE (`AssignedEmployeeID -> ID`)
- **FK_CAPA_GROUP_1** — CAPA -> GROUP_ (`OwnerGroup, OwnerGroupType, OwnerGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_GROUP_2** — CAPA -> GROUP_ (`AssignedGroup, AssignedGroupType, AssignedGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_PROGRESS_STATUS** — CAPA -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_REASON_CODE_01** — CAPA -> REASON_CODE (`RootCauseReasonCode -> ReasonCode`)
- **FK_CAPA_REASON_CODE_02** — CAPA -> REASON_CODE (`CorrectiveActionReasonCode -> ReasonCode`)
- **FK_CAPA_REASON_CODE_03** — CAPA -> REASON_CODE (`PreventiveActionReasonCode -> ReasonCode`)
- **FK_CAPA_UNIT** — CAPA -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_HISTORY_CAPA** — CAPA_HISTORY -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_LINK_CAPA_01** — CAPA_LINK -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_LINK_CAPA_02** — CAPA_LINK -> CAPA (`RelatedCAPAID -> ID`)
- **FK_CAPA_PROPERTY_VALUE_CAPA** — CAPA_PROPERTY_VALUE -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_STEP_STATE_CAPA** — CAPA_STEP_STATE -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_TASK_STATE_CAPA** — CAPA_TASK_STATE -> CAPA (`CAPAID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LINK_CAPA** — WIP_SIGNATURE_SIGNOFF_LINK -> CAPA (`CapaID -> ID`)

## Unique Indexes

- **UK_CAPA_RECORDNO** on `RecordNo`

## Non-Unique Indexes

- **IDX_CAPA_CLASSIFICATIONID** on `ClassificationID`
- **IF_CAPA_CAPA_CLASS** on `CAPAClassID`
- **IF_CAPA_CAPA_FLOW** on `CAPAFlowID`
- **IF_CAPA_CAPA_SEVERITY** on `Severity`
- **IF_CAPA_CAPA_STATUS** on `CAPAStatus`
- **IF_CAPA_CAPA_STEP** on `CurrentCAPAStepID`
- **IF_CAPA_CONTAINMENT** on `ContainmentID`
- **IF_CAPA_GROUP_1** on `OwnerGroup, OwnerGroupType, OwnerGroupClassID`
- **IF_CAPA_GROUP_2** on `AssignedGroup, AssignedGroupType, AssignedGroupClassID`
- **IF_CAPA_PROGRESS_STATUS** on `ProgressStatus`
- **IF_CAPA_UNIT** on `UnitID`
