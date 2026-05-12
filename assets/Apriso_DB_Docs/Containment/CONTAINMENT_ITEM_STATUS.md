# CONTAINMENT_ITEM_STATUS

**Database:** Operational

**Description:** The status of the containment item.  Can be user definable.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| Name | NVARCHAR(50) | True |  | False |  | The containment item name of the status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINMENT_ITEM_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINMENT_LOT_NO_CONTAINMENT_ITEM_STATUS** — CONTAINMENT_LOT_NO -> CONTAINMENT_ITEM_STATUS (`ContainmentItemStatusID -> ID`)
- **FK_CONTAINMENT_SERIAL_NO_CONTAINMENT_ITEM_STATUS** — CONTAINMENT_SERIAL_NO -> CONTAINMENT_ITEM_STATUS (`ContainmentItemStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
