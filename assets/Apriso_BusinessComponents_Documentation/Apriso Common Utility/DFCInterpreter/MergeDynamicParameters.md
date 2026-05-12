# MergeDynamicParameters

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Active

## Description

Merges encoded parameters into one list.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PrimaryParameters | Char | No | Primary parameters, usually read from "DynamicOutputs" Sub-DFC Output, override SecondaryParameters. |
| Input | SecondaryParameters | Char | No | Secondary parameters, usually read from "DynamicOutputs" Sub-DFC Output, overriden by PrimaryParameters. |
| Output | MergedParameters | Char | No | Merged parameters. |

## System Processing

- Merges two encoded DynamicParameters Inputs into one list 
- PrimaryParameters Input overrides SecondaryParameters Input
