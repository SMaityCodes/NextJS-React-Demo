// app/page.jsx
import getMyDataById from "@/app/datafetching/getMyDataById";


export default async function Home() {
  const entry = await getMyDataById(3); // or "3" if your id is a string

  return (
    <div>
      <h1>Data for ID 3</h1>
      <pre>{JSON.stringify(entry.name, null, 2)}</pre>
    </div>
  );
}

