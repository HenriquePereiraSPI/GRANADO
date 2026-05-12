# CreatePackagingInstructionAndUsage_v2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create packaging instructions and packaging instruction usages. The creation of these entities has some limitations, such as:
 
 
- Maximum complexity is limited to 2 level of PI, 
- Maximum complexity is limited to the creation of mono-product packaging instructions, containing only 1 main packaging material (no additional packaging materials), 
- Only the target quantity of the PI created will be fulfilled, not the min & max quantities, 
- Validity dates of the PI are not set up, 
- Dimensions of the PI are not set up, 
- It is not possible to create PI with Items of type text, 
- The BC is not checking, if the PI created already exists in the DB.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PackagingInstructionDescriptionLevel1 | Char | Yes | Packaging instruction description for level1. |
| Input | PackagingInstructionCodeLevel1 | Char | Yes | Packaging instruction code for level1. |
| Input | PackagingMaterialLevel1 | Integer | Yes | Packaging material for level1. |
| Input | QuantityLevel1 | Decimal | Yes | Quantity for level1. |
| Input | PackagingInstructionDescriptionLevel2 | Char | No | Packaging instruction description for level2. |
| Input | PackagingInstructionCodeLevel2 | Char | No | Packaging instruction code for level2. |
| Input | PackagingMaterialLevel2 | Integer | No | Packaging material for level2. |
| Input | QuantityLevel2 | Decimal | No | Quantity for level2. |
| Input | ProductID | Integer | Yes | Product ID. |
| Input | ProductUomCode | Char | Yes | Product UOM code. |
| Input | PackagingInstructionClassID | Integer | Yes | Packaging instruction class ID. |
| Input | UsageProductID | Integer | No | Product to populate packaging instruction usage. |
| Input | PartnerID | Integer | No | Partner to populate packaging instruction usage. |
| Input | WipOrderNo | Char | No | WIP order number to populate packaging instruction usage. |
| Input | WipOrderType | Integer | No | WIP order type to populate packaging instruction usage. |
| Input | Facility | Char | No | Facility to populate packaging instruction usage. |
| Input | ResourceName | Char | No | Resource name to populate packaging instruction usage. |
| Input | ResourceType | Integer | No | Resource type to populate packaging instruction usage. |
| Input | ResourceClassID | Integer | No | Resource class ID to populate packaging instruction usage. |
| Input | Group | Char | No | Group to populate packaging instruction usage. |
| Input | GroupType | Integer | No | Group type to populate packaging instruction usage. |
| Input | GroupClassID | Integer | No | Group class to populate packaging instruction usage. |
| Input | WorkCenter | Char | No | Work center to populate packaging instruction usage. |
| Input | Department | Char | No | Department to populate packaging instruction usage. |
| Input | LabelTypeLevel1 | Integer | No | Label type for level 1 to populate packaging instruction usage. |
| Input | NumberOfCopyLevel1 | Integer | No | Number of copy per level 1 to populate packaging instruction usage. |
| Input | LabelTypeLevel2 | Integer | No | Label type for level 2 to populate packaging instruction usage. |
| Input | NumberOfCopyLevel2 | Integer | No | Number of copy per level 2 to populate packaging instruction usage. |
| Input | PackagingInstructionUsageType | Integer | No | Packaging instruction usage type to populate packaging instruction usage. |
| Output | Level1PackagingInstrHeaderID | Integer | No | ID of the Level 1 header of the newly created Packaging Instruction. |
| Output | Level2PackagingInstrHeaderID | Integer | No | ID of the Level 2 header of the newly created Packaging Instruction. |
| Output | PackagingInstrUsageID | Integer | No | ID of the newly created Packaging Instruction. |

## Validations

- System validates that PackagingInstructionDescriptionLevel1 and PackagingInstructionCodeLevel1 are specified, 
- System validates that PackagingMaterialLevel1 is specified and exists (PRODUCT table), 
- System validates that QuantityLevel1 is specified (is greater than 0),  
- If PackagingInstructionCodeLevel2 is specified then: 
 
- System validates that PackagingMaterialLevel2 is specified and exists (PRODUCT table), 
- System validates that QuantityLevel2 is specified (is greater than 0), 
 
- System validates that ProductID is specified and exists, 
- System validates that ProductUomCode is specified and exists (UOM table), 
- System validates that PackagingInstructionClassID is specified and exists (PACKAGING_INSTR_CLASS table), 
- If PackagingInstructionUsageType is specified then: 
 
- System validates that it exists (PACKAGING_INSTR_USAGE_TYPE table), 
- If UsageProductID is specified, system validates that the product exists (PRODUCT table), 
- If PartnerID is specified, system validates that the partner exists (PARTNER table), 
- If WipOrderNo and WipOrderType are specified, system validates that the WIP order exists (WIP_ORDER table), 
- If Facility is specified, system validates that it exists (FACILITY table),  
- If ResourceType is specified, system validates it exists (RESOURCE_TYPE table), 
- If ResourceClassID is specified, system validates it exists (RESOURCE_CLASS table), 
- If ResourceType and ResourceName are specified, system validates that the resource exists (RESOURCE_ table), 
- If UsageProductID, Group, GroupType and GroupClassID are specified, system validates that the product group exists (PRODUCT_GROUP table), 
- If WorkCenter is specified, system validates it exists (WORK_CENTER table), 
- If Department is specified, system validates it exists (DEPARTMENT table), 
- If LabelTypeLevel1 is specified, system validates that the label type exists (REPORT_TYPE table), 
- If LabelTypeLevel2 is specified, system validates that the label type exists (REPORT_TYPE table).

## System Processing

- The System creates a record in PACKAGING_INSTR_HEADER for level 1, 
- The System creates a record in PACKAGING_INSTR_DETAIL for packaging material and links it to the created header on level 1, 
- If PackagingInstructionCodeLevel2 is not specified: 
 
- System creates record in PACKAGING_INSTR_DETAIL for the product and links it to the created header on level 1, 
 
- Else if PackagingInstructionCodeLevel2 is specified: 
 
- System creates a record in PACKAGING_INSTR_HEADER for level 2, 
- System creates a record in PACKAGING_INSTR_DETAIL for level1 with the type of 'Packaging Instruction' and assigns the id of the header level2 to the created detail on level 1 (the created detail record is linked to header on level 1), 
- System creates a record in PACKAGING_INSTR_DETAIL for level 2 for packaging material and links it to the created header on level 2, 
- System creates a record in PACKAGING_INSTR_DETAIL for level 2 for the product and links it to the created header on level 2, 
 
- If PackagingInstrUsageType is specified, system populates PACKAGING_INSTR_USAGE with the parameters specified, 
- The system returns the output value of level1 Packaging Instruction header id, level2 Packaging Instruction header id and Packaging Instruction usage id.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PACKAGING_INSTR_HEADER | Medium (from linked text_translation) | PackagingInstructionDescriptionLevel1 (Required)PackagingInstructionDescriptionLevel2 (if specified) |
|  | Code | PackagingInstructionCodeLevel1 (Required)PackagingInstructionCodeLevel1 (if specified) |
|  | Version | 1 |
|  | ClassID | PackagingInstructionClassID (Required) |
| PACKAGING_INSTR_DETAIL | Packaging material level1 |  |
|  | ClassID | PackagingInstructionClassID (Required) |
|  | ProductID | PackagingMaterialLevel1 (Required) |
|  | MainPackagingFlag | true |
|  | UOM | Default UOM for the packaging material |
|  | SequenceNo | 1 |
|  | HeaderID | ID of the created Header on level1 |
|  | TargetQuantity | 1 |
|  | Type | 3 (packaging material) |
|  | Product Level 1 |  |
|  | ClassID | PackagingInstructionClassID (Required) |
|  | ProductID | ProductID (Required) |
|  | TargetQuantity | QuantityLevel1 (Required) |
|  | UOM | ProductUomCode (Required) |
|  | SequenceNo | 2 |
|  | Type | 1 (product) |
|  | HeaderID | ID of the created Header on level1 |
|  | Packaging instruction level1 |  |
|  | ClassID | PackagingInstructionClassID (Required) |
|  | SequenceNo | 2 (in this scenario there is no product detail on level1) |
|  | Type | 2 (packaging instruction) |
|  | UOM | "EA" |
|  | HeaderID | ID of the header on level1 |
|  | PackagingInstructionID | ID of packaging instruction header on level 2 |
|  | TargetQuantity | QuantityLevel1 (Required) |
|  | Packaging material level2 |  |
|  | ClassID | PackagingInstructionClassID (Required) |
|  | ProductID | PackagingMaterialLevel2 |
|  | MainPackagingFlag | true |
|  | UOM | Default UOM for packaging material |
|  | SequenceNo | 1 |
|  | Type | 3 (packaging material) |
|  | HeaderID | ID of the header on level2 |
|  | TargetQuantity | 1 |
|  | Product level2 |  |
|  | ClassID | PackagingInstructionClassID (Required) |
|  | ProductID | ProductID (Required) |
|  | TargetQuantity | QuantityLevel2 (Required) |
|  | UOM | ProductUomCode (Required) |
|  | SequenceNo | 2 |
|  | Type | 1 (product) |
|  | HeaderID | ID of the created Header on level2 |
| PACKAGING_INSTR_USAGE | PackagingInstructionHeaderID | ID of packaging instruction header on level 1 |
|  | UsageType | PackagingInstructionUsageType |
|  | ProductID | UsageProductID |
|  | PartnerID | PartnerID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | Facility | Facility |
|  | ResourceType | ResourceType |
|  | ResourceClassID | ResourceClassID |
|  | ResourceName | ResourceName |
|  | ResourceClassID | ResourceClassID |
|  | Group | Group |
|  | GroupType | GroupType |
|  | GroupClassID | GroupClassID |
|  | WorkCenter | WorkCenter |
|  | Department | Department |
|  | ReportTypeLevel1 | LabelTypeLevel1 |
|  | NumberOfCopyLevel1 | NumberOfCopyLevel1 |
|  | ReportTypeLevel2 | LabelTypeLevel2 |
|  | NumberOfCopyLevel2 | NumberOfCopyLevel2 |
