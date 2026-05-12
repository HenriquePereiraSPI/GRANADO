# EncodeDynamicParameters

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Active

## Description

Encodes Business Component Function Inputs into serialized string which could be used as the value for "DynamicInputs" Input in Sub-DFC Function. Inputs to encode need to be added manually to the Business Component Function.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OriginalEncodedParameters | Char | No | Original encoded parameters. If not empty, it will be merged with Function Inputs. |
| Output | EncodedParameters | Char | Yes | Encoded Function Inputs. |

## System Processing

- Encodes custom Business Component Inputs into DynamicParameters Output
