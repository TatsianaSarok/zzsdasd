/* eslint-disable */
const dataCreateDtoInType = shape({
    gatewayId: uu5String().isRequired(),
    timestamp: Date(),
    temperature: integer(),
    humidity: integer(),
    light: integer()
})

const dataDayListDtoInType = shape({
    startTime: uu5String(),
    gatewayId: uu5String(),
    graphType: uu5String(),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
    })
})

const dataDeleteDtoInType = shape({
     gatewayId: string(50).isRequired()
});

const dataGetDtoInType = shape({
    id: id().isRequired()
})

const dataGetCurrentDtoInType = shape({
    gatewayId: string(50).isRequired()
})