import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button
      type="button"
      className="logout-desktop-btn"
      onClick={onClickLogout}
    >
      Logout
    </button>
  )
}

export default Header
