import type { Museum } from "../../models/Museum";
import MuseumCard from "../molecules/MuseumCard";
import { Link } from "react-router";
import { useFetch } from "../../hooks/useFetch";

export default function MuseumList() {
  const { data, error, loading } = useFetch<Museum[]>(
    "https://museumapi.hackeuse.fr/museums",
  );

  if (error) {
    console.error(error);
    return <span>{"Something wrong happened"}</span>;
  } else if (loading) {
    <p>Loading museums...</p>;
  } else if(data) {
    return (
      <ul>
        {data.map((m) => (
          <li key={m.id}>
            <MuseumCard name={m.name} town={m.city} image={m.image} />
            <Link to={`/details/${m.id}`}>More about...</Link>
          </li>
        ))}
      </ul>
    );
  }
}
