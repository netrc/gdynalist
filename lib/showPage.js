

const dparse = ( data ) => {
  const d2 = {}
  data.nodes.forEach( d => { 
    d2[d.id] = { 
      content: ('content' in d) ? d.content : 'no content',
      children: ('children' in d) ? d.children : []
    }
  })
  return d2
}

const show = ( d2, id, indent="" ) => {
  const lines = []
  if (!id in d2) {
    console.error(`show: cant find ${id}`)
  } else {
    //console.log(`${indent}${d2[id].content}`)
    lines.push(`${indent}${d2[id].content}`)
    d2[id].children.forEach( cId => lines.push(...show(d2,cId, "  "+indent)) )
  }
  return lines
}

module.exports = {
  dparse: dparse,
  show: show
}
//
//show('root')
