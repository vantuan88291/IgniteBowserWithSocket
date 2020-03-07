import { setSocket, listenSocket, emitSocket, disConnectSocket, socket } from "./socket-service"

beforeEach(() => {
  setSocket({
    on: jest.fn(),
    emit: jest.fn(),
    disconnect: jest.fn()
  })
})
afterEach(() => jest.clearAllMocks())
test("test init socket", async () => {
  const testSocket = 'socket'
  await setSocket(testSocket)
  expect(socket).toEqual(testSocket)
})
test("test listen socket", async () => {
  const name = 'emit'
  const mockFunction = jest.fn()
  await listenSocket(name, mockFunction)
  expect(socket.on).toHaveBeenCalledWith(name, mockFunction)
})
test("test emit socket", async () => {
  const name = 'emit'
  const value = 'value'
  await emitSocket(name, value)
  expect(socket.emit).toHaveBeenCalledWith(name, value)
})
test("test disconnect socket", async () => {
  await disConnectSocket()
  expect(socket.disconnect).toHaveBeenCalled()
})
