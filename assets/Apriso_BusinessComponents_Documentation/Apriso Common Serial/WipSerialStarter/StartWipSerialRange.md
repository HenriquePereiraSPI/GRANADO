# StartWipSerialRange

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to start a range of serials in production. As this business component deals with a range of serials, this means each serial within the range must be only numeric.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StartSerialNo | Char | No | Begining of the range of the serials to be started. Must exist in the system. |
| Input | EndSerialNo | Char | No | End of the range of the serial to be started. Is optional. If specified then must exist in the system. |
| Input | ProductID | Integer | No | The ID of the product to be created by the WIP Order |
| Input | WipOrderNo | Char | No | Wip order number the range of serials will be started on. Must exist in the system. |
| Input | WipOrderType | Integer | No | Wip order type of the wip order the range of serials will be started on. |
| Input | OprSequenceNo | Char | No | Operation sequence number the range of serials will be started on. Must exist in the system. |

## Validations

- System validates the inputted wip order is either in a "New" or "Started" status and not on hold. 
- System validates the inputted operation is either in a "New" or "Started" status and not on hold. 
- System validates that the inputted start and end serials are numeric or have a common prefix and numeric suffix. The end serial input is not required, and if not entered, the business component assumes the end serial is the same as the start serial. 
- System verifies that the end serial is larger then the start serial. 
- System validates that all serial in the range are valid, by checking the following: 
 
- If serial is lot tracked, then system validates the lot if not on hold 
- The serial cannot be on hold 
- The serial has to exist in production. I.e. Record exist in WIP_SERIAL_NO 
- The serial is validated to exist in production for the specified operation.

## System Processing

- System validates the inputs 
- System then updates the following entities to started if they were in a new status: 
 
- WIP_ORDER 
- WIP_OPERATION 
- WIP_SERIAL_NO - For each serial in the range

## History Recording in Production

The System records the transaction history each time the serial is started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WorkOrderStatus | Updates it to "Started" if it was in a "new" status |
| WIP_OPERATION | OperationStatus | Updates it to "Started" if it was in a "new" status |
| WIP_SERIAL_NO | WipSerialStatus | Updates it to "Started" if it was in a "new" status, for each serial in the range |
