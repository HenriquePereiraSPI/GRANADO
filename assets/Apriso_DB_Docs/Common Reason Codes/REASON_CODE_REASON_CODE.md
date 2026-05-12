# REASON_CODE_REASON_CODE

**Database:** Operational

**Description:** This table is used to create hierarchies of reason codes. Can be used to link possible root causes to reason causes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ParentReasonCode | NVARCHAR(20) | False |  | True | REASON_CODE | Relation with the parent reason code |
| ReasonCode | NVARCHAR(20) | False |  | True | REASON_CODE | Reason code why the entity is on hold |

## Primary Key

- **PK_REASON_CODE_REASON_CODE** on `ParentReasonCode, ReasonCode`

## Foreign Keys (this table -> other)

- **FK_REASON_CODE_REASON_CODE_REASON_CODE** — REASON_CODE_REASON_CODE -> REASON_CODE (`ParentReasonCode -> ReasonCode`)
- **FK_REASON_CODE_REASON_CODE_REASON_CODE1** — REASON_CODE_REASON_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_ReasonCode** on `ReasonCode`
