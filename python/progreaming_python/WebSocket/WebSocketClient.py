import asyncio
import websockets

async  def connect():
    async with websockets.connect("ws://localhost:3000") as websocket:

        str = "hello? python"

        await websocket.send(str);

        data = await websocket.recv();
        print(data);


asyncio.get_event_loop().run_until_complete(connect())