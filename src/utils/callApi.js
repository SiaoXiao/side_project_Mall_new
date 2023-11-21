export const callApi = async (api, data, callback = () => undefined) => {
  const res = await api(data)

  if (res.data.Code === 200) {
    console.log('callApi=> ', res)
    callback(res.data)
  }
}
