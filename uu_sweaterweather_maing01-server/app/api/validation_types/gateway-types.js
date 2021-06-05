/* eslint-disable */
const gatewayCreateDtoInType = shape({
    gatewayName:shape({
        cs: uu5String(500).isRequired(),
        en: uu5String(500).isRequired()
    }).isRequired(), 
    location:shape({
        href: uu5String(200),
        сoordinates: uu5String(200)
    }).isRequired()
})

const gatewayUpdateDtoInType = shape({
    id: id().isRequired(),
    gatewayName:shape({
        cs: uu5String(500).isRequired(),
        en: uu5String(500).isRequired()
    }).isRequired(), 
    location: shape({
        href: uu5String(200),
        сoordinates: uu5String(200)
    }).isRequired(),
    state: oneOf(["initial", "active", "suspended", "closed"]),
    uuIdentity: uu5String(25)
})

const gatewayGetDtoInType = shape({
    id: id().isRequired()
})

const gatewayDeleteDtoInType = shape({
    id: uu5String(50).isRequired()
});

const gatewayListDtoInType = shape({
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
})