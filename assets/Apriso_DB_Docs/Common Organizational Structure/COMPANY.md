# COMPANY

**Database:** Operational

**Description:** The highest level entity within the Apriso database. It houses such information as the default RFID system used within the company.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Code System and its Attribute's unique identifier. |
| Company | NVARCHAR(40) | False |  | True |  | Company as a piece of the organization structure. |
| CurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attribute's unique identifier. |
| ExternalID | NVARCHAR(240) | True |  | False |  | This column store unique identifier from external system. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COMPANY** on `Company`

## Foreign Keys (this table -> other)

- **FK_COMPANY_CODE_DOMAIN_MANAGER** — COMPANY -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_COMPANY_CODE_FORMAT_TYPE** — COMPANY -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_COMPANY_CURRENCY** — COMPANY -> CURRENCY (`CurrencyCode -> CurrencyCode`)

## Referenced By (other tables -> this)

- **FK_ASSET_COMPANY** — ASSET -> COMPANY (`Company -> Company`)
- **FK_CALENDARS_COMPANY** — CALENDAR -> COMPANY (`Company -> Company`)
- **FK_CODE_CLASS_NUMBER_COMPANY** — CODE_CLASS_NUMBER -> COMPANY (`Company -> Company`)
- **FK_CODE_ULC_COMPANY** — CODE_ULC -> COMPANY (`Company -> Company`)
- **FK_COMPANY_ADDRESSES_COMPANY** — COMPANY_ADDRESS -> COMPANY (`Company -> Company`)
- **FK_COMPANY_CONTACTS_COMPANY** — COMPANY_CONTACT -> COMPANY (`Company -> Company`)
- **FK_COMPONENT_COMPANY** — COMPONENT -> COMPANY (`Company -> Company`)
- **FK_COST_COMPANY** — COST -> COMPANY (`Company -> Company`)
- **FK_COST_DETAIL_COMPANY** — COST_DETAIL -> COMPANY (`Company -> Company`)
- **FK_DEPARTMENT_COMPANY** — DEPARTMENT -> COMPANY (`Company -> Company`)
- **FK_DIVISION_COMPANY** — DIVISION -> COMPANY (`Company -> Company`)
- **FK_FACILITY_COMPANY** — FACILITY -> COMPANY (`Company -> Company`)
- **FK_GL_ACCOUNTS_COMPANY** — GL_ACCOUNT -> COMPANY (`Company -> Company`)
- **FK_LOCATION_PARTNER_COMPANY** — LOCATION_PARTNER -> COMPANY (`Company -> Company`)
- **FK_OPERATION_COMPONENT_COMPANY** — OPERATION_COMPONENT -> COMPANY (`Company -> Company`)
- **FK_ORDER_HEADER_COMPANY** — ORDER_HEADER -> COMPANY (`Company -> Company`)
- **FK_OUTBOUND_SHIPMENT_HEADER_COMPANY** — OUTBOUND_SHIPMENT_HEADER -> COMPANY (`Company -> Company`)
- **FK_OWNERSHIP_COMPANY** — OWNERSHIP -> COMPANY (`Company -> Company`)
- **FK_PARTNER_RELATIONSHIP_COMPANY** — PARTNER_RELATIONSHIP -> COMPANY (`Company -> Company`)
- **FK_PROCESS_COMPANY** — PROCESS -> COMPANY (`Company -> Company`)
- **FK_PROCESS_COMPONENT_FACILITY_COMPANY** — PROCESS_COMPONENT_FACILITY -> COMPANY (`Company -> Company`)
- **FK_PRODUCT_COMPONENT_FACILITY_COMPANY** — PRODUCT_COMPONENT_FACILITY -> COMPANY (`Company -> Company`)
- **FK_PURCHASING_ORGANIZATION_COMPANY** — PURCHASING_ORGANIZATION -> COMPANY (`Company -> Company`)
- **FK_RECEIPT_DETAIL_COMPANY** — RECEIPT_DETAIL -> COMPANY (`Company -> Company`)
- **FK_RECEIPT_HEADER_COMPANY** — RECEIPT_HEADER -> COMPANY (`Company -> Company`)
- **FK_RESOURCE_COMPONENT_COMPANY** — RESOURCE_COMPONENT -> COMPANY (`Company -> Company`)
- **FK_SALES_ORGANIZATION_COMPANY** — SALES_ORGANIZATION -> COMPANY (`Company -> Company`)
- **FK_SERIAL_NO_COMPANY** — SERIAL_NO -> COMPANY (`Company -> Company`)
- **FK_WIP_COMPONENT_COMPANY** — WIP_COMPONENT -> COMPANY (`Company -> Company`)
- **FK_WIP_ORDER_CONTENT_COMPANY** — WIP_ORDER_CONTENT -> COMPANY (`Company -> Company`)
- **FK_WORK_CENTER_COMPANY** — WORK_CENTER -> COMPANY (`Company -> Company`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COMPANY_CODE_DOMAIN_MANAGER** on `DomainManagerID`
