# PARTNER_HOLD

**Database:** Operational

**Description:** Contains information about Partners that are on Hold, such as Reason Code and Partner Hold Class.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PartnerHoldClassID | INT(10,0) | True |  | False | PARTNER_HOLD_CLASS | Links the Hold code assigned to a Partner to a Class of Hold codes (customer use). |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Relation to the Partner. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PARTNER_HOLD** on `ID`

## Foreign Keys (this table -> other)

- **FK_PARTNER_HOLD_PARTNER** — PARTNER_HOLD -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_HOLD_PARTNER_HOLD_CLASS** — PARTNER_HOLD -> PARTNER_HOLD_CLASS (`PartnerHoldClassID -> ID`)
- **FK_PARTNER_HOLD_REASON_CODE** — PARTNER_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PARTNER_HOLD_PARTNER** on `PartnerID`
- **IF_PARTNER_HOLD_PARTNER_HOLD_CLASS** on `PartnerHoldClassID`
