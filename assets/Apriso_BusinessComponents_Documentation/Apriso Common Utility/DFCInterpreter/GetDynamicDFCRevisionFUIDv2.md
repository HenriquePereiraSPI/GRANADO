# GetDynamicDFCRevisionFUIDv2

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Active

## Description

Returns the dynamically calculated FUID of a DFC revision that meets effectivity/discontinue date conditions. If more than one revision of the DFC meets these conditions, the FUID of the default DFC revision is returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | operationCode | Char | Yes | Code of a DFC whose revisions will be used for calculations. |
| Input | projectCode | Char | Yes | Code of a Project which will be used for calculations. |
| Output | operationFUID | Char | Yes | FUID of a DFC which meets all conditions. |

## System Processing

- System searches for a DFC inside of a Project if the projectCode Input is provided. 
- System retrievies the DFC FUID based on the given criteria. 
- System returns the FUID of a default DFC revision if more than one revision of the DFC met conditions.
