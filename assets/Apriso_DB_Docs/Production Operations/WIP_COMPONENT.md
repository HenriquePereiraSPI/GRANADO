# WIP_COMPONENT

**Database:** Operational

**Description:** This table links the Components with WIP Components (which can be defined per WIP Order, WIP Operation, or WIP Operation Step).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BOMNumber | NVARCHAR(10) | True |  | False |  | The reference to the BOM number that was used at the time of Explosion. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| ComponentID | INT(10,0) | True |  | False | COMPONENT | The link to the Component record that describes the actual ingredient/Component and the ingredient/Component quantity. |
| ComponentIntegrMethodID | INT(10,0) | True |  | False | COMPONENT_INTEGR_METHOD | The method used to introduce the Component (e.g., from a pipe or container) (user-defined). |
| ComponentUsage | SMALLINT(5,0) | True |  | False |  | The usage of the Component (user-defined). |
| ExternalSource | BIT | True |  | False |  | Defines if the Component is defined from an external source or created via Explosion. If this flag is true, then Explosion or re-Explosion will not remove or update the Component. Otherwise, re-Explosion will delete the Component (assuming that all internal Components will be re-created during Explosion). |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record (key) in a table. |
| IncludeInBatchWeight | BIT | True |  | False |  | For future use. |
| IssuedQuantity | DECIMAL(28,10) | True | (0.0) | False |  | The quantity of the Component that is required for the WIP Order, taking into account the order quantity, shrink factors, batch size, scrap, etc. |
| KanbanCards | SMALLINT(5,0) | True | (0) | False |  | For future use. |
| KanbanLotSizes | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| Locator | NVARCHAR(20) | True |  | False |  | The link of the Component to a locator (for the electronics industry). |
| MinKanbanCards | SMALLINT(5,0) | True | (0) | False |  | For future use. |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a note. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The reference to the WIP Operation (in addition to the WIP Order and WIP Order type information). |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The reference to a product (product number and product version). |
| ReferenceOrderLineNo | NVARCHAR(40) | True |  | False |  | For future use. |
| ReferenceOrderNo | NVARCHAR(80) | True |  | False |  | For future use. |
| SequenceNo | INT(10,0) | True |  | False |  | For future use. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The link of the Component to a Step. |
| SupplyWipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | For future use. |
| SupplyWipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | The UOM of the quantity of the Component. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | The link to the WIP Order. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | The link to the WIP Order type. |
| WipRevID | INT(10,0) | True |  | False | WIP_REV | For future use. |

## Primary Key

- **PK_WIP_ORDER_BOM** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_BOM_WIP_ORDER** — WIP_COMPONENT -> WIP_ORDER (`SupplyWipOrderNo, SupplyWipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_COMPONENT_COMPANY** — WIP_COMPONENT -> COMPANY (`Company -> Company`)
- **FK_WIP_COMPONENT_COMPONENT** — WIP_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_WIP_COMPONENT_COMPONENT_INTEGR_METHOD** — WIP_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_WIP_COMPONENT_NOTE** — WIP_COMPONENT -> NOTE (`NoteID -> ID`)
- **FK_WIP_COMPONENT_PRODUCT** — WIP_COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_COMPONENT_UNIT** — WIP_COMPONENT -> UNIT (`UnitID -> ID`)
- **FK_WIP_COMPONENT_UOM** — WIP_COMPONENT -> UOM (`UOMCode -> UomCode`)
- **FK_WIP_COMPONENT_WAREHOUSE** — WIP_COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WIP_COMPONENT_WAREHOUSE_LOCATION** — WIP_COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WIP_COMPONENT_WIP_REV** — WIP_COMPONENT -> WIP_REV (`WipRevID -> ID`)
- **FK_WIP_ORDER_BOM_WIP_ORDER_OPERATION** — WIP_COMPONENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)

## Referenced By (other tables -> this)

- **FK_GENEALOGY_DETAIL_WIP_COMPONENT** — GENEALOGY_DETAIL -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_ORDER_DETAIL_WIP_COMPONENT** — ORDER_DETAIL -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_QUALITY_DEFECT_WIP_COMPONENT** — QUALITY_DEFECT -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WEIGH_LINE_WIP_COMPONENT** — WEIGH_LINE -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WIP_CONTENT_WIP_COMPONENT** — WIP_CONTENT -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WIP_REQ_COMPONENT_LOT_NO_WIP_COMPONENT** — WIP_REQ_COMPONENT_LOT_NO -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WIP_REQ_COMPONENT_SERIAL_NO_WIP_COMPONENT** — WIP_REQ_COMPONENT_SERIAL_NO -> WIP_COMPONENT (`WipComponentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_BOM_WIP_ORDER** on `SupplyWipOrderNo, SupplyWipOrderType`
- **IF_WIP_COMPONENT_COMPONENT** on `ComponentID`
- **IF_WIP_COMPONENT_COMPONENT_INTEGR_METHOD** on `ComponentIntegrMethodID`
- **IF_WIP_COMPONENT_NOTE** on `NoteID`
- **IF_WIP_COMPONENT_PRODUCT** on `ProductID`
- **IF_WIP_COMPONENT_UNIT** on `UnitID`
- **IF_WIP_COMPONENT_WIP_REV** on `WipRevID`
- **IXD_WipOrderNo_WipOrderType_ComponentID** on `WipOrderNo, WipOrderType, ComponentID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_StepSequenceNo** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
