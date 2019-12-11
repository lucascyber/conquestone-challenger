export interface Login {
  sub: String,
  name: String,
  iat: number,
  profile: {
    PainelA: boolean,
    PainelB: boolean
  }
}