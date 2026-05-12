# SEQUENCE_SHIP_CONFIG

**Database:** Operational

**Description:** The sequencing configuration required to determine how to do ship to sequence.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The first day this configuration option is no longer effective. |
| EffectiveDate | DATETIME | True |  | False |  | The first day this configuration option is effective. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility to which this configuration applies. |
| Group_ | NVARCHAR(40) | False |  | False | GROUP_ | This is the product group to which this configuration refers. |
| GroupClassID | INT(10,0) | False |  | False | GROUP_ | This is the product group to which this configuration refers. |
| GroupType | SMALLINT(5,0) | False |  | False | GROUP_ | This is the product group to which this configuration refers. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| InspectQueueDefinitionID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_DEFINITION | The queue definition and queue used for inspecting racks of this product group. |
| LanguageID | INT(10,0) | True |  | False |  | The LanguageID to use for printing labels and other documents. |
| LoadQueueDefinitionID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_DEFINITION | The queue definition and queue used to inspect and load this product group. |
| Name | NVARCHAR(250) | False |  | False |  | The Name of the configuration. |
| PackagingInstructionID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | The rack configuration used. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The Customer to which this configuration applies. |
| PickQueueDefinitionID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_DEFINITION | The queue definition and queue used for picking this product group. |
| RacksPerDelivery | INT(10,0) | True |  | False |  | Number of racks to be loaded in each delivery. |
| ReverseLoad | BIT | True |  | False |  | True if loading racks into trucks must be done in reverse sequence. When this is true, the rack with the highest sequence numbers will be loaded into the trucks first. When this is false, the rack with the lowest sequence numbers is loaded first. |
| ReversePick | BIT | True |  | False |  | True if picking is performed in reverse sequence for each rack. When this is true, the highest sequence number is picked first for each rack. When this is false, the lowest sequence number is picked first. |
| Revision | NVARCHAR(100) | False |  | False |  | Revision of the configuration. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | The status of this configuration revision. May be Design in Process, Active, or Canceled. |
| ScanItemInInspection | BIT | True |  | False |  | For future use. |
| ScanItemsRackComplete | BIT | True |  | False |  | True if the operator is required to re-scan all item labels in order when the rack is completed. |
| ScanItemWhenSlotting | BIT | True |  | False |  | True if the operator must scan the item label when dropping the item in the slot. This is a second scan in addition to the original. |
| ScanSlotLabel | BIT | True |  | False |  | True if the operator must scan the slot number before a racking operation is considered completed. |
| ShippingDoorID | INT(10,0) | True |  | False | RESOURCE_ | This is the door (Resource) used to ship this product group. |
| SlotsPerRack | INT(10,0) | True |  | False |  | Number of slot or items in a rack. |

## Primary Key

- **PK_SEQUENCE_SHIP_CONFIG** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_SHIP_CONFIG_FACILITY** — SEQUENCE_SHIP_CONFIG -> FACILITY (`Facility -> Facility`)
- **FK_SEQUENCE_SHIP_CONFIG_GROUP_** — SEQUENCE_SHIP_CONFIG -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SEQUENCE_SHIP_CONFIG_PACKAGING_INSTR_HEADER** — SEQUENCE_SHIP_CONFIG -> PACKAGING_INSTR_HEADER (`PackagingInstructionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_PARTNER** — SEQUENCE_SHIP_CONFIG -> PARTNER (`PartnerID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_RESOURCE_** — SEQUENCE_SHIP_CONFIG -> RESOURCE_ (`ShippingDoorID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`PickQueueDefinitionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION2** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`InspectQueueDefinitionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION3** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`LoadQueueDefinitionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SEQUENCE_SHIP_CONFIG** on `Name, Revision`

## Non-Unique Indexes

- **IF_SEQUENCE_SHIP_CONFIG_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_SEQUENCE_SHIP_CONFIG_PACKAGING_INSTR_HEADER** on `PackagingInstructionID`
- **IF_SEQUENCE_SHIP_CONFIG_PARTNER** on `PartnerID`
- **IF_SEQUENCE_SHIP_CONFIG_RESOURCE_** on `ShippingDoorID`
- **IF_SEQUENCE_SHIP_CONFIG_REVISION_STATUS** on `RevisionStatusID`
- **IF_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION** on `PickQueueDefinitionID`
- **IF_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION2** on `InspectQueueDefinitionID`
- **IF_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION3** on `LoadQueueDefinitionID`
