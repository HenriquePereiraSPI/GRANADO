# SIGNATURE_TIMELINE

**Database:** Operational

**Description:** This table stores timelines of the signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SignatureTimeline | SMALLINT(5,0) | False |  | True |  | Primary Key. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SIGNATURE_TIMELINE** on `SignatureTimeline`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_TIMELINE** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_TIMELINE (`SignatureTimeline -> SignatureTimeline`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
