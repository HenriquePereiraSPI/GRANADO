# LinkEntityToCAPA

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, link, entity

## Description

The purpose of this Business Component method is to create a link between entities and a CAPA record in the CAPA_LINK table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | Yes | The ID of the CAPA. |
| Input | CAPAStepID | Integer | No | The ID of the CAPA Step. |
| Input | CAPATaskID | Integer | No | The ID of the CAPA Task. |
| Output | CreatedCAPALinkID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Facility | Char | The unique name of the Facility. |
| Warehouse | Char | The unique name of the Warehouse. |
| Department | Char | The unique name of the Department. |
| WorkCenter | Char | The unique name of the Work Center. |
| WarehouseLocationID | Integer | The unique ID of the Warehouse Location. |
| Zone | Char | The unique name of the Zone. |
| ResourceID | Integer | The unique ID of the Resource. |
| QualityDefectID | Integer | The unique ID of the Quality Defect. |
| PartnerID | Integer | The unique ID of the Partner. |
| ProductID | Integer | The unique ID of the Product. |
| LotNo | Char | The name of the Lot. |
| SerialNo | Char | The name of the Serial. |
| OperationID | Integer | The unique ID of the Operation. |
| Disposition | Char | The unique name of the Disposition. |
| Container | Char | The unique name of the Container. |
| RelatedCAPAID | Integer | The unique ID of the related CAPA record. |
| WipOrderNo | Char | The number of the WIP Order. |
| WipOrderType | Integer | The type of the WIP Order. |
| OprSequenceNo | Char | The sequence number of the WIP Operation. |
| ProductionLineNo | Char | The number of the Production Line. |
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- The system validates that CAPAID is provided. 
- The system validates that the provided CAPAID exists in the CAPA table. 
- If CAPAStepID is provided, the system validates that it exists in the CAPA_STEP table. 
- If CAPATaskID is provided, the system validates that it exists in the CAPA_TASK table and belongs to the proper CAPA Step. 
- The system validates that the linked entity exists in the database. 
- The system validates that the linked entity is not already linked to the provided CAPAID, CAPAStepID or CAPATaskID. 
- The system enables linking of only one entity within one run of the Business Component. 
- The following entities can be linked (depending on provided Inputs): 
 
- Resource (ResourceID) 
- Work Center (WorkCenter) 
- Partner (PartnerID) 
- Lot No. (LotNo and ProductID) 
- Serial No. (SerialNo and ProductID) 
- Product (ProductID) 
- Container (Container) 
- Warehouse (Warehouse and Facility) 
- Disposition (Disposition and Facility) 
- Facility (Facility) 
- Department (Department) 
- Warehouse Location (WarehouseLocationID) 
- Zone (Zone) 
- Quality Defect (QualityDefectID) 
- Operation (OperationID) 
- CAPA (RelatedCAPAID) 
- WIP Operation (WipOrderNo, WipOrderType, OprSequenceNo) 
- WIP Order (WipOrderNo, WipOrderType) 
- Production Line No. (ProductionLineNo)

## System Processing

- The system creates a new record in the CAPA_LINK table and returns the ID of the record. 
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
| CAPA_LINK | ID | CreatedCAPALinkID |
|  | CAPAID | CAPAID |
|  | CAPAStepID | CAPAStepID |
|  | CAPATaskID | CAPATaskID |
|  | Facility | Facility |
|  | Warehouse | Warehouse |
|  | Department | Department |
|  | WorkCenter | WorkCenter |
|  | WarehouseLocationID | WarehouseLocationID |
|  | Zone | Zone |
|  | ResourceID | ResourceID |
|  | QualityDefectID | QualityDefectID |
|  | PartnerID | PartnerID |
|  | ProductID | ProductID |
|  | LotNo | LotNo |
|  | SerialNo | SerialNo |
|  | OperationID | OperationID |
|  | Disposition | Disposition |
|  | Container | Container |
|  | RelatedCAPAID | RelatedCAPAID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | ProductionLineNo | ProductionLineNo |
