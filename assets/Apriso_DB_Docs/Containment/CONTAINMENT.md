# CONTAINMENT

**Database:** Operational

**Description:** The defintion of the containment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentClassID | INT(10,0) | True |  | False | CONTAINMENT_CLASS | User-defined containment class. |
| ContainmentStatus | SMALLINT(5,0) | False |  | False | CONTAINMENT_STATUS | Containment Status |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility where the Containment was created |
| HeldUnits | INT(10,0) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Containment ID |
| Name | NVARCHAR(80) | False |  | False |  | Unique name of the Containment. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason code for the Containment |
| ReleasedUnits | INT(10,0) | True |  | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTAINMENT_CONTAINMENT_CLASS** — CONTAINMENT -> CONTAINMENT_CLASS (`ContainmentClassID -> ID`)
- **FK_CONTAINMENT_FACILITY** — CONTAINMENT -> FACILITY (`Facility -> Facility`)
- **FK_CONTAINMENT_REASON_CODE** — CONTAINMENT -> CONTAINMENT_STATUS (`ContainmentStatus -> ContainmentStatus`)

## Referenced By (other tables -> this)

- **FK_CAPA_CONTAINMENT** — CAPA -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINER_HOLD_CONTAINMENT** — CONTAINER_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_FUTURE_HOLD_CONTAINMENT** — CONTAINMENT_FUTURE_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_LOT_NO_CONTAINMENT** — CONTAINMENT_LOT_NO -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_SERIAL_NO_CONTAINMENT** — CONTAINMENT_SERIAL_NO -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_GROUP_HOLD_CONTAINMENT** — GROUP_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_PRODUCT_HOLD_CONTAINMENT** — PRODUCT_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WAREHOUSE_LOCATION_HOLD_CONTAINMENT** — WAREHOUSE_LOCATION_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_OPERATION_HOLD_CONTAINMENT** — WIP_OPERATION_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_OPERATION_STEP_HOLD_CONTAINMENT** — WIP_OPERATION_STEP_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_ORDER_HOLD_CONTAINMENT** — WIP_ORDER_HOLD -> CONTAINMENT (`ContainmentID -> ID`)

## Unique Indexes

- **UK_CONTAINMENT_NAME** on `Name`

## Non-Unique Indexes

- **IF_CONTAINMENT_CONTAINMENT_CLASS** on `ContainmentClassID`
- **IF_CONTAINMENT_REASON_CODE** on `ContainmentStatus`
