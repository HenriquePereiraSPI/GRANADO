# Count_v91

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCycleCounter`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to perform the counting of inventory underneath a count document. Using this component the user can count bulk, lot, serial and container inventory.
 

The business component serves several purposes:
 
 
- It allows the user to enter the results of a count. The results are linked with the Count Document. (See Entering Count Results Sub Component). 
- It allows the user to notify system that a count is finished (by setting the Endcount flag to TRUE). 
- It validates the count. Based on the tolerance strategy configured by the process designer, entered quantities may or may not be validated (See Validation Sub Component and Tolerances Management Sub Component). The validation will only occur if it is triggered (by setting the Endcount flag to TRUE). 
- If needed, system triggers a recount or an adjustment. (See Adjustment Sub Component) 
 

 

Supported Features:
 
 
- The user can count full containers, full boxes, partial containers and partial boxes. 
- The user has the ability to notify system when a partial counts starts and end. 
- The user can postpone the count validation, if for example: 
 
- He is counting a partial container or a sub-container and needs several iterations to do so (like multiple products in the container), or 
- He is counting bulk in several iterations. 
 
- More then one person can perform counting of products and containers within a location at one time. 
- If a mistake in the count occurred, then that inventory can be uncounted. (Set the Uncount flag to "TRUE" to do this.).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentNumber | Char | Yes | Document number to count inventory against. |
| Input | CountNumber | Integer | Yes | Count number. |
| Input | EmployeeID | Integer | Yes | Id of the employee perfoming the inventory counting. |
| Input | Facility | Char | Yes | Facility to count the inventory in. |
| Input | WarehouseLocationID | Integer | No | Id of the warehouse location to count the inventory in. This field is required unless SerialNo or ContainerNo is specified. |
| Input | ContainerNo | Char | No | Container number to count the inventory within. |
| Input | InContainerNo | Char | No | Parent container of ContainerNo . Required if the Container being counted has a parent container. |
| Input | ProductID | Integer | No | Id of the inventory to be counted. Required unless entire container is to be coutned. |
| Input | SerialNo | Char | No | Serial number to be counted. |
| Input | InventoryStatus | Char | No | Status of the inventory to be counted. Required if for the specified arguments there are multiple inventory records. |
| Input | LotNo | Char | No | Lot number of the inventory to be counted. Required if for the specified arguments there are multiple inventory records. |
| Input | GradeID | Integer | No | Grade id of the inventory to be counted. Required if for the specified arguments there are multiple inventory records. |
| Input | PartnerID | Integer | No | Partner id of the inventory to be counted. Required if for the specified arguments there are multiple inventory records. |
| Input | UomCode | Char | No | Uom code of the quantity of the inventory to be counted. Defaulted to Product.DefaultUomCode. |
| Input | Quantity | Decimal | No | Quantity of the inventory to be counted. Doesn't matter when serial or contaienr is counted. |
| Input | TolerancePercentage | Decimal | No | Tolerance as a percentage of current inventory quantity. |
| Input | ToleranceQuantity | Decimal | No | Tolerance as a quantity in UomCode unit of measure. |
| Input | ToleranceCurrency | Decimal | No | Tolerance as a monetary amount in the same currency as the Product's UnitCost. |
| Input | ToleranceStrategyRecount | Integer | No | Tolerance strategy to use when end counting. Comment(String) Comment. |
| Input | Uncount | Boolean | No | Flag indicting if uncount is to be done. |
| Input | EndCount | Boolean | No | Flag indicating if end count is to be done. |
| Input | NotFound | Boolean | No | The flag has been retired. |
| Output | CountStatus | Integer | No | Status of counting. |

## Validations

When performing a count, the user enters the Count Document number and the location. The user has to enter enough information for the inventory records to be found.
 

The component validates that the correct information is inputted into the component: if the count document specifies a certain Product, Lot Number, Inventory Status, Facility, Warehouse, Location, Grade etc., then only this can be inputted. This is NOT defaulted based on the Count Document.
 

In all cases except when just and only a container is inputted:
 
 
- System generates an error if the GradeID and the PartnerID are not inputted and if the products exist in the counted location with multiple Grades or Partners. 
- System checks that the GradeID is populated if the product is managed by Grade. 
- System checks that the LotNo is populated if the product is lot tracked. 
- System validates that a serial or container is not counted twice in a counting document. 
- If a SerialNo is entered, then a quantity is not required, as a serial is deemed as one piece.

## System Processing

**  Entering Count Results Sub Component  ** 
 
 
- System creates a record in the ORDER_DETAIL table. 
-  ** Entering counted quantities **:  
 
- Inputted counted Quantity is persisted in the counting tables according to the information entered as input. The inputted counted Quantity cannot be negative. If the counted inventory is not in any container and is not serial tracked then the quantity is persisted in Inventory Count table. If the inventory is counted in a container and is not serial tracked then the quantity is persisted in Inventory Count Container table. If the counted inventory is serial tracked then it is persisted in Inventory Count Serial No table. Basically the idea is to store bulk quantity in Inventory Count table, container quantity of not serial tracked inventory in Inventory Count Container table and serial tracked inventory in Inventory Count Serial No table. 
- If the inputted UomCode is not the product's default UOM (found in INVENTORY table), conversion is performed on the quantity (The UomConversion Business Component is invoked). 
 If the user enters no UOM, system will consider that the UOM used is the default product UOM. 
- The NotFound flag is retired and has no use anymore.  
 
-  ** Finishing a count **  
 
- When finished counting a product, or a lot within a location, set EndCount = TRUE to end the count. 
- The user has the ability to close the count of a location (and also all the in progress counts of this location) by invoking the Count component with: no product, NotFound = false, EndCount = true 
 
- All the adjustments are then made. 
 
- Anything not counted in the location is moved to the Cycle Count location stored on the COUNT_DOCUMENT table (adjustment location). A Container that is not counted in a location will be moved to the Cycle Count location if and only if all the inventory in the container is in the scope of the Count Document. Otherwise, the Container will stay in the location and inventory in the Container that is in the scope of the Count Document will be moved to the Cycle Count location. 
- If there is not enough stock found in the location then the following occurs. 
 
- If stock that is required is found in the Cycle Count location it is moved into the completed count location. 
- If no stock can be found then the adjustment is used to increment the quantity on hand in the location.  
 
 
 
- To finish counting a container, input the ContainerNo and set EndCount = TRUE. 
- When the EndCount flag is activated (i.e. set to True), the BC triggers the counting validation (see Validation Subcomponent hereafter). 
 
- If the current count status is set as 'Counted' and the End Flag is true then Count Document status is not changed. 
- If the EndCount Flag is activated, the CountStatus will be updated by the validation sub component (see below). 
- If the EndCount Flag is not activated, the component will set the CountStatus to InProgress.  
 
- When the count is finished, the component looks at the Recount strategy entered into the component as well as the tolerance percentage (See Tolerance Management Sub-component below) to set-up the validation process.  
 
-  ** Correcting a counted quantity **  
- The Uncount flag is used to deduct quantities or to deduct a container of a serial to correct user errors while counting. The correction can only be performed on counted stock that is either "in progress" or "out of tolerance". If the inputs are valid, the count amount is decremented by the quantity entered into the component. 
- If a container was specified with the Uncount then the Quantity Counted is decremented only from Inventory Count Container record as Inventory Count table stores only bulk quantity. 
-  ** Specific case of Containers **  
- Because it takes time to count the content of a container, a specific setup has been designed for counting containers. Moreover, the user may be required to count several sub containers, or various product/ quantities. 
- The system is able to iterate: 
 
- from Start counting of the master container, 
 
- then as an example start counting of a sub container, 
 
- then count each Serial of the container,  
 
- then complete the count of the sub container,&ldots;.  
 
- then finally complete the count of the master container.  
 
- Summary of the possible inputs for container counting and associated behavior of the system:  
 

           

 **InContainerNo** 
   

 **ContainerNo** 
   

 **EndCount** 
 

 
   

 **System Behavior** 
     

Inputted
   

Not inputted
   

True
   

Counts the content of the container and its sub containers (including serials) if not counted yet and then it validates the counting
     

Inputted
   

 Inputted 
   

False
   

Counts the content of the child container (including serials) if not counted yet.
 

 
     

Inputted
   

Not inputted
   

False
   

Counts the content of the container and its sub containers (including serials) if not counted yet.
     

Inputted
   

 Inputted 
   

True
   

This scenario is invalid.
     
 
 
- Using this approach the user can count full containers, full boxes, partial containers and partial boxes. 
- The user has the ability to notify system when a partial counts starts and end. 
- No lock is done in the DB to persist the fact that a container counting is in progress  
 

 

 **  Tolerance Management Sub Component  ** 
 

The Tolerance Management sub component is used to create count validation component based on the counting strategy specified in ToleranceStrategyRecount.
 

The customers have the ability to define their own counting strategies and validation components by implementing FlexNet.BusinessRules.InventoryCount.IToleranceCountStrategyFactory interface and using extension point in FlexNet.BusinessFacade.InventoryCycleCounter.Count_v91.
 

Standard implementation supports the following counting strategies:
 
 
- 0 = Fail if count is not within tolerance (default validation component will be used). 
- 1 = Sets the count status to Recount if out of tolerance and accepts the count if the recount quantity is the same (recount validation component will be used). 
- 2 = Sets the count status to Recount if out of tolerance and accepts the count if the recount quantity is the same, but by a different user (recount for different user validation component will be used) 
- 3 = Always accept: automatic adjustments will be triggered for every discrepancy. No tolerance check is required; the adjustment will be posted in all cases (accept all validation component will be used)  
 

 

 System Processing 
 

This subcomponent is triggered when EndCount flag is set to true. It creates appropriate validation components based on the counting strategy. The system validates the counting using this component and based on the result of this validation it triggers adjustment sub component.
 

 

 ** Validation Sub Component ** 
 

The Validation subcomponent is used to compare QuantityFinal(quantity in inventory when the count was ended) and QuantityCounted(quantity counted by the user). The result of this comparison (count status) is used by system to determine if adjustment sub component is to be invoked.
 

To determine the count status the validation sub component uses Tolerance Amount. The Tolerance Amount is a tolerable discrepancy (difference between the counted quantity and the actual quantity found in the inventory tables) in the count to accept the count.
 

If the discrepancy is within the defined tolerance, an adjustment will be passed automatically. The discrepancy can be measured in percentage, quantity or currency.
 

For example – if there were 100 of product A, and there is a 20% tolerance – the count amount could be between 80 and 120 and be accepted.
 

This percentage is an input (TolerancePercentage) that the user will have to determine based on his company rules using for example a determination function. Apart from TolerancePercentage the user can specify ToleranceQuantiy (which defines the maximum discrepancy in units) and ToleranceCurrency (which defines the maximum discrepancy in unit costs – defined per product in PRODUCT_COST table). It is possible to specify all of these parameters so the Tolerance Amount would be the minimum of the values calculated as following:
 

If TolerancePercentage > 0
 
 
- ToleranceAmount = TolerancePercentage % InventoryQuantity  
 

If ToleranceQuantity > 0
 
 
- ToleranceAmount = ToleranceQuantity  
 

If ToleranceCurrency > 0
 
 
- ToleranceAmount = ToleranceCurrency / Products unit cost  
 

If the inputs TolerancePercentage, ToleranceQuantity and ToleranceCurrency all equal zero then any differences between what was counted and what is in inventory forces the count to be Out of Tolerance. If no tolerance is required, then a Count Strategy of three (accept all) can be used to make the inventory adjustments.
 

 

  System Processing 
 

This subcomponent is triggered by system when EndFlag is set to true. The component is created by Tolerance management sub component based on the counting strategy (ToleranceStrategyRecount). If there are discrepancies between the counted quantity and the quantity stored in the system, the component checks if they are with tolerance or not.
 
 
- If accept all validation component is used (ToleranceStrategyRecount = 3) the component sets the counting status to Passed when there are no discrepancies; otherwise to Adjust. 
- If default validation component is used (ToleranceStrategyRecount = 0) the component sets the status to Passed (no discrepancies), Adjust (within tolerance) or Out of Tolerance. 
- If recount validation component is used (ToleranceStrategyRecount = 1) the component sets the counting status to Passed (no discrepancies), Adjust (in tolerance or the second count equals the first)), Recount (if this is the first count and out of tolerance), Out of Tolerance (second count is out of tolerance and not equals the first count). 
- If recount for different employee validation component is used (ToleranceStrategyRecount = 2) the component sets the counting status to Passed (no discrepancies), Adjust (in tolerance or the second count equals the first count and the counting was done by different employees), Recount (if this is the first count and out of tolerance), Out of Tolerance (second count is out of tolerance and not equals the first count or in case it does if done by the same employee).  
 

These are the additional rules used by the validation component:
 
 
-  **Bulk (non serial non container)**  
 

If the product does not exist in DB, then CountStatus is changed to Out of Tolerance. 
 WARNING = For bulk there is no way to track properly the in and out movements so designer is advised to lock the location or to make sure using organizational rules that people will not change the inventory during the duration of the count.
 
 
-  **Serial**  
 

In this case the system checks that the serial is in the specified location, container and child container. If the user entered additional information for that product (GradeID, InventoryStatus or PartnerID) the system validates this information against the INVENTORY table.
 
 
 
- If the product serial does not exist, then counting status is set to Out of Tolerance. 
- If serial is not in the right status, container, location, Grade, lot, or Partner then counting status is set to Adjust (when accept all component is used), Recount (first counting and accept all component is NOT used); otherwise to Out of Tolerance.  
 
-  **Containers - Counting of a full container with no additional information**  
 

User can invoke this scenario when partial counting of a container is finished (EndCount flag set to True) or when accepting the content of the container without counting it (EndCount flag set to False - the System assumes that whatever was found in that container and its sub containers was counted). 
 In the first case the system checks that the container contains the inputted quantities or counted quantities:
 
 
 
- Yes (the counted quantity matches the current inventory), the CountStatus is set to Passed 
- No, the quantity counted does not match the current inventory: 
 
- If container found in different location and allowed to be moved (evaluation process using validation component determined by the count strategy provided) then movement occurs. 
- If serial is missing, or not suppose to be here => Apply Serial rule. 
- If wrong quantity of Inventory Status, Grade, or Partner => Apply bulk rule. 
- In the second case the system persists information about all stock found in the container and its sub containers. The stock found is considered as counted.  
 
 
-  **Containers - Counting of a container with other information (product, quantity, sub container…)**  
 

In this scenario EndCount is defaulted to false so there is no counting validations. 
 Other Validation Sub-Component features:
 
 
 
- When an Adjustment is processed, the movement number is persisted. 
- When the CountStatus is move to “Out of Tolerance”, the error code is persisted. The error text can be translated when displayed later in the process or cockpit.  
 

If the status of the validation is Recount the system persists the current data into the 'Last' fields as fallowing:
 
 
- Increases RecountNumber 
- Populates LastCountStatus with the previous CountStatus (status before counting) 
- Populates LastQuantityCounted with the QuantityCounted 
- Populates QuantityCounted with quantity of 0 
- Populates LastCountDate with the CountDate 
- Populates LastEmployeeID with the EmployeeID  
 
 

 

 ** Adjustment Sub Component ** 
 

If the system identifies that an adjustment is required it will as much as possible try to fix the inventory instead of requesting a manual adjustment. The Move and Adjust business components are invoked to automatically fix the inventory according to the following rules:
 
 
- If the amount counted is less then what is in the system, the excess quantity is moved to the cycle count location. 
- If the amount counted is more then what is in the system, the stock is moved from the cycle count location. 
- If there is not enough stock in the count location then the remaining amount is adjusted.  
 

 

 System Processing 
 
 
-  **Serial:**  
 
- If counted serial is not in the inventory for the counted location and it is in adjustment location: a movement is generated from the adjustment location to the counted location. 
- If counted serial is not in inventory and serial is not in inventoried anywhere else: an adjustment is generated in the counted location 
- If counted serial is not in inventory and serial is somewhere else in inventory: a movement is generated between the current location of the serial and the counted location 
- The serial cannot be moved to the count location if it is allocated.  
 
-  **Bulk:**  
 
- If counted quantity is more than inventory and the inventory exists in adjustment location: a move is generated from adjustment location to the count location. 
- If counted quantity is more than inventory and the inventory does not exist in adjustment location: an adjustment is generated into the count location. 
- If counted is less than inventory: a move is generated from count location to adjustment location. 
 
- This is not done if there is not enough inventory on hand (due to allocations).  
 
 
-  **Container adjustment:**  
 
- For container adjustment of type “Adjust Bulk in a container”, refer to Bulk Adjustment 
- For container adjustment of type “Adjust Serial in a container”, refer to Serial Adjustment 
- If the container is missing in counted location (but within tolerance): 
 
- If container exists in inventory then move it to the counted location / container 
 
- If the inventory in the container is allocated then it cannot be moved out of the location. 
- If a container was counted in the location and it exists in another location, the ENTIRE container is moved and any adjustments required are performed on the container inventory. 
- If the container was in another container, then it is moved out of this container.  
 
- If container does not exist in inventory then generate an Increase  
 
- If the container is in inventory but has not been counted, then there two possible outcomes: 
 
- If all inventory in the container is in the scope of the Count Document, then the whole container is moved out of the location to the Cycle Count location. 
- If some inventory in the container is not in the scope of the Count Document, then the container and all out-of-scope inventory will remain in the original location. All inventory in scope of the Count Document will be moved out of the container to the Cycle Count location.  
 
 
 

 

Other Adjustment Sub-Component features:
 
 
- Cycle Count location is defined in the COUNT_DEFINITION table. 
- A Move transaction (in transaction) of type Cycle Counting Adjustment is defined in order to apply movement between the location to be adjusted (decreased) and the Adjustment location. If the inventory change is defined as Decrement for the Move transaction code then the inventory in the counted location will be decreased and the adjustment location inventory will not be increased. The process designer has to remember that transaction code for movement has to allow for inventory attributes change. 
- Moving Allocated Quantities: ALLOCATIONS CANNOT BE MOVED WITHIN THE CYCLECOUNT FAÇADE COMPONENTS. 
 If there is a case where there is no QuantityOnHand left to move, and there is allocated stock, an error message is raised and the count is automatically failed. For example, there is a quantity of 30 for product A in a location, 25 of which is allocated. If the count was completed with 20 in the location, then an error will be raised. 
- An Increase movement (in transaction) of type Cycle Counting Adjustment is defined in order to apply adjustments in the location when a part is counted and is not in inventory (Serials and Containers). 
 (A move cannot be generated in this case, as DELMIA Apriso does not support negative inventory for Serial and container.) 
- When Move or Adjust BCs are invoked, the Count_Lock is checked, to identify if the product + location or Location or product that the system is trying to update are locked or not. If the location / product location is locked then an error message is generated. When Cycle Counting does adjustments during reconciliation this rule is not applied. 
- The Move and Adjust are made against the WipOrderNo linked with the counting document.

## History Recording in Production

History is created which contains information about the counted inventory. This conforms to the XSD, FlexNet.BusinessFacade.Inventory.InventoryCountController.Count.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | DocumentNumber | Inputted DocumentNumber (Required) |
|  | CountNumber | Inputted CountNumber (Required) |
|  | Facility | Inputted Facility (Required) |
|  | ID | System generated |
|  | EmployeeID | Inputted EmployeeID (Required) |
|  | CountStatus |  |
|  | WarehouseLocationID | Inputted WarehouseLocationID (required unless SerialNo or ContainerNo is inputted) |
|  | ProductID | Inputted ProductID |
|  | InventoryStatus | Inputted InventoryStatus.Status of the inventory to be counted. Required if for the specified arguments thereare multiple inventory records. |
|  | LotNo | Inputted LotNo |
|  | GradeID | Inputted GradeID |
|  | PartnerID | Inputted PartnerID |
|  | UomCode | Inputted UomCode |
|  | QuantityCounted | Inputted Quantity |
|  | QuantityInitial |  |
|  | QuantityFinal |  |
|  | RecountNumber | See Tolerance Management Subcomponent Syst. Processing |
|  | LastQuantityCounted | See Tolerance Management Subcomponent Syst. Processing |
|  | LastCountDate | See Tolerance Management Subcomponent Syst. Processing |
|  | LastEmployeeID | See Tolerance Management Subcomponent Syst. Processing |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | TextMedium | Inputted Comment |
| INVENTORY_COUNT_SERIAL_NO | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | InventoryCountID | INVENTORY_COUNT.ID |
|  | Container |  |
|  | Counted | Flag to indicate if count is performed |
|  | CountStatus |  |
|  | LastInventoryCountID | ID of inventory count for recount scenario. |
|  | LastContainer | Container that the serial was found in (for recount scenario) |
| INVENTORY_COUNT_CONTAINER | Container |  |
|  | InventoryCountID |  |
|  | QuantityCounted |  |
|  | CountStatus |  |
|  | InContainer | Inputted InContainerNo, parent container of Contain |
|  | LastInContainer | Parent container that the inventory was found in (for recount scenario) |
| No Designated Table to store this info. Choice left up to the Process Designer. | TolerancePercent | Input |
|  | ToleranceQuantity | Input |
|  | ToleranceCurrency | Input |
|  | ToleranceStrategyRecount | Inputted ToleranceStrategyRecount 0, 1, 2, 3 |
