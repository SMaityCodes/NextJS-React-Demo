import WasmComponent from "./wasmComponent";


export default function Home() {
    return (
        <main className="mt-10">
            <div>
                C-WASM Client-Side Execution Demo:-
            </div>
            <div className="App">
      		<WasmComponent />
    	    </div>
        </main>
    );
}
