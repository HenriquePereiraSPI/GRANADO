# EQUIPMENT

**Database:** Operational

**Description:** This table stores the Equipment within the company. Equipment will be displayed as Tools in the Task List.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CurrentEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The unique identifier of the Employee and its attributes. |
| Equipment | NVARCHAR(80) | False |  | False |  | The Equipment involved (e.g., Tool, Machine). |
| EquipmentClassID | INT(10,0) | True |  | False | EQUIPMENT_CLASS | The assignment of the Equipment to a class. |
| EquipmentType | SMALLINT(5,0) | True |  | False | EQUIPMENT_TYPE | The type of Equipment. Only type 1 (Tool) will be displayed in the Task List. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The assignment of the Equipment to the Facility. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique identifier of the EQUIPMENT used to identify the Equipments between servers. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record. |
| LastMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | The date of the last Equipment maintenance. |
| LogisticsID | INT(10,0) | True |  | False | LOGISTICS | For future use. |
| MaximumLogins | INT(10,0) | True | (1) | False |  | The maximum number of logins for the Equipment. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| NextMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | The date of the next Equipment maintenance. |
| OwnershipID | INT(10,0) | True |  | False | OWNERSHIP | For future use. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | The Resource identifier. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransportEquipment | BIT | True |  | False |  | For future use. |

## Primary Key

- **PK_EQUIPMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_EMPLOYEE** — EQUIPMENT -> EMPLOYEE (`CurrentEmployeeID -> ID`)
- **FK_EQUIPMENT_EQUIPMENT_CLASS** — EQUIPMENT -> EQUIPMENT_CLASS (`EquipmentClassID -> ID`)
- **FK_EQUIPMENT_EQUIPMENT_TYPE** — EQUIPMENT -> EQUIPMENT_TYPE (`EquipmentType -> EquipmentType`)
- **FK_EQUIPMENT_FACILITY** — EQUIPMENT -> FACILITY (`Facility -> Facility`)
- **FK_EQUIPMENT_LOGISTICS** — EQUIPMENT -> LOGISTICS (`LogisticsID -> ID`)
- **FK_EQUIPMENT_MOBILITY** — EQUIPMENT -> MOBILITY (`MobilityID -> ID`)
- **FK_EQUIPMENT_OWNERSHIP** — EQUIPMENT -> OWNERSHIP (`OwnershipID -> ID`)
- **FK_EQUIPMENT_RESOURCE** — EQUIPMENT -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **FK_CONTAINER_EQUIPMENT** — CONTAINER -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_DOWNLOAD_EQUIPMENT** — DOWNLOAD -> EQUIPMENT (`LastDownloadEquipmentID -> ID`)
- **FK_EQUIPMENT_ADDRESS_EQUIPMENT** — EQUIPMENT_ADDRESS -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_COMMUNICATION_EQUIPMENT** — EQUIPMENT_COMMUNICATION -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_CONTACTS_EQUIPMENT** — EQUIPMENT_CONTACT -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_DATE_EQUIPMENT** — EQUIPMENT_DATE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_DOC_EQUIPMENT** — EQUIPMENT_DOC -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_MACH_COMM_CONFIG_EQUIPMENT** — EQUIPMENT_MACH_COMM_CONFIG -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_MI_FEATURE_EQUIPMENT** — EQUIPMENT_MI_FEATURE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_ZONE_EQUIPMENT** — EQUIPMENT_ZONE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_SCALE_EQUIPMENT** — SCALE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_TASK_EQUIPMENT_USE_EQUIPMENT** — TASK_EQUIPMENT_USE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_TRANSPORTATION_EQUIPMENT_DIMENSION_EQUIPMENT** — EQUIPMENT_DIMENSION -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_TRANSPORTATION_EQUIPMENT_EQUIPMENT** — TRANSPORT_EQUIPMENT -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_TRANSPORTATION_EQUIPMENT_SEAL_INFORMATION_EQUIPMENT** — EQUIPMENT_SEAL -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_UNIT_USAGE_EQUIPMENT** — UNIT_USAGE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_WORKSTATION_EQUIPMENT** — WORKSTATION -> EQUIPMENT (`EquipmentID -> ID`)

## Unique Indexes

- **UK_EQUIPMENT** on `Equipment, Facility`
- **UK_EQUIPMENT_RESOURCE** on `ResourceID`
- **UK_EQUIPMENT2** on `FUID`

## Non-Unique Indexes

- **IF_EQUIPMENT_EQUIPMENT_CLASS** on `EquipmentClassID`
- **IF_EQUIPMENT_LOGISTICS** on `LogisticsID`
- **IF_EQUIPMENT_MOBILITY** on `MobilityID`
- **IF_EQUIPMENT_OWNERSHIP** on `OwnershipID`
- **IXD_CurrentEmployeeID** on `CurrentEmployeeID`
