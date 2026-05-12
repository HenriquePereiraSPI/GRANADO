# COUNT_FREQUENCY_LINK

**Database:** Operational

**Description:** This table stores links between Inventory Count frequency configurations and various Apriso entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountFrequencyID | INT(10,0) | False |  | False | COUNT_FREQUENCY | Link to the COUNT_FREQUENCY table. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | Link to the Facility of the Warehouse. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Link to the Group name in GROUP_ table. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Link to the Group Class ID in GROUP_ table. |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Link to the Group Type in GROUP_ table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ProductABCClassID | INT(10,0) | True |  | False | PRODUCT_ABC_CLASS | Link to the PRODUCT_ABC_CLASS table. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | ID of the Product. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Link to the Warehouse. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | ID of the Warehouse Location. |
| Zone | NVARCHAR(20) | True |  | False | ZONE | Link to the ZONE table. |

## Primary Key

- **PK_COUNT_FREQUENCY_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_FREQ_LINK_COUNT_FREQ** — COUNT_FREQUENCY_LINK -> COUNT_FREQUENCY (`CountFrequencyID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_ABC** — COUNT_FREQUENCY_LINK -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_GROUP** — COUNT_FREQUENCY_LINK -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNT_FREQUENCY_LINK_LOCATION** — COUNT_FREQUENCY_LINK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_PRODUCT** — COUNT_FREQUENCY_LINK -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_WAREHOUSE** — COUNT_FREQUENCY_LINK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_FREQUENCY_LINK_ZONE** — COUNT_FREQUENCY_LINK -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_COUNT_FREQUENCY_LINK** on `CountFrequencyID, Facility, Warehouse, WarehouseLocationID, ProductID, Zone, Group_, GroupType, GroupClassID, ProductABCClassID`

## Non-Unique Indexes

- **IF_COUNT_FREQUENCY_LINK_ABC** on `ProductABCClassID`
- **IF_COUNT_FREQUENCY_LINK_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_COUNT_FREQUENCY_LINK_PRODUCT** on `ProductID`
- **IF_COUNT_FREQUENCY_LINK_ZONE** on `Zone`
