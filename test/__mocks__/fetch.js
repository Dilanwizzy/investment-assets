export default mockResponse => {
  const mockJsonPromise = Promise.resolve(mockResponse)

  const mockFetchPromise = () => Promise.resolve({
    json: () => mockJsonPromise,
    ok: true,
    status: 200,
  })

  return jest.fn().mockImplementation(mockFetchPromise)
}
