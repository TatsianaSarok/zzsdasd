/* eslint-disable */
const dataCreateDtoInType = shape({
    gatewayName: uu5String().isRequired(),
    timestamp: Date(),
    temperature: uu5String(),
    humidity: uu5String()
})
const dataListDtoInType = shape({
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
})

const dataGetDtoInType = shape({
    id: id().isRequired()
})
