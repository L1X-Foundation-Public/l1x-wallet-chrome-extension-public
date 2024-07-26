export enum ExternalMessageAction {
  CONNECT = "CONNECT",
  SEND_TRANSACTION = "SEND_TRANSACTION",
  INIT_CONTRACT = "INIT_CONTRACT",
  DISCONNECT = "DISCONNECT",
  LIST_ACCOUNTS = "LIST_ACCOUNTS",
  IS_CONNECTED = "IS_CONNECTED",
  CALL_REQUEST = "CALL_REQUEST",
  TRANSFER_NATIVE_TOKEN = "TRANSFER_NATIVE_TOKEN",
  TRANSFER_TOKEN = "TRANSFER_TOKEN",
  TRANSFER_NFT = "TRANSFER_NFT",
  SET_L1X_PROVIDER_CONFIG = "SET_L1X_PROVIDER_CONFIG",
  GET_L1X_PROVIDER_CONFIG = "GET_L1X_PROVIDER_CONFIG",
  SIGN_MESSAGE = "SIGN_MESSAGE",
  SIGN_PAYLOAD = "SIGN_PAYLOAD",
  ACCOUNT_STATE = "ACCOUNT_STATE"
}

export enum ServiceWorkerMessageAction {
  CLOSE_WINDOW = "CLOSE_WINDOW",
  SCREEN_WIDTH = "SCREEN_WIDTH"
}
