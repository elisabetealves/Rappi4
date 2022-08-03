export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/"

export const token = localStorage.getItem("token")

export const tokenadress = localStorage.getItem("tokenadress")

export const headersAddress = { headers: { auth: tokenadress } }

export const headers = { headers: { auth: token } }