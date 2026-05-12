# StartProduct_v2

**Category:** Apriso/WIP/Product
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component Method is to create a link between a Product and a single Resource (Machine) or Production Line. The link has the form of a record having a Start and End Time. The Start Time indicates when the given Product event was started on the Resource(s), while the End Time indicates when production was finished. It creates one or more records in RESOURCE_LABOR with LaborType=10 in the status of OPEN (1).
 

The method can be successfully called only when there is an appropriate State (machine event) that exists for the given resource. The machine event must be open.
 

Details concerning the quantities produced during a time period limited by a Product event's StartTime and EndTime are stored in RESOURCE_LABOR_DETAIL (linked to the Product event by the ResourceLaborId column). The RESOURCE_LABOR_DETAIL table also contains the quantities produced for Execution Orders (in order-based production). The ReportProduct and ReportOrder BC methods maintain records in this table.
 

The Business Component is also used to start the employee labor. If the employeeID is inputted, then this BC will start the employee labor if the employee is labor-tracked.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The product ID. |
| Input | LotNo | Char | No | The Lot Number. |
| Input | ResourceName | Char | No | The Resource name. |
| Input | ResourceType | Integer | No | The Resource type. |
| Input | ProductionLine | Char | No | The Production Line Number. Optional if resource is specified. |
| Input | WorkCenter | Char | Yes | The Work Center. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ActivityTime | DateTime | Yes | The activity time. |
| Input | LaborCode | Char | No | The Labor Code. |
| Input | OccupationCode | Char | No | The Occupation Code. |
| Input | ReasonCode | Char | No | The Reason Code. |
| Output | LaborID | Integer | No | The ID of the created LABOR record. |

## Validations

- Validates the Resource Name and Resource Type (if entered)  
- Validates the Production Line (if entered)  
- Validates the product ID (required parameter) against the PRODUCT table 
 
- If the product is Lot Tracked, then the Lot Number is required  
 
- Validates the ID of the employee who starts an order and is passed as the StartEmployeeID parameter 
- Validates the Occupation Code and Facility against the OCCUPATION table (if the Occupation Code entered) 
- Validates the Work Center against the WORK_CENTER table 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
- Validates that there is exactly one State (machine event) record per each Resource for the StartTime parameter 
 
- Otherwise, this error message is displayed: "Multiple Events Found for Resource"

## System Processing

- If a Resource is specified (the ResourceName and ResourceType parameters passed), exactly one (1) record is created in the RESOURCE_LABOR table 
 
- If ProductionLine is specified instead, one record in RESOURCE_LABOR is created for each Resource (Machine) contained in the Production Line  
 
- All other parameters are validated as specified above 
- The new record is linked to the parent State (machine event) record found based on the ActivityTime parameter passed to the component (the ID of the parent State is put into the new record's ParentId column) - the following rule is used to find the parent State: 
 
- ActivityTime ≥ the State StartTime and 
 
- State is open, or 
- State is closed and if Activity Time ≤ the State EndTime  
 
 
- The logic is applied for each new record if more then one Machine exists in the Production Line 
- The system populates the Production Line for the resource labor record by first checking the ProductionLine input, then the resource Production Line, then finally the Production Line of the Work Center assigned to the resource (only if the Work Center is assigned to only ONE Production Line) 
- The new Product event is always created in the OPEN status 
 
- It will be closed (and split, if necessary) when the StopProduct BC method is used  
 
- If an EmployeeID is specified, then the system will create a open labor record in the LABOR table if the employee is labor-tracked 
 
- If the employee is also attendance-tracked, the system will ensure there is an attendance for this time and will associate the created labor with that attendance

## Pre-Conditions

- The State (machine event) must exist for each resource during the activity time (ActivityTime parameter)

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.ProductStarter 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | RESOURCENAME | ResourceName |
|  | RESOURCETYPE | ResourceType |
|  | STARTEDEMPLOYEEID | EmployeeID |
|  | LABORTYPE | 10 |
|  | STARTTIME | ActivityTime (local) |
|  | STATUS | 1 |
|  | PARENTID | ID of parent State (=Machine Event) found by component |
|  | PRODUCTID | ProductID |
|  | LOTNO | LotNo (only for Lot traced product) |
|  | PRODUCTIONLINE | ProductionLine |
|  | WORKCENTER | WorkCenter |
|  | OCCUPATIONCODE | OccupationCode |
|  | NOTEID | Reference to NOTE.Id table containing the comment's text. |
| NOTE | ID | Populated from RESOURCE_LABOR.NoteId |
|  | NOTETYPE | 2 |
|  | SUBJECT | ResourceName |
|  | KEYWORDS | Populated from RESOURCE_LABOR.Id |
|  | DESCRIPTION | Comment |
|  | LANGUAGEID | From employee personalization |
