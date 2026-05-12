# GetMIPoint

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.ResourceMIPointManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Get MI Point Scale Resource Equipment Feature

## Description

This method reads MI Point parameters for a given Resource ID related to a Scale. The MI Points are linked to the Scale through the Equipment MI Feature table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | ID of a Resource related to a Scale. |
| Input | FeatureName | Char | Yes | Equipment Class Feature name. |
| Output | PointID | Integer | Yes | MI Point ID of the Scale. |
| Output | PointAlias | Char | Yes | MI Point alias of the Scale. |
| Output | Enabled | Boolean | Yes | Indicates if MI Point is enabled. |
| Output | PointGroupID | Integer | Yes | MI Point Group ID. |
| Output | PointGroupAlias | Char | Yes | MI Point Group alias. |
| Output | DataSourceID | Integer | Yes | MI Data Source ID. |
| Output | DataSourceAlias | Char | Yes | MI Data Source alias. |
| Output | ConnectorID | Integer | Yes | MI Connetor ID. |
| Output | ConnectorAlias | Char | Yes | MI Connetor alias. |
| Output | FullPointAlias | Char | Yes | Full MI Point alias in format @ConnectorAlias\DataSourceAlias\PointGroupAlias\PointAlias. |

## Validations

- System validates if an Equipment for the given Resource ID exists. 
- System validates if the Equipment belongs to the class "Scale". 
- System validates if the Equipment Class "Scale" contains provided Feature Name. 
- System validates if Equipment MI Feature exists for the Equipment and Feature Name. 
- System validates if MI Point, Point Group, Data Source and Connector exists.

## System Processing

- System retrieves MI Point parameters for a given Resource ID (related to a Scale) and Equipment Class Feature Name.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | ResourceID | ResourceID |
| EQUIPMENT_CLASS_FEATURE | Name | FeatureName |
| MI_POINT | ID | PointID; MI Point linked to EQUIPMENT_MI_FEATURE.MIPointID. |
|  | Alias | PointAlias |
|  | Enabled | Enabled |
| MI_POINT_GROUP | ID | PointGroupID |
|  | Alias | PointGroupAlias |
| MI_DATA_SOURCE | ID | DataSourceID |
|  | Alias | DataSourceAlias |
| MI_CONNECTOR | ID | ConnectorID |
|  | Alias | ConnectorAlias |
