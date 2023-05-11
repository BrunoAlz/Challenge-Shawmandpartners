import { Link } from "react-router-dom";
import DateComponent from "./DateComponent";

function ConditionalRenderer({ loading, error, user }) {
  if (loading) {
    return <>Carregando...</>;
  }

  if (error) {
    return <>Erro ao carregar os dados.</>;
  }

  return (
    <>
      <h1 className="fs-1">Login: {user.login}</h1>
      <h1>User ID: {user.id}</h1>
      <h1>
        Profile URL: <Link to={user.url}>{user.url}</Link>
      </h1>
      <h1>
        Date of the login creation:
        <DateComponent date={user.created_at} />
      </h1>
    </>
  );
}

export default ConditionalRenderer;
