/* eslint-disable */
const gatewayCreateDtoInType = shape({
    gatewayName:shape({
        cs: string(500).isRequired(),
        en: string(500).isRequired()
    }).isRequired(), 
    location:shape({
        href: string(200),
        сoordinates: string(200)
    }).isRequired()
})

const gatewayUpdateDtoInType = shape({
    id: id().isRequired(),
    gatewayName:shape({
        cs: string(500).isRequired(),
        en: string(500).isRequired()
    }).isRequired(), 
    location: shape({
        href: string(200),
        сoordinates: string(200)
    }).isRequired(),
    state: oneOf(["initial", "active", "suspended", "closed"]),
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