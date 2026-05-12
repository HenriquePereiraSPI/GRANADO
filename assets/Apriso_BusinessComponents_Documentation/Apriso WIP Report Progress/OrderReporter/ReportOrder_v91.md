# ReportOrder_v91

**Category:** Apriso/WIP/Report Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderReporter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to:
 
 
- Manage the progress 
 
- Decrease allocated quantity of the operation by the quantity reported, and 
- Trigger the navigation of the progress (if any). 
 
- Manage machine time and productivity 
 
- Create or update a record in RESOURCE_LABOR_DETAIL to persist the quantity of product reported. This happens if a started resource (and its type) is passed as parameter and if system is able to find an open Order record in the RESOURCE_LABOR table 
 
- Manage employee labor time and effort 
 
- Create or update a record in LABOR_DETAIL to persist the quantity of product reported. This happens if a started employee is passed as parameter and if system is able to find an open Order record in the LABOR table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee reporting production. |
| Input | WipOrderNo | Char | Yes | Wip order number. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | WipContentClass | Integer | No | Wip content class of the reported labor. |
| Input | ReasonCode | Char | No | Reason Code. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource Type. |
| Input | ProductionLine | Char | No | Production line. |
| Input | ProductID | Integer | No | Product ID. |
| Input | SerialNo | Char | No | Serial number. |
| Input | LotNo | Char | No | Lot Number. |
| Input | ContainerNo | Char | No | Container number. |
| Input | ActivityTime | DateTime | No | Activity time (local). |
| Input | Quantity | Integer | No | Quantity to be reported (to be used for wip content detail). |
| Input | UomCode | Char | Yes | Uom code. |
| Input | UpdateWipContent | Boolean | No | Flag indicating if wip content is to be updated. |
| Input | ReportNegative | Boolean | No | Flag indicating if negative quantity is to be reported. |
| Input | TaskID | Integer | Conditional | Task ID. Required when wip is reported. |
| Input | WipContentQuantity | DateTime | No | Quantity to be used for wip content. |

## Validations

- System validates that WipOrderNo, WipOrderType, OprSequenceNo are specified and exist. 
- System validates that resource exists if ResourceName and ResourceType are specified. 
- System validates that production line exists if ProductionLine is specified. 
- System validates that employee exists if EmployeeID is specified. 
- System validates that reason exists if ReasonCode is specified. 
- System validates that container exists if ContainerNo is specified. 
- System validates that product exists if ProductID is specified. 
- If Quantity is fractional, system validates that the product allows for it. 
- System validates that UomCode is specified and exists. 
- System validates that task exists if TaskID is specified. 
- If UpdateWipContent flag is TRUE, system validates that WipContentClass is specified and exists. 
- If product is lot tracked and LotNo is specified, system validates that it exists. 
- Else if product is not lot tracked and LotNo is specified an error message is returned. 
- If product is serial tracked and SerialNo is specified, system validates that it exists and that lot number is the same as LotNo (if specified). Additionally system validates that wip serial exists and is New or Started. 
- Else if product is not serial tracked and SerialNo is specified an error message is returned. 
- If UpdateWipContent flag is TRUE, system validates that wip content exists for the wip operation specified, wip content class = Good (1) and reason code = null.

## System Processing

If the ReportNegative is set to TRUE, then system will consider that it is processing a reverse declaration of the serial number or of the quantity passed as input.
 

 ** Progress Management ** 
 
 
- This section applies when UpdateWipContent flag is set to TRUE. 
- System retrieves wip content (goodWipContent) for the specified WipOrderNo, WipOrderType, OprSequenceNo, wip content class = Good (1) and reason code = null 
- If ProductID is not specified, system retrieves the product from wip order (Wip_Order.ProductID) if defined. 
- System retrieves wip content (reportedWipContent) for the specified WipOrderNo, WipOrderType, OprSequenceNo, WipContentClass and ReasonCode (if ReasonCode is not specified system retrieves wip content where ReasonCode is null). 
- If ReportNegative is set to FALSE: 
 
- System decreases goodWipContent.QuantityAllocated by the WipContentQuantity 
- If reportedWipContent is not found: 
 
- System creates new record in Wip_Content table for the specified WipContentClass, ReasonCode and WipContentQuantity (updates Wip_Content.TotalProcessed and Wip_Content.OutputBalance). 
- System creates new record in Wip_Content_Detail table for the specified product, LotNo, UomCode, Quantity (updates Wip_Content_Detail.TotalProcessed and Wip_Content_Detail.OutputBalance) and just created wip content. 
 
- Else if reportedWipContent is found: 
 
- System increases OutputBalance and TotalProcessed of reportedWipContent by WipContentQuantity. 
- If wip content detail record exists for the reportedWipContent, product and LotNo: 
 
 
- If UomCode (source) and UomCode of the wip content detail (destination) differ, system converts the Quantity to destination uom. 
- Else, system increases OutputBalance and TotalProcessed of wip content detail by Quantity. 
 
- Else, system creates new record in Wip_Content_Detail table for the specified product, LotNo, UomCode, Quantity and reportedWipContent. 
 
- Else if ReportNegative is set to TRUE: 
- System validates that reportedWipContent exists. 
- System validates that wip content detail exists for the specified product, LotNo and reportedWipContent. 
- System increases goodWipContent.QuantityAllocated, decreases goodWipContent.OutputBalance and goodWipContent.TotalProcessed by WipContentQuantity. 
 
- If UomCode (source) and UomCode of the wip content detail (destination) differ, system converts the Quantity to destination uom. 
- System decreases TotalProcessed and OutputBalance of the wip content detail by Quantity. 
 
- If TaskID is specified, the System reports/reverses task progress by calling ReportTaskProgress component passing WipContentQuantity (negative value if ReportNegative is TRUE). 
- System then navigates the quantities to the next available operation. 
- System writes transaction history. 
 

 ** Special case: Report Serial ** 
 

This section applies when SerialNo is specified and ReportNegative is FALSE
 

System updates wip serial status to Completed.
 

System reassigns wip serial from goodWipContent to reportedWipContent and moves it to output bucket (Wip_Serial_No_Content.OutputBucket).
 

 ** Special case: Report Lot ** 
 

It's the same as main flow.
 

 ** Special Case: Report container ** 
 

Not supported.
 

 ** Labor Management ** 
 

This section applies when resource Employee Number, WipOrder, WipOrderType, and OprSequenceNo is specified.
 
 
- System converts the ActivityTime into UTC time. 
- System retrieves all open labor records for Employee ID, WipOrder, WipOrderType, OprSequenceNo, ProductID, LotNo and ActivityTime. The product and lot are managed as following: 
 
- If employee id is specified, open labor records for that employee id is read. 
- If ProductID is specified then system checks if there is a labor for this product. If the labor exists, system uses ProductID otherwise it retrieves orders with ProductID = null. This is because it is possible to report product against started wip order (only wip order was used when starting an order) or product (both wip order and product were). 
- Else if ProductID is not specified, system retrieves labors for ProductID = null . 
- If LotNo is specified then system checks if there is a labor for this lot. If the order exists, system uses LotNo otherwise it retrieves orders with LotNo = null. 
- Else if LotNo is not specified, system retrieves labors for LotNo = null. 
 
- For every Labor, system inserts a record into Labor_Detail populating Labor ID, FromContentClass (always 1), LotNo, ProductID, Quantity (using Quantity), UomCode, ReasonCode, SerialNo, ToWipContentClass (WipContentClass), TransactionTime (ActivityTime). 
 

 ** Attendance Management ** 
 

Nothing done in attendance during report progress. The only thing system does is if the employee is attendance tracked, it validates that he is clocked in already.
 

 ** Machine time Management ** 
 

This section applies when resource (ResourceName and ResourceType) or ProductionLine is specified.
 
 
- System converts the ActivityTime into UTC time. 
- System retrieves all order records (Resource_Labor.LaborType = 9) for WipOrder, WipOrderType, OprSequenceNo, ResourceName, ResourceType, ProductionLine, ProductID, LotNo and ActivityTime. The product and lot are managed as following: 
 
- If ProductID is specified then system checks if there is an order for this product. If the order exists, system uses ProductID otherwise it retrieves orders with ProductID = null. This is because it is possible to report product against started wip order (only wip order was used when starting an order) or product (both wip order and product were). 
- Else if ProductID is not specified, system retrieves orders for ProductID = null (it is forbidden to report order against started product or lot) 
- If LotNo is specified then system checks if there is an order for this lot. If the order exists, system uses LotNo otherwise it retrieves orders with LotNo = null. This is because it is possible to report lot against started wip order, product or lot (wip order, product and lot were used when starting an order). 
- Else if LotNo is not specified, system retrieves orders for LotNo = null (it is forbidden to report order or product against started lot) 
- If there are records for the same resource that end and start at exactly the same time, then the record that is starting at the defined activity time will be updated. 
- There cannot exist two records for the same resource and resource type 
 
- For every order selected, system inserts a record into Resource_Labor_Detail populating Container, EmployeeID, FromContentClass (always 1), LotNo, ProductID, Quantity (using Quantity), UomCode, ReasonCode, SerialNo, ToWipContentClass (WipContentClass), StartTime (ActivityTime), Status (always Open), TransactionTime (ActivityTime), ResourceLaborID (id of the order)

## Host Integration Support

IDOC name = ppcc2pretticket01

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTENT | QuantityAllocated | Updating goodWipContentQuantityAllocated -= WipContentQuantity when ReportNegative = FALSEQuantityAllocated += WipContentQuantity when ReportNegative = TRUE |
|  | WipContentClass | WipContentClass (Required) |
|  | ReasonCode | ReasonCode |
|  | WipOrderNo | WipOrderNo (Required) |
|  | WipOrderType | WipOrderType (Required) |
|  | OprSequenceNo | OprSequenceNo (Required) |
|  | WipContentStatus | Always FinishedGoods |
|  | OutputBalance | Updating reportedWipContentTotalProcessed += WipContentQuantity when ReportNegative = FALSETotalProcessed -= WipContentQuantity when ReportNegative = TRUE |
|  | TotalProcessed | Updating reportedWipContentTotalProcessed += WipContentQuantity when ReportNegative = FALSETotalProcessed -= WipContentQuantity when ReportNegative = TRUE |
| WIP_CONTENT_DETAIL | WipContentID | ID of reportedWipContent |
|  | LotNo | LotNo |
|  | ProductID | ProductID (if not specified it takes it from Wip_Order.ProductID) |
|  | UomCode | UomCode (Required) (when wip content detail is created) |
|  | TotalProcessed | TotalProcessed += Quantity when ReportNegative = FALSETotalProcessed -= Quantity when ReportNegative = TRUE |
|  | OutputBalance | OutputBalance += Quantity when ReportNegative = FALSEOutputBalance -= Quantity when ReportNegative = TRUE |
| WIP_SERIAL_NO | WipSerialStatus | Completed (5) |
| WIP_SERIAL_NO_CONENT | WipContentID | ID of reportedWipContent |
|  | InputBucket | False |
|  | OutputBucket | True |
|  | AllocatedBucket | False |
|  | CommitedBucket | False |
| RESOURCE_LABOR_DETAIL | Container | ContainerNo |
|  | EmployeeID | EmployeeID |
|  | FromContentClass | 1 |
|  | LotNo | LotNo |
|  | ProductID | ProductID |
|  | Quantity | Quantity (Required) - negative value if ReportNegative is TRUE |
|  | UomCode | UomCode (Required) |
|  | ResonCode | ReasonCode |
|  | SerialNo | SerialNo |
|  | StartTime | ActivityTime (Required) |
|  | Status | Open |
|  | ToWipContentClass | WipContentClass (Required) |
|  | TransactionTime | ActivityTime (Required) |
|  | ResourceLaborID | ID of the order, the Quantity is reported against. |
| LABOR_DETAIL | Labor ID | ID of the Labor, the Quantity is reported against. |
|  | FromContentClass | 1 |
|  | LotNo | LotNo |
|  | ProductID | ProductID |
|  | Quantity | Quantity (Required) - negative value if ReportNegative is TRUE |
|  | UomCode | UomCode (Required) |
|  | ResonCode | ReasonCode |
|  | SerialNo | SerialNo |
|  | ToWipContentClass | WipContentClass (Required) |
|  | TransactionTime | ActivityTime (Required) |
