const sanitize = require('mongo-sanitize')
const deepSanitize = (value) => {
    if (Array.isArray(value)) {
        value.forEach(elm => deepSanitize(elm))
    }
    if (typeof (value) === 'object' && value !== null) {
        Object.values(value).forEach((elm) => {
            deepSanitize(elm)
        })
    }
    return sanitize(value)
}

module.exports = deepSanitize