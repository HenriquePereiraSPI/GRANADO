# CreateOrderPartner

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to add a partner to an order. Partners can be added either at the Order level, or at the Order Line level depending on the way the component is invoked (OrderLineNo populated or not). The Business Component creates a record in the ORDER_PARTNER table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | Order Number. |
| Input | OrderType | Integer | Yes | Order Type. |
| Input | OrderLineNo | Integer | No |  |
| Input | PartnerID | Integer | Yes |  |
| Input | PartnerRole | Char | Yes |  |
| Input | PartnerOrderNo | Char | No |  |
| Input | AddressID | Integer | No |  |
| Input | TextLong | Char | No |  |
| Input | LanguageID | Integer | No |  |

## Validations

- OrderNo, OrderType, PartnerID and PartnerRole are mandatory inputs 
- System validates that a Partner is not entered twice for the same Order, Order Line and Role. 
- System validates that the Order Header exists. 
- If the order line number (OrderLineNo) is inputted, system validates that the Order Detail record exists. 
- System validates that the partner exists for the partner role. 
- If TextLong is inputted, system checks that LanguageID is inputted as well. If not, system displays an error message. 
- All data must be consistent with DB FK constraints.

## System Processing

- System creates a record in the ORDER_PARTNER table. 
 
- If OrderLineNo is inputted, the Partner is linked to the Order Line. 
- Else, the Partner is linked to the Order. 
 
- If TextLong is inputted, system generates a record in the TEXT_TRANSLATION table.

## Pre-Conditions

- A partner must exist for the given partner role. 
- An order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_PARTNER | OrderNo | Inputted OrderNo |
| ORDER_PARTNER | OrderType | Inputted OrderType |
| ORDER_PARTNER | OrderLineNo | Inputted OrderLineNo |
| ORDER_PARTNER | PartnerID | Inputted PartnerID |
| ORDER_PARTNER | ParrnerRole | Inputted ParnerRole |
| ORDER_PARTNER | PartnerOrderNo | Inputted PartnerOrderNo |
| ORDER_PARTNER | AddressID | Inputted AddressID |
| ORDER_PARTNER | TextID | TEXT_TRANSLATION.ID |
| TEXT_TRANSLATION | ID | System generated unique identifier for Text |
| TEXT_TRANSLATION | Extended | Inputted TextLong -Text to be stored for the Partner |
| TEXT_TRANSLATION | LanguageID | Inputted LanguageID -Language of the text (required if TextLong is inputted). |
