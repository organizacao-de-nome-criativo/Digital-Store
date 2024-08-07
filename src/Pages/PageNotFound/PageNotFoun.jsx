import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <>
      <h1>Pagina não encontrada</h1>
      <h3>ERROR 404</h3>
    </>
  );
}
export default PageNotFound;
