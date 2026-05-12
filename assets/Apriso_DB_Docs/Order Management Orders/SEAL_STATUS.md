# SEAL_STATUS

**Database:** Operational

**Description:** Contains the possible values of a seal ( linked to a container or a shipment). The various statuses are used by Apriso components, they should not be removed. Added reccords will not be processed by Apriso business components

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SealStatus | SMALLINT(5,0) | False |  | True |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEAL_STATUS** on `SealStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINER_SEALS_SEAL_STATUS** — CONTAINER_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)
- **FK_ORDER_HEADER_SEAL_SEAL_STATUS** — ORDER_HEADER_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)
- **FK_ORDER_SEAL_SEAL_STATUS** — ORDER_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)
- **FK_TRANSPORTATION_EQUIPMENT_SEALS_SEAL_STATUS** — EQUIPMENT_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
