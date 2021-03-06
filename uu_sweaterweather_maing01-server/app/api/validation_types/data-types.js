/* eslint-disable */
const dataCreateDtoInType = shape({
    gatewayId: uu5String().isRequired(),
    timestamp: Date(),
    temperature: integer().isRequired(),
    humidity: integer(),
    light: integer()
})

const dataListDtoInType = shape({
    startTime: uu5String().isRequired(),
    gatewayId: uu5String().isRequired(),
    graphType: uu5String().isRequired(),
    pageInfo: shape({
      id: integer(),
      total: integer()
    })
})

const dataDeleteDtoInType = shape({
     gatewayId: uu5String(50).isRequired()
});

const dataGetDtoInType = shape({
    id: id().isRequired()
})

const dataGetCurrentDtoInType = shape({
    gatewayId: uu5String(50).isRequired()
})