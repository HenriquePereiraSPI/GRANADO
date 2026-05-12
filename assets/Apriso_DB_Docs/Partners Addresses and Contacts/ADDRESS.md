# ADDRESS

**Database:** Operational

**Description:** Stores the actual address information for all addresses in the Apriso database. All entities that require an address are linked to this table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressTypeCode | NVARCHAR(60) | True |  | False | ADDRESS_TYPE | Code used to represent the Address Type. Only one type is used from XML Manager and maintenance screen = Type = "PresentAddress". |
| Agency | NVARCHAR(80) | True |  | False | AGENCY | For future use. |
| CalendarSystemTypeID | SMALLINT(5,0) | True |  | False | CALENDAR_SYSTEM_TYPE | Calendar system type that the address is defined in. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Codes System and its Attributes unique identifier. |
| CountryCode | NVARCHAR(3) | True |  | False | COUNTRY | Country code of the address. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attributes unique identifier. |
| ExternalAddressID | NVARCHAR(50) | True |  | False |  | For future use. |
| Floor | NVARCHAR(8) | True |  | False |  | Floor number of the address. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| GeographicLocationID | INT(10,0) | True |  | False | GEOGRAPHIC_LOCATION | For future use. |
| GeographicRegionID | INT(10,0) | True |  | False | GEOGRAPHIC_REGION | Reference to the Region assigned to the address. |
| HouseNumber | NVARCHAR(8) | True |  | False |  | House street number of the address. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the address. |
| InhouseMail | NVARCHAR(8) | True |  | False |  | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| POBox | NVARCHAR(16) | True |  | False |  | Post office box number of the address. |
| PostalCode | NVARCHAR(20) | True |  | False |  | Postal code of the address. |
| RegionCode | NVARCHAR(10) | True |  | False |  | For future use. |
| RoomNumber | NVARCHAR(8) | True |  | False |  | For future use. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | For future use. |

## Primary Key

- **PK_ADDRESSES** on `ID`

## Foreign Keys (this table -> other)

- **FK_ADDRESS_ADDRESS_TYPE** — ADDRESS -> ADDRESS_TYPE (`AddressTypeCode -> AddressTypeCode`)
- **FK_ADDRESS_AGENCY** — ADDRESS -> AGENCY (`Agency -> Agency`)
- **FK_ADDRESS_CALENDAR_SYSTEM_TYPE** — ADDRESS -> CALENDAR_SYSTEM_TYPE (`CalendarSystemTypeID -> ID`)
- **FK_ADDRESS_CODE_DOMAIN_MANAGER** — ADDRESS -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_ADDRESS_CODE_FORMAT_TYPE** — ADDRESS -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_ADDRESS_COUNTRY** — ADDRESS -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_ADDRESS_GEOGRAPHIC_LOCATION** — ADDRESS -> GEOGRAPHIC_LOCATION (`GeographicLocationID -> ID`)
- **FK_ADDRESS_GEOGRAPHIC_REGION** — ADDRESS -> GEOGRAPHIC_REGION (`GeographicRegionID -> ID`)
- **FK_ADDRESS_TIMEZONE** — ADDRESS -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **FK_ADDRESS_CONTACTS_ADDRESSES** — ADDRESS_CONTACT -> ADDRESS (`AddressID -> ID`)
- **FK_ADDRESS_TRANSLATIONS_ADDRESSES** — ADDRESS_TRANSLATION -> ADDRESS (`AddressID -> ID`)
- **FK_BUILDING_ADDRESS** — BUILDING -> ADDRESS (`AddressID -> ID`)
- **FK_CAMPAIGN_ADDRESS_ADDRESS** — CAMPAIGN_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_CARRIER_ADDRESSES_ADDRESSES** — CARRIER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_CODE_CLASS_NUMBER_ADDRESS** — CODE_CLASS_NUMBER -> ADDRESS (`AddressID -> ID`)
- **FK_CODE_SERIAL_NUMBER_ADDRESS** — CODE_SERIAL_NUMBER -> ADDRESS (`AddressID -> ID`)
- **FK_CODE_ULC_ADDRESS** — CODE_ULC -> ADDRESS (`AddressID -> ID`)
- **FK_COMPANY_ADDRESSES_ADDRESSES** — COMPANY_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_CONTACT_ADDRESSES_ADDRESSES** — CONTACT_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_COST_CENTER_ADDRESSES_ADDRESSES** — COST_CENTER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_DELIVERY_ORDER_HEADER_ADDRESS** — DELIVERY_ORDER_HEADER -> ADDRESS (`SupplyWarehouseAddressID -> ID`)
- **FK_DELIVERY_ORDER_HEADER_ADDRESS1** — DELIVERY_ORDER_HEADER -> ADDRESS (`ReplenishWarehouseAddressID -> ID`)
- **FK_DEPARTMENT_ADDRESS_ADDRESS** — DEPARTMENT_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_DISPOSITION_CONTAINER_ADDRESS_ADDRESS** — DISPOSITION_CONTAINER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_DISPOSITION_SAMPLE_ADDRESS_ADDRESS** — DISPOSITION_SAMPLE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_DIVISION_ADDRESSES_ADDRESSES** — DIVISION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_EMPLOYEE_ADDRESS** — EMPLOYEE -> ADDRESS (`AddressID -> ID`)
- **FK_EQUIPMENT_ADDRESS_ADDRESS** — EQUIPMENT_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_FACILITY_ADDRESSES_ADDRESSES** — FACILITY_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_INBOUND_ORDER_ADDRESS_ADDRESS** — ORDER_HEADER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_INBOUND_ORDER_DETAIL_ADDRESS_ADDRESS** — ORDER_DETAIL_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_INTERNAL_ORDER_ADDRESSES_ADDRESSES** — MATERIAL_ORDER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_INTERNAL_ORDER_DETAIL_ADDRESSES_ADDRESSES** — MATERIAL_ORDER_DETAIL_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_LAND_ADDRESS** — LAND -> ADDRESS (`AddressID -> ID`)
- **FK_MOBILITY_ADDRESS** — MOBILITY -> ADDRESS (`AddressID -> ID`)
- **FK_OPERATION_ADDRESS_ADDRESSES** — OPERATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_OPERATION_STEP_ADDRESS_ADDRESS** — OPERATION_STEP_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_ORDER_SCHEDULE_ADDRESS_ADDRESS** — ORDER_SCHEDULE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_OUTBOUND_SHIPMENT_STOP_ADDRESS** — OUTBOUND_SHIPMENT_STOP -> ADDRESS (`ShipToAddressID -> ID`)
- **FK_PARTNER_ADDRESS_ADDRESS** — PARTNER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_PROCESS_OPERATION_ADDRESS_ADDRESS** — PROCESS_OPERATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_PROCESS_OPERATION_STEP_ADDRESS_ADDRESS** — PROCESS_OPERATION_STEP_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_PRODUCTION_LINE_ADDRESSES_ADDRESSES** — WIP_LINE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_RESOURCE_ADDRESS_ADDRESS** — RESOURCE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WAREHOUSE_ADDRESSES_ADDRESSES** — WAREHOUSE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WAREHOUSE_LOCATION_ADDRESSES_ADDRESSES** — WAREHOUSE_LOCATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WIP_LINE_SCHEDULE_ADDRESS_ADDRESS** — WIP_LINE_SCHEDULE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WIP_ORDER_ADDRESS_ADDRESSES** — WIP_ORDER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WIP_ORDER_OPERATION_ADDRESS_ADDRESSES** — WIP_OPERATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WORK_CENTER_ADDRESS_ADDRESS** — WORK_CENTER_ADDRESS -> ADDRESS (`AddressID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ADDRESS_AGENCY** on `Agency`
- **IF_ADDRESS_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_ADDRESS_COUNTRY** on `CountryCode`
- **IF_ADDRESS_GEOGRAPHIC_LOCATION** on `GeographicLocationID`
- **IF_ADDRESS_GEOGRAPHIC_REGION** on `GeographicRegionID`
