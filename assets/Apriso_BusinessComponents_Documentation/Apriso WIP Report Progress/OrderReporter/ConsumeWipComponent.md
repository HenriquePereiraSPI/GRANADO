# ConsumeWipComponent

**Category:** Apriso/WIP/Report Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderReporter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to enable reporting the WIP Component consumption through a process or a Standard Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipComponentID | Integer | Yes | The ID of the WIP Component for which to report the consumption. |
| Input | Quantity | Decimal | Yes | The WIP Component quantity to consume. |
| Output | WipSerialNoContentID | Integer | Conditional | Dynamic Output. The ID of a record created in the WIP_SERIAL_NO_CONTENT table. |
| Output | WipContentID | Integer | Conditional | Dynamic Output. The ID of a record created in the WIP_CONTENT table. |
| Output | WipContentDetailID | Integer | Conditional | Dynamic Output. The ID of a record created in the WIP_CONTENT_DETAIL table. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| LotNo | Char | Indicates the Lot Number of the WIP Component to be consumed. |
| OprSequenceNo | Char | This parameter is used only if the WIP Component does not define an Operation Sequence Number. Together with WipOrderNo and WipOrderType, it specifies the WIP Operation in which the WIP Component is consumed. |
| ReasonCode | Char | Indicates the Reason Code for which the WIP Component is consumed. |
| SerialNo | Char | Indicates the Serial Number of the WIP Component to be consumed. |
| UomCode | Char | Specifies the unit of measure of the quantity. If not provided, it is defaulted to the unit of measure of the WIP Component. |
| WipContentClass | Short | Indicates the WIP content class for which the WIP Component is consumed. If not provided, it is defaulted to 1-Good WIP Content Class. |
| WipOrderNo | Char | This parameter is used only if the WIP Component does not define an Operation Sequence Number. Together with WipOrderType and OprSequenceNo, it specifies the WIP Operation in which the WIP Component is consumed. |
| WipOrderType | Short | This parameter is used only if the WIP Component does not define an Operation Sequence Number. Together with WipOrderNo and OprSequenceNo, it specifies the WIP Operation in which the WIP Component is consumed. |

## Validations

- The system validates that WipComponentID is specified, exists in the WIP_COMPONENT table, and has a Component assigned from the COMPONENT table. 
- The system validates that UomCode is provided in case it is not defined in WIP_COMPONENT.UOMCode. 
- The system validates that the product ID is specified in the COMPONENT table. 
- The system validates that Quantity is specified (and is greater than zero). 
- The system validates that WipContentClass (if provided) is 1 - Good, 2 - Failed, or 3 - Scrapped. 
- If the WIP Component does not define the Operation Sequence Number, the system validates that WipOrderNo and WipOrderType (if provided) matches the WIP Order of the WIP Component.  
- If the WIP Component does not define the Operation Sequence Number, the system validates that OprSequnceNo is provided. 
- The system validates that at most only one WIP content record exists in the WIP_CONTENT table for the WIP Operation (taken directly from the WIP_COMPONENT table or defined by Dynamic Inputs if the Operation Sequence Number is not specified for the WIP Component), WIP content class, Reason Code, WIP Component ID, and WIP content status (defaulted to 1 - Components). 
- If SerialNo is specified, the system validates that the Serial Number of the WIP Component does not exist in the WIP_SERIAL_NO_CONTENT table.

## System Processing

- The system creates the WIP content record in the WIP_CONTENT table if it does not exist. 
- The system consumes the WIP Component quantity by performing the following actions: 
 
- Creating a new record in the WIP_CONTENT_DETAIL table if it does not exist for the product ID (taken from COMPONENT), the Lot Number (if provided), and the WIP content ID.  
- Updating the total processed quantity of the WIP content detail record with the specified quantity converted (if necessary) to the unit of measure for which it is defined. 
- Creating a new record in the WIP_SERIAL_NO_CONTENT table if the SerialNo Input is specified.

## Pre-Conditions

- A WIP Component must exist. 
- A Component must exist. 
- A WIP Operation (if specified in Dynamic Inputs) must exist. 
- A Serial Number (if the SerialNo Input is specified) must exist. 
- A Lot Number (if the LotNo Input is specified) must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTENT | WipComponentID | The inputted WipComponentID. |
|  | WipOrderNo | WIP_COMPONENT.WipOrderNo |
|  | WipOrderType | WIP_COMPONENT.WipOrderType |
|  | OprSequenceNo | WIP_COMPONENT.OprSequenceNo or the inputted OprSequenceNo in case the Operation Sequence Number is not defined for the WIP Component. |
|  | WipContentClass | The inputted WipContentClass or 1 - Good if not specified. |
|  | WipContentStatus | 1 - Components |
|  | ReasonCode | The inputted ReasonCode (if specified). |
| WIP_CONTENT_DETAIL | WipContentID | WIP_CONTENT.ID |
|  | ProductID | COMPONENT.ProductID based on WIP_COMPONENT.ComponentID. |
|  | LotNo | The inputted LotNo (if specified). |
|  | UomCode | WIP_COMPONENT.UomCode or the inputted UomCode in case the unit of measure is not defined for the WIP Component. |
|  | TotalProcessed | Based on the inputted quantity converted to WIP_CONTENT_DETAIL.UomCode if necessary. |
| WIP_SERIAL_NO_CONTENT | ProductID | WIP_CONTENT_DETAIL.ProductID |
|  | SerialNo | The inputted SerialNo. |
|  | WipContentID | WIP_CONTENT.ID |
|  | CompletedBucket | True |
