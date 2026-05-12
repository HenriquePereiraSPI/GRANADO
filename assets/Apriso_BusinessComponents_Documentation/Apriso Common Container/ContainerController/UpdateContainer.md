# UpdateContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Container

## Description

The purpose of this Business Component is to update container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | Yes | Container to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ContainerStatus | Integer | The Container Status of the Container to be updated. |
| ContainerClassID | Integer | The Container Class ID of the Container to be updated. |
| ProgressStatus | Integer | The Progress Status of the Container to be updated. |
| CalculatedWeight | Decimal | The Calculated Weight of the Container to be updated. |
| ActualWeight | Decimal | The Actual Weight of the Container to be updated. |
| ShortDescription | Char | The Short Description of the Container to be updated. |
| MediumDescription | Char | The Medium Description of the Container to be updated. |
| ExtendedDescription | Char | The Extended Description of the Container to be updated. |
| DefinitionType | Char | The Definition Type of the Container to be updated. |
| MobileFlag | Boolean | The Mobile Flag of the Container to be updated. |
| PermanentFlag | Boolean | The Permanent Flag of the Container to be updated. |
| LastMaintenanceDate | DateTime | The Last Maintenance Date of the Container to be updated. |
| NextMaintenanceDate | DateTime | The Next Maintenance Date of the Container to be updated. |
| Active | Boolean | The Active of the Container to be updated. |
| Execute | Boolean | Determines execution of business component |

## Validations

- System validates that the Container exists.  
-  The inputs of Date type are not mandatory inputs. However, a date must be entered (Process Builder constraint for date-type fields). If any of the dates are not required, a date smaller than 1st January 1905 or greater than the 31st December 2135 should be inputted (will be processed as "no date").  
-  If Execute dynamic input not provided than set to TRUE  
- If ContainerStatus is specified and <= 0 than NULL value is set 
- If ContainerClassID is specified and <= 0 than NULL value is set 
- If ProgressStatus is specified and <= 0 than NULL value is set 
- If CalculatedWeight is specified and <= 0 than NULL value is set 
- If ActualWeight is specified and <= 0 than NULL value is set

## System Processing

-  If Execute is set to True, the system updates Container using the provided value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | ContainerStatus | ContainerStatus |
|  | ContainerClassID | ContainerClassID |
|  | ProgressStatus | ProgressStatus |
|  | CalculatedWeight | CalculatedWeight |
|  | ActualWeight | ActualWeight |
|  | DefinitionType | DefinitionType |
|  | MobileFlag | MobileFlag |
|  | PermanentFlag | PermanentFlag |
|  | LastMaintenanceDate | LastMaintenanceDate |
|  | NextMaintenanceDate | NextMaintenanceDate |
|  | Active | Active |
| TEXT_TRANSLATION | ID | System generated unique identifier for Text. |
|  | Short | Container short description |
|  | Medium | Container medium description |
|  | Extended | Container extended description |
|  | LanguageID | Current Language ID number |
