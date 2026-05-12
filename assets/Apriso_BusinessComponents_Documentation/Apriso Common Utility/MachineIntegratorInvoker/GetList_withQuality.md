# GetList_withQuality

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to get a list of the values of specific Machine Integrator Points with the timestamp from the machine and read quality.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StringItemsAliases | Char | No | The string machine full Point Aliases in the following format: [Connector]\[Data_Source]\[Point_Group]\[Point] |
| Input | BoolItemsAliases | Char | No | The Boolean machine full Point Aliases in the following format: [Connector]\[Data_Source]\[Point_Group]\[Point]. |
| Input | IntItemsAliases | Char | No | The integer machine full Point Aliases in the following format: [Connector]\[Data_Source]\[Point_Group]\[Point] |
| Input | DecimalItemsAliases | Char | No | The decimal machine full Point Aliases in the following format: [Connector]\[Data_Source]\[Point_Group]\[Point]. |
| Input | DateTimeItemsAliases | Char | No | The date/time machine full Point Aliases in the following format: [Connector]\[Data_Source]\[Point_Group]\[Point]. |
| Output | StringValues | Char | No | A list of values of the string type. |
| Output | StringValuesUTCTimestamps | DateTime | No | A list of UTC timestamps of the machine Point value read. |
| Output | StringValuesQualities | Char | No | A list of quality readings of the machine Point values (Good, Bad, Uncertain, ErrorQualityValue). |
| Output | BoolValues | Boolean | No | A list of values of the Boolean type. |
| Output | BoolValuesUTCTimestamps | DateTime | No | A list of UTC timestamps of the machine Point value read. |
| Output | BoolValuesQualities | Char | No | A list of quality readings of the machine Point values (Good, Bad, Uncertain, ErrorQualityValue). |
| Output | IntValues | Integer | No | A list of values of the integer type. |
| Output | IntValuesUTCTimestamps | DateTime | No | A list of UTC timestamps of the machine Point value read. |
| Output | IntValuesQualities | Char | No | A list of quality readings of the machine Point values (Good, Bad, Uncertain, ErrorQualityValue). |
| Output | DecimalValues | Decimal | No | A list of values of the decimal type. |
| Output | DecimalValuesUTCTimestamps | DateTime | No | A list of UTC timestamps of the machine Point value read. |
| Output | DecimalValuesQualities | Char | No | A list of quality readings of the machine Point values (Good, Bad, Uncertain, ErrorQualityValue). |
| Output | DateTimeValues | DateTime | No | A list of values of the date/time type. |
| Output | DateTimeValuesUTCTimestamps | DateTime | No | A list of UTC timestamps of the machine Point value read. |
| Output | DateTimeValuesQualities | Char | No | A list of quality readings of the machine Point values (Good, Bad, Uncertain, ErrorQualityValue). |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator (an empty string means no error). |

## Validations

- The Point Alias is verified and if not found, the "Unknown Alias" error message is displayed  
- If no providers are found for the requested items or an exception occurs, the "Fail" error message is displayed

## System Processing

The system retrieves the Point values.
