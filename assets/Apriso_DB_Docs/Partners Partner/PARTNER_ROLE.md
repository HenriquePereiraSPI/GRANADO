# PARTNER_ROLE

**Database:** Operational

**Description:** Contains definitions of all the possible Roles for a Partner.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PartnerRole | INT(10,0) | False |  | True |  | Role of the Partner. |
| PartnerRoleType | SMALLINT(5,0) | False |  | False | PARTNER_ROLE_TYPE | Type of Partner Role. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PARTNER_ROLE** on `PartnerRole`

## Foreign Keys (this table -> other)

- **FK_PARTNER_ROLE_PARTNER_ROLE_TYPE** — PARTNER_ROLE -> PARTNER_ROLE_TYPE (`PartnerRoleType -> PartnerRoleType`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_PARTNEROLE** — DISPOSITION -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_ORDER_PARTNER_PARTNER_ROLE** — ORDER_PARTNER -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_PARTNER_RELATIONSHIP_PARTNER_ROLE** — PARTNER_RELATIONSHIP -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_QUALITY_DEFECT_PARTNEROLE** — QUALITY_DEFECT -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
