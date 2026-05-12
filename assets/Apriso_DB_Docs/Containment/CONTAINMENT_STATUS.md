# CONTAINMENT_STATUS

**Database:** Operational

**Description:** Master data for containment status.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentStatus | SMALLINT(5,0) | False |  | True |  | Containment Status |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINMENT_STATUS** on `ContainmentStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINMENT_REASON_CODE** — CONTAINMENT -> CONTAINMENT_STATUS (`ContainmentStatus -> ContainmentStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
