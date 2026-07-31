import { useEffect, useState } from "react";
import type { Museum } from "../../models/Museum";
import MuseumCard from "../molecules/MuseumCard";

export default function MuseumList() {
  const [data, setData] = useState<Museum[]>();
  useEffect(() => {
    fetch("https://museumapi.hackeuse.fr/museums")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <ul>
        {data.map((m) => (
          <li key={m.id}>
            <MuseumCard name={m.name} town={m.city} image={m.image} />
          </li>
        ))}
      </ul>
    )
  );
}
