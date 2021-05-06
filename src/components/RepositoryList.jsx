import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const repository = {
    name: "teste",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  };

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
