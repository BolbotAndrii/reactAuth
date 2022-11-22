import React, {Suspense} from 'react'

import Router from "./components/Router/Router"

function App() {
    return (
        <>
            <Suspense fallback={<h1>Loading</h1>}>
                <Router/>
            </Suspense>

        </>
    )
}

export default App
