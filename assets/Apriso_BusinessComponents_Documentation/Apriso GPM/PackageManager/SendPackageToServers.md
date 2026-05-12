# SendPackageToServers

**Category:** Apriso/GPM
**Class:** `FlexNet.BusinessFacade.GPM.PackageManager`
**Assembly:** `FlexNet.BusinessFacade.GPM`
**Status:** Active

## Description

The purpose of this Business Component is to send a generated package to destination servers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProjectName | Char | Yes | Name of the Project |
| Input | ProjectRevision | Char | Yes | Revision of the Project |
| Input | BuildNumber | Integer | Yes | Build number |
| Input | ServersNamesList | ListofChar | Yes | Destination servers |
| Input | DeployOnDestinationServers | Boolean | No | Determines if package should be deployed immediately on destination servers |
| Input | DeployProjectDefinitionOnDestinationServers | Boolean | No | Determines if project definition should be deployed on destination servers |

## Validations

- System validates whether a package of a given name, revision and build number exists. 
- System validates if destination servers exist. 
- Note that ServersNamesList should contain names of Destination Servers registered in Global Process Manager.

## System Processing

- System prepares Package Sent Request from a package with a given name, revision and build number. 
- Destination servers are populated on request. 
- If DeployOnDestinationServers is checked, the package will be deployed on every destination server immediately after it was sent. 
- If DeployProjectDefinitionOnDestinationServers is checked, the Project Definition from the package will be deployed on every destination server. 
- Note that the system does not validate if a package includes Project definition at that time. 
- Package Sent Request is sent to Global Process Manager service. 
- Note that sending of Package is asynchronous, and to see the result of sending and deployment you need to go to Global Process Manager.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FDS_PACKAGE_ACTION | All Fields |  |
| FDS_PACKAGE_ACTION_NODE | All Fields |  |
