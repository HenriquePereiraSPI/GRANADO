# Input Source_ Session Variable

Input Source: Session Variable

For more information on the general properties available for all inputs, see the Input Properties
topic.

When you select a session variable as an input source, the input properties display the system
variables and session variables fields.

Field              Description

System             All the variables that are defined in the system and populated with context information
Variables          (for example, EmployeeID or WipOrderNo). When one is chosen, the session system
                   name field is automatically populated. The deprecated variables are never populated
                   with values other than the default.

                   The following predefined variables are available:

                              Alert ID (AlertID) – deprecated
                              Application Address (AppAddress)
                              Client Screen Framework (ClientSF)
                              Current Local Date/Time (CurrentLocalDateTime)
                              Current Task ID (CurrentTaskID) – deprecated
                              Current UTC Date/Time (CurrentUTCDateTime)
                              DFC Code (DFCCode)
                              DFC Revision (DFCRevision)

                   DFC Revision ID (DFCRevisionID)
                   Employee ID (EmployeeID)
                   Employee Number (EmployeeNo)
                   Equipment ID (EquipmentID)
                   Facility (Facility)
                   Job ID (JobID)
                   Language ID (LanguageID)
                   Null Decimal (NullDecimal)
                   Operation Sequence Number (OprSequenceNo) – deprecated
                   Platform (Platform)
                   Process ID (ProcessID) – deprecated
                   Process Operation ID (ProcessOperationID) – deprecated
                   Process Revision (ProcessRevision) – deprecated
                   Reason Code (ReasonCode) – deprecated
                   Screen ID (ScreenID)
                   Step Sequence Number (StepSequenceNo)
                   Task ID (TaskID) – deprecated
                   Theme (Theme)
                   Translation Mode (TranslationMode)
                   View ID (ViewID)
                   Web Address (WebAddress)
                   WIP Order Number (WIPOrderNo) – deprecated
                   WIP Order Type (WIPOrderType) – deprecated
                   Work Center (WorkCenter) – deprecated

Session            All the variables that are defined by the process author and available within the open
Variables          DFC. When one is chosen, the session variable name field is automatically
                   populated.
External
Inputs             Enabled when the external input exists in a DFC. It gives the possibility to choose the
                   external input that can be used within a DFC. The list contains the external inputs that
                   are defined on the DFC Interface tab.

When using an output defined within one step, choose an output from the previous function and
not a session variable.
