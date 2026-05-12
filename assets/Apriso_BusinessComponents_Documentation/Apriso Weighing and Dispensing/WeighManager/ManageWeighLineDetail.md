# ManageWeighLineDetail

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Line Detail Create Update Manage

## Description

This method creates or updates a Weigh Line Detail record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighLineDetailID | Integer | No | ID of existing Weigh Line Detail record. If provided, the record is updated. |
| Input | WeighLineID | Integer | Conditional | The ID of a Weigh Line record. |
| Output | CreatedWeighLineDetailID | Integer | Yes | ID of a created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DestinationContainer | Char | DestinationContainer |
| Mode | Char | Weighing mode (e.g. POURING, DECLARATION, SOURCE, SUBTRACTIVE) |
| Container | Char | Container number (source of the material). |
| LotNo | Char | Lot number of source material. |
| WarehouseLocationID | Integer | Warehouse Location of Destination Container. |
| ScaleStationID | Integer | Resource ID of the Scale Station. |
| ScaleID | Integer | Resource ID of the Scale. |
| EmployeeID | Integer | Employee ID who performed weighing. |
| SignedByEmployeeID | Integer | Employee ID who signed the record. |
| ApprovedByEmployeeID | Integer | Employee ID who approved the record. |
| TareWeight | Decimal | Tare weight of material. |
| GrossWeight | Decimal | Gross weight of material. |
| NetWeight | Decimal | Net weight of material. |
| UomCode | Char | Unit of measure of material. |
| Manual | Boolean | The flag indicates manual weighing mode. The default value for new record is FALSE. |
| UserReference | Char | Field for user reference. |

## Validations

- System validates if Weigh Line Detail record exists (when WeighLineDetailID is provided). 
- System validates if Weigh Line is specified and exists for a new record (when WeighLineDetailID is not provided).  
- System validates if a different Weigh Line is not provided in update mode (when WeighLineDetailID is provided).  
 
 
- System validates if provided Lot exists (the Product is read from the parent Weigh Line). 
- System validates if provided Scale Station and the Scale exist. 
- System validates if provided Warehouse Location exists. 
- System validates if provided Employee IDs exist. 
- System validates if provided Destination Container exists. 
- System validates if provided Container exists. 
- System validates if provided UOM exists.

## System Processing

- If WeighLineDetailID is provided (a non-zero value), the system updates the fields of existing record in the WEIGH_LINE_DETAIL table according to the used Inputs.  
- If WeighLineDetailID is not provided, the system creates a new record in the WEIGH_LINE_DETAIL table: 
 
- All fields are populated according to the used Inputs.  
- All Boolean fields are set to FALSE by default (if an Input is not created). 
 
- The empty values of Inputs (respectively: an empty string or zero integer) are changed to the null values in the Weigh Line Detail record. (Except for Manual and WeighLineID fields).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE_DETAIL | ID | WeighLineDetailID/CreatedWeighLineDetailID |
|  | WeighLineID | WeighLineID |
|  | DestinationContainer | DestinationContainer |
|  | Mode | Mode |
|  | Container | Container |
|  | LotNo | LotNo |
|  | WarehouseLocationID | WarehouseLocationID |
|  | ScaleStationID | ScaleStationID |
|  | ScaleID | ScaleID |
|  | EmployeeID | EmployeeID |
|  | SignedByEmployeeID | SignedByEmployeeID |
|  | ApprovedByEmployeeID | ApprovedByEmployeeID |
|  | TareWeight | TareWeight |
|  | GrossWeight | GrossWeight |
|  | NetWeight | NetWeight |
|  | UomCode | UomCode |
|  | Manual | Manual |
|  | UserReference | UserReference |
