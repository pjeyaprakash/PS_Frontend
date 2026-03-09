import axiosInstance from "./axios";


export async function protoPost(url, RequestType, ResponseType, payload) {
  const buffer = RequestType.encode(RequestType.create(payload)).finish()
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


export async function protoGet(url, ResponseType) {
  const response = await axiosInstance.get(
    url,
    {
      responseType: "arraybuffer",
    }
  )
  return ResponseType.decode(new Uint8Array(response.data))
}