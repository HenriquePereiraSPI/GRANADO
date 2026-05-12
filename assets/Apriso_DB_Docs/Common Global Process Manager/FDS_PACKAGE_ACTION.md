# FDS_PACKAGE_ACTION

**Database:** Solution Authoring

**Description:** List of actions performed on Package

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionInstanceFuid | NVARCHAR(36) | False |  | False |  | An identifier that describes the same action in�Solution Authoring and Operational databases. |
| ActionType | SMALLINT(5,0) | False |  | False |  | Type of action: 1 - Send, 2 - Save, 3 - Deploy, 4 - Receive, 5 - Load, 6 - Generate |
| DeploymentResults | NVARCHAR | True |  | False |  | Deployment results of components in package during deploying |
| DomainUserPerformedBy | NVARCHAR(50) | False |  | False |  | Windows domain user that executed the action |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| Message | NVARCHAR | True |  | False |  | Action execution message. In case of failure contains error message |
| PackageInfoFuid | NVARCHAR(36) | False |  | False |  | Link to package on which the action was performed |
| PackageStatus | SMALLINT(5,0) | False |  | False |  | Status of package action: 1 - Processed, 2 - Failed, 3 - Ready to Deploy, 4 - Processing, 5 - Cancelled |
| ServerAddress | NVARCHAR(500) | True |  | False |  | Package destination address |
| ServerName | NVARCHAR(255) | True |  | False |  | Package destination server name |
| SignatureID | INT(10,0) | True |  | False | SIGNATURE | Link to e-signature, stores information who signed specified action (deploy, reject deploy) on the Package |
| UsedDeploymentOptions | NVARCHAR | True |  | False |  | Used deployment options during deploying of package |

## Primary Key

- **PK_FDS_PACKAGE_ACTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_FDS_PACKAGE_ACTION_SIGNATURE** — FDS_PACKAGE_ACTION -> SIGNATURE (`SignatureID -> ID`)

## Referenced By (other tables -> this)

- **FK_FDS_PACKAGE_ACTION_NODE_FDS_PACKAGE_ACTION** — FDS_PACKAGE_ACTION_NODE -> FDS_PACKAGE_ACTION (`PackageActionID -> ID`)

## Unique Indexes

- **IF_FDS_PACKAGE_ACTION** on `PackageInfoFuid, ActionInstanceFuid, PackageInfoFuid, ActionInstanceFuid, ActionInstanceFuid, PackageInfoFuid, ActionInstanceFuid`

## Non-Unique Indexes

- **IF_FDS_PACKAGE_ACTION_SIGNATURE** on `SignatureID, SignatureID, SignatureID`
