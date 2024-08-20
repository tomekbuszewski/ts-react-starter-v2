import { useEffect, useState } from "react";

export default function BrokenPage() {
  const [name, setName] = useState<string | undefined>("page");

  useEffect(() => {
    setTimeout(() => {
      setName(undefined);
    }, 3000);
  }, []);

  return <div>This {name!.toUpperCase()} breaks in 3 seconds</div>;
}
