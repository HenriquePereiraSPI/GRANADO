# UnlinkEntityFromCAPA

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, link, entity

## Description

The purpose of this Business Component method is to delete a link between entities and a CAPA record, stored in the CAPA_LINK table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPALinkID | Integer | Yes | The ID of the CAPA. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- The system validates that CAPALinkID is provided. 
- The system validates that the provided CAPALinkID exists in CAPA_LINK table.

## System Processing

- The system deletes the record from the CAPA_LINK table. 
- The system writes historical information about the changes to the CAPA_HISTORY table, unless the DisableHistory input is set to true.

## History Recording in Production

The history of runtime CAPA changes is stored in the CAPA_HISTORY table:
 
 
- The CAPAID, FlowName, FlowRevision, and CurrentStepName columns store information about the context of changes. 
- Change in the value of every column creates a new record in the CAPA_HISTORY table. 
- The Property field stores information about the name of the changed column, the Value[DataType] and ToValue[DataType] fields store information about the change. 
- DataType depends on the type of the changed column (1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime). 
- All history records created within one run of the Business Component are grouped by the ChangeFUID column followed by the increased value of ChangeLineNo.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_LINK | ID | CAPALinkID |
