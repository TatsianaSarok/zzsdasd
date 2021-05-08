/* eslint-disable */
const dataCreateDtoInType = shape({
    gatewayName: uu5String().isRequired(),
    timestamp: Date(),
    temperature: integer(),
    humidity: integer()
})

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
     gatewayName: string(50).isRequired()
});

const dataGetDtoInType = shape({
    id: id().isRequired()
})

const dataGetCurrentDtoInType = shape({

})