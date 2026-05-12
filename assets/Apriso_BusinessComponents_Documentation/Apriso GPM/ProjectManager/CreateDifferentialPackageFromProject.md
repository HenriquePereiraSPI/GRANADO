# CreateDifferentialPackageFromProject

**Category:** Apriso/GPM
**Class:** `FlexNet.BusinessFacade.GPM.ProjectManager`
**Assembly:** `FlexNet.BusinessFacade.GPM`
**Status:** Deprecated
**Keywords:** GPM

## Description

The purpose of this Business Component is to create differential Package from GPM Project.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProjectName | Char | Yes | Name of the Project |
| Input | ProjectRevision | Char | Yes | Revision of the Project |
| Input | GenerationComment | Char | No | Comments |
| Input | CaseTrackingReference | Char | No | Tracking Reference |
| Input | IncludeProjectDefinition | Boolean | No | Determines if Project definition should be included in the Package |

## Validations

- System validates whether a Project of a given name and revision exists.

## System Processing

- System prepares a Package Creation request from a Project with a given Name and Revision. 
- GenerationComments and TrackingReference are populated on request. 
- If IncludeProjectDefinition is checked, Project definition will be included in the generated Package. 
- Package Creation request is sent to Global Process Manager service. 
- Note that creation of the Package is asynchronous, and to see creation result you need to go to Global Process Manager.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | All Fields |  |
| FDS_PROJECT_COMPONENT | All Fields |  |
| FDS_PROJECT_COMPONENT_PACKAGE | All Fields |  |
| FDS_PACKAGE_INFO | All Fields |  |
| FDS_PACKAGE_DEPENDENCY | All Fields |  |
| FDS_PACKAGE_ACTION | All Fields |  |
| FDS_PACKAGE_ACTION_NODE | All Fields |  |
