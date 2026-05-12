# ReportOrder_v92

**Category:** Apriso/WIP/Report Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderReporter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to:
 
 
- Manage progress 
 
- Decrease the allocated quantity of the operation by the quantity reported 
- Trigger the navigation of the progress (if any) 
 
- Manage machine time and productivity 
 
- Create or update a record in RESOURCE_LABOR_DETAIL to persist the quantity of the product reported - this happens if a started resource (and its type) is passed as a parameter and if the system is able to find an open Order record in the RESOURCE_LABOR table 
 
- Manage employee labor time and effort 
 
- Create or update a record in LABOR_DETAIL to persist the quantity of the product reported - this happens if a started employee is passed as a parameter and if the system is able to find an open order record in the LABOR table 
 
 

For more information, refer to the **Explosion, Navigation and Tasking Guide**.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee reporting production. |
| Input | WipOrderNo | Char | Yes | The WIP Order number. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The Operation sequence number. |
| Input | WipContentClass | Integer | No | The WIP content class of the reported labor. |
| Input | ReasonCode | Char | No | The Reason Code. |
| Input | ResourceName | Char | No | The resource name. |
| Input | ResourceType | Integer | No | The resource type. |
| Input | ProductionLine | Char | No | The production line. |
| Input | ProductID | Integer | No | The product ID. |
| Input | SerialNo | Char | No | The serial number. |
| Input | LotNo | Char | No | The lot Number. |
| Input | ContainerNo | Char | No | The Container number. |
| Input | ActivityTime | DateTime | Conditional | The activity time (local). Required when either a resource or an employee is provided. The records are saved with milliseconds accuracy. |
| Input | Quantity | Integer | No | The quantity to be reported (to be used for the WIP content detail). |
| Input | UomCode | Char | Yes | The UOM code. |
| Input | UpdateWipContent | Boolean | No | A flag indicating if the WIP content is to be updated. |
| Input | ReportNegative | Boolean | No | A flag indicating if a negative quantity is to be reported. |
| Input | TaskID | Integer | Conditional | The task ID. Required when the WIP is reported. |
| Input | WipContentQuantity | DateTime | No | The quantity to be used for the WIP content. |
| Input | NavigateImmediately | Boolean | Yes | Determines if the navigation is done synchronously or asynchronously. |

## Validations

- The system validates that WipOrderNo, WipOrderType, OprSequenceNo are specified and exist.  
- The system validates that the resource exists if ResourceName and ResourceType are specified.  
- The system validates that the production line exists if ProductionLine is specified.  
- The system validates that the employee exists if EmployeeID is specified.  
- The system validates that the reason exists if ReasonCode is specified.  
- The system validates that the Container exists if ContainerNo is specified. 
- The system validates that the product exists if ProductID is specified.  
- If Quantity is fractional, the system validates that the product allows for it.  
- The system validates that UomCode is specified and exists.  
- If WIP is reported, the system validates that TaskID is specified.  
- The system validates that the task exists if TaskID is specified.  
- If either a resource or an employee is provided, the system validates that ActivityTime is specified. 
- If the UpdateWipContent flag is TRUE, the system validates that WipContentClass is specified and exists.  
- If the product is lot-tracked and LotNo is specified, the system validates that it exists; otherwise, if the product is not lot-tracked and LotNo is specified, an error message is returned.  
- If the product is serial-tracked and SerialNo is specified, the system validates that it exists and that the lot number is the same as LotNo (if specified); additionally, the system validates that the WIP serial exists and is New or Started; otherwise, if the product is not serial-tracked and SerialNo is specified, an error message is returned.  
- If the UpdateWipContent flag is TRUE, the system validates that the WIP content exists for the WIP Operation specified, WIP content class = Good (1) and Reason Code = null.

## System Processing

If the ReportNegative is set to TRUE, then the system will consider it to be processing a reverse declaration of the serial number or of the quantity passed as an input.
 

 ** Progress Management ** 
 

This section applies when the UpdateWipContent flag is set to TRUE.
 
 
- If the WIP Order's status is not started, the system updates its status to started (2) 
- If the WIP Operation's status is not started, the system updates its status to started (2) 
- The system retrieves the WIP content (goodWipContent) for the specified WipOrderNo, WipOrderType, OprSequenceNo, WIP content class = Good (1) and Reason Code = null 
- If ProductID is not specified, the system retrieves the product from the WIP Order (Wip_Order.ProductID) if defined 
- The system retrieves the WIP content (reportedWipContent) for the specified WipOrderNo, WipOrderType, OprSequenceNo, WipContentClass, and ReasonCode (if ReasonCode is not specified, the system retrieves the WIP content where ReasonCode is null) 
- If ReportNegative is set to FALSE: 
 
- Only updates WipContent and WipContentDetail if an EmployeeID was inputted or there are open labor records for the given Resource if a resource was inputted 
- The system decreases goodWipContent.QuantityAllocated by the WipContentQuantity 
- If reportedWipContent is not found: 
 
- The system creates a new record in the WIP_CONTENT table for the specified WipContentClass, ReasonCode, and WipContentQuantity (updates Wip_Content.TotalProcessed and Wip_Content.OutputBalance) 
- The system creates a new record in the WIP_CONTENT_DETAIL table for the specified product, LotNo, UomCode, Quantity (updates Wip_Content_Detail.TotalProcessed and Wip_Content_Detail.OutputBalance) and the WIP content that was just created 
 
- Otherwise, if reportedWipContent is found: 
 
- The system increases OutputBalance and TotalProcessed of reportedWipContent by WipContentQuantity 
- If a WIP content detail record exists for the reportedWipContent, product and LotNo: 
 
 
- If UomCode (source) and UomCode of the WIP content detail (destination) differ, the system converts Quantity to the destination UOM 
- Otherwise, the system increases OutputBalance and TotalProcessed of the WIP content detail by Quantity 
 
 
- Otherwise, the system creates a new record in the WIP_CONTENT_DETAIL table for the specified product, LotNo, UomCode, Quantity, and reportedWipContent 
 
 
- Othewise, if ReportNegative is set to TRUE: 
 
- Only updates WipContent and WipContentDetail if an EmployeeID was inputted or there are open labor records for the given Resource if a resource was inputted 
- The system validates that reportedWipContent exists 
- The system validates that the WIP content detail exists for the specified product, LotNo, and reportedWipContent 
- The system increases goodWipContent.QuantityAllocated and decreases goodWipContent.OutputBalance and goodWipContent.TotalProcessed by WipContentQuantity 
- If UomCode (source) and UomCode of the WIP content detail (destination) differ, the system converts the Quantity to the destination UOM 
- The system decreases TotalProcessed and OutputBalance of the WIP content detail by Quantity. 
 
- If TaskID is specified, the system reports/reverses the task progress by calling the ReportTaskProgress component passing WipContentQuantity (negative value if ReportNegative is TRUE) 
- The system then navigates the quantities to the next available Operation, either synchronously or asynchronously depending on the "NavigateImmediately" input 
- When "NavigateImmediately" is set to false, and multiple calls to ReportOrder_v92 are executed for the same order simultaneously, there is a risk of concurrency exceptions that could result in incorrect quantity navigation between operations. In such a situation, it is recommended to either: 
 
- Set "NavigateImmediately" to true (navigation is not executed in the background) 
- Call ReportOrder_v92 BC through a suboperation executed in the Asynchronous mode, with the Synchronization Queue set to WipOrderNo. The suboperation should have "NavigateImmediately" set to true (navigation is executed in the background) 
 
- The system writes the transaction history 
 

 ** Special case: Report Serial ** 
 

This section applies when SerialNo is specified and ReportNegative is FALSE
 
 
- The system updates the WIP serial status to Completed 
- The system reassigns the WIP serial from goodWipContent to reportedWipContent and moves it to the output bucket (Wip_Serial_No_Content.OutputBucket). 
 

 **Special case: Report Lot** 
 

This is the same as for the main flow.
 

 **Special Case: Report container** 
 

Not supported.
 

 ** Labor Management ** 
 

This section applies when resource Employee Number, WipOrder, WipOrderType, and OprSequenceNo are specified.
 
 
- The system converts the ActivityTime into UTC time 
- The system retrieves all open labor records for Employee ID, WipOrder, WipOrderType, OprSequenceNo, ProductID, LotNo, and ActivityTime. The product and lot are managed according to the following: 
 
- If an employee ID is specified, the open labor records for that employee ID are read 
- If ProductID is specified, then the system checks if there is labor for this product; if the labor exists, the system uses ProductID, otherwise it retrieves orders with ProductID = null; this is because it is possible to report a product against a started WIP Order (only the WIP Order was used when starting an order) or a product (both the WIP Order and product were used) 
- Otherwise, if ProductID is not specified, the system retrieves labor for ProductID = null  
- If LotNo is specified, then the system checks if there is a labor for this lot; if an order exists, the system uses LotNo, otherwise it retrieves orders with LotNo = null 
- Otherwise, if LotNo is not specified, the system retrieves labor for LotNo = null 
 
- For every Labor, the system inserts a record into LABOR_DETAIL, populating the labor ID, FromContentClass (always 1), LotNo, ProductID, Quantity (using Quantity), UomCode, ReasonCode, SerialNo, ToWipContentClass (WipContentClass), and TransactionTime (ActivityTime) 
 

 ** Attendance Management ** 
 

Nothing is done in attendance during the report progress. The only thing the system does is if the employee is attendance-tracked, it validates that he or she is clocked in already.
 

 ** Machine time Management ** 
 

This section applies when a resource (ResourceName and ResourceType) or ProductionLine is specified.
 
 
- The system converts the ActivityTime into UTC time 
- The system retrieves all order records (Resource_Labor.LaborType = 9) for WipOrder, WipOrderType, OprSequenceNo, ResourceName, ResourceType, ProductionLine, ProductID, LotNo, and ActivityTime; the product and lot are managed according to the following: 
 
- If ProductID is specified, then the system checks if there is an order for this product; if an order exists, the system uses ProductID, otherwise it retrieves orders with ProductID = null; this is because it is possible to report a product against a started WIP order (only the WIP Order was used when starting an order) or product (both the WIP Order and product were used) 
- Otherwise, if ProductID is not specified, the system retrieves orders for ProductID = null (it is forbidden to report an order against a started product or lot) 
- If LotNo is specified, then the system checks if there is an order for this lot; if an order exists, the system uses LotNo, otherwise it retrieves orders with LotNo = null; this is because it is possible to report a lot against a started WIP Order, product, or lot (the WIP Order, product, and lot were used when starting the order) 
- Otherwise, if LotNo is not specified, the system retrieves orders for LotNo = null (it is forbidden to report an order or product against a started lot) 
- If there are records for the same resource that end and start at exactly the same time, then the record that is starting at the defined activity time will be updated 
- Two records for the same resource and resource type cannot exist 
 
- For every order selected, the system inserts a record into RESOURCE_LABOR_DETAIL, populating Container, EmployeeID, FromContentClass (always 1), LotNo, ProductID, Quantity (using Quantity), UomCode, ReasonCode, SerialNo, ToWipContentClass (WipContentClass), StartTime (ActivityTime), Status (always Open), TransactionTime (ActivityTime), and ResourceLaborID (the ID of the order)

## Host Integration Support

IDOC name = ppcc2pretticket01

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WorkOrderStatus | 2 (Started Status) |
| WIP_OPERATION | OperationStatus | 2 (Started Status) |
| WIP_CONTENT | QuantityAllocated | If ReportNegative is set to false, then the WipContentQuantity value is subtracted from QuantityAllocated for the Good WipContent record (Where WipContentClass is 1 and ReasonCode is null). If ReportNegative is set to true, the negative WipContentQuantity is subtracted from QuantityAllocated for the Good WipContent record. |
|  | WipContentClass | WipContentClass (Required) |
|  | ReasonCode | ReasonCode |
|  | WipOrderNo | WipOrderNo (Required) |
|  | WipOrderType | WipOrderType (Required) |
|  | OprSequenceNo | OprSequenceNo (Required) |
|  | WipContentStatus | Always FinishedGoods |
|  | OutputBalance | If ReportNegative is set to false, then the WipContentQuantity value is added to OutputBalance for the WipContent record. If ReportNegative is set to true, the negative WipContentQuantity is added to OutputBalance for the WipContent record. |
|  | TotalProcessed | If ReportNegative is set to false, then the WipContentQuantity value is added to TotalProcessed for the WipContent record. If ReportNegative is set to true, the negative WipContentQuantity is added to TotalProcessed for the WipContent record. |
| WIP_CONTENT_DETAIL | WipContentID | ID of reportedWipContent |
|  | LotNo | LotNo |
|  | ProductID | ProductID (if not specified it takes it from Wip_Order.ProductID). |
|  | UomCode | UomCode (required) (when WIP content detail is created). |
|  | TotalProcessed | If ReportNegative is set to false, then the Quantity value is added to TotalProcessed for the WipContentDetail record associated with the Reported WipContent record. If ReportNegative is set to true, the negative Quantity is added to TotalProcessed for the WipContentDetail record. |
|  | OutputBalance | If ReportNegative is set to false, then the Quantity value is added to OutputBalance for the WipContentDetail record associated with the Reported WipContent record. If ReportNegative is set to true, the negative Quantity is added to OutputBalance for the WipContentDetail record. |
| WIP_SERIAL_NO | WipSerialStatus | Completed (5) |
| WIP_SERIAL_NO_CONTENT | WipContentID | ID of reportedWipContent |
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
|  | ResourceLaborID | ID of the order that the Quantity is reported against. |
| LABOR_DETAIL | Labor ID | ID of the Labor that the Quantity is reported against. |
|  | FromContentClass | 1 |
|  | LotNo | LotNo |
|  | ProductID | ProductID |
|  | Quantity | Quantity (required) - negative value if ReportNegative is TRUE. |
|  | UomCode | UomCode (required) |
|  | ResonCode | ReasonCode |
|  | SerialNo | SerialNo |
|  | ToWipContentClass | WipContentClass (required) |
|  | TransactionTime | ActivityTime (required) |
