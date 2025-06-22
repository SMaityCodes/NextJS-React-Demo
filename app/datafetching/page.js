import getAllData from "@/app/datafetching/getAllData";
import getData from "@/app/datafetching/getData";




export default async function Home() {
  const data = await getData(1); // Server-side call


    return (
	    <div>
	      <h1>{data.title}</h1>
	      <p>{data.body}</p>
	    </div>
  	);
}
