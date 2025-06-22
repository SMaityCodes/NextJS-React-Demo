import getAllData from "@/app/datafetching/getAllData";





export default async function Home() {
  const data = await getAllData(); // Server-side call


    return (
	    <div>
	      	<ul className="mt-6">
       			
                	{data.map((dataitem) => (
                    	<li key={dataitem.id}>
                        	Data-Item:{dataitem.id} : {dataitem.title}
                    	</li> 
                ))}
		</ul>
            	
		
	    </div>
  	);
}
