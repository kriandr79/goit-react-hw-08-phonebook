import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../components/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));


export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // // Завантаження списку контактів
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

// <div>
//     <Form></Form>
//       {isLoading && !error && (
//         <div>
//           <b>Contacts are loading...</b>
//         </div>
//       )}

//       {error && (
//         <div>
//           <b>{error}</b>
//         </div>
//       )}

//       <Filter />
//       <ContactList />
//     </div>
