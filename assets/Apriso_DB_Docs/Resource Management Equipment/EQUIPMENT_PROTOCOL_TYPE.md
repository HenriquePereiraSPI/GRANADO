# EQUIPMENT_PROTOCOL_TYPE

**Database:** Operational

**Description:** This table defines protocols for use in the EQUIPMENT_MACH_COMM_CONFIG table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EquipmentProtocolType | SMALLINT(5,0) | False |  | True |  | Value for protocol. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EQUIPMENT_PROTOCOL_TYPE** on `EquipmentProtocolType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_MACH_COMM_CONFIG_EQUIPMENT_PROTOCOL_TYPE** — EQUIPMENT_MACH_COMM_CONFIG -> EQUIPMENT_PROTOCOL_TYPE (`EquipmentProtocolType -> EquipmentProtocolType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
