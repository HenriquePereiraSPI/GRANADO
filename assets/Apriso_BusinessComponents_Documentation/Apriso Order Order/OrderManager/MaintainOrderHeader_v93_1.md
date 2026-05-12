# MaintainOrderHeader_v93_1

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to maintain already existing Order Headers in the system. The maintained Order Header is outputted from the business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order number to maintain. |
| Input | OrderType | Integer | Yes | The order type. |
| Input | OrderStatus | Integer | Yes | The order status. |
| Input | Company | Char | No | The company. |
| Input | Priority | Integer | No | Priority of the order. |
| Input | OrderDate | DateTime | No | The Order date of the Order. |
| Input | WipOrderNo | Char | No | The Wip Order Number. |
| Input | WipOrderType | Integer | No | WipOrderType field is required if the Wip Order is specified. |
| Input | OprSequenceNo | Char | No | Both the WipOrderNo and WipOrderTYpe required is the operation is specified. |
| Input | TextLong | Char | No | Any notes for the order header. |
| Input | LanguageID | Integer | No | The language ID of the header. |
| Input | Division | Char | No | The division of the header. |
| Input | ProjectID | Integer | No | The project ID of the order. |
| Input | GLAccountID | Integer | No | The GL a/c of the order. |
| Input | CostCenter | Char | No | The cost center. |
| Input | UpdateOrderDate | Boolean | No | update with inputted Order Date |
| Input | TriggerReExplosionFlag | Boolean | No | Re-explode the orders. |
| Input | ReExplodeImmediately | Boolean | No | Re-Explode either synchronously or asynchronously. |
| Output | CreatedOrderNo | Char | No | The maintained order number. |

## Validations

- System validates the required inputted values OrderNo and OrderType. 
 
- System retrieves Order_Header with OrderNo and OrderType inputs. 
 
- System validates the inputted values LanguageID, TextLong. If TextLong contains a value, LanguageID must exist and valid. 
- System validates the inputted values OrderStatus, Company, WipOrderNo, WipOrderType, ProgressStatus,Division, ProjectID, GLAccountID, CostCenter. If they are contains a value, it must be valid values.

## System Processing

- System retrieves ORDER_HEADER record with OrderNo, OrderType and LanguageID if LanguageID exist. 
- System updates Order_Header record with inputted values. 
- If the UpdateOrderDate Flag is set to TRUE, then for the OrderDate input, system updates corresponding records in the ORDER_DATE table. 
- If TextLong is inputted, system generates a record in the TEXT_TRANSLATION table. 
- If the TriggerReexplosion Flag is set to TRUE, then re-explosion is triggered for all child Work Orders. 
 
- If the ReExplodeImmediately Flag is set to TRUE, the re-explosion is triggered immediately otherwise it is triggered as background job.

## Pre-Conditions

An order must exist.

## Published Events

Publishes explosion events for all child Wip Orders if the "TriggerReexplosion" input is set to TRUE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType of the order |
|  | OrderStatus | Inputted OrderStatus |
|  | Company | Company of the order. |
|  | Priority | Inputted Priority. Allows for orders to be sorted
      within grids and Maintenance and Monitoring screens. |
|  | OrderDate | Date the order is due. |
|  | WipOrderNo | Association with a WIP_ORDER if
      required. |
|  | WipOrderType | Association with a WIP_ORDER if
      required. |
|  | OprSequenceNo | Association with a WIP_ORDER if
      required. |
|  | TextLong | Any text associated with the order. |
|  | LanguageID | Language of the text being entered. |
|  | Division | Associate order with this division. |
|  | ProjectID | Associate order with this project. |
|  | GLAccountID | Associate order with this General Ledger
      a/c. |
|  | CostCenter | Associate the order with this Cost
      Center. |
| TEXT_TRANSLATION | Extended | Inputted TextLong. |
|  | LanguageID | Inputted LanguageID. |
| ORDER_DATE if UpdateOrderDateFlag=TRUE | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | DateType | 12 |
|  | Actual | Inputted OrderDate |
