import type { Museum } from "../../models/Museum";
import Card from "../atoms/Card";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";

export default function MuseumDetailsCard() {
  const { id: museumId } = useParams();

  const { data, error, loading } = useFetch<Museum>(
    `https://museumapi.hackeuse.fr/museums/${museumId}`,
  );
  if (loading) {
    return <p>Loading museum infos...</p>;
  } else if (error) {
    console.error(error);
    return <span>{"Something wrong happened"}</span>;
  } else if (data) {
    return (
      <Card
        title={data.name}
        content={
          <>
            <p>{data.description}</p>
            <span>{data.city}</span>
            <p>{data.address}</p>
            {data.exhibitions &&
              data.exhibitions.map((exhi) => (
                <article key={exhi.id}>
                  <h3>{exhi.title}</h3>
                  <p>{exhi.shortDescription}</p>
                  {exhi.startDate && exhi.endDate && (
                    <span>{exhi.startDate + " to " + exhi.endDate}</span>
                  )}
                </article>
              ))}
          </>
        }
      />
    );
  }
}
