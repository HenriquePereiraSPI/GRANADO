# MaintainOrderLine_v92

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to maintain the Order Line Data. This Business Component does not update any of the Wip Orders bellow the detail line. The maintained Order Line is outputted from the business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order number of the line. |
| Input | OrderType | Integer | Yes | The order type of the line. |
| Input | OrderLineNo | Integer | Yes | The order line nummber. |
| Input | OrderLineStatus | Integer | Yes | The status of the line. |
| Input | ProductID | Integer | Yes | The product of the line |
| Input | RequestedLotNo | Char | No | The lot number of the Lot number - this is can only be entered when the product is Lot or Both tracked in the productId field. |
| Input | GradeID | Integer | No | The Grade of the line. |
| Input | OrderUoMCode | Char | Yes | Order Uom code. |
| Input | QuantityOrdered | Decimal | Yes | The amount ordered in the OrderUomCode Unit of Measure. |
| Input | QuantityToleranceAllowed | Decimal | No | The tolerance of the line. |
| Input | FromFacility | Char | No | From Facility. This is required if the From Warehouse is specified. |
| Input | ToFacility | Char | No | To Facility. This is required if the To Warehouse is specified. |
| Input | FromWarehouse | Char | No | From Warehouse |
| Input | ToWarehouse | Char | No | To Warehouse. |
| Input | FromSapWarehouse | Char | No | From Sap Warehouse. |
| Input | ToSapWarehouse | Char | No | To Sap Warehouse. |
| Input | FromInventoryClass | Integer | No | from inventory class |
| Input | ToInventoryClass | Integer | No | to inventtory class. |
| Input | FromInventoryStatus | Integer | No | From Inventory Status. |
| Input | ToInventoryStatus | Integer | No | To inventory status. |
| Input | FromPartnerID | Integer | No | from Partner |
| Input | ToPartnerID | Integer | No | To Partner |
| Input | ParentOrderNo | Integer | No | The parent order number |
| Input | ParentOrderType | Char | No | The parent order type. This is required if the parent order number is specified |
| Input | ParentOrderLineNo | Integer | No | The parent order line. The Parent Order No and Parent Order Type is required. |
| Input | ProgressStatusLine | Integer | No | The progress status of the line |
| Input | ProjectID | Integer | No | The project ID of the line |
| Input | ExpectedDate | DateTime | No | The expected completion date of the line |
| Input | ChangeExpectedDateFlag | Boolean | No | Update the Expected date if true is entered |
| Input | DueDate | DateTime | No | The due date of the Line |
| Input | ChangeDueDateFlag | Boolean | No | Change the Due Date if True is entered |
| Input | ReleaseDate | DateTime | No | The Released date of the line |
| Input | ChangeReleaseDateFlag | Boolean | No | Update the Release Date is true is entered. |
| Input | ScheduleStartDate | DateTime | No | The schedule start date. |
| Input | ChangeScheduleStartDateFlag | Boolean | No | Change the Schedule start date. |
| Input | TextLong | Char | No | Any comments for the line |
| Input | LanguageID | Integer | No | The language of the notes |
| Input | TriggerReExplosionFlag | Boolean | No | Thrigger the reexplosion of any child orders that point to this order. |
| Input | ReExplodeImmediately | Boolean | No | Re-Explode either synchronously or synchronously. |
| Output | CreatedOrderLineNo | Integer | No | The maininted order line number. |

## Validations

- System validates that the Order Line exists. 
- There is normal validation for the inputted locations, warehouses, facilities and SAP warehouses (e.g. the From Warehouse must exist in the From Facility). 
- If RequestedLotNo is inputted, system checks that the product is lot-tracked. 
- If TextLong is inputted, system checks that LanguageID is inputted as well. If not, system displays an error message. 
- There is no validation regarding status, quantities etc. other then the fact that the ORDER_HEADER record or ORDER_DETAIL record exists. 
- All data must be consistent with DB FK constraints. 
- If a Quantity (QuantityOrdered or QuantityTollerance) is inputted, system verifies that the OrderUOMCode is inputted as well. If not, the quantity will not be changed.

## System Processing

- System updates the inputted fields of the ORDER_DETAIL record retrieved. 
- Only the ORDER_DETAIL record is updated. 
- If the ChangeExpectedDate Flag is set to TRUE, then system updates the corresponding record in the ORDER_DATE table. 
- If the ChangeDueDate Flag is set to TRUE, then system updates the corresponding record in the ORDER_DATE table. 
- If the ChangeReleaseDate Flag is set to TRUE, then system updates the corresponding record in the ORDER_DATE table. 
- If the ChangeScheduleStartDate Flag is set to TRUE, then system updates the corresponding record in the ORDER_DATE table. 
- If TextLong is inputted, system generates a record in the TEXT_TRANSLATION table. 
- If the TriggerReexplosion Flag is set to yes, then re-explosion is triggered for all the children Work Orders. This explosion is done either synchronously or asynchronously depending on the input ReExplodeImmediately. 
- System outputs the maintained Order Line.

## Pre-Conditions

An Order Line must exist.

## Published Events

Publishes explosion events for all child Wip Orders if the "TriggerReexplosion" input is set to TRUE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DETAIL | OrderNo | Inputted OrderNo (Required) |
| ORDER_DETAIL | OrderType | Inputted OrderType (Required) |
| ORDER_DETAIL | OrderLineNo | Inputted OrderLineNo (Required) |
| ORDER_DETAIL | OrderStatus | Inputted OrderLineStatus - the status of the order line. |
| ORDER_DETAIL | ProductID (+) | Inputted ProductID - product of the order line. |
| ORDER_DETAIL | RequestedLotNo | Inputted requested lot number. (This can only be specified for Lot Tracked products) |
| ORDER_DETAIL | GradeID | Inputted grade of the line. |
| ORDER_DETAIL | OrderedUoMCode | Inputted OrderUoMCode - The order quantity unit of measure. Required if a quantity is entered. |
| ORDER_DETAIL | QuantityOrdered (+) | The quantity of product ordered. |
| ORDER_DETAIL | QuantityToleranceAllowed (+) | Inputted QuantityTolleranceAllowed - The quantity allowed for over receiving e/c. |
| ORDER_DETAIL | FromFacility | The From Facility - for inter-org transfers. |
| ORDER_DETAIL | ToFacility | the destination facility. |
| ORDER_DETAIL | FromWarehouse | the source warehouse for inter-org/inter plant transfers |
| ORDER_DETAIL | Towarehouse | the destination warehouse. |
| ORDER_DETAIL | FromSAPWarehouse | the from sap warehouse. |
| ORDER_DETAIL | ToSAPwarehouse | the to sap warehouse. |
| ORDER_DETAIL | FromInventoryClass (+) | From inventory class |
| ORDER_DETAIL | ToInventoryClassID (+) | Inputted ToInventoryClass - the destination inventory class. |
| ORDER_DETAIL | FromInventoryStatus (+) | the from status. |
| ORDER_DETAIL | ToInventoryStatus (+) | the to status. |
| ORDER_DETAIL | FromPartnerID (+) | from partner |
| ORDER_DETAIL | ToParnerID (+) | to partner |
| ORDER_DETAIL | ParentOrderNo | Parent Order number. |
| ORDER_DETAIL | ParentOrderType (+) | Parent Order Type |
| ORDER_DETAIL | ParentOrderLineNo (+) | Parent Order Line number |
| ORDER_DETAIL | ProgressStatus (+) | Inputted ProgressStatusLine Progress status of the line |
| ORDER_DETAIL | ProjectID | Order line to be associated with is project. |
| ORDER_DETAIL | TextID | TEXT_TRANSLATION.ID |
| TEXT_TRANSLATION | ID | System generated unique identifier for Text |
| TEXT_TRANSLATION | Extended | Inputted TextLong -Text to be stored for the line |
| TEXT_TRANSLATION | LanguageID | Inputted LanguageID -Language of the text (required if TextLong is inputted) |
| ORDER_DATE | OrderLineNo | Inputted OrderLineNumber |
| ORDER_DATE | DateType | 11 (= Expected) for inputted ExpectedDate12 (= Due) for Inputted DueDate13 (= Release) for Inputted ReleaseDate14 (= Schedule Start) for Inputted ScheduleStartDate |
| ORDER_DATE | Actual | Inputted ExpectedDate if ChangeExpectedDateFlag=TRUE, orInputted DueDate, if ChangeDueDateFlag=TRUE, orInputted ReleaseDate if ChangeReleaseDateFlag=TRUE, orInputted ScheduleStartDate if ChangeScheduleStartDateFlag=TRUE |
|  |  | (Required) = Required (+) if -1 is entered as a value then the value is not updated |
