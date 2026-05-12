# StartProduct_v92

**Category:** Apriso/WIP/Product
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component method is to create a link between a Product and a single Resource (Machine) or Production Line. The link has the form of a record with a Start and End Time. The Start Time indicates when the given Product Event was started on the Resource(s), while the End Time indicates when production was finished. It creates one or more records in RESOURCE_LABOR with LaborType=10 in the OPEN (1) status.
 

The method can be successfully called only when there is an appropriate State (Machine Event) that exists for the given resource. The Machine Event must be open.
 

Details concerning the quantities produced during the time period limited by a Product Event's StartTime and EndTime are stored in RESOURCE_LABOR_DETAIL (linked to the Product Event by the ResourceLaborId column). The RESOURCE_LABOR_DETAIL table also contains the quantities produced for Execution Orders (in Order-based production). The ReportProduct and ReportOrder BC methods maintain records in this table.
 

The Business Component is also used to start employee labor. If the employeeID is inputted, then this BC will start the employee labor if the employee is labor-tracked.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The Product ID. |
| Input | LotNo | Char | No | The Lot Number. |
| Input | ResourceName | Char | No | The Resource name. |
| Input | ResourceType | Integer | No | The Resource type. |
| Input | ProductionLine | Char | No | The Production Line number. Optional if a Resource is specified. |
| Input | WorkCenter | Char | Yes | The Work Center. |
| Input | EmployeeID | Integer | No | The employee's ID. |
| Input | ActivityTime | DateTime | Yes | The activity time. |
| Input | LaborCode | Char | No | The Labor Code. |
| Input | OccupationCode | Char | No | The Occupation Code. |
| Input | ReasonCode | Char | No | The Reason Code. |

## Validations

- Validates the Resource Name and Resource Type (if entered)  
- Validates the Production Line (if entered) (note: either the Resource Name and Resource Type OR the Production Line must be entered - all of these cannot be entered!)  
- Validates the Product ID (required parameter) against the PRODUCT table - if the product is Lot-tracked, then the Lot Number is required  
- Validates the ID of the Employee who starts an order and is passed as the StartEmployeeID parameter 
- Validates the Occupation Code and Facility against the OCCUPATION table (if Occupation Code was entered) 
- Validates the Work Center against the WORK_CENTER table 
- Validates that there is exactly one State (Machine Event) record for each Resource for the StartTime parameter - otherwise, this error message is displayed: "Multiple Events Found for Resource."

## System Processing

- If a Resource is specified (the ResourceName and ResourceType parameters are passed), exactly 1 record is created in the RESOURCE_LABOR table. If ProductionLine is specified instead, one record in RESOURCE_LABOR is created for each Resource (Machine) contained in the Production Line. 
- All other parameters are validated as specified above. 
- The new record is linked to the parent State (Machine Event) record found based on the ActivityTime parameter passed to the component (the ID of the parent State is put into the new record's ParentId column). The following rule is used to find the parent State: 
 
- ActivityTime >= the State StartTime and the State is not closed (EndTime is NULL) 
 
- This logic is applied for each new record if more than one Machine exists in the Production Line. 
-  The system populates the ProductionLine for the resource labor record by first checking the Production Line input, then the resource Production Line, then finally the Production Line of the Work Center assigned to the resource (only if the Work Center is assigned to only ONE Production Line)  
- The new Product Event is always created in the OPEN status. It will be closed (and split, if necessary) when the StopProduct BC method is used. 
- If an EmployeeID is specified, then the system will create an open labor record in the LABOR table if the employee is labor-tracked. If the employee is also attendance-tracked, the system will ensure that there is attendance for this time and will associate the created labor with that attendance.

## Pre-Conditions

- The State (Machine Event) must exist for each resource during the activity time (ActivityTime parameter)

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
