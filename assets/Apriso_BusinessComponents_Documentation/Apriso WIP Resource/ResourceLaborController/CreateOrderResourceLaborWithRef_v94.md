# CreateOrderResourceLaborWithRef_v94

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to create an open or closed event of Order type. It utilizes the following BC methods invoked in one call:
 
 
- StartOrder_v92 
- StopOrder 
 

The only difference between this method and StartStopOrder is the fact that if the status of the State event identified by the ResourceLaborID parameter is Open then the StopOrder method is not closed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order for the new resource labor. |
| Input | WipOrderType | Integer | Yes | The WIP Order Type for the new resource labor. |
| Input | OprSequenceNo | Char | Yes | The operation sequence number for the new resource labor. |
| Input | EmployeeID | Integer | No | The employee of is creating the resource labor. |
| Input | ProductID | Integer | No | The product being created. |
| Input | LotNo | Char | No | The lot number being created. |
| Input | OccupationCode | Char | No | The occupation code to be used for the resource labor. |
| Input | ReasonCode | Char | No | The reason code to be used for the resource labor. |
| Input | ResourceLaborID | Integer | Yes | The resource labor ID to use as the reference. |
