# AGENCY

**Database:** Operational

**Description:** Lists the various agencies that create identification standards (e.g. barcode, RFID). The use of Code components is required.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Agency | NVARCHAR(80) | False |  | True |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_AGENCY** on `Agency`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ADDRESS_AGENCY** — ADDRESS -> AGENCY (`Agency -> Agency`)
- **FK_CODE_DOMAIN_MANAGER_AGENCY** — CODE_DOMAIN_MANAGER -> AGENCY (`Agency -> Agency`)
- **FK_CODE_SYSTEM_TYPE_AGENCY** — CODE_SYSTEM_TYPE -> AGENCY (`Agency -> Agency`)
- **FK_CONTACT_AGENCY** — CONTACT -> AGENCY (`Agency -> Agency`)
- **FK_PARTNER_CODE_AGENCY** — PARTNER_CODE -> AGENCY (`Agency -> Agency`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
