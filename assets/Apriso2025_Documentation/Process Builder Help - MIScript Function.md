# MIScript Function

MIScript is a Function which can operate on Machine Integrator data such as Data Sources, Points,
etc. The Scripts that are exposed by the MI connector facilitate information exchange between MI
and other Apriso modules. Inputs for the Scripts can be used together with Point values to produce
advanced interaction scenarios and return calculated results.

To Add the MIScript Function

       1. Drag the MIScript Function from the Toolbox to the Function Navigation diagram, or
           double-click the MIScript icon in the Toolbox.

       2. Choose the Script lookup mode (either By Connector or By Equipment):

                   a. Choose Connector from the drop-down list. The Connectors can be managed on
                      the Machine Integrator Configuration screen.

                                  Choose the Script from the drop-down menu. The Script's Inputs and
                                  Outputs are automatically added to the Function.
                                  When needed, specify the ConnectorAlias Input value that overrides the
                                  Connector alias used in runtime.
                   b. Choose Equipment from the drop-down list. It can be managed on the Equipment
                      Explorer M&M screen (MI configuration screen).

                                  Choose the Action from the drop-down menu. The Action's Inputs and
                                  Outputs are automatically added to the Function.
                                  When needed, specify the Equipment and Facility Input value that
                                  overrides the Equipment used in runtime.

Field              Description

Script lookup mode
The mode that gives the Process Author a possibility to choose the way of referencing the MI
Script which should be executed. There are two ways:

       by Connector using Script
       by Equipment and its Action

By Connector       The drop-down consists of names of Connectors that are created on the
                   Machine Integrator Configuration screen.
Using Script
                   Scripts that are available for the selected Connector. TheMIScript Function
By Equipment       editor does not show disabled scripts in the list.

Using Action       The drop-down consists of a list of Equipment that is created on the
Script Inputs and  Equipment Explorer screen or Machine Integrator Configuration screen.
Outputs
                   Actions available for the selected Equipment.

                   The list of Inputs and Outputs available in the chosen Script.

If there is a problem with executing MIScript using Process Builder (i.e., there is an error saying
that the machine actively refuses the connection but, for example, Monitoring is working), refer
to Guidance for configuring IPv6 in Windows for advanced users at Microsoft Support.

To read more about MI Scripts, please see the Machine Integrator Guide.
