# GetListByEquipment

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get a list of the values of the Machine Integrator Points assigned to a specific Equipment's Features. 
 

 

The time needed to reflect changes in configuration (linking another Machine Integrator Point to equipment) depends on time set in CacheValidationDelay key (Central Configuration.xml).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StringEquipments | ListofChar | No | The names of the Equipments with String values. |
| Input | StringFacilities | ListofChar | No | The Facilities of the Equipments with String values. |
| Input | StringFeatures | ListofChar | No | The name of the Features with String values. |
| Input | BoolEquipments | ListofChar | No | The names of the Equipments with Boolean values. |
| Input | BoolFacilities | ListofChar | No | The Facilities of the Equipments with Boolean values. |
| Input | BoolFeatures | ListofChar | No | The names of the Features with Boolean values. |
| Input | IntEquipments | ListofChar | No | The names of the Equipments with Integer values. |
| Input | IntFacilities | ListofChar | No | The Facilities of the Equipments with Integer values. |
| Input | IntFeatures | ListofChar | No | The names of the Features with Integer values. |
| Input | DecimalEquipments | ListofChar | No | The names of the Equipments with Decimal values. |
| Input | DecimalFacilities | ListofChar | No | The Facilities of the Equipments with Decimal values. |
| Input | DecimalFeatures | ListofChar | No | The names of the Features with Decimal values. |
| Input | DateTimeEquipments | ListofChar | No | The names of the Equipments with DateTime values. |
| Input | DateTimeFacilities | ListofChar | No | The Facilities of the equipments with DateTime values. |
| Input | DateTimeFeatures | ListofChar | No | The name of the Features with DateTime values. |
| Output | StringValues | ListofChar | No | The list of values of the String type. |
| Output | BoolValues | ListofBool | No | The list of values of the Boolean type. |
| Output | IntValues | ListofInteger | No | The list of values of thje Integer type. |
| Output | DecimalValues | ListofDecimal | No | The list of values of the Decimal type. |
| Output | DateTimeValues | ListofDateTime | No | The list of values of the DateTime type. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator (an empty string means no error). |

## Validations

- The Equipment and Feature assignment to the Machine Integrator Point is validated and if not found, the "ErrorUnknownAlias" ErrorCode is set 
- In case of a communication error or no connection to Machine Integrator Connector, the "NoConnection" ErrorCode is set 
- If an assigned Point has a different type than expected, the "ErrorBadType" ErrorCode is set 
- If no providers are found for the requested items or an exception occurs, the error message is displayed

## System Processing

The system retrieves the values of the Machine Integrator Points assigned to specified Equipment Features.
