# Local Determination Function

Local Determination is an expanded version of Determination. The Inputs, Outputs, and their
values are defined for the whole system, not for a particular Function. It is possible to set date
ranges for when particular values of Local Determination are valid

The values and date ranges of Local Determination can be configured in Determinations screen.

To Add the Local Determination Function

       1. Drag the Local Determination Function from the Toolbox to the Function Navigation
           diagram, or double-click the Local Determination icon in the Toolbox.

2. Choose the Determination name from a drop-down list. Once the Determination is
   selected, Inputs and Outputs are created based on data from the Determination
   configuration.

Field              Description
Determination
                   A list of Determinations created in Determination screen. The list is
Disable Error on   refreshed upon clicking on the drop-down.
Missing Match
                   A Disable Function fail on a missing match of the sequence. If
                   selected, a new Boolean Output called NoMatchingSequence is
                   added to the Function. The additional Output can be handled by
                   subsequent Functions such as User Formula or Show Message.

              Determination  The user can choose the type of Determination, First Match or Match
              Type           All:

                                        First Match – the Function stops searching for Input value
                                        combinations after finding the first match
                                        Other possible matches will be ignored, and there will be only
                                        one result in the Output
                                        Match All – the Function continues looking for matches after
                                        finding a match
                                        There may be more than one result in the Output, and for this
                                        reason the data type of the Outputs is automatically set to
                                        "List of…"
