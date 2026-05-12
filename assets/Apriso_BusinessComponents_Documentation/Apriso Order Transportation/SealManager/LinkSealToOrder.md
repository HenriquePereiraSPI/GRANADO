# LinkSealToOrder

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.SealManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

The purpose of this business component method is to link a seal to an order.
 

A seal is applied to a container/truck when it has been loaded complete. A seal is used to ensure that the container has not been opened or tampered with while in route from the source location. It is usually a plastic tie with the seal number visible. Once broken it cannot be 're-sealed'. This seal is usually applied to travel documents. Only upon arrival at the destination plant should the seal can be purposely removed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | Order header number. |
| Input | OrderType | Integer | No | Order header type. |
| Input | SealNumber | Char | No | Seal number. |
| Input | SealStatus | Integer | No | Seal status. |

## Validations

- The order exists 
- The status exists 
- The seal number is valid. 
- The employee exists 
- If Status passed is Right Condition then check no such seal already exists

## System Processing

- System creates a new order seal record. 
- If seal status is in right condition, Seal Issuer is set to Current Employee. 
- Seal number is set to parameter Seal number. 
- Seal status is set to parameter status.

## History Recording in Production

FlexNet.BusinessFacade.Logistic.SealManager.LinkSealToOrder.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SEAL | OrderNo | OrderNo* |
| ORDER_SEAL | OrderType | OrderType* |
| ORDER_SEAL | SealNumber | SealNumber* |
| ORDER_SEAL | SealStatus | SealStatus* |
| ORDER_SEAL | SeaIssuerEmployeeID | Business Rules Context Employee |
