# Create

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipComponentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This method allows process authors to create or update wip_component records. This method also creates the component record for the given product and links it to the wip_component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ProductID |
| Input | WipOrderNo | Char | Yes | Wip Order No |
| Input | WipOrderType | Short | Yes | Wip Order Type |
| Input | OprSequenceNo | Char | No | Operation Sequence Number |
| Input | StepSequenceNo | Integer | No | Step Sequence Number |
| Input | SequenceNo | Integer | No | Sequence Number |
| Input | Quantity | Decimal | No | Component Quantity Needed |
| Input | IssuedQuantity | Decimal | No | Wip Component Quantity need |
| Input | UsageType | Short | No | Regular = 1, ActiveIngredient = 2, CompensatingIngredient = 3, NonCompensatingIngredient = 4, ConstantIngredient = 5, VariableByProduct = 6, ConstantByProduct = 7, VariableCoProduct = 8, ConstantCoProduct = 9, Incidental = 10 |
| Input | IssueType | Short | No | Consume = 1, Produce = 2 |
| Input | ReferenceOrderNo | Char | No | Reference Order No |
| Input | ReferenceOrderLineNo | Char | No | Reference Order Line No |
| Input | UOMCode | Char | No | Uom Code |
| Input | ExternalSource | Boolean | No | External Source |
| Input | BOMNumber | Char | No | BOM Number |
| Output | WipComponentID | Integer | No | It will be populated with the ID for the new record or the record that has been created |

## Validations

- System validates Product record based on ProductID input parameter. 
- System validates WipOrder record based on WipOrderNo and WipOrderType input parameters. 
- System validates WipOperation record based on WipOrderNo, WipOrderType, and OprSequenceNo input parameters. 
- System validates WipOperationStep record based on WipOrderNo, WipOrderType, OprSequenceNo, and StepSequenceNo input parameters. 
- System validates if UsageType is in ComponentUsageType enumeration. 
- System validates Issue Type is in ComponentIssueType enumeration. 
- System validates UOM record based on UOMCode input parameter.

## System Processing

-  System creates Component record.  
-  System creates WipComponent record.  
-  System invokes Standard Operation "APR_WIPC_AFTER_CREATE".  
-  System populates Transaction History.

## Pre-Conditions

Product and WipOrder record must exist.

## History Recording in Production

Transaction History XML required

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COMPONENT | ProductID | ProductID |
|  | Quantity | Quantity |
|  | UsageType | UsageType |
|  | IssueType | IssueType |
|  | UOMCode | UOMCode |
| WIP_COMPONENT | ProductID | ProductID |
|  | ComponentID | ComponentID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | SequenceNo | SequenceNo |
|  | IssuedQuantity | IssuedQuantity |
|  | ExternalSource | ExternalSource |
|  | OprSequenceNo | OprSequenceNo |
|  | StepSequenceNo | StepSequenceNo |
|  | ReferenceOrderNo | ReferenceOrderNo |
|  | ReferenceOrderLineNo | ReferenceOrderLineNo |
|  | UOMCode | UOMCode |
|  | BOMNumber | BOMNumber |
