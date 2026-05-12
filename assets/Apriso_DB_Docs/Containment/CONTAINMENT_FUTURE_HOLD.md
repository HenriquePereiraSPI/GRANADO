# CONTAINMENT_FUTURE_HOLD

**Database:** Operational

**Description:** Future Holds.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | False |  | False | CONTAINMENT | Containment ID |
| ContainmentReleaseAfterDate | DATETIME | True |  | False |  | The release after date that should be used when putting the entities on hold. |
| Description | NVARCHAR(2000) | True |  | False |  | Description |
| DiscontinueDate | DATETIME | True |  | False |  | When not populated, it is active |
| EffectiveDate | DATETIME | True |  | False |  | When not populated, it is active |
| Enabled | BIT | True |  | False |  | Enabled/Disabled |
| Filter | NVARCHAR(2000) | True |  | False |  | Filter used for selecting records |
| Hold | BIT | True |  | False |  | When true, record is put on hold |
| HoldChildren | BIT | True |  | False |  | Determines whether or not the entity put on hold should also put its children on hold. |
| HoldComment | NVARCHAR(2000) | True |  | False |  | The comment that should be used when putting the entities on hold. |
| HoldParents | BIT | True |  | False |  | Determines whether or not the entity put on hold should also put its parents on hold. |
| ID | INT(10,0) | False |  | True |  | Unique ID |
| Name | NVARCHAR(80) | True |  | False |  | Future name hold |
| ProfileUsed | NVARCHAR(255) | True |  | False |  | Grid profile used when creating the future hold. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code for hold |

## Primary Key

- **PK_CONTAINMENT_FUTURE_HOLD** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTAINMENT_FUTURE_HOLD_CONTAINMENT** — CONTAINMENT_FUTURE_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_FUTURE_HOLD_REASON_CODE** — CONTAINMENT_FUTURE_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINMENT_FUTURE_HOLD_CONTAINMENT** on `ContainmentID`
