# Operation Navigation PERT View

The PERT view is an alternative mode of displaying the operation navigation diagram. When this
view is configured, the default operation navigation diagram is not available.

 To Configure the PERT View

          1. Open the CentralConfuguration.xml file located under <drive>\Program Files\Dassault
              Systemes\DELMIA Apriso 2025\Website\CentralConfiguration.

          2. Find the PertOperationNavigation key in the ProcessBuilder section. For details, refer to
              Central Configuration Documentation .

          3. Set the key value to True.

                    <add key="PertOperationNavigation" value="True" />

 PERT Diagram Elements

  The system automatically determines the critical path duration and makes it visible through red
  lines and boxes. Each operation node displayed in the PERT view contains the following
  information:

              Operation name
              Operation WBS code
              Work center description
              Operation duration (in hours)

You can display any image –  in this example – on the operation node to illustrate the operation
type.

To add or replace the image:

       1. Place the image in the Images folder located under <drive>\Program Files\Dassault
           Systemes\DELMIA Apriso 2025\WebSite\Portal. You can specify the URL path to the folder
           using the ImageRepositoryUrl key in the Media section of the Central Configuration file.

       2. In the operation navigation workspace, right-click the operation node and choose Change
           Picture from the right-click menu.

       3. Write the image name in the displayed window.

To remove the image:

       1. Make sure that the operation navigation is in the editable mode.
       2. In the operation navigation workspace, right-click the operation node and choose Change

           Picture from the right-click menu.
       3. Remove the image name from the displayed window.
