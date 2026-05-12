# PACKAGING_INSTR_USAGE

**Database:** Operational

**Description:** Contains definitions for the usage of a Packaging Instruction. The usage can be a Product, WIP Order, Facility, Resource, Resource Type and Class, Product Group, Work Center and Department.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Ability to use the Department in the Packaging Instruction Determination. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of a Packaging Instruction to a Facility. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Defines the assignment of the entity to a Group (user-defined). |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Class of the Group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of the Group. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MainPackagingInstruction | BIT | True |  | False |  | Flagged if the Product Material is the main packaging material (e.g. the box that contains all the other products). Required for SAP packing. |
| NumberOfCopyLevel1 | INT(10,0) | True |  | False |  | Number of copies to print for Level 1 of of the Packaging Material. |
| NumberOfCopyLevel2 | INT(10,0) | True |  | False |  | Number of copies to print for Level 2 of the Packaging Material. |
| PackagingInstructionHeaderID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | ID of the Packaging Instruction Header record the usages are associated with. |
| PackagingInstrUsageTypeDetID | INT(10,0) | True |  | False | PACKAGING_INSTR_USAGE_TYPE_DET | ID of the Packaging Instruction Usage Determination record the usages are associated with. It is used to indicate which properties are considered by the procedure that determines the appropriate Packaging Instruction. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Partner that the Packaging Instruction is used for. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a Product (Product Number and Product Version). |
| ReportFUIDLevel1 | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the REPORT table. |
| ReportFUIDLevel2 | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the REPORT table. |
| ReportTypeLevel1 | INT(10,0) | True |  | False |  | Report Type for Level 1 of the Packaging Material. |
| ReportTypeLevel2 | INT(10,0) | True |  | False |  | Report type for Level 2 of the Packaging Material. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Resource Class that the Packaging Instruction is used for. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Resource the Packaging Instruction is used for. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource Type + Resource uniquely define a Resource. |
| UsageType | SMALLINT(5,0) | True |  | False | PACKAGING_INSTR_USAGE_TYPE | Type of the Usage the Packaging Instruction can be used for (e.g. shipping, receiving). |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | WIP Order that the Packaging Instruction is used for. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | Link to the WIP Order Type. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center that the Packaging Instruction is used for. |

## Primary Key

- **PK_PACKAGING_INSTR_USAGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PACKAGING_INSTR_USAGE_DEPARTMENT** — PACKAGING_INSTR_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_PACKAGING_INSTR_USAGE_FACILITY** — PACKAGING_INSTR_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_PACKAGING_INSTR_USAGE_GROUP_** — PACKAGING_INSTR_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_PACKAGING_INSTR_USAGE_GROUP_CLASS** — PACKAGING_INSTR_USAGE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_GROUP_TYPE** — PACKAGING_INSTR_USAGE -> GROUP_TYPE (`GroupType -> GroupType`)
- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_HEADER** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_HEADER (`PackagingInstructionHeaderID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_USAGE_TYPE** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_USAGE_TYPE (`UsageType -> UsageType`)
- **FK_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_USAGE_TYPE_DET** — PACKAGING_INSTR_USAGE -> PACKAGING_INSTR_USAGE_TYPE_DET (`PackagingInstrUsageTypeDetID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PARTNER** — PACKAGING_INSTR_USAGE -> PARTNER (`PartnerID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PRODUCT** — PACKAGING_INSTR_USAGE -> PRODUCT (`ProductID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_** — PACKAGING_INSTR_USAGE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_CLASS** — PACKAGING_INSTR_USAGE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_TYPE** — PACKAGING_INSTR_USAGE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PACKAGING_INSTR_USAGE_WIP_ORDER** — PACKAGING_INSTR_USAGE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_PACKAGING_INSTR_USAGE_WORK_CENTER** — PACKAGING_INSTR_USAGE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- PACKAGING_INSTR_USAGE -> REPORT (`ReportFUIDLevel1, ReportFUIDLevel2 -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PACKAGING_INSTR_USAGE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_PACKAGING_INSTR_USAGE_GROUP_CLASS** on `GroupClassID`
- **IF_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_HEADER** on `PackagingInstructionHeaderID`
- **IF_PACKAGING_INSTR_USAGE_PACKAGING_INSTR_USAGE_TYPE_DET** on `PackagingInstrUsageTypeDetID`
- **IF_PACKAGING_INSTR_USAGE_PARTNER** on `PartnerID`
- **IF_PACKAGING_INSTR_USAGE_PRODUCT** on `ProductID`
- **IF_PACKAGING_INSTR_USAGE_REPORT** on `ReportFUIDLevel1`
- **IF_PACKAGING_INSTR_USAGE_REPORT1** on `ReportFUIDLevel2`
- **IF_PACKAGING_INSTR_USAGE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_PACKAGING_INSTR_USAGE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_PACKAGING_INSTR_USAGE_WIP_ORDER** on `WipOrderNo, WipOrderType`
