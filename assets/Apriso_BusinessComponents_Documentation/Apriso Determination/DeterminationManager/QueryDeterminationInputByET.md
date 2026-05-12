# QueryDeterminationInputByET

**Category:** Apriso/Determination
**Class:** `FlexNet.BusinessFacade.Determination.DeterminationManager`
**Assembly:** `FlexNet.BusinessFacade.Determination.dll`
**Status:** Active

## Description

This Business Component method returns Local Determination values according to the ExecutionTemplate Input. The Input names and values as well as the Output names with their values are returned.
 

The Output represents all the possible runtime values for the specified ExecutionTemplate.
 

This Business Component method works only with Local Determinations that contain the ExecutionTemplate Input. It was originally designed to retrieve values (Inputs and Outputs) for the Local Determination used in Explosion type 4 (APR_PPR_EXPLOSION_OPERATION).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Determination | Char | Yes | The Determination name. |
| Input | ExecutionTemplate | Char | Yes | The Execution Template. |
| Input | WorkCenter | Integer | No | The Work Center filter field (ignored if zero provided). |
| Input | OperationType | Integer | No | The Operation Type filter field (ignored if zero provided). |
| Input | InsideProcessFlag | Boolean | Yes | The Inside Process Flag filter field. |
| Output | Outputs | ListofChar | Yes | All the possible Determination Output names. |
| Output | OutputValues | ListofChar | Yes | A table of all the matching Output values (matches previous Outputs list). |
| Output | Inputs | ListofChar | Yes | All the possible Determination Input names (excluding the Inputs passed to the calculation). |
| Output | InputValues | ListofChar | Yes | A table of all the possible Input values (matches the previous Inputs list). |

## Validations

- The system validates if the Determination name and ExecutionTemplate fields are not empty and if the Determination exists in the database

## System Processing

The system returns the names and values of the Inputs and Outputs of the requested local Determination. The Output values are filtered by the ExecutionTemplate and other provided Inputs.

## Pre-Conditions

**Pre-Conditions** 
 
 
- The Determination must exist in the database  
- All the required Inputs must be set
