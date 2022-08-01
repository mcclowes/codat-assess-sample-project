export const normalizeAssessData = (data) => {
  const normalizedData = {
    chartName: data.reportInfo.displayName,
    keys: [ data.measures[0].units.toLowerCase()],
  }

  normalizedData.data = data
    .reportData
    .map(dataPoint => {
      const dataObj = {
        name: data.dimensions[0].items[0].start
      }

      normalizedData.keys.forEach(key => {
        dataObj[key] = dataPoint.components[0].measures[0].value
      })

      return dataObj
    })

  return normalizedData
}