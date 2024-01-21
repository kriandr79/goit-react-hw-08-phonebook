import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    token: useSelector(selectToken),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
