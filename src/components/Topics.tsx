"use client"

import { Book, ExternalLink, Github } from "lucide-react"
import { useSearch } from "@/context/SearchContext"
import { dsaTopics } from "@/data/topics"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import React from "react"

export default function Topics() {
    const { searchTerm } = useSearch()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const filteredTopics = dsaTopics.filter(
        (topic) =>
            topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            topic.questions.some((q) =>
                q.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
    )

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case "easy":
                return "bg-green-500"
            case "medium":
                return "bg-yellow-500"
            case "hard":
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }

    if (loading) {
        return (
            <div className="max-w-6xl container mx-auto px-4 py-4 sm:py-8">
                <div className="space-y-4">
                    {dsaTopics.map((topic) => (
                        <Card key={topic.id} className="w-full">
                            <CardHeader className="p-3 sm:p-4 md:p-6">
                                <Skeleton className="h-4 w-full sm:w-[250px]" />
                            </CardHeader>
                            <CardContent className="p-3 sm:p-4 md:p-6">
                                <Skeleton className="h-4 w-full sm:w-[300px]" />
                                <div className="mt-3 sm:mt-4 space-y-2">
                                    {[...Array(Math.min(3, topic.questions.length))].map((_, index) => (
                                        <Skeleton key={index} className="h-10 sm:h-12 w-full" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    if (filteredTopics.length === 0) {
        return (
            <div className="max-w-6xl container mx-auto px-4 py-4 sm:py-8">
                <Card className="text-center p-4 sm:p-6">
                    <CardContent>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl mb-2 text-muted-foreground">
                                <Book className="h-12 w-12" />
                            </div>
                            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                                No topics found.
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                The topic you&apos;re looking for will be added later.
                            </p>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                Check back later or consider contributing to our platform!
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }


    return (
        <div className="max-w-6xl container mx-auto px-4 py-4 sm:py-8">
            <Accordion type="single" collapsible className="space-y-4">
                {filteredTopics.map((topic) => (
                    <AccordionItem key={topic.id} value={`topic-${topic.id}`}>
                        <Card className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                            <CardHeader className="p-3 sm:p-4 md:p-6">
                                <AccordionTrigger>
                                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                                        <Book className="h-4 w-4 sm:h-5 sm:w-5" />
                                        {topic.name}
                                    </CardTitle>
                                </AccordionTrigger>
                            </CardHeader>
                            <AccordionContent className="transition-all duration-300 ease-in-out">
                                <CardContent className="p-3 sm:p-4 md:p-6">
                                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{topic.description}</p>
                                    <div className="space-y-2 sm:space-y-3">
                                        {topic.questions.map((question) => (
                                            <div key={question.id} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-3 sm:p-4 hover:bg-[#cbd5e1] dark:hover:bg-[#0f172a] transition-all duration-300 ease-in-out">
                                                <div className="mb-2 sm:mb-0">
                                                    <h3 className="text-sm sm:text-base font-medium hover:text-purple-500 transition-colors duration-200">{question.title}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="secondary" className={`${getDifficultyColor(question.difficulty)} text-xs sm:text-sm`}>
                                                            {question.difficulty}
                                                        </Badge>
                                                        <span className="text-xs sm:text-sm text-muted-foreground">
                                                            {question.platform}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 mt-2 sm:mt-0">
                                                    <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                                                        <Link href={question.link} >
                                                            Solve <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                                                        </Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                                                        <Link href={question.solution_link} >
                                                            Solution <Github className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </AccordionContent>
                        </Card>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
