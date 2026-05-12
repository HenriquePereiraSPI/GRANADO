# CreateOrderLine

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** create order line detail add

## Description

The purpose of this Business Component method is to add lines to an Order. The BC only creates an Order Line, the Order Header must already exit. This BC does not create WIP Order or WIP Order Content below the Order Line, and it does not trigger an explosion. It creates a record in the ORDER_DETAIL table, and returns the Order Line Number as the output.
 

To specify additional properties of the Order Line, the user must manually create dynamic Inputs to the BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order number of the line. |
| Input | OrderType | Integer | Yes | The Order Type of the line |
| Input | OrderLineNo | Integer | No | The Order Line number. If not provided, a new number will be generated. |
| Input | OrderLineStatus | Integer | Yes | The status of the line. |
| Input | ProductID | Integer | No | The product of the line. |
| Input | RequestedLotNo | Char | No | The lot number. This can be entered only when the product is lot- or both-tracked. |
| Input | GradeID | Integer | No | The grade of the line. |
| Input | OrderUoMCode | Char | Yes | The order UOM code. |
| Input | QuantityOrdered | Decimal | Yes | The amount ordered in the OrderUomCode unit of measure. |
| Input | QuantityToleranceAllowed | Decimal | No | The tolerance of the line. |
| Input | FromFacility | Char | No | The "from" Facility. This is required if FromWarehouse is specified. |
| Input | ToFacility | Char | No | The "to" Facility. This is required if ToWarehouse is specified. |
| Input | FromWarehouse | Char | No | The "from" Warehouse. |
| Input | ToWarehouse | Char | No | The "to" Warehouse. |
| Input | FromSapWarehouse | Char | No | The "from" SAP Warehouse. |
| Input | ToSapWarehouse | Char | No | The "to" SAP Warehouse. |
| Input | FromInventoryClass | Integer | No | The "from" Inventory Class. |
| Input | ToInventoryClass | Integer | No | The "to" Inventory Class. |
| Input | FromInventoryStatus | Integer | No | The "from" Inventory Status. |
| Input | ToInventoryStatus | Integer | No | The "to" Inventory Status. |
| Input | FromPartnerID | Integer | No | The "from" partner. |
| Input | ToPartnerID | Integer | No | The "to" partner. |
| Input | ParentOrderNo | Char | No | The parent order number. |
| Input | ParentOrderType | Integer | No | The parent Order Type. This is required if the parent order number is specified. |
| Input | ParentOrderLineNo | Integer | No | The parent Order Line number. |
| Input | ProgressStatusLine | Integer | No | The progress status of the line. |
| Input | ProjectID | Integer | No | The project ID of the line. |
| Input | ExpectedDate | DateTime | No | The expected completion date of the line. |
| Input | DueDate | DateTime | No | The due date of the line. |
| Input | ReleaseDate | DateTime | No | The date on which the Order Line was released. |
| Input | ScheduleStartDate | DateTime | No | The schedule start date of the line. |
| Input | TextLong | Char | No | Any notes required for the line. |
| Input | LanguageID | Integer | No | The language of the note. |
| Output | CreatedOrderLineNo | Integer | No | The output of the created line number. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReservationTag | Integer | The unique identifier of the Inventory Reservation and its attributes. |
| DaysEarlyAllowed | Integer | The number of days that the shipment is allowed to arrive before scheduled. |
| DaysLateAllowed | Integer | The number of days that the shipment is allowed to arrive late and still be received. |
| DaysException | Char | The action required if the date is out of the tolerance (Error, Warning, Allow). |
| QuantityToleranceException | Char | The action required if the quantity is out of the tolerance (Error, Warning, Allow). |
| OALineID | Integer | The ID of OALine. |
| FromWarehouseLocationID | Integer | The "from" Warehouse Location. |
| ToWarehouseLocationID | Integer | The "to" Warehouse Location. |
| MinimumExpirationDate | DateTime | The earliest allowable expiration date. |
| PartnerProductNo | Char | The partner product number. |
| OrderCategory | Integer | The category of the order (user-defined). |
| FromGroup | Char | The "from" Group. |
| FromGroupType | Integer | The "from" Group Type. |
| FromGroupClassID | Integer | The "from" Group Class. |
| ToGroup | Char | The "to" Group. |
| ToGroupType | Integer | The "to" Group Type. |
| ToGroupClassID | Integer | The "to" Group Class. |
| FromERPMaterialStockID | Integer | The "from" ERP Material Stock. |
| ToERPMaterialStockID | Integer | The "to" ERP Material Stock. |
| FromZone | Char | The "from" Zone. |
| ToZone | Char | The "to" Zone. |

## Validations

- OrderNo, OrderType and OrderLineStatus are mandatory inputs.
 **Note: **The inputs of Date type are not mandatory inputs. However, a date must be entered (Process Builder constraint for date-type fields). If any of the dates are not required, a date smaller than 1st January 1905 or greater than the 31st December 2135 should be inputted (will be processed as "no date"). 
- There is normal validation for the Locations, Warehouses, Facilities and SAP Warehouses (e.g., the From Warehouse must exist in the From Facility). 
- If RequestedLotNo is inputted, system checks that the product is Lot-tracked. 
- If TextLong is inputted, system checks that LanguageID is inputted as well. If not, system displays an error message. 
- If a LineOrderNo is inputted, system will validate that is does not already exist. 
- All data must be consistent with DB FK constraints.  
 

 

For dynamic inputs the following validations are available:
 
 
- System checks if the provided FromWarehouse, FromFacility, FromZone are equal to values in FromWarehouseLocation entity (if inputs are provided). 
- System checks if the provided FromWarehouse, FromFacility are equal to values in FromZone entity (if inputs are provided).  
- System checks if the provided ToWarehouse, ToFacility, ToZone are equal to values in ToWarehouseLocation entity (if inputs are provided).  
- System checks if the provided ToWarehouse, ToFacility are equal to values in ToZone entity (if inputs are provided).

## System Processing

- System creates a record in the ORDER_DETAIL table. 
- If OrderLineNo is not inputted, then a new order line number is computed: 
 
- If no line exists for the order, the OrderLineNo is 10. 
- Else, OrderLineNo is 10 plus the greatest existing OrderLineNo for the order. 
 
- If TextLong is inputted, system generates a record in the TEXT_TRANSLATION table. 
- For each inputted date, the system generates a record in the ORDER_DATE table.  
- The (created) OrderLineNo is the output of the Business Component.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DETAIL | OrderNo | The order number of the header document. |
| ORDER_DETAIL | OrderType | The order type of the header document. |
| ORDER_DETAIL | OrderLineNo | The order line number for the created record (inputted or computed). Output. |
| ORDER_DETAIL | OrderStatus | Inputted OrderLineStatus - the status of the order line. |
| ORDER_DETAIL | ProductID | The product of the order line. |
| ORDER_DETAIL | RequestedLotNo | The request lot number. It can only be specified for Lot Tracked products. |
| ORDER_DETAIL | GradeID | The requested grade of the line. |
| ORDER_DETAIL | OrderedUoMCode | Inputted OrderUoMCode - the order quantity unit of measure. Required if a quantity is entered. |
| ORDER_DETAIL | QuantityOrdered | The quantity of product ordered. |
| ORDER_DETAIL | QuantityToleranceAllowed | Inputted QuantityTolleranceAllowed - The quantity allowed for over receiving. |
| ORDER_DETAIL | FromFacility | The source Facility - for inter organization transfers. |
| ORDER_DETAIL | ToFacility | The destination facility. |
| ORDER_DETAIL | FromWarehouse | The source warehouse for inter organization or inter plant transfers. |
| ORDER_DETAIL | Towarehouse | The destination warehouse. |
| ORDER_DETAIL | FromSAPWarehouse | The source SAP warehouse. |
| ORDER_DETAIL | ToSAPwarehouse | The to SAP warehouse. |
| ORDER_DETAIL | FromInventoryClass | Source inventory class. |
| ORDER_DETAIL | ToInventoryClassID | Inputted ToInventoryClass - the destination inventory class. |
| ORDER_DETAIL | FromInventoryStatus | The source status. |
| ORDER_DETAIL | ToInventoryStatus | The destination status. |
| ORDER_DETAIL | FromPartnerID | From partner. |
| ORDER_DETAIL | ToParnerID | To partner |
| ORDER_DETAIL | ParentOrderNo | Parent Order number. |
| ORDER_DETAIL | ParentOrderType | Parent Order Type. |
| ORDER_DETAIL | ParentOrderLineNo | Parent Order Line number. |
| ORDER_DETAIL | ProgressStatus | Inputted ProgressStatusLine Progress status of the line. |
| ORDER_DETAIL | ProjectID | Order line to be associated with is project. |
| ORDER_DETAIL | TextID | ID of the record in TEXT table. |
| TEXT_TRANSLATION | ID | System generated unique identifier for Text. |
| TEXT_TRANSLATION | Extended | Inputted TextLong - text to be stored for the line. |
| TEXT_TRANSLATION | LanguageID | Inputted LanguageID - language of the text (required if TextLong is inputted). |
| ORDER_DATE | OrderNo | The order number of the header document. |
| ORDER_DATE | OrderType | The order type of the header document. |
| ORDER_DATE | OrderLineNo | Order Line Number (inputted or computed). |
| ORDER_DATE | DateType | Type of date: 11 (Expected), 12 (Due), 13 (Release) or 14 (Schedule Start). |
| ORDER_DATE | Actual | Inputted ExpectedDate, DueDate, ReleaseDate or ScheduleStartDate, depending on the DateType value. |
| ORDER_DETAIL | ReservationTag | Inventory Reservation and its Attributes unique identifier. |
| ORDER_DETAIL | DaysEarlyAllowed | The number of days that the shipment is allowed to arrive before scheduled. |
| ORDER_DETAIL | DaysLateAllowed | The number of days the shipment is allowed to arrive late and still receive it. |
| ORDER_DETAIL | DaysException | The action required if date is out of tolerance (Error, Warning, Allow). |
| ORDER_DETAIL | QuantityToleranceException | Action required if quantity is out of tolerance (Error, Warning, Allow). |
| ORDER_DETAIL | OALineID | The ID of OALine. |
| ORDER_DETAIL | FromWarehouseLocationID | The From Warehouse Location. |
| ORDER_DETAIL | ToWarehouseLocationID | The To Warehouse Location. |
| ORDER_DETAIL | MinimumExpirationDate | The earliest allowable expiration date. |
| ORDER_DETAIL | PartnerProductNo | The Partner Product Number. |
| ORDER_DETAIL | OrderCategory | The category of Order (user defined). |
| ORDER_DETAIL | FromGroup | The From Group. |
| ORDER_DETAIL | FromGroupType | The From Group Type. |
| ORDER_DETAIL | FromGroupClassID | The From Group Class. |
| ORDER_DETAIL | ToGroup | The To Group. |
| ORDER_DETAIL | ToGroupType | The To Group Type. |
| ORDER_DETAIL | ToGroupClassID | The To Group Class. |
| ORDER_DETAIL | FromERPMaterialStockID | The From ERP Material Stock. |
| ORDER_DETAIL | ToERPMaterialStockID | The To ERP Material Stock. |
| ORDER_DETAIL | FromZone | The From Zone. |
| ORDER_DETAIL | ToZone | The To Zone. |
