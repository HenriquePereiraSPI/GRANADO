# Functionally Validate an Entity

The option to functionally validate an entity enables validation if a newly created process,
operation, DFC, screen, or view meets business requirements. It also allows the simulation of a
process, operation, DFC, screen, or view behavior from the level of the Entity Manager.

     The options Start Simulation and Start Validation Workflow are available in the Entity
     Manager right-click menu after changing the Process Builder configuration file (these options
     are disabled by default).

  To be able to use the Start Simulation and Start Validation Workflow options in the Entity
  Manager right-click menu, do the following:

          1. Open the FlexNetProcessBuilder.exe.config file under <drive>\Program Files\Dassault

                Systemes\DELMIA Apriso 2025\WebSite\Downloads\PB2\

          2. Uncomment the following line from the FlexNetProcessBuilder.exe.config file:

                    <!--<string>FlexNet.ProcessBuilder2.WinUI.EntityManagerMenuExtensionPlugin,
                    FlexNet.ProcessBuilder2.WinUI</string>-->

          3. Regenerate (refresh) the Publish DELMIA Apriso Process Builder via the Publish Apriso
              Process Builder via ClickOnce.bat file (<drive>\Program Files\Dassault Systemes\DELMIA

                Apriso 2025\WebSite\Downloads\ClickOnce Tools\Publish Apriso Process Builder via

              ClickOnce.bat).
          4. Restart Process Builder.
          5. Create two FlexParts with your custom Simulation and Validation procedures. Make sure

              that:
                      a. The Validation FlexPart has the APR_BPM_ValidationWorkflow alias.
                      b. The Simulation FlexPart has the APR_BPM_Simulation alias.
                      c. Both FlexParts have the following parameters and the Allow Override checkbox
                         selected:

           d. All the roles assigned to the user are linked to both FlexParts.
6. Typically at the end of the Validation procedure, the status of the validated entity is

   changed. You can use the following Business Components for this purpose:

              FlexNet.BusinessFacade.Process.ProcessManager:

                          ChangeProcessStatus
                          ReleaseProcess
              FlexNet.BusinessFacade.Process.OperationManager:

                          ChangeOperationStatus
                          ReleaseOperation
              FlexNet.BusinessFacade.Process.DFCRevisionManager:

                          ChangeDFCRevisionStatus
                          ReleaseDFCRevision
