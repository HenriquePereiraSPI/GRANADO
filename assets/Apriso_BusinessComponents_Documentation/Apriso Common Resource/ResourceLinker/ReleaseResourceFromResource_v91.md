# ReleaseResourceFromResource_v91

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.ResourceLinker`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This purpose of this Business Component is to release the link between resources from an inputted date.
 

This Business Component also allows the user to release all the links assigned to the inputted parent resource, or the links between a parent resource and all sub-resources in the same Class.
 

It can serve very different purposes:
 
 
-  

Remove the limit imposed on the task list filter, or
  
-  

Release one or more equipment (i.e. resources) from an employee (i.e. a resource), from a specific date and for a specific duration in minutes, or
  
-  

Release one or many sub-resources (tools) from a resource (machine).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentResourceName | Char | Yes | Resource name to release from. |
| Input | ParentResourceType | Integer | Yes | Resource type to release from. |
| Input | ResourceName | Char | No | Resource name to release. |
| Input | ResourceType | Integer | No | Resource type to release. |
| Input | ResourceLinkClassID | Integer | No | ReleasedOn(DateTime) Released on date, optional. In UTC. |
| Input | ReleaseAll | Boolean | Yes | Release all. |

## Validations

- System validates that resource link class exists (if ResourceLinkClassID is specified). If not, system returns an error message that states: "Invalid Resource Link Class ID". 
- System validates that the inputted ParentResourceName and ParentResourceType exist in the RESOURCE table. 
 If not, system returns an error message that states: "Parent Resource does not exist". 
- System validates that the inputted ResourceType and ResourceName exist in the RESOURCE table "(if ReleaseAll is false and ResourceLinkClassID is not specified). If not, system returns an error message that states: "Resource does not exist" 
- System validates that there is at least one record in RESOURCE_RESOURCE_LINK for the inputs specified and that released resources wouldn't overlap (based on ReleasedOn time).

## System Processing

- System updates the rows to set the ReleasedOn column to ReleasedOn provided. 
-  

If the inputted ReleaseAll flag is set to TRUE, then:
 

System retrieves all rows in RESOURCE_RESOURCE_LINK that match this ParentResourceType and ParentResourceName, and updates all these ReleasedOn columns to ReleasedOn provided.
  
-  

Else if the inputted ReleaseAll flag is set to FALSE, then
  
 
-  

If ResourceLinkClassID and Child Resource are inputted, then
 

System retrieves all rows in RESOURCE_RESOURCE_LINK that match this ParentResourceType, ParentResourceName, ResourceType, ResourceName and ResourceLinkClassID, as well as updates all these ReleasedOn columns to the ReleasedOn provided.
  
-  

If only ResourceLinkClassID is inputted, then:
 

System retrieves all rows in RESOURCE_RESOURCE_LINK that match this ParentResourceType, ParentResourceName, and ResourceLinkClassID, and updates all these ReleasedOn columns to ReleasedOn provided.
  
- Else, System retrieves all rows in RESOURCE_RESOURCE_LINK that match this ParentResourceType, ParentResourceName, ResourceType and ResourceName, and updates all these ReleasedOn columns to ReleasedOn provided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_RESOURCE_LINK_ | ID | Unique Row Identifier |
|  | ParentResourceType | Inputted ParentResourceType |
|  | ParentResourceName | Inputted ParentResourceName |
|  | ResourceType | Inputted ResourceType |
|  | ResourceName | Inputted ResourceName |
|  | AssignedOn | Date and time of the assignment date and time |
|  | ReleasedOn | Inputted ReleasedOn |
|  | Duration | Duration that this link is active (calculated or inputted Duration) |
|  | ResourceLinkClassID | Inputted ResourceLinkClassID |
|  | ReferenceID | Links to FlexData |
|  | LastUpdateOn | The date when the record was last updated |
|  | LastUpdatedBy | The user which last updated the record |
|  | CreatedOn | The date the record was created |
|  | CreatedBy | The user who created the record |
|  | Active | NULL |
|  | LastDeleteOn | NULL |
|  | LastDeletedBy | NULL |
|  | LastReactivateOn | NULL |
|  | LastReactivatedBy | NULL |
|  | ArchiveID | NULL |
|  | LastArchiveOn | NULL |
|  | LastArchivedBy | NULL |
|  | LastRestoreOn | NULL |
|  | LastRestoredBy | NULL |
|  | RowVersionStamp | NULL |
