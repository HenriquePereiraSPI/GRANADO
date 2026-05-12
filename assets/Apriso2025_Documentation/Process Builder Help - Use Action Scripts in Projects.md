# Use Action Scripts in Projects

In the sample scenario presented below, you will link existing Action Scripts to entities in your
Project. You will also learn how to create new Action Scripts to be used only inside the Project.

To learn more about Action Scripts, see Action Scripts Overview and subsequent topics.

     1. Create a Project with two Modules containing a Screen with a linked Layout (for
        instructions, see Create a Project).

     2. Open the Screen and go to the Properties tab.

     3. In the On Initialize field, select Action Script Function and click (Link) (for more
        information about available options, see Screen: General Tab).

4. You will see a list of all Action Script functions available for linking in your Screen. Choose
   any of them. You have successfully linked an external Action Script function to your
   Screen.

          5. To be able to create Action Scripts for use only in your Project, you need to add an Action
              Script Module: right-click your Project node and select Add Action Script Module. A
              special Module will be added to the Project tree.

                The Action Script Module is unlike other Modules in that it is not a container for entities,
                but rather indicates the ability to use Project-specific Action Scripts. However, it can be
                deleted and referenced just like any other Module (see Action Scripts for more
                information).

          6. You will now create an Action Script for use just in your Project: choose (Action Script
              Manager) from the Managers Menu or from the Toolbar.

          7. In the Action Script Manager's Entity Explorer pane, find your Project in the Select a
              Project... drop-down list.

          8. Right-click anywhere in the Entity Explorer and select Add Action Script.
                Action Scripts added to a specific Project will only be available in that Project.

          9. Choose a name for your Action Script and click OK.

                If you want to use the new Action Script in an Offline Module, check the Offline Script
                box. This adds the ActionScript.OfflineScript extension to your base class.
        10. As only Action Scripts with a status or Prototype or higher can be linked by Project
              entities, right-click the newly-created Action Script revision and select Change Status ►
              Prototype.

                Remember that the namespace of your Action Script must be the same as the name of
                the Project you want to use it in.
        11. Compile the Action Script by selecting (Compile) from the toolbar.
        12. Before you can use the Action Script created above in your Screen, you must first
              reference the Action Scripts Module in your Screens Module:

                To learn more about References, see Modules: References.
                      a. Right-click the Screens Module and select References...
                      b. In the References window that appears, mark the check box next to Action
                         Scripts and click OK.
                      c. Your Project tree should now look like this:

13. Open your sample Screen and go to the Properties tab. In the On Load field, select
     Action Script Function and click (Link).

14. You will see that the list of Action Script functions available for linking in your Screen now
     includes the ones from the Action Script added in step 9. Select any of them. You have
     successfully linked a Project-specific Action Script function to your Screen.
