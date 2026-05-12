# IsChildOnBom

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.BomController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to determine if a child product is on BOM (defined in WIP_COMPONENT and COMPONENT tables) and to return the level where that child was found. Wip component can be defined per wip order (only WipOrderNo and WipOrderType specified), wip operation (OprSequenceNo specified) or step sequence number (StepSequenceNo specified).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentProductID | Integer | Yes | The parent product ID for the BOM. |
| Input | ChildProductID | Integer | Yes | The child product ID that is being checked to determine if it is on the BOM. |
| Input | WipOrderNo | Char | No | The Wip Order No to transverse to check BOM. |
| Input | WipOrderType | Integer | No | The Wip Order Type to transverse to check BOM. |
| Input | OprSequenceNo | Char | No | The Wip Order operation sequence number to transverse to check BOM. |
| Input | StepSequenceNo | Integer | No | The Step Sequence number to transverse to check BOM. |
| Input | MaxLevelNumber | Integer | No | The maximum of levels to traverse down the BOM, Optional (Gets defaulted to 0 which means no traversing. |
| Output | ChildLevel | Integer | No | The level the child is on the BOM. |

## Validations

The purpose of this Business Component is to determine if a child product is on BOM (defined in WIP_COMPONENT and COMPONENT tables) and to return the level where that child was found. Wip component can be defined per wip order (only WipOrderNo and WipOrderType specified), wip operation (OprSequenceNo specified) or step sequence number (StepSequenceNo specified).

## System Processing

- System iterates through BOM levels defined for WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, ParentProductID until it finds component for ChildProductID or the level reaches the MaximulLevelNumber. 
- If component is fund, the System populates ChildLevel (if component found on first level it would be 1, second level 2 etc.) 
- Else system populates ChildLevel with 0.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Component and Wip_Component | All |  |
