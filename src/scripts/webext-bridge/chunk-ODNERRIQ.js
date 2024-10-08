import {
  PortMessage,
  createDeliveryLogger,
  createFingerprint,
  encodeConnectionArgs
} from "./chunk-G7AOUSAZ.js";

// src/internal/persistent-port.ts
import browser from "webextension-polyfill";
var createPersistentPort = (name = "") => {
  const fingerprint = createFingerprint();
  let port;
  let undeliveredQueue = [];
  const pendingResponses = createDeliveryLogger();
  const onMessageListeners = /* @__PURE__ */ new Set();
  const onFailureListeners = /* @__PURE__ */ new Set();
  const handleMessage = (msg, port2) => {
    switch (msg.status) {
      case "undeliverable":
        if (!undeliveredQueue.some(
          (m) => m.message.messageID === msg.message.messageID
        )) {
          undeliveredQueue = [
            ...undeliveredQueue,
            {
              message: msg.message,
              resolvedDestination: msg.resolvedDestination
            }
          ];
        }
        return;
      case "deliverable":
        undeliveredQueue = undeliveredQueue.reduce((acc, queuedMsg) => {
          if (queuedMsg.resolvedDestination === msg.deliverableTo) {
            PortMessage.toBackground(port2, {
              type: "deliver",
              message: queuedMsg.message
            });
            return acc;
          }
          return [...acc, queuedMsg];
        }, []);
        return;
      case "delivered":
        if (msg.receipt.message.messageType === "message")
          pendingResponses.add(msg.receipt);
        return;
      case "incoming":
        if (msg.message.messageType === "reply")
          pendingResponses.remove(msg.message.messageID);
        onMessageListeners.forEach((cb) => cb(msg.message, port2));
        return;
      case "terminated": {
        const rogueMsgs = pendingResponses.entries().filter((receipt) => msg.fingerprint === receipt.to);
        pendingResponses.remove(rogueMsgs);
        rogueMsgs.forEach(
          ({ message }) => onFailureListeners.forEach((cb) => cb(message))
        );
      }
    }
  };
  const connect = () => {
    port = browser.runtime.connect({
      name: encodeConnectionArgs({
        endpointName: name,
        fingerprint
      })
    });
    port.onMessage.addListener(handleMessage);
    port.onDisconnect.addListener(connect);
    PortMessage.toBackground(port, {
      type: "sync",
      pendingResponses: pendingResponses.entries(),
      pendingDeliveries: [
        ...new Set(
          undeliveredQueue.map(({ resolvedDestination }) => resolvedDestination)
        )
      ]
    });
  };
  connect();
  return {
    onFailure(cb) {
      onFailureListeners.add(cb);
    },
    onMessage(cb) {
      onMessageListeners.add(cb);
    },
    postMessage(message) {
      PortMessage.toBackground(port, {
        type: "deliver",
        message
      });
    }
  };
};

export {
  createPersistentPort
};
