---
version: 1.0.0
lastUpdated: 2023-06-13
qos: 1
direction: pub
---

# Specification: APDU Receive

Recieve result from commands passed through transmit topic. Will contain list of
results corresponding to the results transmitted, with the same specified
`commandId`s.

`transceiveId` can be used to link `transmit` and `receive` events.
`eventTimestamp` is the time the first command result is generated.

- Topic: `validators/nfc/apdu/receive`
- Direction: Publish (Inbound to client)
- JSON Schema: [receive.schema.json](./receive.schema.json)
- MQTT QoS: 1 (at least once)
- Trigger: Result from transmitted commands.

## Hex and expected status

All result frames should be represneted as hex, starting with 0x. See examples.
If result of executing command does not match expected status prefix passed in
the transmit event, result should be ommited.

### `0xAF` and continuation

Continuation on `0xAF` is handled implicitly if `expStatus` as passed in by
transmit is set as `0x00`. See description below.

#### desfire (native)

- If `expStatus=0x00` or empty and first bytes in response indicates more data
  (`0xAF`) the device should fetch all data until end and give result as
  concatinated byte array.
- If `expStatus=0xAF` is transmitted it is not handled automatically by the
  device.

## Related

See related transmit topic:
[`validators/nfc/apdu/[deviceId]/transmit`](../[deviceId]/transmit).

## Examples

```json
{
  "traceId": "543070fe-ef32-11ed-a05b-0242ac120003",
  "deviceId": "flv202400004",
  "eventTimestamp": "2023-04-22T10:28:37.337Z",
  "transceiveId": "c28f206d-8016-4d22-b21b-70d8d6d2fea4",
  "apduType": "desfire",
  "result": [
    { "commandId": 1, "frame": "0x00" },
    { "commandId": 2, "frame": "0x0090800002000280" },
    { "commandId": 3, "frame": "0x00" },
    { "commandId": 4, "frame": "" }
  ]
}
```

## Additional information

Link to APDU-documentation.
