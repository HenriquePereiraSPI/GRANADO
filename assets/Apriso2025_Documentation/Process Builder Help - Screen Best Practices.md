# Screen Best Practices

Naming Conventions

Screens

A screen name must be unique and explicit enough to make its search easier. The Screen name
format is YYYXX, wherein:

           YYY is the screen family code
                      This part of the Screen name should be shared within the same “family” of
                      Screens
                                  A family of Screens is a set that addresses the same business
                                  requirements or that belongs to the same functional area, even if the
                                  Screens belonging to another Screen family can be accessible elsewhere
                                  (e.g., the QMS Screen used for quality data collection can navigate to the
                                  SPC screens used for SPC data visualization)
                      The Base Screen will only use YYY as the name

           XXX is a numeric value
                      This is the first screen in the family, or it is the one after the Base Screen
                                  The subsequent Screen numbers should be: 010, 020, 030, 040, etc.

                                    These subsequent Screens should not be numbered 01, 02, 03, 04,
                                    etc., because it is important to maintain the possibility of adding
                                    additional Screens if necessary in the future.

                      XXX is not needed for the Base Screen

Examples

           NRG – the Base Screen for Energy Monitoring, which has a grid for selecting the
           machines to monitor

                      The machine list is passed as an Input to the following screens: NRG010,
                      NRG020
           Other examples:
                      SPC
                      SPC010
                      MNT010
