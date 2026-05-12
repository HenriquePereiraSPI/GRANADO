# DIVISION

**Database:** Operational

**Description:** The Company's Division, as specified by the enterprise financial application. Orders are typically linked backed to a Division for accounting purposes. This is not a physical partitioning of a company, but a financial partioning useful for accounting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Code System and its Attribute's unique identifier. |
| Company | NVARCHAR(40) | False |  | False | COMPANY | Company the Division belongs to. |
| CurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| Division | NVARCHAR(70) | False |  | True |  | Division as part of the Organizational Structure. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attribute's unique identifier. |
| ExternalID | NVARCHAR(240) | True |  | False |  | This column store unique identifier from external system. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DIVISION** on `Division`

## Foreign Keys (this table -> other)

- **FK_DIVISION_CODE_DOMAIN_MANAGER** — DIVISION -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_DIVISION_CODE_FORMAT_TYPE** — DIVISION -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_DIVISION_COMPANY** — DIVISION -> COMPANY (`Company -> Company`)
- **FK_DIVISION_CURRENCY** — DIVISION -> CURRENCY (`CurrencyCode -> CurrencyCode`)

## Referenced By (other tables -> this)

- **FK_CODE_CLASS_NUMBER_DIVISION** — CODE_CLASS_NUMBER -> DIVISION (`Division -> Division`)
- **FK_CODE_ULC_DIVISION** — CODE_ULC -> DIVISION (`Division -> Division`)
- **FK_COST_CENTER_DIVISION** — COST_CENTER -> DIVISION (`Division -> Division`)
- **FK_DEPARTMENT_DIVISION** — DEPARTMENT -> DIVISION (`Division -> Division`)
- **FK_DIVISION_ADDRESSES_DIVISION** — DIVISION_ADDRESS -> DIVISION (`Division -> Division`)
- **FK_DIVISION_ASSIGNMENTS_DIVISION** — DIVISION_SALES -> DIVISION (`Division -> Division`)
- **FK_DIVISION_CONTACTS_DIVISION** — DIVISION_CONTACT -> DIVISION (`Division -> Division`)
- **FK_FACILITY_DIVISION** — FACILITY -> DIVISION (`Division -> Division`)
- **FK_LOCATION_PARTNER_DIVISION** — LOCATION_PARTNER -> DIVISION (`Division -> Division`)
- **FK_OUTBOUND_ORDER_HEADER_DIVISION** — OUTBOUND_ORDER_HEADER -> DIVISION (`DivisionCode -> Division`)
- **FK_PARTNER_RELATIONSHIP_DIVISION** — PARTNER_RELATIONSHIP -> DIVISION (`Division -> Division`)
- **FK_WORK_CENTER_DIVISION** — WORK_CENTER -> DIVISION (`Division -> Division`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DIVISION_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IXD_Company** on `Company`
