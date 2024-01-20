import { useSelector } from "react-redux";
import { selectGlobalLoading } from "../../redux/root/selectors";

const Loader = () => {
    const isLoading = useSelector(selectGlobalLoading);

  return isLoading ? <div>Loading........</div> : <></>;
};

export default Loader;