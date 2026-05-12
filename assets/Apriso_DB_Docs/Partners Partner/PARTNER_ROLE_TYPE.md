# PARTNER_ROLE_TYPE

**Database:** Operational

**Description:** Contains all the Partner Role Types defined in the system. They are attributes of the Partner Role that can be user defined. The list should not be modified.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PartnerRoleType | SMALLINT(5,0) | False |  | True |  | Type of the Partner Role. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PARTNER_ROLE_TYPE** on `PartnerRoleType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PARTNER_ROLE_PARTNER_ROLE_TYPE** — PARTNER_ROLE -> PARTNER_ROLE_TYPE (`PartnerRoleType -> PartnerRoleType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
