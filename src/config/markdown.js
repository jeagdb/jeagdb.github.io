import Em from '../components/atoms/Em'
import Strong from '../components/atoms/Strong'
import HeaderOne from '../components/atoms/HeaderOne'
import HeaderTwo from '../components/atoms/HeaderTwo'

export const options = {
  overrides: {
    em: { component: Em },
    h1: { component: HeaderOne },
    h2: { component: HeaderTwo },
    strong: { component: Strong }
  }
}
