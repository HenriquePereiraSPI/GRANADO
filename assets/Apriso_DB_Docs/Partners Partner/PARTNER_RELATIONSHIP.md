# PARTNER_RELATIONSHIP

**Database:** Operational

**Description:** Contains account numbers for Partner and Partner Roles. It also provides internal Partners with a relation between a Partner and the internal entity (e.g. facility or warehouse).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Account | NVARCHAR(40) | True |  | False |  | ERP Partner Number (e.g. supplier number, customer number). |
| CalendarID | INT(10,0) | True |  | False | CALENDAR | ID of the Calendar record the table is associated with. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Partner defined as a Department. |
| DistributionChannel | NVARCHAR(2) | True |  | False | DISTRIBUTION_CHANNEL | For future use. |
| Division | NVARCHAR(70) | True |  | False | DIVISION | Links a Partner to a Division. |
| DutyAndTariffID | INT(10,0) | True |  | False | DUTY_AND_TARIFF | For future use. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Links a Partner to a Facility. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryOwner | BIT | True |  | False |  | For future use. |
| LoadingPoint | NVARCHAR(50) | True |  | False |  | For future use. |
| OutsideProcessorFlag | BIT | True |  | False |  | For future use. |
| PartnerID | INT(10,0) | False |  | False | PARTNER | Relation to the Partner. |
| PartnerRole | INT(10,0) | False |  | False | PARTNER_ROLE | Role of the Partner. |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| PurchasingGroup | NVARCHAR(3) | True |  | False | PURCHASING_GROUP | For future use. |
| PurchasingOrganization | NVARCHAR(4) | True |  | False | PURCHASING_ORGANIZATION | For future use. |
| SalesOrganization | NVARCHAR(4) | True |  | False | SALES_ORGANIZATION | For future use. |
| ShippingPoint | NVARCHAR(20) | True |  | False |  | Persists the value of the SAP-SD shipping point and links it to a Apriso PartnerID. Used with transportation to define routes. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse defined as a Partner. |

## Primary Key

- **PK_PARTNER_RELATIONSHIP** on `ID`

## Foreign Keys (this table -> other)

- **FK_PARTNER_RELATIONSHIP_CALENDAR** — PARTNER_RELATIONSHIP -> CALENDAR (`CalendarID -> ID`)
- **FK_PARTNER_RELATIONSHIP_COMPANY** — PARTNER_RELATIONSHIP -> COMPANY (`Company -> Company`)
- **FK_PARTNER_RELATIONSHIP_DEPARTMENT** — PARTNER_RELATIONSHIP -> DEPARTMENT (`Department -> Department`)
- **FK_PARTNER_RELATIONSHIP_DISTRIBUTION_CHANNELS** — PARTNER_RELATIONSHIP -> DISTRIBUTION_CHANNEL (`DistributionChannel -> DistributionChannel`)
- **FK_PARTNER_RELATIONSHIP_DIVISION** — PARTNER_RELATIONSHIP -> DIVISION (`Division -> Division`)
- **FK_PARTNER_RELATIONSHIP_DUTY_AND_TARIFF** — PARTNER_RELATIONSHIP -> DUTY_AND_TARIFF (`DutyAndTariffID -> ID`)
- **FK_PARTNER_RELATIONSHIP_FACILITY** — PARTNER_RELATIONSHIP -> FACILITY (`Facility -> Facility`)
- **FK_PARTNER_RELATIONSHIP_PARTNER** — PARTNER_RELATIONSHIP -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_RELATIONSHIP_PARTNER_ROLE** — PARTNER_RELATIONSHIP -> PARTNER_ROLE (`PartnerRole -> PartnerRole`)
- **FK_PARTNER_RELATIONSHIP_PROCUREMENT** — PARTNER_RELATIONSHIP -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_PARTNER_RELATIONSHIP_PURCHASING_GROUP** — PARTNER_RELATIONSHIP -> PURCHASING_GROUP (`PurchasingGroup -> PurchasingGroup`)
- **FK_PARTNER_RELATIONSHIP_PURCHASING_ORGANIZATION** — PARTNER_RELATIONSHIP -> PURCHASING_ORGANIZATION (`PurchasingOrganization -> PurchasingOrganization`)
- **FK_PARTNER_RELATIONSHIP_SALES_ORGANIZATION** — PARTNER_RELATIONSHIP -> SALES_ORGANIZATION (`SalesOrganization -> SalesOrganization`)
- **FK_PARTNER_RELATIONSHIP_WAREHOUSE** — PARTNER_RELATIONSHIP -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **FK_QUEUE__PARTNER_RELATIONSHIP** — QUEUE_ -> PARTNER_RELATIONSHIP (`PartnerRelationshipID -> ID`)
- **FK_QUEUE_MESSAGE_PARTNER_RELATIONSHIP** — QUEUE_MESSAGE -> PARTNER_RELATIONSHIP (`PartnerRelationshipID -> ID`)
- **FK_SHIPMENT_STAGE_POINT_PARTNER_RELATIONSHIP** — SHIPMENT_STAGE_POINT -> PARTNER_RELATIONSHIP (`PartnerRelationShipID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PARTNER_RELATIONSHIP_DISTRIBUTION_CHANNELS** on `DistributionChannel`
- **IF_PARTNER_RELATIONSHIP_DIVISION** on `Division`
- **IF_PARTNER_RELATIONSHIP_DUTY_AND_TARIFF** on `DutyAndTariffID`
- **IF_PARTNER_RELATIONSHIP_PARTNER** on `PartnerID`
- **IF_PARTNER_RELATIONSHIP_PARTNER_ROLE** on `PartnerRole`
- **IF_PARTNER_RELATIONSHIP_PROCUREMENT** on `ProcurementID`
- **IF_PARTNER_RELATIONSHIP_PURCHASING_GROUP** on `PurchasingGroup`
- **IF_PARTNER_RELATIONSHIP_PURCHASING_ORGANIZATION** on `PurchasingOrganization`
- **IF_PARTNER_RELATIONSHIP_SALES_ORGANIZATION** on `SalesOrganization`
- **IXD_Account** on `Account`
