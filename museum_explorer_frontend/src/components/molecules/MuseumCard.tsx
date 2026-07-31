import Card from "../atoms/Card";

interface MuseumCardProps {
  name: string;
  town?: string;
  image?: string;
}

export default function({name, town, image}: MuseumCardProps) {
    return(
        <Card title={name} content={
            <div>
                <p>{town}</p>
                <img src={image} alt="" />
            </div>
        }/>
    )
}
