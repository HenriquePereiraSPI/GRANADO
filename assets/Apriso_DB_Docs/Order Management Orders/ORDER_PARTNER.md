# ORDER_PARTNER

**Database:** Operational

**Description:** Contains links between various Partners and their Roles. It is used to link customers (Ship to, Bill to, Order By) to the Delivery Order and Partners to Shipment Orders (Carrier, Customs Agent).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | True |  | False | PARTNER_ADDRESS | Link to the Address record. |
| ContactID | INT(10,0) | True |  | False | CONTACT | Link to the CONTACT table |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Link to the Order Item. |
| OrderLineSchedule | INT(10,0) | True |  | False | ORDER_SCHEDULE | For future use. |
| OrderNo | NVARCHAR(20) | False |  | False | ORDER_DETAIL | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | False |  | False | ORDER_DETAIL | Reference to the Order Type. |
| PartnerID | INT(10,0) | False |  | False | PARTNER | Relation to the Partner. |
| PartnerOrderLineNo | NVARCHAR(20) | True |  | False |  | Relation to the Partner Order Line Number. |
| PartnerOrderNo | NVARCHAR(40) | True |  | False |  | Relation to the Partner Order Number. |
| PartnerOrderType | NVARCHAR(10) | True |  | False |  | Relation to the Partner Order Type. |
| PartnerRole | INT(10,0) | True |  | False | PARTNER_ROLE | Role of the Partner. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ORDER_PARTNER** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_PARTNER_CONTACT** — ORDER_PARTNER -> CONTACT (`ContactID -> ID`)
- **FK_ORDER_PARTNER_ORDER_DETAIL** — ORDER_PARTNER -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_PARTNER_ORDER_HEADER** — ORDER_PARTNER -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_PARTNER_ORDER_SCHEDULE** — ORDER_PARTNER -> ORDER_SCHEDULE (`OrderNo, OrderType, OrderLineNo, OrderLineSchedule -> OrderNo, OrderType, OrderLineNo, OrderLineSchedule`)
- **FK_ORDER_PARTNER_PARTNER** — ORDER_PARTNER -> PARTNER (`PartnerID -> ID`)
- **FK_ORDER_PARTNER_PARTNER_ADDRESS** — ORDER_PARTNER -> PARTNER_ADDRESS (`PartnerID, AddressID -> PartnerID, AddressID`)
- **FK_ORDER_PARTNER_PARTNER_ROLE** — ORDER_PARTNER -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_PARTNER_ADDRESS** on `AddressID`
- **IF_ORDER_PARTNER_CONTACT** on `ContactID`
- **IF_ORDER_PARTNER_ORDER_SCHEDULE** on `OrderNo, OrderType, OrderLineNo, OrderLineSchedule`
- **IF_ORDER_PARTNER_PARTNER_ADDRESS** on `PartnerID, AddressID`
- **IF_ORDER_PARTNER_PARTNER_ROLE** on `PartnerRole`
- **IXD_OrderNo_OrderType_PartnerRole** on `OrderNo, OrderType, PartnerRole`
