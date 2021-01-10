import { ButtonGroup, Button } from "react-bootstrap";

export function TypeButtons({
  types,
  activeType,
}: {
  types: string[];
  activeType: string;
}) {
  return (
    <>
      <ButtonGroup>
        {types
          .filter((t) => t !== "")
          .map((type) => (
            <Button
              key={`type-${type}`}
              href={`/${type}`}
              variant={type === activeType ? "secondary" : "primary"}
            >
              {type}
            </Button>
          ))}
      </ButtonGroup>
      <br />
      <br />
    </>
  );
}
