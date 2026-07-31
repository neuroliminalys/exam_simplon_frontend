import type { Museum } from "../../models/Museum";
import MuseumCard from "../molecules/MuseumCard";
import { Link } from "react-router";
import { useFetch } from "../../hooks/useFetch";

export default function MuseumList() {
  const { data, error, loading } = useFetch<Museum[]>(
    "https://museumapi.hackeuse.fr/museums",
  );

    return (
      (error && (console.error(error), <span>{"Something wrong happened"}</span>)) ||
      (loading && <p>Loading museums...</p>) ||
      (data && (
        <ul>
          {data.map((m) => (
            <li key={m.id}>
              <MuseumCard name={m.name} town={m.city} image={m.image} />
              <Link to={`/details/${m.id}`}>More about...</Link>
            </li>
          ))}
        </ul>
      ))
    );
  }
