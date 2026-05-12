# ORDER_SEAL

**Database:** Operational

**Description:** Contains information about the Seals associated with Orders.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BrokenByEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee that broke the Seal linked to the Order. |
| BrokenDate | DATETIME | True |  | False |  | Date the Seal was broken. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_HEADER | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_HEADER | Reference to the Order Type. |
| SealIssuerEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee that issued the Seal. |
| SealledDate | DATETIME | True |  | False |  | Date the truck was sealed. |
| SealNumber | NVARCHAR(20) | True |  | False |  | Seal Number associated with the truck. |
| SealStatus | SMALLINT(5,0) | True |  | False | SEAL_STATUS | Status of the Seal assigned to the truck. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ORDER_SEAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_SEAL_EMPLOYEE** — ORDER_SEAL -> EMPLOYEE (`SealIssuerEmployeeID -> ID`)
- **FK_ORDER_SEAL_EMPLOYEE1** — ORDER_SEAL -> EMPLOYEE (`BrokenByEmployeeID -> ID`)
- **FK_ORDER_SEAL_ORDER_HEADER** — ORDER_SEAL -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SEAL_SEAL_STATUS** — ORDER_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_SEAL_ORDER_HEADER** on `OrderNo, OrderType`
- **IF_ORDER_SEAL_SEAL_STATUS** on `SealStatus`
