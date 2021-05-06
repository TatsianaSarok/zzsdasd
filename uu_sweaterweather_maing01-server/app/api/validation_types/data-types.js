/* eslint-disable */
const dataCreateDtoInType = shape({
    gatewayName: uu5String().isRequired(),
    timestamp: Date(),
    temperature: integer(),
    humidity: integer()
})
// const dataListDtoInType = shape({
//     gatewayName: uu5String(),
//     pageInfo: shape({
//       pageIndex: integer(),
//       pageSize: integer()
//     })
// })
const dataDayListDtoInType = shape({
    startTime: uu5String(),
    gatewayName: uu5String(),
    graphType: uu5String(),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
    })
})

const dataDeleteDtoInType = shape({
     id: string(50).isRequired()
});

const dataGetDtoInType = shape({
    id: id().isRequired()
})
