
import Link from "next/link";

export default function Home() {
	const CourseIDs =[ 0, 1	]
		
	//const anotherArr = myArr.map(x=>x.Field1);
	//console.log(anotherArr);
	
    return (
        <main className="mt-10">
        
            <div>
                This is courses page:
                <ul>
                	{
                		CourseIDs.map((i) => (
                			<li key={i}> 
                				<Link href={`/courses/${i}`}>
                					Course-ID: {i} 
                				</Link>
                			</li>
                		))
                	}
                </ul>
            </div>
        </main>
    );
}
