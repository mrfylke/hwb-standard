
<<<<<<< HEAD
export type TopicName = 'sensors/location' | 'validators/barcode' | 'validators/nfc' | 'validators/[deviceId]/response' | 'validators/nfc/apdu/receive' | 'validators/nfc/apdu/[deviceId]/transmit';
export const availableTopics = ["sensors/location","validators/barcode","validators/nfc","validators/[deviceId]/response","validators/nfc/apdu/receive","validators/nfc/apdu/[deviceId]/transmit"] as readonly TopicName[];
export const topicSet = {"sensors/location":"sensors/location/location.schema.json","validators/barcode":"validators/barcode/barcode.schema.json","validators/nfc":"validators/nfc/nfc.schema.json","validators/[deviceId]/response":"validators/[deviceId]/response/response.schema.json","validators/nfc/apdu/receive":"validators/nfc/apdu/receive/receive.schema.json","validators/nfc/apdu/[deviceId]/transmit":"validators/nfc/apdu/[deviceId]/transmit/transmit.schema.json"} satisfies Record<TopicName, string>;
||||||| parent of 4a2611a (chore: update types)
export type TopicName = 'sensors/location' | 'validators/barcode' | 'validators/[deviceId]/response' | 'validators/nfc/apdu/receive' | 'validators/nfc/apdu/[deviceId]/transmit';
export const availableTopics = ["sensors/location","validators/barcode","validators/[deviceId]/response","validators/nfc/apdu/receive","validators/nfc/apdu/[deviceId]/transmit"] as readonly TopicName[];
export const topicSet = {"sensors/location":"sensors/location/location.schema.json","validators/barcode":"validators/barcode/barcode.schema.json","validators/[deviceId]/response":"validators/[deviceId]/response/response.schema.json","validators/nfc/apdu/receive":"validators/nfc/apdu/receive/receive.schema.json","validators/nfc/apdu/[deviceId]/transmit":"validators/nfc/apdu/[deviceId]/transmit/transmit.schema.json"} satisfies Record<TopicName, string>;
=======
export type TopicName = 'sensors/location' | 'validators/[deviceId]/response' | 'validators/barcode' | 'validators/nfc/apdu/receive' | 'validators/nfc/apdu/[deviceId]/transmit';
export const availableTopics = ["sensors/location","validators/[deviceId]/response","validators/barcode","validators/nfc/apdu/receive","validators/nfc/apdu/[deviceId]/transmit"] as readonly TopicName[];
export const topicSet = {"sensors/location":"sensors/location/location.schema.json","validators/[deviceId]/response":"validators/[deviceId]/response/response.schema.json","validators/barcode":"validators/barcode/barcode.schema.json","validators/nfc/apdu/receive":"validators/nfc/apdu/receive/receive.schema.json","validators/nfc/apdu/[deviceId]/transmit":"validators/nfc/apdu/[deviceId]/transmit/transmit.schema.json"} satisfies Record<TopicName, string>;
>>>>>>> 4a2611a (chore: update types)
