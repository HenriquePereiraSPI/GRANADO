# WIP_ORDER_RELATION

**Database:** Operational

**Description:** This table is used to link execution order together. It support many to many relationship and allows the user to create relation with quantity or percentage

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildOrderQuantity | DECIMAL(28,10) | True |  | False |  | Define the quantity of the parent order assigned to the child order |
| ChildOrderQuantityUOM | NVARCHAR(10) | True |  | False | UOM | UOM of the quantity of the parent order assigned to the child order |
| ChildWIPOrderNo | NVARCHAR(40) | False |  | False | WIP_ORDER | Child WIP Order number assign to a parent order |
| ChildWIPOrderType | SMALLINT(5,0) | False |  | False | WIP_ORDER | Child WIP Order type assign to a parent order |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ParentChildRatio | DECIMAL(28,10) | True |  | False |  | Percentage of the parent WIP Order allocated to the children |
| ParentWIPOrderNo | NVARCHAR(40) | False |  | False | WIP_ORDER | Reference to the Parent WIP Order |
| ParentWIPOrderType | SMALLINT(5,0) | False |  | False | WIP_ORDER | Reference to the Parent WIP Order |

## Primary Key

- **PK_WIP_ORDER_RELATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_RELATION_UOM** — WIP_ORDER_RELATION -> UOM (`ChildOrderQuantityUOM -> UomCode`)
- **FK_WIP_ORDER_RELATION_WIP_ORDER** — WIP_ORDER_RELATION -> WIP_ORDER (`ParentWIPOrderNo, ParentWIPOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_RELATION_WIP_ORDER1** — WIP_ORDER_RELATION -> WIP_ORDER (`ChildWIPOrderNo, ChildWIPOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_RELATION_WIP_ORDER1** on `ChildWIPOrderNo, ChildWIPOrderType`
- **IXD_ParentWIPOrderNo_ParentWIPOrderType_ChildWIPOrderNo_ChildWIPOrderType** on `ParentWIPOrderNo, ParentWIPOrderType, ChildWIPOrderNo, ChildWIPOrderType`
