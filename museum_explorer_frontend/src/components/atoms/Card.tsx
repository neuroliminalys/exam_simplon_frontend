import type { ReactNode } from "react";

interface CardProps {
  title: string;
  content: ReactNode;
}

export default function Card({ title, content }: CardProps) {
    return(
        <article>
            <h2>{title}</h2>
            {content}
        </article>
    )
}
