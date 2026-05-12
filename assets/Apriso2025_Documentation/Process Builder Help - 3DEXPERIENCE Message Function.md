# 3DEXPERIENCE Message Function

The 3DEXPERIENCE Message Function enables publishing messages from DELMIA Apriso to the
3DEXPERIENCE Platform using an ActiveMQ Message Broker.

The message format is dependent on the selected message.

Prerequisites

To use the 3DEXPERIENCE Message function, a connection to an ActiveMQ broker must be
configured in Configuration Manager .

Additional configuration steps on the 3DEXPERIENCE Platform side are discussed in the
Integration with 3DEXPERIENCE Platform Guide.

To Add the 3DEXPERIENCE Message Function

       1. Drag the 3DEXPERIENCE Message Function from the Toolbox to the Function Navigation
           diagram, or double-click the 3DEXPERIENCE Message icon in the Toolbox.

          2. Choose the Message to update the list of available Inputs.

  Depending on the selected Platform Alias, the available Topics are different.

  Topics available when Platform Alias option is selected and the selected alias is deployed on
  premises:

              Get Data Collect Plan Row Custom Attributes
              Get Data Collect Plan Custom Attributes
              Get Operation Custom Attributes
              Get Manufacturing Item Custom Attributes
              Get Process Custom Attributes
              Get Process Organization
              Get Resource Implement Links
              Get Resource Custom Attributes

Import IP Protection and Export Control
Import Resource
Get Process Header
Import Process
Create Issue
Cancel Operation
Complete Operation
Hold Operation
Release Operation
Start Operation
UnHold Operation
Cancel Order
Complete Order
Hold Order
Release Order
Start Order
Create Post
UnHold Order
Get Translation
Import Translation

Topics available when Platform Alias option is selected and the selected alias is deployed in
Cloud:

Get Data Collect Plan Row Custom Attributes
Get Data Collect Plan Custom Attributes
Get Operation Custom Attributes
Get Manufacturing Item Custom Attributes
Get Process Custom Attributes
Get Process Organization
Get Resource Custom Attributes
Get Process Header
Import IP Protection and Export Control
Import Process

When the From PlatformAlias Input option is selected, all topics are available.

Web Service Option

Instead of the Message Topic, you can select Web Service option.

When the Web Service option is selected the Message section is disabled. The URL is
automatically added as the input, and Response and Code are added as outputs of the function.

The option allows you to execute a web service call to the API of the platform defined in the
selected Platform Alias. The content of the response body of the request is returned in the
Response output and the response code in the Code output.

Production Status Updates

These messages send Production Order and DFC status updates to the
3DEXPERIENCE Platform.

Field              Description
Message
                              Cancel Operation
                              Complete Operation
                              Hold Operation

   Refresh Inputs                   Release Operation
                                    Start Operation
                                    UnHold Operation
                                    Cancel Order
                                    Complete Order
                                    Hold Order
                                    Release Order
                                    Start Order
                                    UnHold Order

                         Refreshes the list of available Inputs (Required and Dynamic) from
                         the Message definition.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name                    Data  Description
PlatformAlias           Type  Alias of the platform configured in Configuration Manager.

                        Char

                              This input is only available when the From
                              PlatformAlias Input option is selected.

TransactionTime         DateTime Transaction Time in UTC.

Order3DExperienceID Char      Order ID in 3DEXPERIENCE Platform: OrderDSID in
                              outgoing json.

Operation3DExperienceID Char  Operation ID in 3DEXPERIENCE Platform: OperationDSID
                              in outgoing json.

ReasonCode              Char  Reason Code for the status change. ReasonCode in outgoing
                              json.

Dynamic Inputs

The Inputs can be added to the Function by selecting the check boxes on the Dynamic Inputs list.

Name               Data       Description
                   Type

LocalTransactionTime DateTime Transaction Time adjusted for local time zone.

OrderNo            Char       Order Number. OrderNo in outgoing json.

OrderType          Int        DELMIA Apriso WIP Order type. The outgoing value is

                              translated into a 3DEXPERIENCE Order Type using the

                              mapping specified in the MB_DS_ORDER_TYPE - DS Order

                              Type Advanced Determination.

                              If there is 3DEXPERIENCE Order Type information in the
                              DELMIA Apriso Database, the mapping from the Determination
                              takes precedence.

   EmployeeNo                  EmployeNo of the employee performing the action that
                               triggered the status change. EmployeeNo in outgoing json.

Facility                 Char  Facility where the Order is performed. Facility in outgoing
                               json.
OprSequenceNo            Char
WorkCenter               Char  Operation Number. OperationNo in outgoing json.

LastReleaseFromHold Boolean    Work Center where the Order is performed. WorkCenter in
                               outgoing json.

                               Specifies if the submitted release is the last one for the order.
                               LastReleaseFromHold in outgoing json (available for the UnHold
                               Order and UnHold Operation Message).

Create Issue

This message uses data from CAPA and CAPA_LINK tables to send details of an Issue created in
DELMIA Apriso to the 3DEXPERIENCE Platform.

Field                          Description
Message                                   Create Issue

Refresh Inputs                 Refreshes the list of available Inputs (Required and Dynamic) from
                               the Message definition.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data        Description
PlatformAlias      Type        Alias of the platform configured in Configuration Manager.

                   Char

                               This input is only available when the From PlatformAlias Input
                               option is selected.

TransactionTime DateTime Transaction Time in UTC.

CAPARecordNo Char              Record No of the Issue. Taken from the RecordNo column in the
                               CAPA table.

Dynamic Inputs

The Inputs can be added to the Function by selecting the check boxes on the Dynamic Inputs list.

Name                           Data Type Description
LocalTransactionTime           DateTime Transaction Time adjusted for local time zone.

 3DSwym Post Creation

  This message creates a post in a 3DSwym Community on the 3DEXPERIENCE Platform.

   Field                       Description
   Message
                                  Create Post
   Refresh Inputs
                               Refreshes the list of available Inputs (Required and Dynamic) from
                               the Message definition.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
PlatformAlias      Type  Alias of the platform configured in Configuration Manager.

                   Char

                               This input is only available when the From PlatformAlias Input
                               option is selected.

TransactionTime DateTime Transaction Time in UTC.

Title              Char  Title of the 3DSwym post.

Content            Char  Content of the 3DSwym post.

Dynamic Inputs

The Inputs can be added to the Function by selecting the check boxes on the Dynamic Inputs list.

Name                     Data Type Description

LocalTransactionTime DateTime Transaction Time adjusted for local time zone.

Signature                Char     Signature line appended to the content of the post

CommunityID              Char     3DSwym Community unique identifier on the
                                  3DEXPERIENCE Platform.

CommunityName            Char     Name of the 3DSwym Community on the
                                  3DEXPERIENCE Platform.

LinkURL                  Char     URL of the link included at the end of the post.

LinkTitle                Char     Title of the link included in the post.

LinkDescription          Char     Description of the link included in the post.

LinkPreviewImageURL Char          URL of an image to be displayed with the link in the post.

AttachmentIDs            List of  IDs from the ATTACHMENT Table.
                         Integer

DocumentIDs              List of
                         Integer
                                  IDs from the DOCUMENT Table.

                         Localization settings of the user determine which
                         language version of the document will be included with
                         the post.
                         A document will not be included if it does not have the
                         language version corresponding to the localization
                         settings of the user.

Get Process Header Topic

The Get Process Header topic retrieves the properties of a manufacturing process, including any
enterprise attributes.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
PlatformAlias      Type  Alias of the platform configured in Configuration Manager.

                   Char

                                                   This input is only available when the From PlatformAlias
                                                   Input option is selected.

Process3DExperienceID Char 3DEXPERIENCE Platform ID of the process.

Import Process Topic

The Import Process topic retrieves a manufacturing process and creates equivalent entities that
allow it to be used in DELMIA Apriso.

     If the Is reserved from first step parameter of the Primary Resource on the 3DEXPERIENCE
     platform is set to True, the resources linked to the Operation are duplicated to the first Step.

     Importing the process does not import the OperationFlow or StepFlow information that Process
     Builder needs for Processes built outside of Process Builder.
     3DX.Message.Processing.ManufacturingProcess.Released operation can be used to import the
     Process, and automatically call the necessary Business Components to import the information
     flow. Otherwise, the BuildOperationFlowLayout and BuildOperationStepsFlow Business
     Components must be called manually to build the information for the Process.

  Required Inputs

  The values of these Inputs have to be filled and valid to use the Function.

                   Type
   Name                  Description
                   Char
   PlatformAlias         Alias of the platform configured in Configuration Manager.

                         This input is only available when the From PlatformAlias
                         Input option is selected.

Process3DExperienceID Char 3DEXPERIENCE Platform ID of the process.

Get Data Collect Plan Row Custom Attributes Topic

The Get Data Collect Plan Row Custom Attributes topic retrieves custom attributes from
3DEXPERIENCE platform Data Collect Plan Rows. After that, you can integrate these data with
DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name                     Data  Description
PlatformAlias            Type
                               Alias of the platform configured in Configuration
                         Char  Manager.

                                                                   This input is only available when the From
                                                                   PlatformAlias Input option is selected.

DataCollectPlanRow3DExperienceID Char
                                                                Data Collect Plan Row ID in 3DEXPERIENCE
                                                                Platform.

Get Data Collect Plan Custom Attributes Topic

The Get Data Collect Plan Custom Attributes topic retrieves custom attributes from
3DEXPERIENCE platform Data Collect Plans. After that, you can integrate these data with DELMIA
Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name                     Data  Description
PlatformAlias            Type
                               Alias of the platform configured in Configuration
                         Char  Manager.

                                       This input is only available when the From
                                       PlatformAlias Input option is selected.

DataCollectPlan3DExperienceID Char Data Collect Plan ID in 3DEXPERIENCE Platform.

Get Operation Custom Attributes Topic

The Get Operation Custom Attributes topic retrieves custom attributes from 3DEXPERIENCE
platform Operations. After that, you can integrate these data with DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
PlatformAlias      Type  Alias of the platform configured in Configuration Manager.

                   Char

                                 This input is only available when the From PlatformAlias
                                 Input option is selected.

Operation3DExperienceID Char Operation ID in 3DEXPERIENCE Platform.

Get Manufacturing Item Custom Attributes Topic

The Get Manufacturing Item Custom Attributes topic retrieves custom attributes from
3DEXPERIENCE platform Manufacturing Items. After that, you can integrate these data with
DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name                             Data  Description
PlatformAlias                    Type
                                       Alias of the platform configured in Configuration
                                 Char  Manager.

                                       This input is only available when the From
                                       PlatformAlias Input option is selected.

                                 Char Manufacturing Item ID in

ManufacturingItem3DExperienceID        3DEXPERIENCE Platform.

Get Process Custom Attributes Topic

The Get Process Custom Attributes topic retrieves custom attributes from 3DEXPERIENCE
platform Processes. After that, you can integrate these data with DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
PlatformAlias      Type  Alias of the platform configured in Configuration Manager.

                   Char

                                                  This input is only available when the From PlatformAlias
                                                  Input option is selected.

                                   Char 3DEXPERIENCE Platform ID of the Process.
Process3DExperienceID

Get Process Organization Topic

The Get Process Organization topic retrieves an organizational entity responsible for a Process
from 3DEXPERIENCE platform Processes. After that, you can filter out processes that do not apply
to a DELMIA Apriso system.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
PlatformAlias      Type  Alias of the platform configured in Configuration Manager.

                   Char

                                                   This input is only available when the From PlatformAlias
                                                   Input option is selected.

                                    Char 3DEXPERIENCE Platform ID of the Process.
Process3DExperienceID

Get Resource Implement Links Topic

The Get Resource Implement Links topic retrieves Resources for a given Operation that use the
old platform data model.

The 3DEXPERIENCE Platform may require a significant amount of time to retrieve Resource
Implement Links.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data  Description
                   Type  Alias of the platform configured in Configuration Manager.

PlatformAlias Char

                         This input is only available when the From PlatformAlias Input option
                         is selected.

Dynamic Inputs

The Inputs can be added to the Function by selecting the check boxes on the Dynamic Inputs list.

Name                     Data            Description
ProcessOperationID       Type            ID of the Process Operation.

                         Int

                                    Int  (Optional input) ID of the Process Operation Step. Used to
ProcessOperationStepID                   specify retrieving resources at an Operation level.

WIPOrderNo               Char
                                    WIP Order Number.

                         Int             WIP Order Type.

WIPOrderType

OprSequenceNo            Char            Operation Sequence Number.
StepSequenceNo           Int
                                         (Optional input) Step Sequence Number. Used to specify
                                         retrieving resources at a Step level.

Get Resource Custom Attributes Topic

The Get Resource Custom Attributes topic retrieves custom attributes from 3DEXPERIENCE
platform Resources. After that, you can integrate these data with DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

                   Type
   Name                     Description
                   Char
   PlatformAlias            Alias of the platform configured in Configuration Manager.

                                                    This input is only available when the From PlatformAlias
                                                    Input option is selected.

                                     Char Resource ID in 3DEXPERIENCE Platform.
Resource3DExperienceID

Import Resource Topic

The Import Resource topic retrieves Resource information from 3DEXPERIENCE platform and
creates equivalent entities that can be used in DELMIA Apriso.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name               Data     Description
PlatformAlias      Type     Alias of the platform configured in Configuration Manager.

                   Char

                                                    This input is only available when the From PlatformAlias
                                                    Input option is selected.

                                     Char Resource ID in 3DEXPERIENCE Platform.
Resource3DExperienceID

The function returns "-1" as ResourceID output if the Resource that the function tried to import
was skipped or ignored.

Import IP Protection and Export Control Topic

The Import IP Protection and Export Control topic is used to link a classification to an object.

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name Data Type Description

DSID Char

                   Physical ID of the platform object. Consists of 36 hexadecimal characters.

            Char   Type of the platform object. Supported types:
   Type
                              Alert
                              Checklist
                              DataCollectPlan
                              Document
                              MfgItem
                              Operation
                              Process
                              Resource
                              SignOff
                              Instruction

Get Translation

The Get Translation topic retrieves the latest translations of the 3DEXPERIENCE entities from the
3DEXPERIENCE platform. If the LanguageIDs dynamic input is not used, the translations are
retrieved for the list of languages configured for the Platform Alias in the Configuration Manager.
For details, see Integration Options .

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name Data Type Description

DSIDs List of      Physical IDs of the platform objects. Each ID consists of 36 hexadecimal
         Char      numbers.

Dynamic Inputs

The Inputs can be added to the Function by selecting the check boxes on the Dynamic Inputs list.

Name               Data Type Description

LanguageIDs List of Integer A list of IDs of the languages for which translations are retrieved.

Import Translation

The Import Translation topic retrieves the translations from the 3DEXPERIENCE platform for a
DELMIA Apriso object and any of its child objects. The list of languages for which translations are
provided is configured in the Configuration Manager. For details, see Integration Options .

Required Inputs

The values of these Inputs have to be filled and valid to use the Function.

Name Data Type Description

DSID Char          Physical ID of the platform object. Consists of 36 hexadecimal characters.

Type Char          Type of the platform object. Supported types:

                   Alert
                   Checklist
                   DataCollectPlan

                   Order
                   MfgItem
                   Operation
                   Process
                   Resource
                   SignOff
                   Instruction
