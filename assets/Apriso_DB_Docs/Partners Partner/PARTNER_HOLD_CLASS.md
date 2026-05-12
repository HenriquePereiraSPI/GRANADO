# PARTNER_HOLD_CLASS

**Database:** Operational

**Description:** Contains definitions for all the possible Classes of a Partner Hold. Partner Hold Classes can be added by the user for implementing specific requirements.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PARTNER_HOLD_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PARTNER_HOLD_PARTNER_HOLD_CLASS** — PARTNER_HOLD -> PARTNER_HOLD_CLASS (`PartnerHoldClassID -> ID`)

## Unique Indexes

- **UK_PARTNER_HOLD_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
