# DOCUMENT_REGION_REASON_CODE

**Database:** Operational

**Description:** This table stores Reason Codes assigned to document regions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | The ID of the document to which Reason Codes are assigned. |
| Forbidden | BIT | False | ((0)) | False |  | Indicates if Reason Codes are to be included or excluded. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | The group linked to the Reason Code assigned to the region. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | The ID of the group class linked to the Reason Code assigned to the region. |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The type of the group linked to the Reason Code assigned to the region. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| ReasonClassID | INT(10,0) | True |  | False | REASON_CLASS | The ID of the Reason Code class assigned to the region. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code assigned to the region. |
| ReasonType | SMALLINT(5,0) | True |  | False | REASON_TYPE | The type of the Reason Code assigned to the region. |
| RegionName | NVARCHAR(255) | False |  | False |  | The name of the region to which Reason Codes are assigned. |
| Usage_ | SMALLINT(5,0) | False |  | False |  | Identifies the row usage: 1-Reason Code, 2 - Reason Type, 3 - Reason Class, 4 - Reason Group. |

## Primary Key

- **PK_DOCUMENT_REGION_REASON_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_REGION_REASON_CODE_DOCUMENT** — DOCUMENT_REGION_REASON_CODE -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOCUMENT_REGION_REASON_CODE_REASON_CLASS** — DOCUMENT_REGION_REASON_CODE -> REASON_CLASS (`ReasonClassID -> ID`)
- **FK_DOCUMENT_REGION_REASON_CODE_REASON_CODE** — DOCUMENT_REGION_REASON_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_DOCUMENT_REGION_REASON_CODE_REASON_GROUP** — DOCUMENT_REGION_REASON_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DOCUMENT_REGION_REASON_CODE_REASON_TYPE** — DOCUMENT_REGION_REASON_CODE -> REASON_TYPE (`ReasonType -> ReasonType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DOCUMENT_REGION_REASON_CODE_DOCUMENT** on `DocumentID`
- **IF_DOCUMENT_REGION_REASON_CODE_REASON_CLASS** on `ReasonClassID`
- **IF_DOCUMENT_REGION_REASON_CODE_REASON_GROUP** on `Group_, GroupType, GroupClassID`
