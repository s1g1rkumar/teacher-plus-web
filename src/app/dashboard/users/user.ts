export interface RequestData {
  "email": string | null | undefined,
  "role": number | null | undefined,
  "profile": {
    "name": string | null | undefined,
    "contact_number": string | null | undefined,
    "gender"?: string | null | undefined,
    "location"?: string | null | undefined,
    "website"?: string | null | undefined,
    "age"?: number | null | undefined,
  }
}
