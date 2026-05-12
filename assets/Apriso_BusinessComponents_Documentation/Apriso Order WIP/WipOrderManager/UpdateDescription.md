# UpdateDescription

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Description, WIP WIPOrderNo

## Description

This Business Component will update the description fields for a given WIP Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WipOrderNo for the WIP Order to be updated |
| Input | WipOrderType | Integer | Yes | The WipOrderType for the WIP Order to be updated |
| Input | ShortSpecified | Boolean | Yes | Determines whether or not the short description is updated |
| Input | ShortDescription | Char | No | The new short description |
| Input | MediumSpecified | Boolean | Yes | Determines whether or not the medium description is updated |
| Input | MediumDescription | Char | No | The new medium description |
| Input | ExtendedSpecified | Boolean | Yes | Determines whether or not the extended description is updated |
| Input | ExtendedDescription | Char | No | The new extended description |
| Input | TextSpecified | Boolean | Yes | Determines whether or not the text description is updated |
| Input | TextDescription | Char | No | The new text description |

## Validations

Validates if a WIP Order exists for the given WipOrderNo and WipOrderType.

## System Processing

- If the ShortSpecified input is true, then the ShortDescription is updated using the inputed value. 
- If the MediumSpecified input is true, then the MediumDescription is updated using the inputed value. 
- If the ExtendedSpecified input is true, then the ExtendedDescription is updated using the inputed value. 
- If the TextSpecified input is true, then the TextDescription is updated using the inputed value.

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | Short | ShortDescription |
|  | Medium | MediumDescription |
|  | Extended | ExtendedDescription |
|  | Text | TextDescription |
