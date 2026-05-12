# DirectIntroduction

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Direct Introduction

## Description

This method performs weighing by Direct Introduction of Containers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | Mode | Char | Yes | Weighing mode (e.g. DIPRODUCT, DIPOUR, DIJOIN) |
| Input | WeighLineID | Integer | Yes | The ID of a Weigh Line record. |
| Input | MoveTransactionCode | Char | Yes | The transaction code for direct introduction, i.e. WDDIRINT. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | Comment | Char | No | User comment. |
| Input | DestinationContainer | Char | Conditional | Destination Container number. |
| Input | DestinationWarehouseLocationID | Integer | Conditional | Warehouse Location of Destination Container. |
| Input | SourceWeighHeader | Integer | Conditional | Source Weigh Header ID. |
| Input | Container | Char | Conditional | The source Container number. |
| Input | ScaleStationID | Integer | No | Resource ID of the Scale Station. |
| Input | ScaleID | Integer | No | Resource ID of the Scale. |
| Input | Manual | Boolean | Yes | The flag indicates manual weighing mode. |
| Input | UserReference | Char | No | A field for user purpose. |
| Input | SignedByEmployeeID | Integer | No | Employee ID who signed the record. |
| Input | ApprovedByEmployeeID | Integer | No | Employee ID who approved the record. |

## Validations

- System validates if weighing Mode is supported. 
- System validates if Weigh Line exists and has the flag DirectIntroduction set to true. 
- For DIPOUR and DIJOIN weighing Mode, the system validates if Source Weigh Header is provided. 
- For DIPOUR mode, the system validates if source and destination Containers are provided. 
- For DIJOIN mode, the system validates if source Container is provided. 
- System validates if source and destination Containers are different and exist. 
- System validates if Product exists. 
- System validates if Scale Station and the Scale exist. 
- System validates if Destination Warehouse Location exists. 
- System validates if Employees' IDs exist.

## System Processing

- System moves Destination Container to the Destination Warehouse Location if both are provided. 
- If Mode is "DIPOUR": 
 
- System moves the content to source Container to the destination Container (using Move BC). 
- System removes the source Container from source Weigh Header. 
- System adds destination Container to destination Weigh Header (a parent of Weigh Line). 
 
- If Mode is "DIJOIN": 
 
- System moves source Container to Destination Warehouse Location (using Move BC). 
- System removes the source Container from source Weigh Header. 
- System adds source Container to destination Weigh Header (a parent of Weigh Line). 
 
- System creates a new Weigh Line Detail record. 
- System creates XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE_DETAIL | WeighLineID | WeighLineID |
|  | DestinationContainer | DestinationContainer |
|  | Mode | Mode |
|  | Container | Container |
|  | WarehouseLocationID | WarehouseLocationID |
|  | ScaleStationID | ScaleStationID |
|  | ScaleID | ScaleID |
|  | EmployeeID | Field is set to Employee ID who calls the BC. |
|  | SignedByEmployeeID | SignedByEmployeeID |
|  | ApprovedByEmployeeID | ApprovedByEmployeeID |
|  | Manual | Manual |
|  | UserReference | UserReference |
| WEIGH_HEADER_CONTAINER | Container | Container. System removes the record. |
