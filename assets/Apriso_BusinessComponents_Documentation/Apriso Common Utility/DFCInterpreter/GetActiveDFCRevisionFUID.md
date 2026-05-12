# GetActiveDFCRevisionFUID

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Deprecated

## Description

Returns the dynamically calculated FUID of a DFC revision that meets effectivity/discontinue date conditions. The DFC must be in the prototype or active status and must have the correct compilation status. If more than one revision of the DFC meets these conditions, the FUID of the default DFC revision is returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | operationCode | Char | No | Code of a DFC whose revisions will be used for calculations. |
| Output | operationFUID | Char | No | FUID of a DFC which meets all conditions. |

## System Processing

- System retrievies the DFC FUID based on the given criteria. 
- System returns the FUID of the default DFC revision if more than one revision of the DFC met conditions.
