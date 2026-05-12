# ProcessKanbanCard

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Processes a Kanban Card by updating either some or all of parameters such as progress status, Kanban Card status, order or Operation information, the current location, or the Container or serial number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The Kanban Card number. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WipOrderno | Char | The WIP Order number. |
| WipOrderType | Short | The WIP Order type. |
| OprSequenceNo | Char | The Operation sequence number. |
| Container | Char | The container number. |
| SerialNo | Char | The serial number. |
| ProgressStatus | Short | The progress status. |
| KanbanCardStatus | Short | The status of the Kanban Card. |
| CurrentLocation | Char | The current location of the Kanban Card. |
| PrintedOn | DateTime | The "card printed on" date/time stamp. |
| StartDate | DateTime | The start date. |
| CompletionDate | DateTime | The completion date. |
| LotNo | Char | The lot number. |

## Validations

-  

Validates the Kanban Card number against the KANBAN_CARD table, and if it is not found, this error occurs: " Kanban card not found:{0}." 
  
-  

If the WipOrderNo and WipOrderType Input parameters are passed, then the WIP Order and WIP Order type Inputs are validated against the WIP_ORDER table, and if they are not found, this error occurs: " Wip Order Not found WipOrderNo: {0}, WipOrderType: 1}." 
  
-  

If the WipOrderNo, WipOrderType, and OprSequenceNo Input parameters are passed, then the Operation Sequence Input is validated against the WIP_OPERATION table, and if it is not found, this error occurs: " Wip Operation Not found WipOrderNo: {0}, WipOrderType: {1}, OprSequenceNo: {2}." 
  
-  

If the Container Input parameter is passed, then the Container Input is validated against the CONTAINER table, and if it is not found, this error occurs: "Container record Not found Container: {0}."
  
-  

If the SerialNo Input parameter is passed, then the SerialNo and the Kanban ProductID inputs are validated against the SERIAL_NO table, and if they are not found, then this error occurs: " Serial record Not found SerialNo: {0}, ProductID: {1}." 
  
-  

If the ProgressStatus Input parameter is passed, then the ProgressStatus input is validated against the PROGRESS_STATUS table, and if it is not found, this error occurs: " Progress Status record Not found ProgressStatus: {0}." 
  
-  

If the LotNo Input parameter is passed, then the LotNo input and the Kanban Card's ProductID are validated against the LOT_NO table, and if they are not found, then this error occurs: "LotNo record not found LotNo: {0}, ProductID: {1}."
  
-  

 The KanbanCardStatus Input parameter must exist in the KANBAN_CARD_STATUS table. If it does not exist, a database constraint error occurs.

## Pre-Conditions

Updates the KANBAN_CARD table as specified in the Impacted Tables section.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | WipOrderNo | Overrides with the WipOrderNo input if specified. |
|  | WipOrderType | Overrides with the WipOrderType input if specified. |
|  | OprSequenceNo | Overrides with the OprSequenceNo input if specified and WipOrderNo, OprSequenceNo inputs and WipOrderType > 0. |
|  | Container | Overrides with the Container input if specified. |
|  | SerialNo | Overrides with the SerialNo input if specified. |
|  | ProgressStatus | Overrides with the ProgressStatus input if specified. |
|  | KanbanCardStatus | Overrides with the KanbanCardStatus input if specified. |
|  | CurrentLocation | Overrides with the CurrentLocation input if specified. |
|  | CardPrintedOn | Overrides with the CardPrintDate input if specified. |
|  | StartDate | Overrides with the StartDate input if specified. |
|  | CompletionDate | Overrides with the CompletionDate input if specified. |
|  | LotNo | Overrides with the LotNo input if specified. |
