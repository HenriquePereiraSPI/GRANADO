# Message Broker Function

The Message Broker Function enables publishing messages from DELMIA Apriso to an external
message broker (Kafka or MQTT).

The function outputs a message to the broker in a list or JSON format.

Prerequisites

To use the Message Broker function, a connection to an external message broker must be
configured in Configuration Manager .

To add the Message Broker Function

       1. Drag the Message Broker Function from the Toolbox to the Function Navigation diagram,
           or double-click the Show Message icon in the Toolbox.

          2. Choose the Broker Type (Kafka, MQTT, AMQPv9, or AMQPv10).
          3. Select the message broker Alias.
          4. Check Message in JSON Format to change the function's input format from a List to

              JSON.

 Message Broker Function Inputs

  Message in List Format

Input              Data  Description
                   Type

Topic Char               The topic of the message to be published.

                              When using Kafka broker, the topic must be first defined on the broker
                              side. Otherwise, the message will be ignored.

FieldList List of List of keys.
              Char

                         The key names must be unique. The values of the duplicated keys are
                         ignored.

ValueList List of List of key values.
              Char

Message in JSON Format

Input              Data  Description
Topic              Type  The topic of the message to be published.

                   Char

                            When using Kafka broker, the topic must be first defined on the broker side.
                            Otherwise, the message will be ignored.

Message Char Message in JSON format.

Optional Inputs

Input                    Data  Description
                         Type
                               Available when you select the Specify Header checkbox. Must be
HeaderFieldList List of        unique. Used to create keys for header data, which is then passed to
                        Char   the published message.

                               If specified, this input must be used together with
                               HeaderValueList. Both inputs must have the same number of
                               entries.

                                          To specify a header for an MQTT broker, you must first set the
                                          MQTT protocol to V5.0 for your alias in Configuration Manager .
                                          Otherwise, the provided input is skipped.

   HeaderValueList List of Available when you select the Specify Header checkbox. Used to
                           Char create values for header data, which is then passed to the published
                                        message.

                            If specified, this input must be used together with HeaderFieldList.
                            Both inputs must have the same number of entries.

                            To specify a header for an MQTT broker, you must first set the
                            MQTT protocol to V5.0 for your alias in Configuration Manager .
                            Otherwise, the provided input is skipped.

PartitionKey       Char     Used only with a Kafka broker. Available when you select the Specify
PartitionIndex     Integer  Partition checkbox. Used to specify the key of a partition to which the
                            message is published.

                            Used only with a Kafka broker. Available when you select the Specify
                            Partition checkbox. Used to specify the index of a partition to which
                            the message is published.
