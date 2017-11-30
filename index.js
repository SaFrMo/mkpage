const fs = require('fs')
const path = require('path')

const inputPath = path.join(path.resolve(__dirname), 'example.md')

const inputContents = fs.readFileSync(inputPath, 'UTF-8')

// find Structure section
const section = inputContents.match(/#\s?Structure[\s\S]*/g)[0]

// Find and format bullet points
let points = section.split(/\n/)
// Remove any non-bulletpoint lines and "..." lines
points = points.filter(x => x.includes('*') && !x.includes('...'))
// Remove bullet points
points = points.map(x => x.replace(/\*\s?/, ''))

let i = 0
let lastIndentLevels = {}
// Iterate through list and save info
const parsedPoints = points.map(x => {
    let currentIndentLevel = (x.match(/^\s*/))[0].split('').length
    lastIndentLevels[currentIndentLevel] = i
    //console.log(i, lastIndentLevels)
    let parent = -1

    if( currentIndentLevel != 0 ){
        // Find the last item at a lower indent level
        parent = lastIndentLevels[Object.keys(lastIndentLevels).reverse().find(x => parseInt(x) < currentIndentLevel)]
    }

    const title = x.replace(/^\s*/, '').replace(/\s\(.*\)/, '')
    const devIdMatch = x.match(/\((.*)\)/)
    const devId = devIdMatch ? devIdMatch[1] : ''

    let output = {
        id: i,
        title,
        parent,
        devId
    }

    i++
    return output
})

// At this point, we have an array of pages to create, each with an ID, title, and parent page ID, as well as a devId if specified
console.log(parsedPoints)
