interface GetLatLngResponse {
  results: { geometry: { lat: number; lng: number } }[];
}

export async function getLatLng(
  address: string
): Promise<GetLatLngResponse | undefined> {
  const encodedQueryParam = new URLSearchParams({ q: address }).toString();
  const apiKey = process.env.NEXT_PUBLIC_OPENCAGEDATA_API_KEY;

  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?${encodedQueryParam}&key=${apiKey}`
  );

  if (!res.ok) return;

  const data: GetLatLngResponse = await res.json();

  return data;
}
