import { Base64 } from 'js-base64';
import {
  CallNative,
  triggerHandler,
  registerHandler
} from './customEventHandler';

declare global {
  interface Window {
    Event: any;
  }
}

export default class Message {
  static origin = `${ORIGIN}`;

  /**
   *  发送消息
   * @param params
   */
  static postMessage(params: CallNative, win) {
    try {
      if (win.postMessage) {
        registerHandler({
          protocol: `____receive____${params.protocol}`,
          parameters: params.parameters,
          callBack: params.callBack
        });
        const msg = Base64.encode(JSON.stringify(params));
        win.postMessage(msg, Message.origin);
      }
    } catch (error) {
      console.log(`error:postMessage ${error}`);
    }
  }

  /**
   * iFrame.contentWindow.postMessage('MessageFromIndex1','*');
   * parent.postMessage( {msg: 'MessageFromIframePage'}, '*');
   * 所谓的跨窗口发送消息，就是通过在别的窗口操作本窗口发送消息，然后本窗口再自己接收的方式实现。
   * 接收消息
   */
  static initMessage() {
    try {
      window.addEventListener(
        'message',
        event => {
          if (event.origin !== Message.origin) return; // 源检查不过直接返回
          try {
            const data: CallNative = JSON.parse(Base64.decode(event.data));
            const origin: string = event.origin;

            const isReceive = -1 !== data.protocol.indexOf('____receive____');
            triggerHandler(
              {
                protocol: data.protocol,
                parameters: data.parameters,
                callBack: responseData => {
                  if (isReceive) return;
                  const rData = {
                    protocol: `____receive____${data.protocol}`,
                    parameters: responseData
                  };
                  event.source.postMessage(
                    Base64.encode(JSON.stringify(rData)),
                    origin
                  );
                }
              },
              isReceive
            );
          } catch (error) {
            console.log(`error: JSON.parse ${error}`);
          }
        },
        false
      );
    } catch (error) {
      console.log(`error:initMessage ${error}`);
    }
  }

  /**
   * 通用给native 数据传送封装
   * @param data
   */
  static succData(data: any) {
    return {
      status: {
        success: true,
        error: {}
      },
      data
    };
  }

  /**
   * 通用给native 数据传送封装
   * @param data
   */
  static errData(error: any) {
    return {
      status: {
        success: false,
        error
      },
      data: {}
    };
  }
}
Message.initMessage();
