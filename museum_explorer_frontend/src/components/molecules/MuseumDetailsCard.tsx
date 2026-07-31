import { useEffect, useState } from "react";
import type { Museum } from "../../models/Museum";
import Card from "../atoms/Card";
import { useParams } from "react-router";

export default function MuseumDetailsCard() {
  const [museumInfos, setMuseumInfos] = useState<Museum>();
  const {id: museumId} = useParams();

  useEffect(() => {
    fetch(`https://museumapi.hackeuse.fr/museums/${museumId}`)
      .then((resp) => resp.json())
      .then((data) => setMuseumInfos(data));
  }, []);

  return (
    museumInfos && (
      <Card
        title={museumInfos.name}
        content={
          <>
            <p>{museumInfos.description}</p>
            <span>{museumInfos.city}</span>
            <p>{museumInfos.address}</p>
            {museumInfos.exhibitions &&
              museumInfos.exhibitions.map((exhi) => (
                <article key={exhi.id}>
                  <h3>{exhi.title}</h3>
                  <p>{exhi.shortDescription}</p>
                  <span>{exhi.startDate + " to " + exhi.endDate}</span>
                </article>
              ))}
          </>
        }
      />
    )
  );
}
