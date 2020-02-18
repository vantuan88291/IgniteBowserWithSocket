
let navigationRef = null

export function setNavigate(navigation: any) {
  navigationRef = navigation
}
export function navigate(name: string, params?: any) {
  navigationRef.navigate(name, params)
}
