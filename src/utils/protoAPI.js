import axiosInstance from "./axios";
import { api } from "@/proto/index";


export async function protoPost(url, RequestType, ResponseType, payload) {
  console.log("payload", payload)
  const buffer = RequestType.encode(RequestType.create(payload)).finish()
  console.log("buffer", buffer)
  const response = await axiosInstance.post(
    url,
    buffer,
    {
      headers: {
        "Content-Type": "application/x-protobuf",
      },
      responseType: "arraybuffer",
      transformRequest: [(data) => data],
    }
  )
  return ResponseType.decode(new Uint8Array(response.data))
}


export async function protoGet(url, ResponseType, controller) {
  const response = await axiosInstance.get(
    url,
    {
      responseType: "arraybuffer",
      signal : controller.signal
    }
  )
  return ResponseType.decode(new Uint8Array(response.data))
}


export async function protoPut(url, RequestType, payload) {
  const buffer = RequestType.encode(RequestType.create(payload)).finish()
  const response = await axiosInstance.put(
    url,
    buffer,
    {
      headers: {
        "Content-Type": "application/x-protobuf",
      },
      responseType: "arraybuffer",
      transformRequest: [(data) => data]
    }
  )
  return api.PutResponse.decode(new Uint8Array(response.data))
}