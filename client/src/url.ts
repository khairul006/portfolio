// The site runs at / behind the .NET API and at /portfolio/ on GitHub Pages; Vite sets BASE_URL for each build.
export const asset = (path: string) => import.meta.env.BASE_URL + path

// The .NET API's contact endpoint; the GitHub Pages build sets VITE_CONTACT_ENDPOINT to empty, and the form
// then falls back to its mailto: action (system.js only posts when an endpoint is set).
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/api/contact'
