# Determination Function

Determination is used to generate Outputs based on a combination of values from Inputs. In
runtime, Determination checks whether values passed to the Inputs of the Function match the
values defined in the Determination Editor. Next, the Function returns Output values based on
those matches. The comparison of the Input values is performed according to the row Sequence
Number.

To Add the Determination Function

       1. Drag the Function Determination from the Toolbox to the Function Navigation diagram, or
           double-click the Determination icon in the Toolbox.

2. To add Inputs and Outputs to the Function, the user has to open the Determination Editor.
   Every Input and Output has its type and a set of values.

Field              Description
Determination
Type               The user can choose the type of Determination, First Match or Match All:

Edit                          First Match – the Function stops searching for Input values
Determination                 combinations after finding the first match. Other possible
                              matches will be ignored, and there will be only one result in the
                              output.
                              Match All – the Function continues looking for matches after
                              finding a match. There may be more than one result in the
                              output. For this reason, the data type of Outputs is
                              automatically set to "List of…".

                   Opens the Determination Editor.

 Determination Editor

The Determination Editor allows the user to configure a sequence of Inputs and Outputs with
permitted values.
