# CreateEverythingPackageFromProject

**Category:** Apriso/GPM
**Class:** `FlexNet.BusinessFacade.GPM.ProjectManager`
**Assembly:** `FlexNet.BusinessFacade.GPM`
**Status:** Active
**Keywords:** GPM

## Description

Creates a package that contains all of the Project items.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProjectName | Char | Yes | Name of the Project. |
| Input | ProjectRevision | Char | Yes | Revision of the Project. |
| Input | GenerationComment | Char | No | A comment added to the package during Generate Action. |
| Input | CaseTrackingReference | Char | No | A reference to a case tracking system. |
| Input | IncludeProjectDefinition | Boolean | No | Determines if a Project definition should be included in the package. |

## Validations

- Validation fails if the Project with a given name and revision does not exist.

## System Processing

- System prepares a Package Creation request from a Project with a given name and revision. 
- GenerationComment and TrackingReference Inputs are populated on request. 
- Project definition will be included in the generated package if the IncludeProjectDefinition is selected. 
- The Package Creation request is sent to Global Process Manager service. 
- Note that creation of the package is asynchronous, and to see creation result you need to go to Global Process Manager. 
- Package will contain all of the Project items.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FDS_PROJECT_COMPONENT | [All Columns] |  |
| FDS_PROJECT_COMPONENT_PACKAGE | [All Columns] |  |
| FDS_PACKAGE_INFO | [All Columns] |  |
| FDS_PACKAGE_DEPENDENCY | [All Columns] |  |
| FDS_PACKAGE_ACTION | [All Columns] |  |
| FDS_PACKAGE_ACTION_NODE | [All Columns] |  |
