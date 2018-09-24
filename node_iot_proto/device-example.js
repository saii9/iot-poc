
const deviceModule = require('aws-iot-device-sdk').device;
function processTest() {
   const device = deviceModule({
      keyPath: "D:\\Primasolv\\internalscripts\\POC\\node_iot_proto\\certs\\8c0f34c3a2-private.pem.key",
      certPath: "D:\\Primasolv\\internalscripts\\POC\\node_iot_proto\\certs\\8c0f34c3a2-certificate.pem.crt",
      caPath: "D:\\Primasolv\\internalscripts\\POC\\node_iot_proto\\certs\\ca.pem",
      clientId: "123",
      region: "us-east-2",
      // baseReconnectTimeMs: args.baseReconnectTimeMs,
      // keepalive: args.keepAlive,
      // protocol: 'MQTT',
       port: 8883,
      host: "a1k9qqt0x9bscp.iot.us-east-2.amazonaws.com"
   });

   var timeout;
   var count = 0;
   const minimumDelay = 250;

   device.subscribe('topic_2');
   timeout = setInterval(function() {
      count++;
         device.publish('topic_1', JSON.stringify({mode2Process: count}));

       console.log("publish")
   }, 2000); // clip to minimum

   device
      .on('connect', function() {
         console.log('connect');
      });
   device
      .on('close', function() {
         console.log('close');
      });
   device
      .on('reconnect', function() {
         console.log('reconnect');
      });
   device
      .on('offline', function() {
         console.log('offline');
      });
   device
      .on('error', function(error) {
         console.log('error', error);
      });
   device
      .on('message', function(topic, payload) {
         console.log('message', topic, payload.toString());
      });

}


processTest();
