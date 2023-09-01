const generateResource = (model:object, properties:object={}, actions:object={}) => {
    return {
        resource: model,
        options: {
            properties: {
                password: {
                    type: 'password'
                  },
                createdAt: {
                    isVisible: { add: false, edit: false, list:true, filter:true, show:true }
                },
                updatedAt: {
                    isVisible: { add: false, edit: false, list:true, filter:true, show:true }
                },
                ...properties
            },
            actions: actions
        },
    };
}

export {generateResource}	