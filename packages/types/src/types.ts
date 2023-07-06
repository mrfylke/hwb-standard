
export type TopicName = 'device/diagnostics' | 'device/[deviceId]/diagnostics' | 'device/diagnostics/request' | 'validators/nfc' | 'validators/barcode' | 'validators/configure' | 'device/[deviceId]/diagnostics/request' | 'validators/[deviceId]/configure' | 'validators/[deviceId]/response' | 'validators/configure/current' | 'validators/configure/request' | 'sensors/location' | 'validators/[deviceId]/configure/current' | 'validators/[deviceId]/configure/request' | 'validators/nfc/apdu/receive' | 'validators/nfc/apdu/[deviceId]/transmit';
export const availableTopics = ["device/diagnostics","device/[deviceId]/diagnostics","device/diagnostics/request","validators/nfc","validators/barcode","validators/configure","device/[deviceId]/diagnostics/request","validators/[deviceId]/configure","validators/[deviceId]/response","validators/configure/current","validators/configure/request","sensors/location","validators/[deviceId]/configure/current","validators/[deviceId]/configure/request","validators/nfc/apdu/receive","validators/nfc/apdu/[deviceId]/transmit"] as readonly TopicName[];
export const topicSet = {"device/diagnostics":"device/diagnostics/diagnostics.schema.json","device/[deviceId]/diagnostics":"device/[deviceId]/diagnostics/diagnostics.schema.json","device/diagnostics/request":"device/diagnostics/request/request.schema.json","validators/nfc":"validators/nfc/nfc.schema.json","validators/barcode":"validators/barcode/barcode.schema.json","validators/configure":"validators/configure/configure.schema.json","device/[deviceId]/diagnostics/request":"device/[deviceId]/diagnostics/request/request.schema.json","validators/[deviceId]/configure":"validators/[deviceId]/configure/configure.schema.json","validators/[deviceId]/response":"validators/[deviceId]/response/response.schema.json","validators/configure/current":"validators/configure/current/current.schema.json","validators/configure/request":"validators/configure/request/request.schema.json","sensors/location":"sensors/location/location.schema.json","validators/[deviceId]/configure/current":"validators/[deviceId]/configure/current/current.schema.json","validators/[deviceId]/configure/request":"validators/[deviceId]/configure/request/request.schema.json","validators/nfc/apdu/receive":"validators/nfc/apdu/receive/receive.schema.json","validators/nfc/apdu/[deviceId]/transmit":"validators/nfc/apdu/[deviceId]/transmit/transmit.schema.json"} satisfies Record<TopicName, string>;
