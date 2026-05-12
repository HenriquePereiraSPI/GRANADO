# GetDynamicDFCRevisionID

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Deprecated

## Description

Returns the dynamically calculated ID of a DFC revision that meets effectivity/discontinue date conditions. If more than one revision of the DFC meets these conditions, the ID of the default DFC revision is returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | operationCode | Char | No | Code of a DFC whose revisions will be used for calculations. |
| Output | operationID | Integer | No | ID of a DFC which meets all conditions. |

## System Processing

- System retrievies the DFC ID based on the given criteria. 
- System returns the ID of a default DFC revision if more than one revision of the DFC met conditions.
