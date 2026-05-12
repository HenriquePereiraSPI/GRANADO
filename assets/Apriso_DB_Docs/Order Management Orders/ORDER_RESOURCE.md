# ORDER_RESOURCE

**Database:** Operational

**Description:** Contains links between Orders and Resources. Additionally, it stores information concerning whether or not a Resource is exclusively allocated to an Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ExclusiveAllocation | BIT | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Link to the Order Item. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number linked to the Resource. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Type of the Order linked to the Resource. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Name of the Resource linked to the Order. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Type of the Resource linked to the Order. |

## Primary Key

- **PK_ORDER_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_RESOURCE_ORDER_DETAIL** — ORDER_RESOURCE -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_RESOURCE_RESOURCE_** — ORDER_RESOURCE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_RESOURCE_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_ORDER_RESOURCE_RESOURCE_** on `ResourceName, ResourceType`
