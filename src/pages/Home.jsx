import { Suspense } from 'react'
import Loader from '../components/Loader'
import Launch from '../components/Launch'

export default function Home() {
    return (
        <>
            <div className="font-sans">
                <Suspense fallback={<Loader />}>
                    <Launch />
                </Suspense>
            </div>
        </>
    )
}