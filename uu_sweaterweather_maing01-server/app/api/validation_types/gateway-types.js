/* eslint-disable */
const gatewayCreateDtoInType = shape({
    gatewayName: uu5String(50).isRequired(),
    location: uu5String(100),
    state: oneOf(["active", "cancelled", "error"]),
    uuIdentity: uu5String(25),
    state: oneOf(["initial", "active", "cancelled", "error"]),
})

const gatewayUpdateDtoInType = shape({
    id: id().isRequired(),
    location: uu5String(100),
    state: oneOf(["initial", "active", "cancelled", "error"]),
    uuIdentity: uu5String(25)
})

const gatewayGetDtoInType = shape({
    id: id().isRequired()
})

const gatewayDeleteDtoInType = shape({
    id: string(50).isRequired()
});

const gatewayListDtoInType = shape({
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
})