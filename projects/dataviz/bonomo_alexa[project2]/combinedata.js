const fs = require("fs")


//get nodes data
const ithilienConcepts = JSON.parse(fs.readFileSync('./data/alteredby/alteredby_concepts.json'))
const ithilienKeywords = JSON.parse(fs.readFileSync('./data/alteredby/alteredby_keywords.json'))

const concepts = ithilienConcepts.concepts.map((concept) => {
        return {
            id: concept.text, 
            group: 3
        }
})

ithilienKeywords.keywords.map((keyword) => {
    concepts.push({
        id: keyword.text,
        group: 3d
    })
})

//get links data

const ithilienLinks = JSON.parse(fs.readFileSync('./data/ithilien/links.json'))

const links = ithilienLinks.links.map((link) => {
    let obj = {}
    ithilienConcepts.concepts.map((concept) => {
        if (concept.text === link.source){
            link['sourceRelevance'] = concept.relevance
        }
    })
    ithilienKeywords.keywords.map((keyword) => {
        if (keyword.text === link.target) {
            link["targetRelevance"] = keyword.relevance
            link["targetCount"] = keyword.count

        }
    })
    return link
})




const jsonData = JSON.stringify({"nodes": concepts, "links": links}, null,2)
fs.writeFile("./data/test.json", jsonData, function (error) {
    if (error) {
        console.log(error)
    }
    console.log("file saved")
})
