import{createPersistentPort}from"./chunk-ODNERRIQ.js";import"./chunk-G7AOUSAZ.js";import{createEndpointRuntime,createStreamWirings}from"./chunk-4J4II3XU.js";import"./chunk-YWICFM2F.js";var port=createPersistentPort("popup"),endpointRuntime=createEndpointRuntime("popup",(e=>port.postMessage(e)));port.onMessage(endpointRuntime.handleMessage);var{sendMessage,onMessage}=endpointRuntime,{openStream,onOpenStreamChannel}=createStreamWirings(endpointRuntime);export{onMessage,onOpenStreamChannel,openStream,sendMessage};