"use client"

import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card" // Adjust the import path based on your project structure
import { Skeleton } from "./ui/skeleton"

export default function ComingSoon() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000) // Simulating a loading delay
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <Card className={`max-w-2xl w-full shadow-md transition-transform duration-300 ease-in-out ${!loading ? "transform hover:scale-105 hover:shadow-lg" : ""}`}>
                {loading ? (
                    <>
                        <CardHeader>
                            <Skeleton className="h-8 w-1/2 mb-4 mx-auto" /> {/* Skeleton for header */}
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-6 mb-2 mx-auto w-4/5" />
                            <Skeleton className="h-6 mb-2 mx-auto w-4/5" />
                            <Skeleton className="h-6 mx-auto w-4/5" />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardHeader>
                            <h2 className="text-2xl font-bold text-center transition-colors duration-200 hover:text-purple-500">More Features & Content Coming Soon!</h2>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg mb-4 text-center transition-transform duration-200 hover:scale-105">
                                AlgoHub is constantly evolving. We are working hard to bring you more features, topics, and
                                insightful solutions to help with your DSA learning journey. Stay tuned for updates!
                            </p>
                            <p className="text-lg text-center transition-transform duration-200 hover:scale-105">
                                You can also contribute by writing optimized solutions in different programming languages
                                or by improving the website’s UI, backend, or any other feature. Join us in making AlgoHub better for everyone!
                            </p>
                        </CardContent>
                    </>
                )}
            </Card>
        </div>
    )
}
