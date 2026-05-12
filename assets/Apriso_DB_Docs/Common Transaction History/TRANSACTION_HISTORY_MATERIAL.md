# TRANSACTION_HISTORY_MATERIAL

**Database:** Operational

**Description:** History table used to store all history related to material related adjustment or inventory moves.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualWeight | DECIMAL(28,10) | True |  | False |  | The actual weight of the inventory being adjusted or moved. |
| AutoReversalFlag | BIT | True |  | False |  | Auto reversal flag indicator. |
| CalculatedWeight | DECIMAL(28,10) | True |  | False |  | The calculated weight of the inventory being adjusted or moved. |
| CarrierName | NVARCHAR(40) | True |  | False |  | The carrier used to move the inventory. |
| Comment1 | NVARCHAR(256) | True |  | False |  | A comment for the adjust or move. |
| Comment2 | NVARCHAR(256) | True |  | False |  | A comment for the adjust or move. |
| Container | NVARCHAR(40) | True |  | False |  | The container being moved or adjusted. |
| ContainerClassID | INT(10,0) | True |  | False |  | The container class of the container being moved or adjusted. |
| ContainerStatus | SMALLINT(5,0) | True |  | False |  | The container status of the container being moved or adjusted. |
| CostCenter | NVARCHAR(70) | True |  | False |  | The referenced cost center. |
| DateType | INT(10,0) | True |  | False |  | Type of Date. |
| DeliveryCompleted | BIT | True |  | False |  | Determines if the delivery has been completed or not. |
| EPC | NVARCHAR(20) | True |  | False |  | EPC. |
| ExpirationDate | DATETIME | True |  | False |  | The date and time when the entity shall be discontinued. |
| ExtractFacility | NVARCHAR(40) | True |  | False |  | Extract inventory information for this Facility. |
| ExtractGradeID | INT(10,0) | True |  | False |  | Extract inventory information for this Grade ID. |
| ExtractInventoryClassID | INT(10,0) | True |  | False |  | Extract inventory information for this The Class of Inventory. |
| ExtractInventoryStatus | SMALLINT(5,0) | True |  | False |  | Extract inventory information for this The inventory status. |
| ExtractLotNo | NVARCHAR(10) | True |  | False |  | Extract inventory information for this Lot No of the Inventory. |
| ExtractPartnerID | INT(10,0) | True |  | False |  | Extract inventory information for this Partner. |
| ExtractProductID | INT(10,0) | True |  | False |  | Extract inventory information for this Product ID. |
| ExtractProductInventoryType | SMALLINT(5,0) | True |  | False |  | Extract inventory information for this Enumerated Product Inventory type. |
| ExtractWarehouse | NVARCHAR(5) | True |  | False |  | Extract inventory information for this Warehouse. |
| ExtractWarehouseLocationID | INT(10,0) | True |  | False |  | Extract inventory information for this Warehouse Location ID. |
| Facility | NVARCHAR(40) | True |  | False |  | The facility the adjust or move is being performed in. |
| FirstReceiptDate | DATETIME | True |  | False |  | The date when inventory was first received. |
| FromContainer | NVARCHAR(40) | True |  | False |  | The from container number when merging or splitting of containers is performed. |
| FromContainerClassID | INT(10,0) | True |  | False |  | The from container class of the from container being moved or adjusted. |
| FromContainerStatus | SMALLINT(5,0) | True |  | False |  | The from container status of the from container being moved or adjusted. |
| FromFacility | NVARCHAR(40) | True |  | False |  | The from facility when the facility is changed during a move. |
| FromGradeID | INT(10,0) | True |  | False |  | The from grade when the grade is changed during a move. |
| FromInContainer | NVARCHAR(40) | True |  | False |  | The previous parent container. |
| FromInventoryClassID | INT(10,0) | True |  | False |  | The new inventory class of the product being moved. |
| FromInventoryOwner | NVARCHAR(10) | True |  | False |  | The inventory owner before moving inventory. |
| FromInventoryStatus | SMALLINT(5,0) | True |  | False |  | The previous inventory status before a move. |
| FromLocation | NVARCHAR(40) | True |  | False |  | The from location the inventory existed in previously during a move. |
| FromLotNo | NVARCHAR(40) | True |  | False |  | The from lot number when the lot number is changed during a move. |
| FromPartnerID | INT(10,0) | True |  | False |  | From Partner ID. |
| FromPartnerName | NVARCHAR(50) | True |  | False |  | The from partner who owned or was involved with the inventory during a move. |
| FromPartnerType | INT(10,0) | True |  | False |  | The from partner type who owned or was involved with the inventory during a move. |
| FromProductGradeCode | NVARCHAR(20) | True |  | False |  | The new grade of the product being moved. |
| FromProductNo | NVARCHAR(80) | True |  | False |  | The previous product number during a move. |
| FromQuantityAllocated | DECIMAL(28,10) | True |  | False |  | The quantity that has been allocated before. |
| FromQuantityException | DECIMAL(28,10) | True |  | False |  | The exception quantity before. |
| FromQuantityOnHand | DECIMAL(28,10) | True |  | False |  | The quantity that is on hand before. |
| FromQuantityToPick | DECIMAL(28,10) | True |  | False |  | From Quantity To Pick. |
| FromQuantityToPickReleased | DECIMAL(28,10) | True |  | False |  | The quantity that is to-pick-release before. |
| FromQuantityToPut | DECIMAL(28,10) | True |  | False |  | The quantity that is to-put before. |
| FromQuantityToPutReleased | DECIMAL(28,10) | True |  | False |  | The quantity that is to-put-release before. |
| FromReasonCode | NVARCHAR(20) | True |  | False |  | The previous reason code used during a move. |
| FromSAPWarehouse | NVARCHAR(10) | True |  | False |  | The from SAP warehouse the inventory existed in previously during a move. |
| FromSerialNo | NVARCHAR(40) | True |  | False |  | The from serial number when the serial number is changed during a move, or a range of serials is used. |
| FromUomCode | NVARCHAR(10) | True |  | False |  | The from UOM code used for the quantity when the UOM is changed during the move or adjust. |
| FromWarehouse | NVARCHAR(10) | True |  | False |  | The from warehouse the inventory existed in previously during a move. |
| FromWarehouseType | SMALLINT(5,0) | True |  | False |  | The from warehouse type the inventory existed in previously during a move. |
| FromZone | NVARCHAR(20) | True |  | False |  | The from zone the inventory existed in previously during a move. |
| GLCode | NVARCHAR(40) | True |  | False |  | The referenced General Ledger Account code. |
| GradeID | INT(10,0) | True |  | False |  | The grade being moved or adjusted. |
| HostIndicator1 | NVARCHAR(10) | True |  | False |  | The host first indicator defined by the transaction's product inventory type. |
| HostIndicator2 | NVARCHAR(10) | True |  | False |  | The host second indicator defined by the transaction's product inventory type. |
| HostMovementCode | NVARCHAR(10) | True |  | False |  | The host movement code for the transaction product inventory type. |
| HostReverseLocation | NVARCHAR(40) | True |  | False |  | Reverse Location specific to Host System. |
| HostTransactionCode | NVARCHAR(10) | True |  | False |  | Transaction Code specific to Host system. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| InboundDeliveryNo | NVARCHAR(10) | True |  | False |  | The referenced inbound delivery number. |
| InContainer | NVARCHAR(40) | True |  | False |  | The parent container. |
| InspectionRequired | BIT | True |  | False |  | Determines if inspection was required on received inventory. |
| InventoryChange | NVARCHAR(1) | True |  | False |  | Whether or not this transaction decremented, incremented or moved inventory. |
| InventoryClassID | INT(10,0) | True |  | False |  | The inventory class of the product being transacted on. |
| InventoryDocumentNo | NVARCHAR(20) | True |  | False |  | The inventory document number for cycle counting. |
| InventoryID | INT(10,0) | True |  | False |  | ID of the Inventory. |
| InventoryOwner | NVARCHAR(10) | True |  | False |  | The inventory owner. |
| InventoryStatus | SMALLINT(5,0) | True |  | False |  | The inventory status of the adjusted or moved inventory. |
| InventoryTag | INT(10,0) | True |  | False |  | Tag of inventory. |
| LastReceiptDate | DATETIME | True |  | False |  | The date when inventory was last received. |
| Location | NVARCHAR(40) | True |  | False |  | The location the inventory will exist in. |
| LotNo | NVARCHAR(40) | True |  | False |  | The lot number being moved or adjusted. |
| LP | NVARCHAR(20) | True |  | False |  | License Plate. |
| MaxFifoDate | DATETIME | True |  | False |  | The latest first-in-first-out date and time. |
| MinFifoDate | DATETIME | True |  | False |  | The earliest first-in-first-out date and time. |
| NotAfterDate | DATETIME | True |  | False |  | Shipment not to be received after. |
| NotBeforeDate | DATETIME | True |  | False |  | Shipment not to be received before. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The WIP Order operation sequence number used to move or adjust the inventory. |
| OrderLineNo | NVARCHAR(40) | True |  | False |  | The referenced order line number. |
| OrderLineSchedule | INT(10,0) | True |  | False |  | The referenced order line schedule. |
| OrderLineStatus | SMALLINT(5,0) | True |  | False |  | The status of the referenced order line number. |
| OrderNo | NVARCHAR(40) | True |  | False |  | The referenced order number. |
| OrderPartnerNo | NVARCHAR(40) | True |  | False |  | Order Partner Name. |
| OrderScheduleStatus | SMALLINT(5,0) | True |  | False |  | The status of the referenced order schedule number. |
| OrderStatus | SMALLINT(5,0) | True |  | False |  | The status of the referenced order number. |
| OrderType | SMALLINT(5,0) | True |  | False |  | The referenced order type. |
| ParentWipOrderNo | NVARCHAR(40) | True |  | False |  | Parent Work Order number. |
| ParentWipOrderType | SMALLINT(5,0) | True |  | False |  | Enumerated Parent Work Order type. |
| PartnerID | INT(10,0) | True |  | False |  | Partner ID. |
| PartnerName | NVARCHAR(50) | True |  | False |  | The partner who owns or is involved with the inventory. |
| PartnerProductNo | NVARCHAR(80) | True |  | False |  | The product number the partner uses. |
| PartnerType | INT(10,0) | True |  | False |  | The partner type who owns or is involved with the inventory. |
| PostingDate | DATETIME | True |  | False |  | Posted date. |
| ProductGradeCode | NVARCHAR(20) | True |  | False |  | The grade of the product being transacted on. |
| ProductID | INT(10,0) | True |  | False |  | Product ID of inventory. |
| ProductInventoryType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of product inventory. |
| ProductNo | NVARCHAR(80) | True |  | False |  | The product number being moved or adjusted. |
| ProductRevision | NVARCHAR(20) | True |  | False |  | Product Revision of inventory. |
| ProjectCode | NVARCHAR(10) | True |  | False |  | The referenced project code. |
| Quantity | DECIMAL(28,10) | True |  | False |  | The quantity being moved or adjusted. |
| QuantityAccepted | DECIMAL(28,10) | True |  | False |  | The accepted quantity when receiving against an order. |
| QuantityCancelled | DECIMAL(28,10) | True |  | False |  | The cancelled quantity when receiving against an order. |
| QuantityInActive | DECIMAL(28,10) | True |  | False |  | Quantity that is in-active. |
| QuantityReceived | DECIMAL(28,10) | True |  | False |  | The received quantity when receiving against an order. |
| QuantityRejected | DECIMAL(28,10) | True |  | False |  | The rejected quantity when receiving against an order. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | The referenced reason code. |
| ReasonType | SMALLINT(5,0) | True |  | False |  | Enumeration of values representing type of reasons for occurrences. |
| ReferenceNumber | NVARCHAR(15) | True |  | False |  | The reference number associated to an order. |
| ReservationCreateDate | DATETIME | True |  | False |  | Inventory reservation creation date. |
| ReservationCustomer | NVARCHAR(40) | True |  | False |  | Customer name. |
| ReservationExpirationDate | DATETIME | True |  | False |  | Inventory reservation expiration date when the entity shall be discontinued. |
| ReservationItemNo | INT(10,0) | True |  | False |  | The referenced reservation item number. |
| ReservationNo | NVARCHAR(20) | True |  | False |  | The referenced reservation number. |
| ReservationShipTo | NVARCHAR(20) | True |  | False |  | Ship to information of a customer. |
| ReservationTag | INT(10,0) | True |  | False |  | Inventory reservation and its attribute. |
| ReverseTransactionCode | NVARCHAR(10) | True |  | False |  | The reverse transaction code for the transaction code used. |
| RotationKey | INT(10,0) | True |  | False |  | Rotation key for the product. |
| SalesOrderItemNo | NVARCHAR(6) | True |  | False |  | The referenced sales order item number. |
| SalesOrderNo | NVARCHAR(10) | True |  | False |  | The referenced sales order number. |
| SAPWarehouse | NVARCHAR(10) | True |  | False |  | The SAP warehouse the inventory will exist in. |
| SealNo | NVARCHAR(20) | True |  | False |  | Any number used to seal the delivery ActualDate - (datetime) Shipment date of actual receipt. |
| SecondarySerialNo | NVARCHAR(40) | True |  | False |  | An external serial number associated with the serial number. |
| SelfLifeExpirationDate | DATETIME | True |  | False |  | The shelf life expiration date for the inventory. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The serial number being moved or adjusted. |
| ShipmentNo | NVARCHAR(10) | True |  | False |  | The referenced shipment number. |
| TargetDate | DATETIME | True |  | False |  | Shipment target date for receipt. |
| ToQuantityAllocated | DECIMAL(28,10) | True |  | False |  | The current quantity that has been allocated. |
| ToQuantityException | DECIMAL(28,10) | True |  | False |  | The current exception quantity. |
| ToQuantityOnHand | DECIMAL(28,10) | True |  | False |  | The current quantity that is on hand. |
| ToQuantityToPick | DECIMAL(28,10) | True |  | False |  | The current quantity that is to-pick. |
| ToQuantityToPickReleased | DECIMAL(28,10) | True |  | False |  | The current quantity that is to-pick-release. |
| ToQuantityToPut | DECIMAL(28,10) | True |  | False |  | The current quantity that is to-put. |
| ToQuantityToPutReleased | DECIMAL(28,10) | True |  | False |  | The current quantity that is to-put-release. |
| TransactionCode | NVARCHAR(10) | True |  | False |  | The transaction code that was executed. |
| TransactionGroup | NVARCHAR(50) | True |  | False |  | The transaction group for the transaction code used. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | The link to the TRANSACTION_HISTORY parent table. |
| TransactionType | SMALLINT(5,0) | True |  | False |  | The transaction type for the transaction code used. |
| UomBaseQuantity | DECIMAL(28,10) | True |  | False |  | Quantity in unit of measure code of inventory. |
| UomCode | NVARCHAR(10) | True |  | False |  | The UOM code for the quantity being moved or adjusted. |
| Warehouse | NVARCHAR(10) | True |  | False |  | The warehouse the inventory will exist in. |
| WarehouseLocation | NVARCHAR(40) | True |  | False |  | The name or number of the warehouse location. |
| WarehouseLocationID | INT(10,0) | True |  | False |  | Location and its attribute ID. |
| WarehouseType | SMALLINT(5,0) | True |  | False |  | The warehouse type the inventory will exist in. |
| WipOprSequenceNo | NVARCHAR(20) | True |  | False |  | Work Order operation sequence number. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The WIP Order used to move or adjust the inventory. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | The WIP Order type used to move or adjust the inventory. |
| WorkBreakDownStructureElement | INT(10,0) | True |  | False |  | The work break down structure element. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | The work center used to adjust or move the inventory. |
| Zone_ | NVARCHAR(20) | True |  | False |  | The zone the inventory will exist in. |

## Primary Key

- **PK_TRANSACTION_HISTORY_MATERIAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_MATERIAL_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_MATERIAL -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_HISTORY_MAT_SERIAL_TRANSACTION_HISTORY_MATERIAL** — TRANSACTION_HISTORY_MAT_DET -> TRANSACTION_HISTORY_MATERIAL (`TransactionHistoryMaterialID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_MATERIAL_TRANSACTION_HISTORY** on `TransactionHistoryID`
- **IXD_LotNo** on `LotNo`
- **IXD_SerialNo** on `SerialNo`
- **IXD_WipOrderNo_WipOrderType** on `WipOrderNo, WipOrderType`
