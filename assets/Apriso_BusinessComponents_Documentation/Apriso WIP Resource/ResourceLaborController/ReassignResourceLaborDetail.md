# ReassignResourceLaborDetail

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to change the reference to the Order or Product event for the given Production Detail event. A Production Detail event is created when the ReportOrder business component method is invoked.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceResourceLaborID | Integer | Yes | Source resource labor ID. |
| Input | SourceResourceLaborDetailID | Integer | No | Source resource labor detail ID. |
| Input | DestinationResourceLaborID | Integer | Yes | Destination resource labor ID. |

## Validations

- System verifies that all identifiers passed as parameters refer to existing records. 
- System validates that the source and destination events (identified by SourceResourceLaborID and DestinationResourceLaborID accordingly) are the same: 
 
- If the ResourceName and ResourceType of both records are different, an error message is displayed: Resource Labor Name and Type are not the same in source and destination resource labor records 
- If the LaborType (type of event) of both records are different, an error message is displayed: Resource Labor Types are not the same. Moving between different types is not allowed 
- If the LotNo (Lot Number) of both records are different, an error message is displayed: Lot numbers are not the same in the source and detail. Moving between different lots is not allowed 
- If the ProductID (Product Identifier) of both records are different, an error message is displayed: Products are not the same in the source and detail. Moving between different products is not allowed 
- If the source event's type is Order and the WipOrderNo of both records are different, an error message is displayed: Work Order Number and Type are not the same in the source and detail. Moving between different orders is not allowed.

## System Processing

System updates the reference to the parent event by updating RESOURCE_LABOR.ResourceLaborID to be equal to the DestinationResourceLaborID parameter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR_DETAIL | ID | SourceResourceLaborDetailID (Required) |
|  | ResourceLaborID | DestinationResourceLaborID (Required) |
