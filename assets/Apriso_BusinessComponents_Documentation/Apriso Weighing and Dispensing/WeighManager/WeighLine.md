# WeighLine

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Line

## Description

This method performs weighing of the Weigh Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighLineID | Integer | Yes | The ID of Weigh Line record. |
| Input | MoveTransactionCode | Char | Conditional | The transaction code of moving the container, i.e. WDMOVMAT. |
| Input | AdjustTransactionCode | Char | Conditional | The transaction code of adjusting source quantity, i.e. WDAUTADJ. |
| Input | ScrapTransactionCode | Char | Conditional | The transaction code of scrapping container, i.e. WDSCPCON. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | Comment | Char | No | User comment. |
| Input | DestinationContainer | Char | Yes | Destination Container number. |
| Input | DestinationWarehouseLocationID | Integer | Conditional | Warehouse Location of Destination Container. |
| Input | Mode | Char | No | Weighing mode (e.g. POURING, DECLARATION, SOURCE, SUBTRACTIVE) |
| Input | Container | Char | Yes | The source Container number. |
| Input | LotNo | Char | No | Lot number. |
| Input | WarehouseLocationID | Integer | No | Warehouse Location of the Container. |
| Input | ScaleStationID | Integer | No | Resource ID of the Scale Station. |
| Input | ScaleID | Integer | No | Resource ID of the Scale. |
| Input | TareWeight | Decimal | No | Tare weight. |
| Input | GrossWeight | Decimal | No | Gross weight. |
| Input | NetWeight | Decimal | Yes | Net weight. |
| Input | UomCode | Char | Yes | UOM of the weights. |
| Input | Manual | Boolean | No | The flag indicates manual weighing mode. |
| Input | UserReference | Char | No | Field for user reference. |
| Output | WeighedQuantity | Decimal | Yes | Weighed quantity. |

## Validations

- System validates if Weigh Line exists.  
- System validates if Product of the Line exists. 
- System validates if Weigh Header exists.  
- System validates if Scale Station and the Scale exist. 
- System validates if Warehouse Location exists. 
- System checks if there is enough inventory to move. 
- System validates if Destination Container exists.

## System Processing

- System moves Destination Container to Destination Warehouse Location if needed. 
- If Net Weight exceeds available inventory, the system increases source inventory (using Adjust_v92 BC). 
- If source Container and Destination Container are the same, and Net Weight is less than available quantity, the system decreases (scraps) remaining source inventory (using Adjust_v92 BC). 
- System moves source inventory to Destination Container (using Move BC). 
- System creates a new Weigh Line Detail record. 
- System updates Weighed Quantity of the Weigh Line. 
- System adds destination Container to the Weigh Header (a parent of Weigh Line). 
- System creates XMLs for Transaction History for both Weigh Line and Weigh Line Details. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE | WeighedQuantity | Increased by NetWeight. |
| WEIGH_LINE_DETAIL | ID | ID or newly created record. |
|  | WeighLineID | WeighLineID |
|  | DestinationContainer | DestinationContainer |
|  | Mode | Mode |
|  | Container | Container |
|  | LotNo | LotNo |
|  | WarehouseLocationID | WarehouseLocationID |
|  | ScaleStationID | ScaleStationID |
|  | ScaleID | ScaleID |
|  | EmployeeID | ID of currently logged in Employee. |
|  | SignedByEmployeeID | SignedByEmployeeID |
|  | ApprovedByEmployeeID | ApprovedByEmployeeID |
|  | TareWeight | TareWeight |
|  | GrossWeight | GrossWeight |
|  | NetWeight | NetWeight |
|  | UomCode | UomCode |
|  | Manual | Manual |
|  | UserReference | UserReference |
| WEIGH_HEADER_CONTAINER | Container | DestinationContainer |
|  | WeighHeaderID | ID of the Weigh Header, the parent of Weigh Line. |
