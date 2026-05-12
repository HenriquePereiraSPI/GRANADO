# UpdateSystemParameterValue

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.SystemParameterManager`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active
**Keywords:** System Parameter, System Parameter Staging Set

## Description

Updates a record in the SYSTEM_PARAMETER_VALUE table with a record from the SYSTEM_PARAMETER_STAGING_SET_VALUE for the defined system parameter and system parameter staging set. Values of the Business Component input parameters SystemParameternName and SystemParameterSetName should match the values that exist in the database.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SystemParameterName | String | Yes | Name of the System Parameter |
| Input | SystemParameterSetName | String | Yes | Name of the System Parameter Staging Set |

## Validations

Checks if SystemParameterName and SystemParameterSetName are not empty.  Checks if SystemParameterStagingSet exists for the defined SystemParameterName and SystemParameterSetName.

## System Processing

The system sets SystemParameterStagingSet for the defined SystemParameterName and SystemParameterSetName to active. All other SystemParameterStagingSets assigned to the same SystemParameter are deactivated. The system checks if SystemParameterValue for the current SystemParameter exists. If it does, the system deletes it and creates a new one. The system rewrites values from SystemParameterStagingSetValue to a SystemParameterValue record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SYSTEM_PARAMETER_STAGING_SET | IsActive |  |
| SYSTEM_PARAMETER_VALUE | ArrayIndex |  |
|  | Value_ |  |
|  | TextID |  |
|  | ReferenceID |  |
|  | Active |  |
|  | RowVersionStamp |  |
|  | ValueKey |  |
|  | Facility |  |
|  | SystemParameterName |  |
