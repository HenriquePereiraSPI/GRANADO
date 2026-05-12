# RetrievePackagingInstruction

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component Method uses determination to retrieve all valid packaging instructions for a given set of inputs.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PackagingInstructionUsageType | Integer | Yes | Packaging instruction usage type to retrieve the packaging instructions for. |
| Input | ProductID | Integer | No | ID of the Product to retrieve the packaging instructions for. |
| Input | PartnerID | Integer | No | Partner ID to retrieve the packaging instructions for. |
| Input | WipOrderNo | Char | No | Wip order number to retrieve the packaging instructions for |
| Input | WipOrderType | Integer | No | Wip order type to retrieve the packaging instructions for. |
| Input | Facility | Char | No | Facility to retrieve the packaging instructions for. |
| Input | ResourceName | Char | No | Resource name to retrieve the packaging instructions for. |
| Input | ResourceType | Integer | No | Resource type to retrieve the packaging instructions for. |
| Input | ResourceClassID | Integer | No | Resource class ID to retrieve the packaging instructions for. |
| Input | Group | Char | No | Group to retrieve the packaging instructions for. |
| Input | GroupType | Integer | No | Group type to retrieve the packaging instructions for. |
| Input | GroupClassID | Integer | No | Group class ID to retrieve the packaging instructions for. |
| Input | WorkCenter | Char | No | Work center to retrieve the packaging instructions for. |
| Input | Department | Char | No | Department to retrieve the packaging instructions for. |
| Input | MainPackagingMaterial | Integer | No | Main packaging material to retrieve the packaging instructions for. Optional. If specified then only packaging instructions which consume this packaging material are retrieved. It has to be main packaging material for the packaging instruction. No sublevels processing is performed. |
| Input | NumberOfRequestedPI | Decimal | Yes | Number of requested packaging instructions to retrieve. |
| Output | Counter | Decimal | No | Number of retrieved packaging instructions |
| Output | SequenceNumber | Integer | No | Array of retrieved sequence numbers. |
| Output | MainPackagingInstruction | Boolean | No | Array of retrieved main packaging instruction flags. |
| Output | PackagingInstructionHeaderID | Integer | No | Array of retrieved packaging instructions. |
| Output | ReportTypeLevel1 | Integer | No | Array of retrieved report types on level1 |
| Output | NumberOfCopyLevel1 | Integer | No | Array of numbers of copies on level1 |
| Output | ReportTypeLevel2 | Integer | No | Array of retrieved report types on level2 |
| Output | NumberOfCopyLevel2 | Integer | No | Array of numbers of copies on level2 |

## Validations

System validates that PackagingInstructionUsageType is specified and exists (PACKAGING_INSTR_USAGE_TYPE table)

## System Processing

- System selects all packaging instructions from PACKAGING_INSTR_USAGE table for the specified input parameters based on the determination strategy defined in PACKAGING_INSTR_USAGE_TYPE_DET table as follows: 
 
- If PartnerID is specified then the record from PACKAGING_INSTR_USAGE is selected only if it is defined for the inputted PackagingInstructionUsageType and PartnerID and the corresponding record in PACKAGING_INSTR_USAGE_TYPE_DET has 'Partner' flag set to true. 
- Else if PartnerID is not specified then the record from PACKAGING_INSTR_USAGE is selected only if it is defined for the inputted PackagingInstructionUsageType and has PartnerID set to 'null' and the corresponding record in PACKAGING_INSTR_USAGE_TYPE_DET has 'Partner' flag set to false. 
- The same processing for inputted product, wip order, facility, resource, resource type, resource class, product group, work center and department. 
 
- If MainPackagingMaterial is specified, system removes from the list all packaging instructions that don't consume this packaging material. 
- System sorts the list in ascending order based on the sequence number defined in PACKAGING_INSTR_USAGE_TYPE_DET 
- System returns the list of packaging instruction limited to the number given by NumberOfRequestedPI 
- System populates Counter parameter with the size of the returned list of packaging instructions.

## Pre-Conditions

- The packaging instruction must be defined prior to using this method 
- Only 1 or 2 level packaging instructions are allowed.
