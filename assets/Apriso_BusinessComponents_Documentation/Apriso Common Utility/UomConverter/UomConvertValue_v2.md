# UomConvertValue_v2

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.UomConverter`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Retired
**Keywords:** UOM Convert

## Description

The purpose of this Business Component is to convert the input quantity from source to target unit of measure and put the result in output quantity. The conversion can be defined per product (if product is specified and there is a conversion defined for that product in PRODUCT_UOM_CONVERSION table) or per non-product (UOM conversion must be defined in UOM_CONVERSION table). In both cases it is possible to define a Standard Operation associated with the UOM conversion or product UOM conversion to be used to do the conversion (field OperationID in these tables). If the function is not defined then Conversion factor is used to calculate the output (it is stored both in UOM_CONVERSION and PRODUCT_UOM_C0NVERSION tables). If the product is specified and doesn't accept fraction numbers, then the output is rounded, after its calculation, to the smallest whole number greater then or equal to it.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | Product ID of the product the UOM product conversion is defined for. Can be 0. In such case UOM conversion is used instead. |
| Input | InputQuantity | Decimal | Yes | Quantity to be converted between source and destination unit of measure. |
| Input | SourceUomCode | Char | Yes | Source unit of measure of the quantity being converted. Must exist in the system. |
| Input | TargetUomCode | Char | Yes | Target unit of measure to convert the quantity to. Must exist in the system. |
| Input | OperationID | Integer | No | The ID of the standard operation to be used to do the conversion. |
| Input | ConversionFactor | Decimal | No | The factor used to do the conversion. |
| Output | OutputQuantity | Decimal | No | Converted quantity. |

## Validations

- System validates that the product exist if ProductID is specified (checks against PRODUCT table) 
- System validates that SourceUom is specified and exists (checks against UOM table) 
- System validates that TargetUom is specified and exists (checks against UOM table)

## System Processing

System converts the quantity based on the ConversionFactor or by using a standard operation (when OperationID populated):
 
 
- If ProductID is specified, these values are retrieved from PRODUCT_UOM_CONVERSION or from UOM_CONVERSION (if there is no UOM conversion for the product). 
- If ProductID is not specified these values are retrieved from UOM_CONVERSION table.
