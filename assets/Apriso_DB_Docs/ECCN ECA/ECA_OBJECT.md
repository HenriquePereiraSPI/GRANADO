# ECA_OBJECT

**Database:** Operational

**Description:** Table linking ECA with DELMIA Apriso objects. Assignment means: ECA validation requied for the object. The table contains direct links via foreign keys like: Product, Employee, Resource, Serial, Lot, Order, WIP Order. Other objects must be handled by dynamic columns: Key1... Key10

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| EcaObjectType | SMALLINT(5,0) | False |  | False | ECA_OBJECT_TYPE | Link to ECA Object Type. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| Key10DateTime | DATETIME | True |  | False |  | The Key10 value. Link to a column from other table. |
| Key1Char | NVARCHAR(255) | True |  | False |  | The Key1 value. Link to a column from other table. |
| Key2Char | NVARCHAR(255) | True |  | False |  | The Key2 value. Link to a column from other table. |
| Key3Char | NVARCHAR(255) | True |  | False |  | The Key3 value. Link to a column from other table. |
| Key4Char | NVARCHAR(255) | True |  | False |  | The Key4 value. Link to a column from other table. |
| Key5Int | INT(10,0) | True |  | False |  | The Key5 value. Link to a column from other table. |
| Key6Int | INT(10,0) | True |  | False |  | The Key6 value. Link to a column from other table. |
| Key7Int | INT(10,0) | True |  | False |  | The Key7 value. Link to a column from other table. |
| Key8Int | INT(10,0) | True |  | False |  | The Key8 value. Link to a column from other table. |
| Key9Int | INT(10,0) | True |  | False |  | The Key9 value. Link to a column from other table. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | WIP Operation sequence number. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Order Type. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version). |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | Link to Resource. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial number. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | WIP Operation Step sequence number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_ECA_OBJECT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_OBJECT_ECA** — ECA_OBJECT -> ECA (`EcaID -> ID`)
- **FK_ECA_OBJECT_ECA_OBJECT_TYPE** — ECA_OBJECT -> ECA_OBJECT_TYPE (`EcaObjectType -> EcaObjectType`)
- **FK_ECA_OBJECT_EMPLOYEE** — ECA_OBJECT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_OBJECT_ORDER_DETAIL** — ECA_OBJECT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ECA_OBJECT_ORDER_HEADER** — ECA_OBJECT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ECA_OBJECT_PRODUCT** — ECA_OBJECT -> PRODUCT (`ProductID -> ID`)
- **FK_ECA_OBJECT_RESOURCE** — ECA_OBJECT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_ECA_OBJECT_UNIT** — ECA_OBJECT -> UNIT (`UnitID -> ID`)
- **FK_ECA_OBJECT_WIP_OPERATION** — ECA_OBJECT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ECA_OBJECT_WIP_OPERATION_STEP** — ECA_OBJECT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_ECA_OBJECT_WIP_ORDER** — ECA_OBJECT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_OBJECT_ECA** on `EcaID`
- **IF_ECA_OBJECT_LOT_NO** on `LotNo, ProductID`
- **IF_ECA_OBJECT_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_ECA_OBJECT_PRODUCT** on `ProductID`
- **IF_ECA_OBJECT_RESOURCE** on `ResourceID`
- **IF_ECA_OBJECT_SERIAL_NO** on `SerialNo, ProductID`
- **IF_ECA_OBJECT_UNIT** on `UnitID`
- **IF_ECA_OBJECT_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
